<template>
    <div
      class="inline-flex   active:border-blue-500 hover:border-blue-500   items-center relative cursor-pointer border border-[#E0E7FF] rounded-md py-3 px-4 w-full justify-between bg-white"
      @click="is_open = !is_open"
    >
      <span class="text-[#2E384D] font-normal">{{ selected }}</span>
      <img
        src="@/assets/icon/chevron-down.png"
        alt="chevron"
        :class="{ active: is_open }"
      />
      <transition name="dropdown_menu">
        <ul
          class="absolute text-center top-14 z-10 bg-white rounded-lg border border-[#E0E7FF]  w-full shadow-[0px_4px_24px_rgba(0,0,0,0.08) right-0"
          v-show="is_open"
        >
          <li
            class="text-sm text-[#2E384D] font-normal border-b border-solid border-[#E6E8EC] p-5 hover:bg-[#F9FAFF] " 
            v-for="item in items"
            :key="item"
            @click="selected = item"
          >
            {{ item.name }}
          </li>
        </ul>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
      props: {
          items: {
              type: Array,
              default: []
          }
      },
      data() {
          return {
              selected: this.items[0],
              is_open: false,
              }
      },
  }
  </script>
  
  <!-- <script setup>
  import { ref, withDefaults, defineProps } from "vue";
  // const default = ["Sellers", "Customer2", "Customer3"];
  
  const props = withDefaults(
    defineProps({
      items: Array,
    }),
    {
      items: ["Sellers", "Customer2", "Customer3"],
    }
  );
  
  const selected = this.items[0];
  const is_open = ref(false);
  </script> -->
  
  <style scoped>
  img {
    transition: 0.5s;
  }
  img.active {
    transform: rotate(180deg);
  }
  .dropdown-menu-enter-active,
  .dropdown-menu-leave-active {
    transition: 0.5s ease-in;
  }
  
  .dropdown-menu-enter-from,
  .dropdown-menu-leave-to {
    transform: translateY(5px);
    opacity: 0;
  }
  </style> 


<!-- usecase -->

<!-- import Dropdown from "@/components/Dropdown.vue"

const arr = ["Barchasi", "Yangi", "Moderatsiyada", "Tasdiqlangan", "Bekor qilingan"];
<Dropdown :items="arr" />  -->


<!-- endusecases -->