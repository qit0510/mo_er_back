import React, { PureComponent } from 'react';
import PageHeader from 'ant-design-pro/lib/PageHeader';

export default class MainPageHeader extends PureComponent {
  render() {
    return (
      <div>
        <PageHeader title={this.props.title} />
      </div>
    );
  }
}
