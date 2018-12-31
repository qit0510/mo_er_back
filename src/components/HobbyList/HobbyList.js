import React, { PureComponent } from 'react';
import { Card } from 'antd';

export default class HobbyList extends PureComponent {
  render() {
    return (
      <Card
        title="Card title"
        extra={<a href="/">More</a>}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }
}
