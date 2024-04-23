<template>
    <div class="app">
     
      <div class="d-block w-100">
        <AppHeader />
        <div class="scrollable"><router-view /></div>
      </div>
    </div>
</template>

<script setup>
  import AppHeader from "../../components/AppHeader/Header.vue";
</script>

<style scoped>
  .scrollable {
    overflow-y: auto;
    max-height: calc(100vh - 72px);
  }
</style>