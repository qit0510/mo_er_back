import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Table, Divider, Card, Button,
} from 'antd';

@connect(({ column }) => ({
  data: column.data,
}))

export default class MainArtisanList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'column/initData',
    });
  }

  deleteBtn = (id) => {
    this.props.dispatch({
      type: 'column/deleteData',
      id,
    });
  }

  editBtn = (id) => {
    this.props.dispatch({
      type: 'column/editCloumnData',
      id
    });
  }
  render() {
    const columns = [{
      title: '栏目名',
      key: 'title',
      dataIndex: 'title',
    }, {
      title: '栏目所属',
      key: 'parentId',
      dataIndex: 'parentId',
    }, {
      title: '备注',
      key: 'remark',
      dataIndex: 'remark',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button onClick={() => this.editBtn(record.id)}>修改</Button>
          <Divider type="vertical" />
          <Button onClick={() => this.deleteBtn(record.id)}>删除</Button>
        </span>
      ),
    }];
    return (
      <div>
        <Card>
          <Table rowKey="id" columns={columns} dataSource={this.props.data} />
        </Card>
      </div>
    );
  }
}
