import React, { PureComponent } from 'react';
import { Icon, Tag, Avatar } from 'antd';
import Styles from './PersonalInfo.less';

export default class PersonalCenter extends PureComponent {
  render() {
    return (
      <div className={Styles.personal_info}>
        <div className={Styles.postcard}>
          <div className={Styles.log}>
            <img src={require('../../assets/img/timg.png')} alt="头像" />
          </div>
          <div className={Styles.per_info}>
            <h3>于皖虎</h3>
            <span>海纳百川，有容乃大</span>
          </div>
          <ul className={Styles.other}>
            <li>
              <span><Icon type="trophy" theme="outlined" /></span>
斗帝
            </li>
            <li>
              <span><Icon type="coffee" theme="outlined" /></span>
打开多久爱死了
            </li>
            <li>
              <span><Icon type="block" theme="outlined" /></span>
大叔大婶
            </li>
          </ul>
        </div>
        <div className={Styles.line} />
        <div className={Styles.tags}>
          <h3>标签</h3>
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
        </div>
        <div className={Styles.line} />
        <div className={Styles.follow}>
          <h3>关注</h3>
          <ul>
            <li>
              <a href="/">
                <span><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span>
dasdasd
              </a>
            </li>
            <li>
              <a href="/">
                <span><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span>
dasdasd
              </a>
            </li>
            <li>
              <a href="/">
                <span><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span>
dasdasd
              </a>
            </li>
            <li>
              <a href="/">
                <span><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span>
dasdasd
              </a>
            </li>
            <li>
              <a href="/">
                <span><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span>
dasdasd
              </a>
            </li>
            <li>
              <a href="/">
                <span><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></span>
dasdasd
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
