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
            </div>
            <div v-else class="userActions">
                <el-button v-on:click="signInDialogVisible = true">登陆</el-button>
                <el-button type="primary" v-on:click="signUpDialogVisible = true">注册</el-button>
                <Dia title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
                    <SignUpForm @succeess="signIn($event)" />
                </Dia>
                <Dia title="登陆" :visible="signInDialogVisible" @close="signInDialogVisible=false">
                    <SignInForm @success="signIn($event)"></SignInForm>
                </Dia>
                <el-button v-on:click='preview'>预览</el-button>
            </div>
        </div>
    </div>
</template>


<script>
    import Dia from './MyDialog'
    import SignUpForm from './SignUpForm'
    import SignInForm from './SignInForm'
    import AV from '../lib/leancloud'
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
                return this.user.id
            }
        },
        components:{Dia, SignInForm, SignUpForm},
        methods:{
            preview(){
                console.log(1)
                this.$emit('preview')
            },
            PopDialog(){
                signUpDialogVisible = true
            },
            signIn(user){
                this.signUpDialogVisible = false
                this.$store.commit('setUser', user)
            },
            signOut(){
                AV.User.logOut()
                this.$store.commit('removeUser')
            }
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