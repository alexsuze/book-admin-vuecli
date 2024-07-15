<script setup>
import menu from '@/assets/json/menu.json';
const store = useStore();
const router = useRouter();
const menuData = reactive({
    'data': {}
})

const init = () => {
    const data = {};
    // store.dispatch('Sidebar/init').then((res) => {
    // menuData.data = store.getters['Sidebar/menuData'];
    // })
    menuData.data = menu.data;
}

const goView = (link) => {
    router.push({ path: link });
}
onMounted(() => {
    init();
})
</script>

<template>
    <div class="side_bar container-fluid">
        <div class="row">
            <div class="menu mt-3 mb-3 col-12" v-for="(list, index) in menuData.data.menu" :key="list.id"
                @click="goView(list.url)">
                <!-- <img src="@/assets/images/" alt=""> -->
                {{ list.name }}
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.side_bar {
    width: 100%;
    height: 100vh;
    background-color: #3A81E4;
    font-size: 28px;
    color: #FFFFFF;
    padding-top: 100px;
}

.menu {
    cursor: pointer;

    &:hover {
        color: #6b9bde;
    }

    img {
        width: 30px;
        height: 30px;
    }
}
</style>