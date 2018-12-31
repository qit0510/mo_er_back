import React, {PureComponent} from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router';
import {
  Table, Input, Button, Icon, Tag, Divider, Card,
} from 'antd';

@connect(({article}) => ({
  data: article.data,
  tags: article.tags,
  columns: article.columns,
}))
export default class MainArtisanList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({type: 'article/initData'});
    this.props.dispatch({type: 'article/initCreateArticle'});
  }

  handleSearch = (selectedKeys, confirm) => () => {
    confirm();
    this.setState({searchText: selectedKeys[0]});
  }

  deleteBtn = (id) => {
    this.props.dispatch({
      type: 'article/deleteData',
      id,
    });
  }
  render() {
    const columns = [{
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      filterDropdown: ({
        setSelectedKeys, selectedKeys, confirm,
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
            style={{display: 'none'}}
            type="primary"
            onClick={this.handleSearch(selectedKeys, confirm)}
          >
            Search
          </Button>
        </div>
      ),
      filterIcon: filtered => <Icon type="search" theme="outlined" style={{color: filtered ? '#108ee9' : '#aaa'}}/>,
      onFilter: (value, record) => record.title.toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => {
            this.searchInput.focus();
          });
        }
      },
      render: (text) => {
        const {searchText} = this.state;
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
      title: '栏目',
      dataIndex: 'column[0].title',
      key: 'column[0].title',
      filters: this.props.columns.map(item => ({text: item.title, value: item.title})),
      onFilter: (value, record) => record.column[0].title.indexOf(value) === 0,
    }, {
      title: '标签',
      key: 'tags',
      dataIndex: 'tags',
      filters: this.props.tags.map(item => ({text: item.title, value: item.title})),
      render: tags => (
        <span>
          {tags.map(tag => <Tag color="blue" key={tag.id}>{tag.title}</Tag>)}
        </span>
      ),
      onFilter: (value, record) => !!record.tags.find(tag => tag.title === value),
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to={`/art/art_edit?${record.id}`}><Button>修改</Button></Link>
          <Divider type="vertical"/>
          <Button onClick={() => this.deleteBtn(record.id)}>删除</Button>
        </span>
      ),
    }];
    return (
      <div>
        <Card>
          <Table rowKey="id" columns={columns} dataSource={this.props.data}/>
        </Card>
      </div>
    );
  }
}
