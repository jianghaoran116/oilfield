import HompageLayout from '../layouts/HompageLayout';
import BaseLayout from '../layouts/BaseLayout';

export default [
  {
    path: '/homepage/',
    component: HompageLayout,
    children: [
      {
        path: 'guide/',
        name: '指南',
        component: () => import(/* webpackChunkName: "homepage.guide" */ '../views/guide/index.vue'),
        children: [
          {
            path: 'introduce',
            name: '介绍',
            component: () => import(/* webpackChunkName: "homepage.guide" */ '../pages/guide/introduce.vue'),
          },
          {
            path: 'designpr',
            name: '设计原则',
            component: () => import(/* webpackChunkName: "homepage.guide" */ '../pages/guide/design-principles.vue'),
          }
        ]
      },
      {
        path: 'theme',
        name: '主题',
        component: () => import(/* webpackChunkName: "homepage.theme" */ '../views/theme/index.vue'),
      },
      // {
      //   path: 'component',
      //   name: '组件',
      //   component: () => import(/* webpackChunkName: "homepage.component" */ '../views/component/index.vue'),
      // },
      {
        path: 'resource',
        name: '设计资源',
        component: () => import(/* webpackChunkName: "homepage.resource" */ '../views/resource/index.vue'),
      },
      { path: '', redirect: 'guide' },
    ],
  },
  { path: '/*', redirect: '/homepage' },
];
