import ArticleList from '../pages/Article/ArticleList';
import Index from '../pages/Index/Index';
import UserManageCreate from '../pages/UserManageMent/UserManageCreate';
import ArticleEditor from '../pages/Article/ArticleEditor';
import ArticleCreate from '../pages/Article/ArticleCreate';
import Tag from '../pages/Article/Tag';
import UserManageList from '../pages/UserManageMent/UserManageList';
import NavCreate from '../pages/Navitation/NavCreate';
import MainNavCreate from '../pages/Navitation/MainNavCreate';
import NavList from '../pages/Navitation/NavList';
import PersonalCenter from '../pages/Personal/PersonalCenter';
import PersonalSetting from '../pages/Personal/PersonalSetting';
import SuccessPage from '../pages/SubmitPages/SuccessPage';
import FailPage from '../pages/SubmitPages/FailPage';
import FourZeroFour from '../pages/ErrorPage/FourZeroFour';
import FiveHundred from '../pages/ErrorPage/FiveHundred';
import FourZeroThree from '../pages/ErrorPage/FourZeroThree';
import NavEdit from '../pages/Navitation/NavEdit';
export default [
  {
    path: '/',
    title: '工作台',
    icon: 'desktop',
    exact: true,
    component: Index
  },
  {
    path: '/user',
    title: '用户管理中心',
    exact: true,
    icon: 'team',
    routes: [
      {
        path: '/user/user_manage_create',
        title: '用户创建',
        component: UserManageCreate
      },
      {
        path: '/user/user_manage_list',
        title: '用户列表',
        component: UserManageList
      }
    ]
  },
  {
    path: '/art',
    icon: 'hdd',
    title: '文章管理中心',
    routes: [
      {
        path: '/art/art_list',
        title: '文章列表',
        component: ArticleList
      },
      {
        path: '/art/art_edit',
        title: '文章编辑',
        notInMenu: true,
        component: ArticleEditor
      },
      {
        path: '/art/art_create',
        title: '文章创建',
        component: ArticleCreate
      },
      {
        path: '/art/tag',
        title: '标签页',
        component: Tag
      }
    ]
  },
  {
    path: '/topic',
    icon: 'appstore',
    title: '栏目管理中心',
    routes: [
      {
        path: '/topic/main_topic_create',
        title: '创建主栏目',
        component: MainNavCreate
      },
      {
        path: '/topic/topic_create',
        title: '创建栏目',
        component: NavCreate
      },
      {
        path: '/topic/topic_list',
        title: '栏目列表',
        component: NavList
      },
      {
        path: '/topic/edit',
        title: '栏目编辑',
        notInMenu: true,
        component: NavEdit
      }
    ]
  },
  {
    path: '/personal',
    icon: 'user',
    title: '个人设置',
    // notInMenu: true,
    routes: [
      {
        path: '/personal/personal_core',
        title: '个人中心',
        component: PersonalCenter
      },
      {
        path: '/personal/personal_setting',
        title: '个人设置',
        component: PersonalSetting
      }
    ]
  },
  {
    path: '/res',
    icon: 'bulb',
    title: '结果页面',
    notInMenu: true,
    routes: [
      {
        path: '/res/page_success',
        title: '成功',
        component: SuccessPage
      },
      {
        path: '/res/page_fail',
        title: '失败',
        component: FailPage
      }
    ]
  },
  {
    path: '/error',
    title: 'Error',
    icon: 'global',
    notInMenu: true,
    routes: [
      {
        path: '/error/404',
        title: '404',
        component: FourZeroFour
      },
      {
        path: '/error/403',
        title: '403',
        component: FourZeroThree
      },
      {
        path: '/error/500',
        title: '500',
        component: FiveHundred
      }
    ]
  }
];
