<template>
    <div class="app">

      <div class="d-block w-100">
        <AppHeader />
      
        <router-view />
      </div>
    </div>
  </template>
  <script setup>
  import AuthHeader from "../../components/AuthHeader/AuthHeader.vue";
  import AppHeader from "../../components/AppHeader/Header.vue";
  </script>