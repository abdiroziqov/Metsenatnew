<template>
  <section class="bg-white">
    <div class="container">
      <AppNavbar />
    </div>
    <div class="flex">
      <div
        class="min-h-screen w-[55%] bg-white flex justify-center pr-[100px] pb-10"
      >
        <div>
          <SubAppL />
        </div>
      </div>
      <div
        class="relative overflow-hidden min-h-screen w-[45%] bg-[#F5F5F7] flex justify-start pl-[72px] pb-10 border-l-1 border-[#00000014]"
      >
        <div>
          <SubAppR />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppNavbar from "@/components/NonAuth/AppNavbar.vue";
import SubAppL from "@/components/NonAuth/SubAppL.vue";
import SubAppR from "@/components/NonAuth/SubAppR.vue";
</script>
