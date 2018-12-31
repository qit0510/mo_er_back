import React, { PureComponent } from 'react';
import {
  Form, Input, Select, Button, Upload, Icon,
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
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

class AddUser extends PureComponent {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.preventDefault());
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('收到的表格值: ', values);
      }
    });
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('您输入的两个密码不一致!');
    } else {
      callback();
    }
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="用户">
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入您的用户名！', whitespace: true }],
          })(
            <Input />,
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="密码">
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入您的密码！',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="再次输入密码"
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认您的密码!',
            }, {
              validator: this.compareToFirstPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />,
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="邮箱">
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: '请输入正确的邮箱！',
            }, {
              required: true, message: '请输入您的邮箱！',
            }],
          })(
            <Input />,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="权限"
          hasFeedback
        >
          {getFieldDecorator('select', {
            rules: [
              { required: true, message: '请选择用户权限！' },
            ],
          })(
            <Select placeholder="请选择用户权限！">
              <Option value="admin">管理员</Option>
              <Option value="super_use">高级用户</Option>
              <Option value="use">普通用户</Option>
            </Select>,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="头像"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">单击或拖动文件到此区域上载</p>
              </Upload.Dragger>,
            )}
          </div>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Register</Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedRegistrationForm = Form.create()(AddUser);
export default WrappedRegistrationForm;
