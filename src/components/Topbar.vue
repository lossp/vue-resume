<template>
    <div id="topbar">
        <div class="logo">
            Resume
        </div>
        <div class="actions">
            <el-button type="primary">注册</el-button>
            <el-button>登陆</el-button>
        </div>
    </div>
</template>


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