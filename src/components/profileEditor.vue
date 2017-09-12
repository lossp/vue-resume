<template>
    <div>
        <h2>{{title}}</h2>
        <el-form>
            <div class='container' v-for="(information, index) in informations" v-bind:key="index">
                <el-form-item v-for="key in keys" v-bind:label="labels[key]||key" v-bind:key="index">
                    <el-input v-model="informations[key]"></el-input>
                </el-form-item>
            </div>
        </el-form>
    </div>


</template>

<script>
export default{
    props: ['informations', 'title', 'labels'],
    computed:{
        keys(){
            return Object.keys(this.informations[0])
        }
    }
}
</script>