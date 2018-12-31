import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Table, Input, Button, Icon, Divider, Card,
} from 'antd';

@connect(({ user }) => ({
  data: user.data,
}))
export default class UserList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'user/initData',
    });
  }

  handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  }

  render() {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filterDropdown: ({
        setSelectedKeys, selectedKeys, confirm, clearFilters,
      }) => (
        <div className="custom-filter-dropdown">
          <Input
            ref={ele => this.searchInput = ele}
            placeholder="Search name"
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={this.handleSearch(selectedKeys, confirm)}
          />
          <Button
            style={{ display: 'none' }}
            type="primary"
            onClick={this.handleSearch(selectedKeys, confirm)}
          >
Search
          </Button>
        </div>
      ),
      filterIcon: filtered => <Icon type="search" theme="outlined" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
      onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => {
            this.searchInput.focus();
          });
        }
      },
      render: (text) => {
        const { searchText } = this.state;
        return searchText ? (
          <span>
            {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
              fragment.toLowerCase() === searchText.toLowerCase()
                ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
            ))}
          </span>
        ) : text;
      },
    }, {
      title: '权限',
      key: 'status',
      dataIndex: 'status',
      filters: [{
        text: 'admin',
        value: 'admin',
      }, {
        text: 'user',
        value: 'user',
      }, {
        text: 'super_user',
        value: 'super_user',
      }],
      render: status => (
        <span>{status}</span>
      ),
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    }, {
      title: '邮箱',
      key: 'email',
      dataIndex: 'email',
      render: email => (<span>{email}</span>),
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="/">修改</a>
          <Divider type="vertical" />
          <a href="/">删除</a>
        </span>
      ),
    }];
    return (
      <div>
        <Card>
          <Table columns={columns} dataSource={this.props.data} />
        </Card>
      </div>
    );
  }
}
