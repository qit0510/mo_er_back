import React, { PureComponent } from 'react';
import Result from 'ant-design-pro/lib/Result';
import { Button } from 'antd';

const actions = (
  <div>
    <Button type="primary">返回列表</Button>
    <Button>查看项目</Button>
    <Button>打 印</Button>
  </div>
);
export default class SuccessPage extends PureComponent {
  render() {
    return (
      <Result
        type="success"
        title="提交成功"
        description="提交结果页用于反馈一系列操作任务的处理结果，如果仅是简单操作，使用 Message 全局提示反馈即可。本文字区域可以展示简单的补充说明，如果有类似展示“单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
        actions={actions}
        style={{ width: '100%' }}
      />
    );
  }
}
