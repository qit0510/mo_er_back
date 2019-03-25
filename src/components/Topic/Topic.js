import React, {PureComponent} from 'react';
import {connect} from 'dva';
import {Menu, Icon, Button} from 'antd';
import {Link} from 'dva/router';
import Styles from './Topic.less';
import routes from '../../routes/routes';

const SubMenu = Menu.SubMenu;

@connect(({header, topic}) => ({
  isDark: header.isDark,
  collapsed: topic.collapsed,
  auth:header.auth
}))

export default class Topic extends PureComponent {
  toggleCollapsed = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'topic/changeTopic',
    });
  }

  render() {
    console.log();
    return (
      <div className={Styles.topic}>
        <Button className={Styles.btn} type={this.props.isDark ? 'primary' : 'default'} onClick={this.toggleCollapsed}>
          <Icon type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}/>
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme={this.props.isDark ? 'dark' : 'light'}
          inlineCollapsed={this.props.collapsed}
        >
          {
            (this.props.auth)&&(
              routes.map((item) => {  
                if(this.props.auth.identity!==1){
                  if(item.title!=='用户管理中心'&&item.title!=='栏目管理中心'&&item.title!=='文章管理中心'){
                    return genMenu(item);
                  }else{
                    return 0;
                  }
                }else{
                  return genMenu(item);
                }
                
              })
            )
          }
        </Menu>
      </div>
    );
  }
}

function genMenu(route) {
  const {
    title, icon, path, notInMenu
  } = route;

  let children = null;

  if (route.routes) {
    children = route.routes.map(item => genMenu(item));
  }
  const menuItem = notInMenu ? null : (
    <Menu.Item key={path}>
      <Link to={path} replace>
        {' '}
        {icon && <Icon type={icon} theme="outlined"/>}
        {' '}
        <span>
          {title}
        </span>
      </Link>
    </Menu.Item>
  );

  if (!children) {
    return menuItem;
  }
  return notInMenu ? null : (
    <SubMenu
      key={path}
      title={(
        <span>
          {' '}
          {icon && <Icon type={icon} theme="outlined"/>}
          {' '}
          <span>
            {title}
          </span>
        </span>
      )}
    >
      {children}
    </SubMenu>
  );

}
