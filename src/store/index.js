import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
Vue.use(Vuex)


export default new Vuex.Store({
    state:{
        count:0,
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
            state.resumeConfig.map((item) => {
                if (item.type === 'array') {
                  //state.resume[item.field] = [] // 这样写 Vue 无法监听属性变化
                  Vue.set(state.resume, item.field, [])
                } else {
                  //state.resume[item.field] = {} // 这样写 Vue 无法监听属性变化
                  Vue.set(state.resume, item.field, {})
                  item.keys.map((key) => {
                    //state.resume[item.field][key] = '' // 这样写 Vue 无法监听属性变化
                    Vue.set(state.resume[item.field], key, '')
                   })
                 }
               })
               if(payload){
                Object.assign(state, payload)
               }
        },
		switchTab(state, payload){
		    state.selected=payload
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
            localStorage.setItem('resume',JSON.stringify(state.resume))
        }
    }
})