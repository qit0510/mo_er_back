import React from 'react';
import { connect } from 'dva';
import { Route, Switch } from 'dva/router';
import Styles from './IndexPage.less';
import MainHeader from '../components/Header/MainHeader';
import Topic from '../components/Topic/Topic';
import routes from './routes';
import { authenticated } from '../utils/auth';

function IndexPage() {
//判断用户登录
  authenticated();
  return (
    <div className={Styles.normal}>
      <div className={Styles.header}>
        <MainHeader />
      </div>
      <div className={Styles.cross}>
        <div className={Styles.topic}><Topic /></div>
        <div className={Styles.mainContent}>
          <Switch>
            {
              routes.map(item => genRoute(item))
            }
          </Switch>
        </div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);

function genRoute(route) {
  const {
    component: Component, title, routes, ...rest
  } = route;
  let children = null;
  if (routes) {
    children = routes.map(c => genRoute(c));
  }
  if (!Component) {
    return children;
  }
  return (
    <Route
      key={rest.path}
      {...rest}
      render={props => (
        <Component {...props} title={title}>
          <Switch>
            {children}
          </Switch>
        </Component>
      )}
    />
  );
}
