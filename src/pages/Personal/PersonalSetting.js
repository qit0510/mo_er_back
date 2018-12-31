import React, { PureComponent } from 'react';
import { Card } from 'antd';

import Base from '../../components/Personal_Base_setting/Base';


export default class PersonalCenter extends PureComponent {
  render() {
    return (
      <div>
        <Card>
          <Base />
        </Card>
      </div>
    );
  }
}
