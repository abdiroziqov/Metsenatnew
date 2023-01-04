<template>
  <div class="bg-white rounded-xl w-[586px] h-[620px] p-7">

    <div @click="$emit('close')" class="flex justify-between items-center border-b-2 pb-7  border-[#F5F5F7] ">
      <h4 class="font-['sfpro'] font-bold text-2xl text-[#28293D]"> Filter</h4>
      <button class="cursor-pointer hover:border-blue-500 hover:border-2 border-2 border-white  duration-300">
        <img src="@/assets/icon/close-icon.png" alt="icon">
      </button>
    </div>
    <div class="my-7">
      <h4 class="font-medium text-xs uppercase text-[#1D1D1F] mb-2">Application status</h4>
      <Dropdown :items="arr"/>
    </div>
    <div>


      <h4 class="font-medium text-xs uppercase text-[#1D1D1F] mb-4">Sponsorship amount</h4>

      <div class="flex flex-wrap gap-3">
        <div v-for="(item, index) of items"
             :key="index"
             @click="changeactivePicker(index)">
          <label class="relative">
            <button
                class="flex transition-colors duration-150 justify-between font-medium text-sm text-[#2E384D] items-center p-4 border border-[#E0E7FF] rounded-md"
                :class="{ '!border-blue': index === activePicker }">
              {{ item }}
              <span class="font-normal text-xs uppercase text-blue">UZS</span>
              <img
                  :class="[index === activePicker ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-45']"
                  class="absolute transition-all duration-150 -top-1.5 -right-1.5"
                  src="@/assets/icon/checked-icon.png" alt="">
            </button>
          </label>
        </div>
      </div>
    </div>

    <div class="my-7 border-b-2 pb-7  border-[#F5F5F7]">
      <h4 class="font-medium text-xs uppercase text-[#1D1D1F] mb-2">Date</h4>
      <input type="date"
             class="bg-[rgba(224,231,255,0.2)] outline-none focus:border-blue-500 duration-300  border border-[#E0E7FF] rounded-lg py-4 px-3 font-normal text-[rgba(46,-56,77,0.35)]">
    </div>


    <div class="flex gap-4 justify-end">
      <WButton class="flex items-center gap-1 cursor-pointer">
        <img src="@/assets/icon/broom-icon.png" alt="">
        <h5>Clear</h5>
      </WButton>

      <BButton class="flex items-center gap-2 cursor-pointer">
        <img src="@/assets/icon/eye-icon.png" alt="">
        <h5>Wiew the results</h5>
      </BButton>
    </div>

  </div>
</template>

<script setup>
import {ref} from "vue";
import WButton from "@/components/UI/WButton.vue"
import BButton from "@/components/UI/BButton.vue"
import Dropdown from "@/components/Dropdown.vue"


const arr = ["Barchasi", "Yangi", "Moderatsiyada", "Tasdiqlangan", "Bekor qilingan"];

const items = [
  "Barchasi", "1 000 000", "5 000 000", "7 000 000", "10 000 000", "30 000 000", "50 000 000"
]

const activePicker = ref(0);

function changeactivePicker(index) {
  activePicker.value = index;
}

</script>

