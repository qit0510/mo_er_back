import React, { PureComponent } from 'react';
import { Card, List, Avatar } from 'antd';
import {connect} from 'dva';

@connect(({user})=>({
  dynamicData:user.dynamicData

}))
export default class DynamicList extends PureComponent {
  componentDidMount(){
    this.props.dispatch({
      type: 'user/initDynamic',
    });
  }
  render() {
    this.props.dynamicData && this.props.dynamicData.map((item)=>{
      console.log(item.user.avatar);
    });
    return (
      <div>
        <Card
          title="动态"
        >
          <List
            itemLayout="horizontal"
            dataSource={this.props.dynamicData && this.props.dynamicData}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={'http://localhost:8000'+item.user.avatar}/>}
                  title={<a href="https://ant.design">{item.user.name}</a>}
                  description={item.user.name + '评价了您的'+'《'+item.title+'》'}
                />
              </List.Item>
            )}
          />
        </Card>
      </div>
    );
  }
}
