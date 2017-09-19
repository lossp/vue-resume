<template>
<transition name="el-zoom-in-center">
    <div class="wrapper" v-show="visible" >
        <div class="dialog">
            <header>
                {{title}}
                <span class="close" @click="close">X</span>
            </header>
            <main>
                <slot></slot>
            </main>
        </div>
    </div>
</transition name="el-zoom-in-center">
</template>

<script>
    export default{
        name:'MyDialog',
        props:['title', 'visible'],
        methods:{
            close(){
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss">
    .wrapper{
        background: rgba(0, 0, 0, 0.35);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right:0;
        margin:0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        >.dialog{
            padding: 16px;
            background: rgba(117, 117, 117, 1);
            border-radius: 8px;
            color: #ffffff;
            >header{
                font-size: 24px;
                margin-bottom: 24px;
            }
            .close{
                float: right;
            }
        }
    }
</style>