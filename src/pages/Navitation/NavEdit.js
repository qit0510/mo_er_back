import React, { PureComponent } from 'react';
import { Card } from 'antd';
import ColumnEdit from '../../components/ColumnCreate/ColumnEdit';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';

export default class NavList extends PureComponent {
  render() {
    return (
      <div>
        <div className="space_between">
          <MainPageHeader title={this.props.title} />
        </div>
        <Card>
          <ColumnEdit onCreated={() => {
            this.props.history.push('/res/page_success');
          }}
          />
        </Card>
      </div>
    );
  }
}
