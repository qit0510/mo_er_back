import React, { PureComponent } from 'react';
import UserList from '../../components/UserList/UserList';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';

export default class Index extends PureComponent {
  render() {
    return (
      <div>
        <div className="space_between">
          <MainPageHeader title={this.props.title} />
        </div>
        <UserList />
      </div>
    );
  }
}
