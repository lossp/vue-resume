<template>
    <div id="topbar">
        <div class="logo">
            Resume
        </div>
        <div class="actions">
            <el-button type="primary" v-on:click='signUpDialogVisible = true'>注册</el-button>
            <Dia title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
            </Dia>
            <el-button>登陆</el-button>
            <el-button v-on:click='preview'>预览</el-button>
        </div>
    </div>
</template>
<script>
    import Dia from './MyDialog'
    export default{
        data(){
            return{
                signUpDialogVisible: false
            }
        },
        methods:{
            preview(){
                console.log(1)
                this.$emit('preview')
            },
            PopDialog(){
                signUpDialogVisible = true
            }
        },
        components:{
            Dia
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