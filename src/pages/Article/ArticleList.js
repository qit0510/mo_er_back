import React, { PureComponent } from 'react';
import MainArtisanList from '../../components/ArtisanList/MainArtisanList';
import MainPageHeader from '../../components/MainPageHeader/MainPageHeader';

export default class ArticleList extends PureComponent {
  render() {
    return (
      <div>
        <div className="space_between">
          <MainPageHeader title={this.props.title} />
        </div>
        <MainArtisanList />
        {this.props.children}
      </div>
    );
  }
}
