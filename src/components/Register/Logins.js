import React, { Component } from 'react';
import Login from 'ant-design-pro/lib/Login';
import { connect } from 'dva';
import {Link} from 'dva/router';
import { Alert, Checkbox } from 'antd';

const {
  Tab, UserName, Password, Mobile, Captcha, Submit,
} = Login;

@connect(({ user }) => ({

}))
export default class Logins extends Component {
  state = {
    notice: '',
    type: 'tab1',
    autoLogin: true,
  }

  onSubmit = (err, values) => {
    if (this.state.type === 'tab1') {
      this.props.dispatch({
        type: 'user/uLogin',
        data: { ...values, autoLogin: this.state.autoLogin },
      });
    } else {
      this.props.dispatch({
        type: 'user/eLogin',
        data: { ...values, autoLogin: this.state.autoLogin },
      });
    }
  }
  onTabChange = (key) => {
    this.setState({
      type: key,
    });
  }

  changeAutoLogin = (e) => {
    this.setState({
      autoLogin: e.target.checked,
    });
  }

  render() {
    return (
      <Login
        defaultActiveKey={this.state.type}
        onTabChange={this.onTabChange}
        onSubmit={this.onSubmit}
      >
        <Tab key="tab1" tab="账号登录">
          {
            this.state.notice
            && <Alert style={{ marginBottom: 24 }} message={this.state.notice} type="error" showIcon closable />
          }
          <UserName name="name" />
          <Password name="password" />
        </Tab>
        <Tab key="tab2" tab="邮箱登录">
          <Mobile name="email" />
          <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha" />
        </Tab>
        <div>
          <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>记住密码</Checkbox>
          <a style={{ float: 'right' }} href="">忘记密码</a>
        </div>
        <Submit>Login</Submit>
        <div>
          如若没有账号，请注册->
          <Link style={{ float: 'right' }} to={'/register'}>注册</Link>
        </div>
      </Login>
    );
  }
}
