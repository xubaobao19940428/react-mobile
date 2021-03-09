import AsyncComponent from '@/components/asyncComponent';
const OnePage = [
  {
    path: '/login', //登录
    component: AsyncComponent(() => import('@/views/login')),
  },
  {
    path: '/test',
    component: AsyncComponent(() => import('@/views/test')),
  },
];
export default OnePage;
