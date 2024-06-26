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
        <div class="mt-3 mb-3" style="cursor: pointer;" v-for="list in menuData.data.menu" :key="list.id"
            @click="goView(list.url)">{{ list.name
            }}</div>
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
</style>