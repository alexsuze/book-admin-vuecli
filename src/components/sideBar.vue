<script setup>
import menu from '@/assets/json/menu.json';
const menuData = reactive({
    'data': {}
})

const init = () => {
    menuData.data = menu.data;
}
onMounted(() => {
    init();
})
</script>

<template>
    <div class="side_bar container-fluid">
        <div v-for="list in menuData.data.menu" :key="list.id">{{ list.name }}</div>
    </div>
</template>

<style scoped lang="scss">
.side_bar {
    width: 100%;
    height: 100vh;
    background-color: #3A81E4;
    font-size: 28px;
    color: #FFFFFF;
}
</style>