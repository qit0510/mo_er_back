import React, { Component } from 'react';
import {
  Form, Input, Row, Col, Card, Select, Checkbox, Button,
} from 'antd';
import { connect } from 'dva';
import Styles from '../../pages/Personal/Personal.less';
import Editor from './Editor';

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {},
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};
@connect(({ article }) => ({
  tags: article.tags,
  columns: article.columns,
}))
class EditorForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'article/createData',
          data: values,
        });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col xs={0} sm={0} md={0} lg={6} xl={6}>
            <div className={Styles.space}>
              <Card>
                <FormItem {...formItemLayout} label="标题">
                  {getFieldDecorator('title', {
                    rules: [{ required: true, message: '请输入标题！', whitespace: true }],
                  })(
                    <Input />,
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="选择文章所属栏目"
                  hasFeedback
                >
                  {getFieldDecorator('column_id', {
                    rules: [
                      { required: true, message: '请选择文章所属栏目！' },
                    ],
                  })(
                    <Select placeholder="请选择文章所属栏目！">
                      {
                        this.props.columns.map(item => (<Option key={item.id} value={item.id}>{item.title}</Option>))
                      }
                    </Select>,
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="标签"
                >
                  {getFieldDecorator('tag_ids')(
                    <Checkbox.Group>
                      <Row>
                        {
                          this.props.tags.map(item => (<Col key={item.id} span={22} offset={2}><Checkbox value={item.id}>{item.title}</Checkbox></Col>))
                        }
                      </Row>
                    </Checkbox.Group>,
                  )}
                </FormItem>
                <FormItem>
                  <Button type="danger" block htmlType="submit">发布文章</Button>
                </FormItem>
              </Card>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            {getFieldDecorator('content', {
              initialValue: '请输入你的内容',
            })(
              <Editor />,
            )}
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create()(EditorForm);
export default WrappedRegistrationForm;
