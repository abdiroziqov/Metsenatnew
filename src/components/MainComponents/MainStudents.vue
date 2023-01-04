<template>
  <div class="container">
    <div class="flex justify-end cursor-pointer">
      <router-link to="/add/student">
        <BButton class="my-7 flex gap-2.5 items-center">
          <img src="@/assets/icon/plus.png" alt="icon">
          Add student
        </BButton>
      </router-link>
    </div>
    <StudentsTable/>
  </div>


</template>

<script setup>
import StudentsTable from '@/components/StudentsTable.vue';
import BButton from "@/components/UI/BButton.vue"
</script>