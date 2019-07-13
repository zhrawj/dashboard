import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },

  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '仪表盘', icon: 'dashboard' }
    }]
  },

  {
    path: '/project',
    component: Layout,
    redirect: '/project/project',
    name: 'ProjectManage',
    meta: { title: '项目管理', icon: 'tree-table' },
    children: [
      {
        path: 'project',
        name: 'Project',
        component: () => import('@/views/project/project'),
        meta: { title: '项目列表', icon: 'project' }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/project/user'),
        meta: { title: '用户列表', icon: 'team' }
      },
      {
        path: 'service',
        name: 'Service',
        component: () => import('@/views/project/service'),
        meta: { title: '服务列表', icon: 'component' }
      }
    ]
  },

  {
    path: '/assets',
    component: Layout,
    redirect: '/assets/device',
    name: 'Asset',
    meta: { title: '资产管理', icon: 'assets' },
    children: [
      {
        path: 'model',
        name: 'Model',
        component: () => import('@/views/asset/model'),
        meta: { title: '模型列表', icon: 'cubes' }
      },
      {
        path: 'device',
        name: 'Device',
        component: () => import('@/views/asset/device'),
        meta: { title: '设备列表', icon: 'server' }
      },
      {
        path: 'alert',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '告警列表', icon: 'alert' }
      },
      {
        path: 'loginRole',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '登录角色', icon: 'role' }
      },
      {
        path: 'loginPolicy',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '登录策略', icon: 'policy' }
      },
      {
        path: 'loginAudit',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '在线会话', icon: 'audit' }
      },
      {
        path: 'loginHistory',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '历史会话', icon: 'replay' }
      }
    ]
  },

  {
    path: '/dns',
    component: Layout,
    redirect: '/example/table',
    name: 'DNS',
    meta: { title: '三方资产', icon: 'third' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '域名列表', icon: 'dns' }
      },
      {
        path: 'ca',
        name: 'CA',
        component: () => import('@/views/table/index'),
        meta: { title: '证书列表', icon: 'ssl' }
      },
      {
        path: 'sms',
        name: 'SMS',
        component: () => import('@/views/tree/index'),
        meta: { title: '短信网关', icon: 'sms' }
      },
      {
        path: 'tree',
        name: 'os',
        component: () => import('@/views/tree/index'),
        meta: { title: '对象存储', icon: 'db' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: '中间件',
      icon: 'middleware'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'MySQL', icon: 'mysql' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' }
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'Redis', icon: 'redis' },
        children: [
          {
            path: 'menu1-2-1',
            component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
            name: 'Menu1-2-1',
            meta: { title: 'Menu1-2-1' }
          },
          {
            path: 'menu1-2-2',
            component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
            name: 'Menu1-2-2',
            meta: { title: 'Menu1-2-2' }
          }
        ]
      },
      {
        path: 'menu3',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'MongoDB', icon: 'mongodb' },
        children: [
          {
            path: 'menu1-2-1',
            component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
            name: 'Menu1-2-1',
            meta: { title: 'Menu1-2-1' }
          },
          {
            path: 'menu1-2-2',
            component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
            name: 'Menu1-2-2',
            meta: { title: 'Menu1-2-2' }
          }
        ]
      }
    ]
  },

  {
    path: '/virtualization',
    component: Layout,
    redirect: '/example/table',
    name: 'Virtualization',
    meta: { title: '虚拟化', icon: 'virtual' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '作业历史', icon: 'task' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '运维场景', icon: 'job' }
      },
      {
        path: 'cron',
        name: 'cron',
        component: () => import('@/views/tree/index'),
        meta: { title: '定时任务', icon: 'cron' }
      }
    ]
  },

  {
    path: '/container',
    component: Layout,
    redirect: '/example/table',
    name: 'Container',
    meta: { title: '容器平台', icon: 'docker' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '作业历史', icon: 'task' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '运维场景', icon: 'job' }
      },
      {
        path: 'cron',
        name: 'cron',
        component: () => import('@/views/tree/index'),
        meta: { title: '定时任务', icon: 'cron' }
      }
    ]
  },

  {
    path: '/middleware',
    component: Layout,
    redirect: '/example/table',
    name: 'Middleware',
    meta: { title: '作业中心', icon: 'coffee' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '作业历史', icon: 'task' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '运维场景', icon: 'job' }
      },
      {
        path: 'cron',
        name: 'cron',
        component: () => import('@/views/tree/index'),
        meta: { title: '定时任务', icon: 'cron' }
      }
    ]
  },

  {
    path: '/system-manage',
    component: Layout,
    redirect: '/system-manage/component',
    name: 'Example',
    meta: { title: '系统管理', icon: 'setting' },
    children: [
      {
        path: 'component',
        name: 'Component',
        component: () => import('@/views/system/component'),
        meta: { title: '组件管理', icon: 'api ' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '角色管理', icon: 'user' }
      },
      {
        path: 'rigion',
        name: 'Region',
        component: () => import('@/views/tree/index'),
        meta: { title: '分区管理', icon: 'location' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: '操作文档', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
