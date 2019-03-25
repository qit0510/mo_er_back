import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import {connect} from 'dva'; 
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 0 },
    sm: { span: 3, offset: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 8,
      offset: 8
    }
  }
};
@connect(({ column }) => ({
}))

class ColumnPreCreate extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };
  checkContent(rule, value, callback) {
    const res = /^[a-zA-Z0-9_]+$/;
    if (!res.test(value)) {
      callback('仅允许输入英文字母数字下划线！');
      return;
    } else if (value && value.length > 140) {
      callback('内容不能多于30个字符');
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        await this.props.dispatch({
          type: 'column/createPreColum',
          data: values
        });
        // const { onCreated } = this.props;
        // onCreated && onCreated();
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="栏目名">
          {getFieldDecorator('title', {
            rules: [
              {
                required: true,
                message: '请输入您想添加的栏目名！',
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Key">
          {getFieldDecorator('remark', {
            rules: [
              {
                required: true,
                message: '请输入您想添加的栏目名！',
                whitespace: true
              },
              {
                // validator: this.checkContent.bind(this)
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            创建主栏目
          </Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedRegistrationForm = Form.create()(ColumnPreCreate);
export default WrappedRegistrationForm;
