import TabsView from '@/layouts/tabs/TabsView'


// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/pages/exception/403'),
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/login',
      children: [
        {
          path: 'article_add',
          name: '新建文章',
          meta: {
            icon: 'edit'
          },
          component: () => import('@/pages/article-add')
        },
        {
          path: 'article_list',
          name: '文章管理',
          meta: {
            icon: 'unordered-list'
          },
          component: () => import('@/pages/article-list')
        },
        {
          path: 'page_list',
          name: '页面管理',
          meta: {
            icon: 'block'
          },
          component: () => import('@/pages/page-list')
        },
        {
          path: 'category_list',
          name: '分类管理',
          meta: {
            icon: 'align-left'
          },
          component: () => import('@/pages/category-list')
        },
        {
          path: 'tag_list',
          name: '标签管理',
          meta: {
            icon: 'tags'
          },
          component: () => import('@/pages/tag-list')
        },
        {
          path: 'comment_list',
          name: '评论管理',
          meta: {
            icon: 'message'
          },
          component: () => import('@/pages/comment-list')
        },
        {
          path: 'attach_list',
          name: '附件管理',
          meta: {
            icon: 'folder'
          },
          component: () => import('@/pages/attach-list')
        },
        {
          path: 'user_list',
          name: '用户管理',
          meta: {
            icon: 'team'
          },
          component: () => import('@/pages/user-list')
        },
        {
          path: 'setting',
          name: '网站设置',
          meta: {
            icon: 'setting'
          },
          component: () => import('@/pages/setting')
        }
      ]
    }
  ]
}

export default options
