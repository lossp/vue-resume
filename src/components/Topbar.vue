<template>
    <div id="topbar">
        <div class="logo">
            Resume
        </div>
        <div class="actions">


            <div v-if="logined" class="userActions">
                <span>Hello! {{user.username}}</span>
                <el-button @click="signOut">登出</el-button>
                <el-button v-on:click='preview'>预览</el-button>
                <el-button v-on:click='saveResumeOrUpdateResume'>保存</el-button>
            </div>
            <div v-else class="userActions">
                <el-button v-on:click="signInDialogVisible = true">登陆</el-button>
                <el-button type="primary" v-on:click="signUpDialogVisible = true">注册</el-button>
            </div>
            
        </div>
            <Dia title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
                <SignUpForm @success="signIn($event)" />
            </Dia>
            <Dia title="登陆" :visible="signInDialogVisible" @close="signInDialogVisible=false">
                <SignInForm @success="signIn($event)"></SignInForm>
            </Dia>
    </div>
</template>


<script>
    import Dia from './MyDialog'
    import SignUpForm from './SignUpForm'
    import SignInForm from './SignInForm'
    import AV from '../lib/leancloud'
    import getAVUser from '../lib/getAVUser'
    export default{
        data(){
            return{
                signUpDialogVisible: false,
                signInDialogVisible: false
            }
        },
        computed:{
            user(){
                return this.$store.state.user
            },
            logined(){
                return this.$store.state.user.id
            }
        },
        components:{Dia, SignInForm, SignUpForm},
        methods:{
            preview(){
                this.$emit('preview')
            },
            PopDialog(){
                signUpDialogVisible = true
            },
            signIn(user){
                this.signUpDialogVisible = false
                this.signInDialogVisible = false
                this.$store.commit('setUser', user)
                this.fetchResume();
            },
            signOut(){
                AV.User.logOut()
                this.$store.commit('removeUser')
                window.location.reload()
            },
            saveResumeOrUpdateResume(){
                if (this.$store.state.resume.id) {
                    this.updateResume()
                    console.log(this.$store.state.resume)
                } else {
                    this.saveResume()
                }
                    
            },

            saveResume(){
                let dataString = JSON.stringify(this.$store.state.resume)
                var ResumeData = AV.Object.extend('ResumeData')
                var resumedata = new ResumeData()
                var acl = new AV.ACL()
                acl.setReadAccess(AV.User.current(), true)
                acl.setWriteAccess(AV.User.current(), true)
                resumedata.set('content', dataString)
                resumedata.setACL(acl)
                resumedata.save().then((resume)=>{
                    this.$store.state.resume.id = resume.id
                    console.log(this.$store.state.resume.id)
                    console.log('lean保存成功')
                },(error)=>{
                    console.log('lean保存失败')
                })
                console.log(this.$store.state.resume)
            },
            updateResume(){
                //用来上传到服务器上
                let dataString = JSON.stringify(this.$store.state.resume)
                console.log(this.$store.state.resume)
                let avResume = AV.Object.createWithoutData('ResumeData', this.$store.state.resume.id)
                avResume.set('content',dataString) 
                avResume.save().then(()=>{
                    console.log('lean更新成功')
                })
            },
            fetchResume(){
                if (this.$store.state.user) {
                    var query = new AV.Query('ResumeData')
                    query.find()
                        .then((resume) => {
                            let avResume = resume[0]
                            console.log(avResume)
                            let id = avResume.id
                            this.$store.state.resume = JSON.parse(avResume.attributes.content)
                            this.$store.state.resume.id = id
                            console.log('fetching')
                            this.$emit('update:resume', this.resumeContent)
                        }, function(error) {
                            console.error(error)
                        })
                }
            }
        },
        created(){
            console.log(12)
            this.$store.commit('setUser',getAVUser())
            this.fetchResume()
            console.log(this.$store.state.resume.id)
            console.log(99)
        }
    }
</script>

<style>
    #topbar{
        height: 80px;
        display:flex;
        flex-direction: colmun;
        padding: 24px;
        font-size: 20px;
        align-itmes: center;
    }
    #topbar>.logo{
        flex:1;
    }
</style>