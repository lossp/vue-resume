<template>
    <div>
        <form @submit.prevent="signUp">
            <div class="row">
                <label>用户名</label>
                <el-input type="text" v-model="formData.username" required></el-input>
            </div>
            <div class="row">
                <label>密 码</label>
                <el-input type="password" v-model="formData.password" required></el-input>
            </div>
            <div class="actions">
                <input type="submit" value="提交">
                <span class="errorMessage">{{errorMessage}}</span>
            </div>
        </form>
    </div>
</template>

<script>
    import AV from '../lib/leancloud'
    import getErrorMessage from '../lib/getErrorMessage'
    import getAVUser from '../lib/getAVUser'
    export default{
        name: 'SignUpForm',
        data(){
            return{
                formData:{
                    username:'',
                    password:''
                },
                errorMessage:''
            }
        },
        created(){

        },
        methods:{
            signUp(){
                let{username, password} = this.formData;
                console.log(username);
                console.log(password);
                var user = new AV.User();
                user.setUsername(username);
                user.setPassword(password);
                user.signUp().then(()=>{
                    this.$emit('success', getAVUser())
                }, (error)=>{
                    this.errorMessage = getErrorMessage(error);
                });
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
            font-size: 14px;
            border-radius: 5px;
            padding: 4px;
        }
    }
</style>