<template>
    <div class="result-board">
        <div class="result-bot-text" v-if="$store.state.result.status === '200'">
            成功！
        </div>
        <div class="result-bot-text" v-else>
            {{ message }}
        </div>
        <div class="result-bot-btn">
            <button type="button" class="btn btn-light btn-lg" @click="close">好的！</button>
        </div>
    </div>
</template>


<script>
//import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
    name: 'ResultBoard',
    setup() {
        //const store = useStore()
        let msg = ref('')
        // const JSON data = JSON.parse(.data)

        // store.commit('updateCode', {
            
        //     code: ,
        //     message: ,
        // })

        const close = () => {

        }

        return {
            close,
            msg
        }
    }
}
</script>


<style scoped>
div.result-board {
    background-color: rgba(50, 50, 50, 0.5);
    height: 30vh;
    width: 30vw;
    position: absolute;
    top: 30vh;
    left: 35vw;
}
div.result-bot-text {
    text-align: center;
    color: white;
    font-size: 50px;
    font-weight: 600;
    font-style: italic;

}
div.result-bot-btn {
    text-align: center;
    padding-top: 7vh;
}
</style>