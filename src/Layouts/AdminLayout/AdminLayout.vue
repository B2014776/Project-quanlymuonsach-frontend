<template>
    <div class="app">
      
      <div class="d-block w-100">
        <AppHeader />
 
        <router-view />
      </div>
    </div>
  </template>
  <script setup>

  import AppHeader from "../../components/AppHeader/AdminHeader.vue";
  </script>