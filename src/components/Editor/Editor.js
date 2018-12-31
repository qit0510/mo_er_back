import React, {Component} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import Styles from './Editor.less';

export default class Editor extends Component {
  render() {
    return (
      <div className={Styles.editor}>
        <CKEditor
          onInit={(editor) => {
            editor.ui.view.editable.element.parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.view.editable.element,
            );
          }}
          onChange={(event, editor) => {
            this.props.onChange(editor.getData());
          }}
          editor={DecoupledEditor}
          data={this.props.value || '<p>&nbsp;</p>'}
        />
      </div>
    );
  }
}

