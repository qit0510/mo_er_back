import React, { PureComponent } from 'react';
import Exception from 'ant-design-pro/lib/Exception';
import { Button } from 'antd';

const actions = (
  <div>
    <Button type="primary">Home</Button>
    <Button>Detail</Button>
  </div>
);
export default class FourZeroThree extends PureComponent {
  render() {
    return (
      <Exception type="403" actions={actions} />
    );
  }
}
