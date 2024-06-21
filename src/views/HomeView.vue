<script setup>
import SideBar from '@/components/sideBar.vue';
</script>

<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-3 sidebar">
        <SideBar></SideBar>
      </div>
      <div class="col-9 "><router-view /></div>
    </div>

  </div>
</template>

<style lang="scss">
.sidebar {
  border: 1px solid red;
}
</style>