<template>
    <!-- <ContentField v-if="!$store.state.user.pulling_info"> -->
    <ContentField> 
        <div class="row justify-content-md-center">
            <div class="col-3">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="account" class="form-label">用户名</label>
                        <input v-model="account" type="text" class="form-control" id="account" placeholder="请输入用户名">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">密码</label>
                        <input v-model="password" type="password" class="form-control" id="password" placeholder="请输入密码">
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
import { useStore } from 'vuex'
import router from '../router/index'

export default{
    components: {
        ContentField
    },
    setup() {
        const store = useStore()
        let account = ref('')
        let password = ref('')
        let msg = ref('')
        // const jwt_token = localStorage.getItem("jwt_token")
        // if (jwt_token) {
        //     store.commit("updateToken", jwt_token)
        //     store.dispatch("getinfo", {
        //         success() {
        //             router.push({name: 'home'})
        //             store.commit("updatePullingInfo", false)
        //         },
        //         error() {
        //             store.commit("updatePullingInfo", false)
        //         }
        //     })
        // }
        // else {
        //     store.commit("updatePullingInfo", false)
        // }

        const login = () => {
            console.log(account.value, password.value);
            store.dispatch("login", {
                account: account.value,
                password: password.value,
                success() {
                    router.push({name: 'home'})
                    // store.dispatch("getinfo", {
                    //     success() {
                    //         router.push({name: 'home'})
                    //     }
                    // })
                },
                error() {
                    msg.value = "用户名或密码错误"
                }
            })
        }

        return {
            account,
            password,
            msg,
            login,
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