<script setup>
import SideBar from '@/components/sideBar.vue';
import Header from '@/components/header.vue';

const titleName = ref('');
const refresh = ref(0)

const getTitle = (val) => {
  refresh.value++;
  titleName.value = val;
}

onMounted(() => {

})
</script>

<template>
  <div class="container-fluid home g-0">
    <div class="row g-0">
      <div class="col-2">
        <SideBar></SideBar>
      </div>
      <div class="col-10 ">
        <Header :key="refresh" :title="titleName"></Header>
        <router-view @titleName="getTitle" />
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.home {
  height: 100vh;
}

Header {
  z-index: 99;
}
</style>