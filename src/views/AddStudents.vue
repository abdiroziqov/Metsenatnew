<template>
  <Navbar/>
  <div class="bg-white py-7"> 
  <router-link to="/students" class="font-['sfpro'] font-bold text-2xl text-[28293D] flex  gap-4 items-center container hover:opacity-60 duration-200">
    <div><img src="@/assets/icon/arrow-left.png" alt="icon"></div>
    Add student
  </router-link>
</div>
<Form/>
</template>

<script setup>
import Navbar from "@/components/TheNavbar.vue"
import Form from "@/components/AddstudentForm.vue"
</script>

<style>

</style>9