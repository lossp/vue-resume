import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        selected: 'profile',
        user:{
            id:'',
            username:''
        },
        resume:{
            config:[
                {field: 'profile', icon:'jibenxinxi'},
                {field: 'works', icon:'gongzuojingli'},
                {field: 'education', icon:'huojiangjingli17'},
                {field: 'projects', icon:'health'},
                {field: 'contacts', icon:'lianxifangshi'}
            ],
            profile:{name:'Richard',city:'ChongQing',birth:'2012'},
            works:{company: 'Google', content: 'none'},
            education:{school: 'CQU', major: 'CE', degree: 'underdegree', awards: 'none'},
            projects:{project: 'note', content: 'nodejs'},
            contacts:{qqnumber:'292829',weixin:'----',number:'----',email:'----'}
          }
    },
    mutations:{
        initState(state, payload){
            Object.assign(state, payload)
        },
		switchTab(state, payload){
            state.selected=payload
            localStorage.setItem('state', JSON.stringify(state))
        },
        setUser(state, payload){
                Object.assign(state, payload)
        },
        removeUser(state){
            state.user.id = ''
        },
        updateResume(state,{path, value}){
            // state.resume[field][subfield] = value
            
            objectPath.set(state.resume, path, value)
            localStorage.setItem('state',JSON.stringify(state))
            console.log(state.resume)
            console.log('updated')
        }
    }
})