import React, { PureComponent } from 'react';
import { connect } from 'dva';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';
import ArticleEdit from '../../components/Editor/ArticleEdit';
@connect(({ article }) => ({
  data: article.data,
}))
export default class ArticleEditor extends PureComponent {
  render() {
    return (
      <div>
        <div className="space_between">
          <MainPageHeader title={this.props.title} />
        </div>
        <ArticleEdit />
      </div>
    );
  }
}
