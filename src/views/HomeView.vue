<script setup>
import SideBar from '@/components/sideBar.vue';
import Header from '@/components/header.vue';

</script>

<template>
  <div class="container-fluid home g-0">
    <div class="row g-0">
      <div class="col-2">
        <SideBar></SideBar>
      </div>
      <div class="col-10 ">
        <Header></Header>
        <router-view />
      </div>
    </div>

  </div>
</template>

<style lang="scss">
.home {
  height: 100vh;
}
</style>