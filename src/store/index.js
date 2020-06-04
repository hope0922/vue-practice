import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        userInfo:'2212121',
        postionStr:'获取失败',
        loading:false
    },
    actions,
    mutations
})

export default store;