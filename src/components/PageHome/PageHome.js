import React, { PureComponent } from 'react';
import { connect } from 'dva';
import PageHeader from 'ant-design-pro/lib/PageHeader';
import Styles from './PageHome.less';


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
        <img alt="" src={this.props.auth.avatar} />
      </div>
    );
    return (
      <div className={Styles.header}>
        <PageHeader
          title={this.props.auth.name}
          logo={extra}
          content={this.props.auth.introduction}
        />
      </div>
    );
  }
}
