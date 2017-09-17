import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        count:0,
        user:{
            id:'',
            username:''
        }
    },
    mutations:{
		switchTab(state, payload){
		    state.selected=payload
        },
        setUser(state, payload){
            Object.assign(state.user, payload)
            console.log(state.user)
        },
        removeUser(state){
            state.user.id = null
        }
    }
})