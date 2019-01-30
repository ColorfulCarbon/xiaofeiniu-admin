import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //公共数据读取方法：this.$store.state.adminName
  //公共数据读取方法：this.$store.state.globalSettings
  state: {
    //当前数据的状态，类似于组件对象的data属性
    adminName:'',//当前登录的管理员名
    globalSettings:{//项目的全局设置信息
      apiUrl:'http://127.0.0.1:8090' //初始的默认值
    }
  },
  //公共数据读取方法：this.$store.commit('setAdminName','boss')boss就是value 
  //公共数据读取方法：this.$store.commit('setGlobalSettings',{...})
  mutations: {
    //控制数据的进化（修改state），类似于组件对象中的methods--用mutations修改数据可以保证数据的‘响应式’
    setAdminName(state,value){
      state.adminName=value;//修改adminName
    },
    setGlobalSettings(state,value){
      state.globalSettings=value;
    }
  }

})
