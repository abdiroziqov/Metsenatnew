<template>
    <div class="w-[586px] h-[742px] bg-white rounded-xl p-7">
      <div @click="$emit('close')" class="flex justify-between items-center border-b-2 pb-7  border-[#F5F5F7] ">
        <h4 class="font-['sfpro'] font-bold text-2xl text-[#28293D]"> Filter</h4>
        <button class="cursor-pointer hover:border-blue-500 hover:border-2 border-2 border-white  duration-300">
          <img src="@/assets/icon/close-icon.png" alt="icon">
        </button>
      </div>

        <div class="mt-7 mb-8 flex border-2 border-[#E0E7FF] bg-white rounded-md justify-center items-center">
            <button :class="[]"
             class="w-full border-r-2 items-center justify-center flex py-3.5">Jismoniy shaxs</button>
            <button class="w-full items-center justify-center flex y-3.5">Yuridik shaxs</button>
        </div>
        <div>
          <h4 class="font-medium text-xs uppercase text-conatcttext mb-2">F.I.Sh. (Familiya Ism Sharifingiz)</h4>
        <input class="w-full py-3  px-4  font-normal text-[#2E384D] bg-[rgba(224,231,255,0.2)] border border-border rounded-md outline-none" type="text" placeholder="Ishmuhammedov Aziz Ishqobilovich">
        </div>

        <div class="my-7">
          <h4 class="font-medium text-xs uppercase text-conatcttext mb-2">Telefon raqam</h4>
        <input class="w-full py-3  px-4  font-normal text-[#2E384D] bg-[rgba(224,231,255,0.2)] border border-border rounded-md outline-none" type="text" placeholder="+998 973-72-60">
        </div>

        <div class="my-7">
          <h4 class="font-medium text-xs uppercase text-conatcttext mb-2">Holati</h4>
          <Dropdown :items="arr" /> 
        </div>

        <div class="my-7">
          <h4 class="font-medium text-xs uppercase text-conatcttext mb-2">Homiylik summasi</h4>
          <Dropdown :items="arrs" /> 
        </div>


        <div class="my-7">
          <h4 class="font-medium text-xs uppercase text-conatcttext mb-2">To‘lov turi</h4>
          <Dropdown :items="payment"/>
        </div>

    </div>


</template>

<script setup>
  import  WButton from "@/components/UI/WButton.vue"
  import Dropdown from "@/components/Dropdown.vue"

  const arr = ["Barchasi", "Yangi", "Moderatsiyada", "Tasdiqlangan", "Bekor qilingan"];
  const arrs = ["30 000 000 UZS", "50 000 000 UZS", "10 000 000 UZS", "70 000 000 UZS", "5 000 000 UZS"];
  const payment = ["Pul o‘tkazmalari", "Naqd pul", "Plastik karta", "Pul ko‘chirish"];


</script>

<style scoped>
a.router-link-active {
  background-color: #3365fc;
  color: white;
  border-radius: 6px;
}
</style>