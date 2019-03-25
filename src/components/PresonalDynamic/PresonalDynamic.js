import React, { PureComponent } from 'react';
import {Tabs, Icon, Tag, Card} from 'antd';
import {connect} from 'dva';
import Styles from './PresonalDynamic.less';


const TabPane = Tabs.TabPane;
const { Meta } = Card;
const color = ['red','magenta','volcano'];

@connect(({article}) => ({
  myArticle:article.myArticle
}))
export default class PresonalDynamic extends PureComponent {

  componentDidMount(){
    //article
    this.props.dispatch({
      type:'article/getMyArticle'
    });
  }
  filterHTMLTag = (msg) => {
    msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
    msg = msg.replace(/[|]*\n/, ''); //去除行尾空格
    msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
    return msg;
  }
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={(<span> <Icon type="read" theme="outlined" />我发布的文章</span>)} key="1">
          <ul className={Styles.artisan}>
            {
              this.props.myArticle&&this.props.myArticle.map((item)=>(
                <li key={item.id}>
                  <h3 className={Styles.title}>{item.title}</h3>
                  <div>
                    {
                      item.tags.map((item,index)=>(
                        <Tag key={item.id} color={color[index]}>{item.title}</Tag>
                      ))
                    }
                  </div>
                  <div className={Styles.content}>
                    {this.filterHTMLTag(item.content)}
                  </div>
                  <div className={Styles.other}>
                    <ul>
                      <li>
                        <span><Icon type="like" theme="outlined" /></span>
                        {item.up_votes_count}
                      </li>
                      <li>
                        <span><Icon type="message" theme="outlined" /></span>
                        {item.comments.length}
                      </li>
                    </ul>
                  </div>
                  <div className={Styles.clr} ></div>
                </li>
              ))
            }
        
          </ul>
        </TabPane>
        <TabPane
          tab={(
            <span>
              <Icon type="github" theme="outlined" />
              我发布的项目
            </span>
          )}
          key="2"
        >
          <ul className={Styles.project_list}>
            <li>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </li>
            <li>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </li>
            <li>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </li>
            <li>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </li>
            <li>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </li>
            <li>
              <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </li>
          </ul>
        </TabPane>
      </Tabs>
    );
  }
}
