import React, { PureComponent } from 'react';
import { ChartCard, MiniArea } from 'ant-design-pro/lib/Charts';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import numeral from 'numeral';
import moment from 'moment';

const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + (1000 * 60 * 60 * 24 * i))).format('YYYY-MM-DD'),
    y: Math.floor(Math.random() * 100) + 10,
  });
}
export default class FlowChart extends PureComponent {
  render() {
    return (
      <div>
        <ChartCard
          title="搜索用户数量"
          total={numeral(8846).format('0,0')}
          contentHeight={134}
        >
          <NumberInfo
            subTitle={<span>本周访问</span>}
            total={numeral(12321).format('0,0')}
            status="up"
            subTotal={17.1}
          />
          <MiniArea
            line
            height={45}
            data={visitData}
          />
        </ChartCard>
      </div>
    );
  }
}
