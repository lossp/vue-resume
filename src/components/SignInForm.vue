<template>
    <div>
        <form @submit.prevent="signIn">
            <div class="row">
                <label>用户</label>
                <el-input type="text" required v-model="formData.username"></el-input>
            </div>
            <div class="row">
                <label>密码</label>
                <el-input type="text" required v-model="formData.password"></el-input>
            </div>
            <div class="actions">
                <input type="submit" value="提交">
                <span>{{errorMessage}}</span>
            </div>
        </form>
    </div>
</template>

<script>
    import AV from '../lib/leancloud'
    import getErrorMessage from '../lib/getErrorMessage'
    import getAVUser from '../lib/getAVUser'

    export default{
        name: 'signInForm',
        data(){
            return{
                formData:{
                    username:'',
                    password:''
                },
                errorMessage:''
            }
        },
        methods:{
            signIn(){
                let{username, password} = this.formData
                AV.User.logIn(username,password).then(()=>{
                    this.$emit('success', getAVUser())
                }, (error)=>{
                    this.errorMessage = getErrorMessage(error)
                })
            }
        }
    }
</script>

<style lang="scss">
    .row{
        margin: 16px 8px 16px 8px;
    }
    .actions{
        input{
            border-radius: 5px;
            padding: 4px;
        }
    }
</style>