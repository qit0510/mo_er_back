import React, { PureComponent } from 'react';
import { Card, Form } from 'antd';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';
import AddUser from '../../components/AddUser/AddUser';

class UserManageCreate extends PureComponent {
  render() {
    return (
      <div>
        <div className="space_between">
          <MainPageHeader title={this.props.title} />
z w
        </div>
        <Card>
          <AddUser />
        </Card>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create()(UserManageCreate);
export default WrappedRegistrationForm;
