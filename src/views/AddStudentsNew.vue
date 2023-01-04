<template>
  <TheNavbar/>
  <section class="bg-white">
    <div class="container py-6 flex justify-between">
      <router-link to="/add/student" class="font-['sfpro'] font-bold text-2xl text-[28293D] flex  gap-4 items-center">
        <div><img src="@/assets/icon/arrow-left.png" alt="icon"></div>
        Isfandiyorov Iqbol Bobomirzayevich
      </router-link>

      <GButton class="flex items-center gap-2.5">
        <img src="@/assets/icon/gplus.png" alt="icon">
        Add sponsor
      </GButton>
    </div>
  </section>

  <div
      class="w-[790px] h-[475px] bg-white border  border-border shadow-[0px_5px_40px_rgba(0,0,0,0.03)] rounded-xl mt-10 mx-auto p-8">
    <div class="flex justify-between">
      <div class="flex jsutify-between">
        <h4 class="font-['sfpro'] font-bold text-2xl text-[#28293D]">About student</h4>
      </div>
      <div>
        <GButton class="flex gap-2.5">
          <img src="@/assets/icon/edit-icon.png" alt="icon">
          Edit
        </GButton>
      </div>
    </div>

    <div class="mt-7 mb-6 border-t border-border relative">
      <h6 class="font-medium text-xs uppercase text-[#3366ff] absolute -top-2.5 py-[2px] px-[11px] bg-[#E5EBFF]">Basic
        information</h6>
    </div>

    <div class="flex gap-5 items-center">
      <div class="p-4 bg-[#EAECF0] rounded-md border border-border">
        <img src="@/assets/icon/contact.png" alt="">
      </div>
      <p class="max-w-[163px] font-medium text-conatcttext ">Isfandiyorov Iqbol Bobomirzayevich</p>
    </div>

    <div class="mt-6 mb-8">
      <h4 class="font-medium text-xs text-[#B5B5C3] uppercase">phone number</h4>
      <h5 class="font-medium  text-conatcttext mt-2">+998 99 973-72-60</h5>
    </div>

    <div class="mt-7 mb-6 border-t border-border relative">
      <h6 class="font-medium text-xs uppercase text-[#3366ff] absolute -top-2.5 py-[2px] px-[11px] bg-[#E5EBFF]">
        Information about the place of study</h6>
    </div>


    <div class="flex justify-between">
      <div class="w-full">
        <h4 class="font-medium text-xs text-[#B5B5C3] uppercase">OTM</h4>
        <h5 class="font-medium  text-conatcttext mt-2">O’zbekiston davlat jahon tillari universiteti</h5>
      </div>

      <div class="w-full">
        <h4 class="font-medium text-xs text-[#B5B5C3] uppercase">Student type</h4>
        <h5 class="font-medium  text-conatcttext mt-2">Bachelor</h5>
      </div>
    </div>

    <div class="flex justify-between mt-6">
      <div class="w-full">
        <h4 class="font-medium text-xs text-[#B5B5C3] uppercase">Allocated amount</h4>
        <h5 class="font-medium  text-conatcttext mt-2">14 000 000 UZS</h5>
      </div>

      <div class="w-full">
        <h4 class="font-medium text-xs text-[#B5B5C3] uppercase">Contract amount</h4>
        <h5 class="font-medium  text-conatcttext mt-2">30 000 000 UZS</h5>
      </div>
    </div>
  </div>


  <div
      class="w-[790px]  bg-white border  border-border shadow-[0px_5px_40px_rgba(0,0,0,0.03)] rounded-xl p-8  mx-auto mt-10">
    <div class="flex justify-between">
      <h4 class="font-['sfpro'] font-bold text-2xl text-[#28293D]">Student sponsors</h4>
      <div @click="isHidden = !isHidden">
        <GButton class="flex gap-2.5 items-center">
          <img src="@/assets/icon/gplus.png" alt="icon">
          Add a sponsor
        </GButton>
      </div>
    </div>
    <transition name="fade">
      <div v-if="isHidden">
        <div>
          <div class="flex justify-between mt-6 font-medium px-4  text-xs uppercase text-[#b1b1b8] mb-3">
            <div class="gap-8 flex">
              <span>#</span>
              <span>F.I.sh</span>
            </div>
            <div class="gap-16 flex">
              <span>Ajratilingan summa</span>
              <span class="uppercase">Amallar</span>
            </div>
          </div>
          <div v-for="item in items" :key="item"
               class="flex justify-between border border-border px-4 py-6 bg-[#FBFBFC] rounded-lg font-medium text-conatcttext mb-3">
            <div class="flex gap-8">
              <h4>{{ item.number }}</h4>
              <h4>{{ item.name }}</h4>
            </div>
            <div class="flex gap-24 pr-3 items-center">
              <h5>{{ item.money }}<span class="font-medium text-xs uppercase text-[#B1B1B8] ml-1">UZS</span></h5>
              <div>
                <img src="@/assets/icon/edit-icon.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  <div class="flex justify-center mt-12">
    <img src="@/assets/image/single.png" alt="">
  </div>


</template>

<script setup>
import {onMounted, ref} from "vue"
import GButton from "@/components/UI/GButton.vue"
import axios from "axios";
import {data} from "autoprefixer";
import TheNavbar from "@/components/TheNavbar.vue";

const isHidden = ref(false);

const items = [
  {
    number: "1",
    name: "Saimov Rustam Boltayev",
    money: "1 000 000",
  },
  {
    number: "2",
    name: "Otabek Mahkamov Qulpiddinovich",
    money: "1 000 000",
  },
  {
    number: "3",
    name: "Ulugbek Sagimjonov Hoshimjonovich",
    money: "1 000 000",
  },
]

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>