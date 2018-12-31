import React, { PureComponent } from 'react';
import { Card, Row, Col } from 'antd';
import Styles from './Personal.less';
import PresonalInfo from '../../components/PersonalInfo/PersonalInfo';
import PresonalDynamic from '../../components/PresonalDynamic/PresonalDynamic';

export default class PersonalCenter extends PureComponent {
  render() {
    return (
      <Row>
        <Col xs={0} sm={0} md={0} lg={6} xl={6}>
          <div className={Styles.space}>
            <Card>
              <PresonalInfo />
            </Card>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <Card>
            <PresonalDynamic />
          </Card>
        </Col>
      </Row>
    );
  }
}
