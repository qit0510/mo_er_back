import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import {Slider, Button} from 'antd';
import Style from './Style.less';
import axios from 'axios';
import {connect} from 'dva';

const marks = {
  90: '90°',
  180: '180°',
  270: '270°',
};

function dataURLtoFile(dataurl, filename) {//将base64转换为文件
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, {type: mime});
}

@connect(() => ({}))
class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1.2,
      rotate: 0,
    };
  }

  onClickSave = () => {
    if (this.editor) {
      const canvasScaled = this.editor.getImageScaledToCanvas();
      let formData = new FormData();
      const url = canvasScaled.toDataURL();
      formData.append('avatar', dataURLtoFile(url, 'avatar'));
      axios.post('/api/user/uploadAvatar', formData);
      this.props.dispatch({
        type: 'user/changeSrc',
        data: url
      });
    }
  }
  handleScale = (e) => {
    this.setState({
      scale: e
    });
  }
  handleRotate = (e) => {
    console.log(e);
    this.setState({
      rotate: e
    });
  }
  setEditorRef = (editor) => this.editor = editor

  render() {
    return (
      <div>
        <div className={Style.avatar}>
          <AvatarEditor
            ref={this.setEditorRef}
            image={this.props.src}
            width={200}
            height={200}
            border={50}
            color={[248, 249, 250, 0.8]}
            borderRadius={200}
            scale={parseFloat(this.state.scale)}
            rotate={this.state.rotate}
          />
        </div>
        <div className={Style.avatarTool}>
          <p className={Style.title}>缩放</p>
          <Slider
            tooltipVisible
            onChange={this.handleScale}
            min={0.1}
            max={2}
            step={0.01}
            defaultValue={this.state.scale}
            style={{width: 280, margin: '10px auto'}}
          />
          <p className={Style.title}>旋转</p>
          <Slider
            className={Style.slider}
            tooltipVisible
            marks={marks}
            min={0}
            max={360}
            step={1}
            onChange={this.handleRotate}
            defaultValue={this.state.rotate}
            style={{
              width: 280, margin: '10px auto'
            }}
          />
          <Button type="primary" onClick={this.onClickSave} block>上传头像</Button>
        </div>
      </div>
    );
  }
}

export default MyEditor;
