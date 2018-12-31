import React, {PureComponent} from 'react';
import {connect} from 'dva';
import {
  Switch, Icon, Row, Col, Drawer, Popover, Button
} from 'antd';
import Styles from './MainHeader.less';

@connect(({header}) => ({
  isDark: header.isDark,
  visible: header.visible,
  auth:header.auth
}))

export default class MainHeader extends PureComponent {

  componentDidMount(){
    this.props.dispatch({
      type:'header/personalData'
    });
  }
  showDrawer = () => {
    this.props.dispatch({
      type: 'header/showDrawer',
      data: true,
    });
  }

  onClose = () => {
    this.props.dispatch({
      type: 'header/closeDrawer',
      data: false,
    });
  }
  exitLogin = () => {
    this.props.dispatch({
      type:'user/exitLogin'
    });
  }
  setBackground = () => {
    this.props.dispatch({
      type: 'header/changeBackground',
    });
  }

  render() {
    const login = () => (
      <ul>
        <li><Button type="dashed" block>我的首页</Button></li>
        <li><Button type="dashed" block>个人设置</Button></li>
        <li><Button type="dashed" block onClick={this.exitLogin}>退出</Button></li>
      </ul>
    );
    return (
      <div className={[Styles.header, this.props.isDark ? Styles.header_dark : Styles.header_light].join(' ')}>
        <Row>
          <Col xs={{span: 4, offset: 0}} md={{span: 4, offset: 0}} xl={{span: 4, offset: 0}}>
            <div className={Styles.logo}>
              <div className={Styles.logo_group}>
                <img
                  className={Styles.logo_pic}
                  src={this.props.isDark ? require('../../assets/img/log1_white.png') : require('../../assets/img/log1_black.png')}
                  alt="LOG"
                />
                <span className={this.props.isDark ? Styles.logo_name_dark : Styles.logo_name_light}>摩尔</span>
              </div>
            </div>
          </Col>

          <Col xs={{span: 5, offset: 15}} md={{span: 5, offset: 15}} lg={{span: 5, offset: 15}}>
            <div className={Styles.tools}>
              <Popover placement="bottom" title='Auth' content={this.props.auth && this.props.auth.name} trigger="click">
                <span><Icon type="mail" theme="outlined"/></span>
              </Popover>
              <span><Icon type="setting" onClick={this.showDrawer} theme="outlined"/></span>
              <Drawer
                title="设置"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.props.visible}
              >
                <p>
                  <span>夜间模式：</span>
                  <Switch
                    onChange={this.setBackground}
                    checkedChildren="开"
                    unCheckedChildren="关"
                    defaultChecked
                  />
                </p>
                <p>Some contents...</p>
              </Drawer>
              <Popover placement="bottom" title={this.props.auth && this.props.auth.name} content={login()} trigger="click">
                {/*console.log(this.props.auth)*/}
                <span><img style={{width:30 , borderRadius:30}} src={this.props.auth.avatar} alt="图片"/></span>
              </Popover>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
