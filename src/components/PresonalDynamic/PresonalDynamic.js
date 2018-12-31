import React, { PureComponent } from 'react';
import {
  Tabs, Icon, Tag, Card,
} from 'antd';
import Styles from './PresonalDynamic.less';

const TabPane = Tabs.TabPane;
const { Meta } = Card;
export default class PresonalDynamic extends PureComponent {
  render() {
    return (
      <Tabs defaultActiveKey="2">
        <TabPane
          tab={(
            <span>
              <Icon type="read" theme="outlined" />
文章
            </span>
          )}
          key="1"
        >
          <ul className={Styles.artisan}>
            <li>
              <h3 className={Styles.title}>Alipay</h3>
              <p className={Styles.tag}>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
              </p>
              <div className={Styles.content}>
                <p>
                  段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                  ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
                </p>
              </div>
              <div className={Styles.other}>
                <ul>
                  <li>
                    <span><Icon type="star" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="like" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="message" theme="outlined" /></span>
235
                  </li>
                </ul>
              </div>
              <div className={Styles.clr} />
            </li>
            <li>
              <h3 className={Styles.title}>Alipay</h3>
              <p className={Styles.tag}>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
              </p>
              <div className={Styles.content}>
                <p>
                  段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                  ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
                </p>
              </div>
              <div className={Styles.other}>
                <ul>
                  <li>
                    <span><Icon type="star" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="like" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="message" theme="outlined" /></span>
235
                  </li>
                </ul>
              </div>
              <div className={Styles.clr} />
            </li>
            <li>
              <h3>Alipay</h3>
              <p>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
              </p>
              <div>
                <p>
                  段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                  ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
                </p>
              </div>
              <div className={Styles.other}>
                <ul>
                  <li>
                    <span><Icon type="star" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="like" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="message" theme="outlined" /></span>
235
                  </li>
                </ul>
              </div>
              <div className={Styles.clr} />
            </li>
            <li>
              <h3>Alipay</h3>
              <p>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
              </p>
              <div>
                <p>
                  段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                  ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
                </p>
              </div>
              <div className={Styles.other}>
                <ul>
                  <li>
                    <span><Icon type="star" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="like" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="message" theme="outlined" /></span>
235
                  </li>
                </ul>
              </div>
              <div className={Styles.clr} />
            </li>
            <li>
              <h3>Alipay</h3>
              <p>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
              </p>
              <div>
                <p>
                  段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                  ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
                </p>
              </div>
              <div className={Styles.other}>
                <ul>
                  <li>
                    <span><Icon type="star" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="like" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="message" theme="outlined" /></span>
235
                  </li>
                </ul>
              </div>
              <div className={Styles.clr} />
            </li>
            <li>
              <h3>Alipay</h3>
              <p>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
              </p>
              <div>
                <p>
                  段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
                  ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
                </p>
              </div>
              <div className={Styles.other}>
                <ul>
                  <li>
                    <span><Icon type="star" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="like" theme="outlined" /></span>
45
                  </li>
                  <li>
                    <span><Icon type="message" theme="outlined" /></span>
235
                  </li>
                </ul>
              </div>
              <div className={Styles.clr} />
            </li>
          </ul>
        </TabPane>
        <TabPane
          tab={(
            <span>
              <Icon type="github" theme="outlined" />
项目
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
