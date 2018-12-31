import React, { PureComponent } from 'react';
import ColumnList from '../../components/ColumnList/ColumnList';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';

export default class NavList extends PureComponent {
  render() {
    return (
      <div>
        <div className="space_between">
          <MainPageHeader title={this.props.title} />
        </div>
        <ColumnList />
      </div>
    );
  }
}
