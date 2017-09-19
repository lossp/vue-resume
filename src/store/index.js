import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
import AV from '../lib/leancloud'
import getAVUser from '../lib/getAVUser'
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
        },
        setUser(state, payload){
            Object.assign(state.user, payload)
            console.log(state.user)
        },
        removeUser(state){
            state.user.id = ''
        },
        updateResume(state,{path, value}){
            //用来更新preview页面上的数据
            // state.resume[field][subfield] = value
            objectPath.set(state.resume, path, value)
        },
        setResumeId(state, {id}){
            state.resume.id = id
        }
    }
    // actions:{
    //     saveResume({state, commit}, payload){
    //         var Resume = AV.Object.extend('Resume')
    //         if (state.resume.id) {

    //         } else {
    //         var resume = new Resume()
    //         resume.set('profile', state.resume.profile)
    //         resume.set('works', state.resume.workHistory)
    //         resume.set('education', state.resume.education)
    //         resume.set('projects', state.resume.projects)
    //         resume.set('contacts', state.resume.contacts)
    //         resume.set('owner_id', getAVUser().id)
    //         var acl = new AV.ACL()
    //         acl.setReadAccess(AV.User.current(),true)
    //         acl.setWriteAccess(AV.User.current(), true)
    //         resume.setACL(acl)
    //         resume.save().then(function (response) {
    //             console.log()
    //             commit('setResumeId', { id: response.id })
    //         }).catch(function (error) {
    //             console.log(error)
    //         })
    //         }
    //     }
    // }
})