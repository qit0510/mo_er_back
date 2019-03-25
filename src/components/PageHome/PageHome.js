import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import Styles from './PageHome.less';
import logo from '../../assets/img/log1_black.png';

@connect(({ header }) => ({
  auth:header.auth
}))
export default class PageHome extends PureComponent {
  componentDidMount(){
    this.props.dispatch({
      type:'header/personalData'
    });
  }
  render() {
    const extra = (
      <div className={Styles.imgContainer}>
        {/* <img alt="用户头像" src={this.props.auth.avatar?this.props.auth.avatar:'../../assets/img/log1_black.png'} /> */}



        <img alt="用户头像" src={this.props.auth.avatar?this.props.auth.avatar:logo} />

      </div>
    );
    return (
      <div className={Styles.header}>
        <PageHeader
          title={this.props.auth.name}
          logo={extra}
          content={this.props.auth.introduction?this.props.auth.introduction:'这个人有点懒'}
        />
      </div>
    );
  }
}
