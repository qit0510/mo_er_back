import React, { PureComponent } from 'react';
import { Card } from 'antd';

import Register from '../../components/Register/Register';
import Styles from './Style.less';

export default class PersonalCenter extends PureComponent {
  render() {
    return (
      <div className={Styles.login}>
        <div className={Styles.logo}>
          <div className={Styles.logo_group}>
            <img className={Styles.logo_pic} src={require('../../assets/img/log1_black.png')} alt="LOG" />
            <span className={Styles.logo_name_light}>摩尔</span>
          </div>
        </div>
        <div className={Styles.content}>
          <Card>
            <h2 className={Styles.caption}>注册</h2>
            <Register />
          </Card>
        </div>
      </div>
    );
  }
}
