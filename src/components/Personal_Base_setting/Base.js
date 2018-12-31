import React, {PureComponent} from 'react';
import {
  Form, DatePicker, Input, Card, Button, Upload, Icon, message
} from 'antd';
import AvatarEditor from './AvatarEditor';
import {connect} from 'dva';
import moment from 'moment';
import Style from './Style.less';

const FormItem = Form.Item;
const {TextArea} = Input;
const formItemLayout = {
  labelCol: {
    xs: {span: 0},
    sm: {span: 3, offset: 5},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 8},
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

function beforeUpload(file) {

  const allowTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  const isAllowType = allowTypes.includes(file.type);
  if (!isAllowType) {
    message.error('You can only upload image file!');
  }
  const isLt20M = file.size / 1024 / 1024 < 20;
  if (!isLt20M) {
    message.error('Image must smaller than 20MB!');
  }
  return isAllowType && isLt20M;
}

@connect(({user}) => ({
  personal: user.personal
}))
class Base extends PureComponent {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    loading: false,
    ishidden: true
  };
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({loading: true});
      this.setState({ishidden: false});
      return;
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type:'user/changeData',
          data:values
        });
      }
    });
  }

  handleUpload = (option) => {
    this.setState({
      imageUrl: window.URL.createObjectURL(option.file),
      loading: false,
    });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    const config = {
      rules: [{type: 'object', required: true, message: 'Please select time!'}],
    };
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'}/>
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Form onSubmit={this.handleSubmit}>

        <Card hoverable className={Style.avatarEditor}
          style={this.state.ishidden ? {display: 'none'} : {display: 'block'}}>
          <AvatarEditor src={imageUrl}/>
        </Card>

        <div style={{width:200, margin:'0 auto'}}>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="/api/user/uploadAvatar"
            beforeUpload={beforeUpload}
            customRequest={this.handleUpload}
            onChange={this.handleChange}
          >
            {this.props.personal.avatar ?
              <img style={{width: 200, borderRadius: 100}} src={this.props.personal.avatar}
                alt="avatar"/> : uploadButton}
          </Upload>
        </div>
        <FormItem {...formItemLayout} label="昵称">
          {getFieldDecorator('nickname', {
            initialValue: this.props.personal.name,
            rules: [{required: true, message: '请输入您的用户名！', whitespace: true}],
          })(
            <Input/>,
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="生日"
        >
          {getFieldDecorator('birthday', {
            initialValue: this.props.personal.birthday ? moment(this.props.personal.birthday) : moment(new Date()),
            config
          })(
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>,
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="个人简介">
          {getFieldDecorator('remark', {
            initialValue: this.props.personal.introduction,
            // rules: [{required: true, message: '请输入您想添加的栏目备注！', whitespace: true}],
          })(
            <TextArea rows={3}/>,
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="邮箱">
          {getFieldDecorator('email', {
            initialValue: this.props.personal.email,
            rules: [{
              type: 'email', message: '请输入正确的邮箱！',
            }, {
              required: true, message: '请输入您的邮箱！',
            }],
          })(
            <Input/>,
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">确定修改</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(Base);
export default WrappedRegistrationForm;

