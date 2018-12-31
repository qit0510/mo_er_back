import React, { PureComponent } from 'react';
import { connect } from 'dva';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';
import EditorForm from '../../components/Editor/EditorForm';
@connect(({ article }) => ({
  data: article.data,
}))
export default class ArticleCreate extends PureComponent {
  render() {
    return (
      <div>
        <div className="space_between">
          <MainPageHeader title={this.props.title} />
        </div>
        <EditorForm />
      </div>
    );
  }
}
