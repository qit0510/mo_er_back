import React, { PureComponent } from 'react';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';
import TagList from '../../components/TagList/TagList';


export default class Tag extends PureComponent {
  render() {
    return (
      <div>
        <div className="space_between">
          <MainPageHeader title={this.props.title} />
        </div>
        <TagList />
      </div>
    );
  }
}
