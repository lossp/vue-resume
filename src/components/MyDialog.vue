<template>
    <div class="wrapper" v-show="visible">
        <div class="dialog">
            <header>
                {{title}}
                <span class="close" @click="close">X</span>
            </header>
            <main>
                <slot>asdasd
                zxcxc
                xzczx
                classzx
                classzxxzc
                zc</slot>
            </main>
        </div>
    </div>
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