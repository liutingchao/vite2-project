const permission = {
  path: '/permission',
  name: 'permission',
  children:[
    {
      path: 'user',
      name: 'user',
      component: () => import('@/views/permission/user.vue'),
      meta:{
        title:"用户管理"
      }
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/permission/role.vue'),
      meta:{
        title:"角色管理"
      }
    },
  ],
  meta:{
    title:"权限管理",
    icon:'user'
  },
  redirect:'permission/user'
};
export default permission;