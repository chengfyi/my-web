<template>
    <ContentField>
        <table class="table table-striped table-hover" style="text-align:center;">
            <thead>
                <tr>
                    <th>订单</th>
                    <th>价格</th>
                    <th>创建时间</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td>
                        <img :src="order.photo" alt="" class="order-photo">
                        &nbsp;
                        <span class="order-name"> {{ order.name }} </span>
                    </td>
                    <td> {{ order.price }} </td>
                    <td> {{ order.create_time }} </td>
                </tr>
            </tbody>
        </table>
        <nav aria-label="..." style="float: right">
            <ul class="pagination">
                <li class="page-item" @click="click_page(-2)">
                    <a class="page-link">Previous</a>
                </li>
                <li :class="'page-item ' + page.is_active" v-for="page in pages" :key="page.number" @click="click_page(page.number)">
                    <a class="page-link" href="#">{{ page.number }}</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" @click="click_page(-1)">Next</a>
                </li>
            </ul>
        </nav>
    </ContentField>
</template>



<script>
import ContentField from '@/components/ContentField.vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import $ from 'jquery'

export default {
    components: {
        ContentField
    },
    setup() {
        const store = useStore()
        let orders = ref([])
        let current_page = 1
        let total_orders = 0
        let pages = ref([])

        const click_page = page => {
            if (page === -2) page = current_page - 1
            else if (page === -1) page = current_page + 1
            let max_paegs = parseInt(Math.ceil(total_orders / 10))
            if (page >= 1 && page <= max_paegs) {
                pull_page(page)
            }
        }

        const update_pages = () => {
            let max_paegs = parseInt(Math.ceil(total_orders / 10))
            let new_pages = []
            for (let i = current_page - 2; i <= current_page + 2; i ++ ) {
                if (i >= 1 && i <= max_paegs) {
                    new_pages.push({
                        number: i,
                        is_active: i === current_page ? "active" : "",
                    })
                }
            }
            pages.value = new_pages
        }

        const pull_page = page => {
            current_page = page
            $.ajax({
                url: "http://127.0.0.1:8888",
                type: "get",
                data: {
                    page,
                },
                headers: {
                    Authorization: "Bearer " + store.state.user.token
                },
                success(resp) {
                    orders.value = resp.orders
                    total_orders.value = resp.total_orders 
                    update_pages()
                },
                error(resp) {
                    console.log(resp)
                }
            })
        }

        pull_page(current_page)

        return {
            orders,
            pages,
            click_page
        }
    }
}
</script>

<style scoped>
div.error_message{
    color: red;
}
</style>