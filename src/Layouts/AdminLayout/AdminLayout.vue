<template>
    <div class="app">
      
      <div class="d-block w-100">
        <AppHeader />
 
        <router-view />
      </div>
    </div>
  </template>
  <script setup>
  import SideBarAdmin from "../../components/SideBarAdmin/SideBarAdmin.vue";
  import AppHeader from "../../components/AppHeader/AdminHeader.vue";
  </script>