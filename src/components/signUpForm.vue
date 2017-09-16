<template>
    <div>
        <form @submit.prevent="signup">
            <div class="row">
                <label>用户名</label>
                <input type="text" v-model="formData.username">
            </div>
            <div class="row">
                <label>密码</label>
                <input type="text" v-model="formData.password">
            </div>
            <div class="actions">
                <input type="submit" value="提交">
            </div>
        </form>
    </div>
</template>