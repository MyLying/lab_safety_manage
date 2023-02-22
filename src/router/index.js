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
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
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
    path: '/',
    component: () => import('@/views/newIndex/Home'),
    hidden: true,
    children: [{
      path: '',
      component: () => import('@/views/newIndex/HomePage')
    }, {
      path: 'news-secondindex',
      component: () => import('@/views/newIndex/second/news-secondIndex')
    }, {
      path: 'detail',
      name: 'Detail',
      component: () => import('@/views/newIndex/second/second_detail/detail-1')
    }, {
      path: 'detail-laws',
      name: 'Detail_Laws',
      component: () => import('@/views/newIndex/second/second_detail/detail-laws')
    },{
      path: 'detail-rules',
      name: 'Detail_Rules',
      component: () => import('@/views/newIndex/second/second_detail/detail-rule')
    },{
      path: 'detail-safes',
      name: 'Detail_Safes',
      component: () => import('@/views/newIndex/second/second_detail/detail-safe')
    },{
      path: 'law-secondIndex',
      component: () => import('@/views/newIndex/second/law-secondIndex')
    }, {
      path: 'rule-secondIndex',
      component: () => import('@/views/newIndex/second/rule-secondIndex')
    }, {
      path: 'safe-secondIndex',
      component: () => import('@/views/newIndex/second/safe-secondIndex')
    }, {
      name: 'PdfDownload',
      path: 'pdfDownload/:realName/:title',
      component: () => import('@/views/PdfDemo/PdfDemo')
    }, {
      path: 'test',
      component: () => import('@/views/PdfDemo/father')
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/login/register'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/newIndex/Home'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '控制台', icon: 'dashboard', affix: true }
      },
      {
        path: 'qu/view/:id',
        component: () => import('@/views/qu/qu/view'),
        name: 'ViewQu',
        meta: { title: '题目详情', noCache: true, activeMenu: '/manage/qu' },
        hidden: true
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: '个人资料', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [

  {
    path: '/exam/start/:id',
    component: () => import('@/views/paper/exam/exam'),
    name: 'StartExam',
    meta: { title: '开始考试' },
    hidden: true
  },

  {
    path: '/my',
    component: Layout,
    redirect: '/my/exam',
    name: 'Online',
    meta: {
      title: '在线考试',
      icon: 'list',
      roles: ['student', 'sa', 'teacher']
    },
    children: [

      {
        path: 'exam',
        component: () => import('@/views/paper/exam/list'),
        name: 'ExamOnline',
        meta: { title: '在线考试', noCache: true, icon: 'guide' }
      },

      {
        path: 'exam/prepare/:examId',
        component: () => import('@/views/paper/exam/preview'),
        name: 'PreExam',
        meta: { title: '准备考试', noCache: true, activeMenu: '/my/exam' },
        hidden: true
      },

      {
        path: 'exam/result/:id',
        component: () => import('@/views/paper/exam/result'),
        name: 'ShowExam',
        meta: { title: '考试结果', noCache: true, activeMenu: '/online/exam' },
        hidden: true
      },

      {
        path: 'exam/records',
        component: () => import('@/views/user/exam/my'),
        name: 'ListMyExam',
        meta: { title: '我的成绩', noCache: true, icon: 'results' }
      },

      {
        path: 'book/list/:examId',
        component: () => import('@/views/user/book'),
        name: 'BookList',
        meta: { title: '考试错题', noCache: true, activeMenu: '/my/exam/records' },
        hidden: true
      },

      {
        path: 'book/training/:examId',
        component: () => import('@/views/user/book/train'),
        name: 'BookTraining',
        meta: { title: '错题训练', noCache: true, activeMenu: '/my/exam/records' },
        hidden: true
      }

    ]
  },

  {
    path: '/exam',
    component: Layout,
    redirect: '/exam/repo',
    name: 'Manage',
    meta: {
      title: '考试管理',
      icon: 'example',
      roles: ['teacher']
    },
    children: [

      {
        path: 'repo',
        component: () => import('@/views/qu/repo'),
        name: 'ListRepo',
        meta: { title: '题库管理', noCache: true, icon: 'repo' }
      },

      {
        path: 'repo/add',
        component: () => import('@/views/qu/repo/form'),
        name: 'AddRepo',
        meta: { title: '添加题库', noCache: true, activeMenu: '/exam/repo' },
        hidden: true
      },

      {
        path: 'repo/update/:id',
        component: () => import('@/views/qu/repo/form'),
        name: 'UpdateRepo',
        meta: { title: '题库详情', noCache: true, activeMenu: '/exam/repo' },
        hidden: true
      },

      {
        path: 'qu',
        component: () => import('@/views/qu/qu'),
        name: 'ListQu',
        meta: { title: '试题管理', noCache: true, icon: 'support' }
      },

      {
        path: 'qu/add',
        component: () => import('@/views/qu/qu/form'),
        name: 'AddQu',
        meta: { title: '添加试题', noCache: true, activeMenu: '/exam/qu' },
        hidden: true
      },

      {
        path: 'qu/update/:id',
        component: () => import('@/views/qu/qu/form'),
        name: 'UpdateQu',
        meta: { title: '修改试题', noCache: true, activeMenu: '/exam/qu' },
        hidden: true
      },

      {
        path: 'exam',
        component: () => import('@/views/exam/exam'),
        name: 'ListExam',
        meta: { title: '考试管理', noCache: true, icon: 'log' }
      },

      {
        path: 'exam/add',
        component: () => import('@/views/exam/exam/form'),
        name: 'AddExam',
        meta: { title: '添加考试', noCache: true, activeMenu: '/exam/exam' },
        hidden: true
      },

      {
        path: 'exam/update/:id',
        component: () => import('@/views/exam/exam/form'),
        name: 'UpdateExam',
        meta: { title: '修改考试', noCache: true, activeMenu: '/exam/exam' },
        hidden: true
      },
      {
        path: 'exam/users/:examId',
        component: () => import('@/views/user/exam'),
        name: 'ListExamUser',
        meta: { title: '考试人员', noCache: true, activeMenu: '/exam/exam' },
        hidden: true
      },
      {
        path: 'exam/paper/:examId',
        component: () => import('@/views/paper/paper'),
        name: 'ListPaper',
        meta: { title: '考试记录', noCache: true, activeMenu: '/exam/exam' },
        hidden: true
      }
    ]
  },

  {
    path: '/sys',
    component: Layout,
    redirect: '/sys/config',
    name: 'Sys',
    meta: {
      title: '系统设置',
      icon: 'configure',
      roles: ['sa']
    },
    children: [
      {
        path: 'config',
        component: () => import('@/views/sys/config'),
        name: 'SysConfig',
        meta: { title: '系统配置', icon: 'theme' }
      },

      {
        path: 'depart',
        component: () => import('@/views/sys/depart'),
        name: 'SysDepart',
        meta: { title: '部门管理', icon: 'tree' }
      },

      {
        path: 'role',
        component: () => import('@/views/sys/role'),
        name: 'SysRole',
        meta: { title: '角色管理', icon: 'role' }
      },

      {
        path: 'user',
        component: () => import('@/views/sys/user'),
        name: 'SysUser',
        meta: { title: '用户管理', icon: 'admin' }
      }
    ]
  },
  {
    path: '/File',
    component: Layout,
    redirect: '/File/Notice',
    name: 'File',
    meta: { title: '文件管理', icon: 'admin', roles: ['sa'] },
    children: [
      {
        path: 'Notice',
        component: () => import('@/views/file/Notice'),
        name: 'Notice',
        meta: { title: '通知公告管理', icon: 'theme' }
      },

      {
        path: 'Rules',
        component: () => import('@/views/file/Rules'),
        name: 'Rules',
        meta: { title: '规章制度管理', icon: 'tree' }
      },

      {
        path: 'Laws',
        component: () => import('@/views/file/Laws'),
        name: 'Laws',
        meta: { title: '法律法规管理', icon: 'role' }
      },

      {
        path: 'Knowledge',
        component: () => import('@/views/file/Knowledge'),
        name: 'Knowledge',
        meta: { title: '安全知识管理', icon: 'admin' }
      },
      // 富文本编辑器
      {
        path: 'Editor',
        component: () => import('@/views/editor/quillEditor'),
        name: 'Editor',
        meta: { title: '富文本编辑器' },
        hidden: true
      },
      {
        path: '/File/EditorLaws',
        component: () => import('@/views/editor/quillEditor_law'),
        name: 'Editor_Laws',
        meta: { title: '富文本编辑器' },
        hidden: true
      },
      {
        path: '/File/EditorRules',
        component: () => import('@/views/editor/quillEditor_rule'),
        name: 'Editor_Rules',
        meta: { title: '富文本编辑器' },
        hidden: true
      },
      {
        path: '/File/EditorSafes',
        component: () => import('@/views/editor/quillEditor_safe'),
        name: 'Editor_Safes',
        meta: { title: '富文本编辑器' },
        hidden: true
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/dashboard', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
