import React from 'react';
import { connect } from 'dva';
import {
  Table, Input, Button, Popconfirm, Form, Card,
} from 'antd';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  }

  componentDidMount() {
    if (this.props.editable) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  componentWillUnmount() {
    if (this.props.editable) {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  }

  handleClickOutside = (e) => {
    const { editing } = this.state;
    if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
      this.save();
    }
  }

  save = () => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  }

  render() {
    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props;
    return (
      <td
        ref={(node) => {
          this.cell = node;
        }}
        {...restProps}
      >
        {editable ? (
          <EditableContext.Consumer>
            {(form) => {
              this.form = form;
              return (
                editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {form.getFieldDecorator(dataIndex, {
                      rules: [{
                        required: true,
                        message: `${title} is required.`,
                      }],
                      initialValue: record[dataIndex],
                    })(
                      <Input
                        ref={node => (this.input = node)}
                        onPressEnter={this.save}
                      />,
                    )}
                  </FormItem>
                ) : (
                  <div
                    className="editable-cell-value-wrap"
                    style={{ paddingRight: 24 }}
                    onClick={this.toggleEdit}
                  >
                    {restProps.children}
                  </div>
                )
              );
            }}
          </EditableContext.Consumer>
        ) : restProps.children}
      </td>
    );
  }
}


@connect(({ tags }) => ({
  dataSource: tags.data,
  count: tags.z_count,
}))
export default class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '标题名',
      dataIndex: 'title',
      editable: true,
    }, {
      title: '备注',
      dataIndex: 'remark',
      editable: true,
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => (
        this.props.dataSource.length >= 1
          ? (
            <Popconfirm title="是否要删除?" onConfirm={() => this.handleDelete(record.id)}>
              <Button>删除</Button>
            </Popconfirm>
          ) : null
      ),
    }];
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'tags/initData',
    });
  }

  // 删除
  handleDelete = (id) => {
    this.props.dispatch({
      type: 'tags/deleteData',
      id,
    });
  }

  // 添加tags
  handleAdd = () => {
    this.props.dispatch({
      type: 'tags/addData',
    });
  }

  // 修改tags
  handleSave = (row) => {
    this.props.dispatch({
      type: 'tags/editData',
      data: row,
    });
  }

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <Card>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>添加标签</Button>
        <Table
          rowKey="id"
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={this.props.dataSource}
          columns={columns}
        />
      </Card>
    );
  }
}
