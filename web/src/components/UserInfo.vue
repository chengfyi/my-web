<template>
    <div class="row">
        <div class="col-3"> 
            <img class="img-fluid" src="https://ts1.cn.mm.bing.net/th?id=OIP-C.zvzWxoU56fl5wrE6X-l3NgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2">
        </div>
        <div class="col-9">
            个人信息
            <div></div>
        </div>
    </div>
    <!-- <button @click="updatephoto" type="button" class="btn btn-primary btn-sm">修改头像</button> -->
</template>
    
<script>
import { computed } from 'vue'

export default {
    name: 'ProfileInfo',
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props, context) {
        let fullName = computed(() => props.user.firstName + props.user.lastName);

        const updatephoto = () => {

        };

        const follow = () => {
            context.emit('follow');
        };

        const unfollow = () => {
            context.emit('unfollow');
        };

        return {
            fullName,
            follow,
            unfollow,
            updatephoto,
        }
    }
}
</script>

<style scoped>
img {

    border-radius: 50%;
}
button{
    padding: 2px 4px;
    font-size: 12px;
}
</style>