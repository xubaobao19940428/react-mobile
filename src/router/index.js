import AsyncComponent from '@/components/asyncComponent'
// import OnePage from './onePage'


const Layout = AsyncComponent(() => import('@/views/layout'))

/**
 * @AsyncComponent 懒加载组件
 * @exact 绝对匹配，这个在里面父组件一定不要加上,不然后面的子路由根本就匹配不到
 * @path 路径
 * @component 组件名称
 */
const Routers = [
    {
    path: '/login', //登录
    component: AsyncComponent(() => import('@/views/login')),
    },
    {
      path: '/test', //登录
      component: AsyncComponent(() => import('@/views/test')),
      },
  {
    path: '/',
    component: Layout,
    children: [{
        path: '/',
        component: AsyncComponent(() => import('@/views/dashboard')),
        exact: true,
      },
      {
        path: '/home',
        component: AsyncComponent(() => import('@/views/home')),
      },
      {
        path: '/cart',
        component: AsyncComponent(() => import('@/views/cart')),
      },
      {
        path: '/my',
        component: AsyncComponent(() => import('@/views/self')),
      },
    ]
  },

]

export default Routers
