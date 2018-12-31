import React, { PureComponent } from 'react';
import { Card } from 'antd';
import ColumnCreate from '../../components/ColumnCreate/ColumnCreate';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';

export default class NavList extends PureComponent {
  render() {
    return (
      <div>
        <div className="space_between">
          <MainPageHeader title={this.props.title} />
        </div>
        <Card>
          <ColumnCreate onCreated={() => {
            this.props.history.push('/res/page_success');
          }}
          />
        </Card>
      </div>
    );
  }
}
