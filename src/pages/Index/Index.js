import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import Styles from './Index.less';
import PageHome from '../../components/PageHome/PageHome';
import DynamicList from '../../components/DynamicList/DynamicList';
import FlowChart from '../../components/FlowChart/FlowChart';
import HobbyList from '../../components/HobbyList/HobbyList';

export default class Index extends PureComponent {
  render() {
    return (
      <div className={Styles.main}>
        <PageHome />
        <div className={Styles.gap}>
          <Row>
            <Col xs={{ span: 18, offset: 0 }} lg={{ span: 18, offset: 0 }}>
              <div className={Styles.dynamic}>
                <DynamicList />
              </div>
            </Col>
            <Col xs={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }}>
              <div className={Styles.freedom}>
                <FlowChart />
              </div>
              <HobbyList />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
