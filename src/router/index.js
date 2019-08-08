import Vue from 'vue'
import App from '../App'
import Router from 'vue-router'
import Home from '@/components/Home'
import SelectPostion from '@/components/SelectPostion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        //地址为空时跳转home页面
        {
          path: '',
          redirect: '/home'
        },
        //首页城市列表页
        {
          path: '/home',
          component: Home
        },
        //选择地址
        {
          path: '/app/selectPostion',
          component: SelectPostion,
        }
      ]
    }
  ]
})
