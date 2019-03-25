import React, { PureComponent } from 'react';
import { Icon, Tag, Avatar } from 'antd';
import Styles from './PersonalInfo.less';
import {connect} from 'dva';

@connect(({header}) => ({
  auth:header.auth
}))

export default class PersonalCenter extends PureComponent {
  render() {
    return (
      <div className={Styles.personal_info}>
        <div className={Styles.postcard}>
          <div className={Styles.log}>
            <img src={require('../../assets/img/timg.png')} alt="头像" />
          </div>
          <div className={Styles.per_info}>
            <h3>{this.props.auth&&this.props.auth.name}</h3>
            <span>{this.props.auth&&(this.props.auth.introduction?this.props.auth.introduction:'这个家伙有点懒')}</span>
          </div>
        </div>
        <div className={Styles.line} />
        {/* <div className={Styles.tags}>
          <h3>爱好</h3>
          <Tag color="magenta">magenta</Tag>
          <Tag color="red">red</Tag>
          <Tag color="volcano">volcano</Tag>
          <Tag color="orange">orange</Tag>
          <Tag color="gold">gold</Tag>
          <Tag color="lime">lime</Tag>
          <Tag color="green">green</Tag>
          <Tag color="cyan">cyan</Tag>
          <Tag color="blue">blue</Tag>
          <Tag color="geekblue">geekblue</Tag>
          <Tag color="purple">purple</Tag>
        </div> */}
        {/* <div className={Styles.line} />
        <div className={Styles.follow}>
          <h3>我赞的人</h3>
          <ul>
            <li>
              <a href="/">
                <span><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span>
                dasdasd
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}
