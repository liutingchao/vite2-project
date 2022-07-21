const system ={
  path: '/system',
  name: 'system',
  children:[
    {
      path: 'setting',
      name: 'setting',
      component: () => import('@/views/system/setting.vue'),
      meta:{
        title:"系统设置"
      }
    },
    {
      path: 'dictionary',
      name: '字典管理',
      component: () => import('@/views/system/dictionary.vue'),
      meta:{
        title:"角色管理"
      }
    },
  ],
  meta:{
    title:"系统管理",
    icon:'setting'
  },
  redirect:'system/setting'
};

export default system;