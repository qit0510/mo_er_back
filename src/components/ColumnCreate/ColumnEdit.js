import React, { Component } from 'react';
import {
  Form, Input, Select, Button,
} from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: { span: 0 },
    sm: { span: 3, offset: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 8,
      offset: 8,
    },
  },
};

@connect(({ column }) => ({
  parent_column: column.parent_column,
  target:column.target
}))
class ColumnCreate extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'column/initParent',
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.dispatch({
          type: 'column/editData',
          data: values,
        });
        const { onCreated } = this.props;
        onCreated && onCreated();
      }
    });
  }
  // parentId

  render() {
    // console.log(this.props.target[0].title)
    // {id: 7, title: "test", parentId: 1, remark: "dasdas"
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="栏目名">
          {getFieldDecorator('title', {
            initialValue:this.props.target.title,
            rules: [{ required: true, message: '请输入您想添加的栏目名！', whitespace: true }],
          })(
            <Input />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="选择父级"
          hasFeedback
        >
          {getFieldDecorator('parentId', {
            rules: [
              { required: true, message: '请选择栏目的父级！' },
            ],
          })(
            <Select placeholder="请选择栏目的父级！">
              {
                this.props.parent_column.map(item => (<Option key={item.id} value={item.id}>{item.title}</Option>))
              }
            </Select>,
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="备注">
          {getFieldDecorator('remark', {
            rules: [{ required: true, message: '请输入您想添加的栏目备注！', whitespace: true }],
          })(
            <TextArea rows={8} />,
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(ColumnCreate);
export default WrappedRegistrationForm;
