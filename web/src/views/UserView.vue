<template>
    <ContentField>
        <UserInfo />
    </ContentField>
</template>



<script>
import ContentField from '@/components/ContentField.vue'
import UserInfo from '@/components/UserInfo.vue'

export default {
    name: 'NotFoundView',
    components: {
        ContentField,
        UserInfo
    }
}
</script>



<style scoped>
</style>