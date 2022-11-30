<template>
    <ContentField>
        <ResultBoard v-if="$store.state.result.code != '-1'"/>
        首页
    </ContentField>
</template>



<script>
import ContentField from '@/components/ContentField.vue'
import ResultBoard from '@/components/ResultBoard.vue'
import { useStore } from 'vuex'

export default {
    name: 'HomeView',
    components: {
        ContentField,
        ResultBoard,
    },
    setup() {
        const store = useStore()
        store

    }
}
</script>



<style scoped>
</style>