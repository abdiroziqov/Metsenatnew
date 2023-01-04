<template>
  <TheNavbar/>
  <div>
    <Dashboard />
    <router-view />
  </div>
</template>

<script setup>
import Dashboard from "@/components/DashBoard.vue";
import  TheNavbar from "@/components/TheNavbar.vue"
</script>

<style></style>
