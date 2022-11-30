<template>
    <ContentField>
        <div class="row justify-content-md-center">
            <div class="col-3">
                <form @submit.prevent="register">
                    <div class="mb-3">
                        <label for="account" class="form-label">用户名</label>
                        <input v-model="account" type="text" class="form-control" id="account" placeholder="请输入用户名">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">电话</label>
                        <input v-model="phone" type="text" class="form-control" id="phone" placeholder="请输入手机号">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">密码</label>
                        <input v-model="password" type="password" class="form-control" id="password" placeholder="请输入密码">
                    </div>
                    <div class="mb-3">
                        <label for="confirmedPassword" class="form-label">确认密码</label>
                        <input v-model="confirmedPassword" type="password" class="form-control" id="confirmedPassword" placeholder="请再次输入密码">
                    </div>
                    <div class="mb-3">
                        <label for="nickName" class="form-label">姓名</label>
                        <input v-model="nickName" type="text" class="form-control" id="nickName" placeholder="请输入姓名">
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">地址</label>
                        <input v-model="address" type="text" class="form-control" id="address" placeholder="请输入地址">
                    </div>
                    <div class="msg">{{ msg }}</div>
                    <button type="submit" class="btn btn-primary">提交</button>
                </form>
            </div>
        </div>
    </ContentField>
</template>

<script>
import ContentField from '@/components/ContentField.vue'
import { ref } from 'vue'
import router from '../router/index'
import $ from 'jquery'

export default{
    components: {
        ContentField
    },
    setup() {
        let account = ref('')
        let phone = ref('')
        let password = ref('')
        let confirmedPassword = ref('')
        let nickName = ref('')
        let address = ref('')
        let msg = ref('')

        const register = () => {
            $.ajax({
                url: "http://127.0.0.1:8888/eshop/register",
                type: "post",
                contentType: 'application/json',
                data: JSON.stringify({
                    account: account.value,
                    phone: phone.value,
                    password: password.value,
                    confirmedPassword: confirmedPassword.value,
                    nickName: nickName.value,
                    address: address.value
                }),
                success(resp) {
                    console.log(resp);
                    if (resp.msg === "success") {
                        router.push({name: 'login'})
                    }
                    else {
                        msg.value = resp.msg
                    }
                },
                // error(resp) {
                //     console.log(resp);
                // }
            })
        }
        
        return {
            account,
            phone,
            password,
            msg,
            confirmedPassword,
            nickName,
            address,
            register
        }
    }
}
</script>


<style scoped>
button {
    width: 100%
}
div.msg {
    color: red;
}
    
</style>