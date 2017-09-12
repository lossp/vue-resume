<template>
    <div>
        <h2>联系方式</h2>
        <el-form>
            <el-form-item label="QQ">
                <el-input v-model="contacts.qqnumber"></el-input>
            </el-form-item>
            <el-form-item label="微信">
                <el-input v-model="contacts.weixin"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="contacts.number"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱">
                <el-input v-model="contacts.email"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default{
    props: ['contacts']
}
</script>