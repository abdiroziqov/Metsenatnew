<template>
  <transition name="fade">
    <section v-if="!awesome">
      <div class="mt-20 mb-10">
        <h3 class="w-[423px] font-bold text-[40px] text-[#1D1D1F]">
          Apply as a sponsor
        </h3>
      </div>
      <div
        @click="handleClick"
        class="uppercase flex border-2 border-[E0E7FF] rounded-md mb-7 font-medium text-xs text-[rgba(51,102,255,0.6)]"
      >
        <button
          :style="{
            backgroundColor: active ? '#3366FF' : '#ffffff',
            color: active ? '#ffffff' : '#3366FF',
          }"
          @click="hidden = false"
          class="py-[14px] px-[98px] border-r-2 border-[#E0E7FF] bg-[#3366FF] rounded-md font-['poppins']"
        >
          Physical person
        </button>
        <button
          :style="{
            backgroundColor: active ? '#ffffff' : '#3366FF',
            color: active ? '#3366FF ' : '#ffffff',
          }"
          @click="hidden = !hidden"
          class="py-[14px] px-[98px] rounded-md"
        >
          Legal entitys
        </button>
      </div>

      <form class="mb-20" @submit.prevent>
        <div>
          <label class="mb-2">F.I.Sh. (Surname Name)</label>
          <input
            type="text"
            :class="afto"
            placeholder="Abdullayev Abdulla Abdulla o'g'li"
            v-model="name"
            @keyup="defaultColor"
          />
        </div>
        <div class="mt-7 relative">
          <label class="mb-2">Your phone number</label>
          <div>
            <text class="block absolute top-[37px] left-[17px] text-[#2E384D]"
              >+998</text
            >
            <input
              type="text"
              placeholder="00 000-00-00"
              v-maska
              data-maska="(##) ###-##-##"
              v-model="number"
              :class="redNumber"
              @keyup="defaultColor"
            />
          </div>
        </div>
        <div class="grid grid-cols-[auto,auto,auto] gap-4 mt-5">
          <div
            v-for="(item, index) of items"
            :key="index"
            @click="changeactivePicker(index)"
          >
            <label class="relative">
              <button
                ref="getMoney"
                @click="getMoney"
                class="flex w-full transition-colors duration-150 justify-between font-medium text-sm text-[#2E384D] items-center p-4 border border-[#E0E7FF] rounded-md"
                :class="{ '!border-blue': index === activePicker }"
              >
                {{ item }}
                <span class="font-normal text-xs uppercase text-blue">UZS</span>
                <img
                  :class="[
                    index === activePicker
                      ? 'opacity-100 scale-100 rotate-0'
                      : 'opacity-0 scale-0 rotate-45',
                  ]"
                  class="absolute transition-all duration-150 -top-1.5 -right-1.5"
                  src="@/assets/icon/checked-icon.png"
                  alt=""
                />
              </button>
            </label>
          </div>
        </div>

        <!-- legal input start  -->
        <transition name="fade">
          <input
            v-if="hidden"
            class="w-full border border-[#E0E7FF] px-4 py-3 rounded-md mt-10 outline-none"
            type="text"
            placeholder="Orient group"
            v-model="organization"
          />
        </transition>
        <!-- legal input end  -->
        <!-- others input  -->
        <transition name="fade">
          <input
            v-if="fuu"
            class="w-full border border-[#E0E7FF] px-4 py-3 rounded-md mt-10 outline-none"
            v-maska
            data-maska="# ### ### ###"
            placeholder="_ ___ ___ ___"
            v-model="buu"
          />
        </transition>
        <!-- others input  -->
        <div @click="postUser">
          <button
            class="bg-blue-500 w-full py-[14px] rounded-md mt-7 text-white hover:bg-white hover:border-blue-400 border duration-300 hover:text-blue-500"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  </transition>

  <transition name="had">
    <div
      v-if="awesome"
      class="mt-16 items-center flex flex-col text-center mx-auto"
    >
      <div>
        <img src="@/assets/icon/done.png" alt="" />
      </div>
      <h3 class="pt-8 pb-2">Sent for information.</h3>
      <h4 class="font-normal text-xs text-[#B2B7C1] w-[310px]">
        Our operator will contact you soon and clarify all the information.
      </h4>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from "vue";
import axios from "axios";
import { vMaska } from "maska";

// const isHidden = ref(false);
const hidden = ref(false);
let fuu = ref(false);
const active = ref(true);
const handleClick = () => {
  active.value = !active.value;
};

const isRemove = ref(false);
let buu = ref("");
const items = reactive([
  "1 000 000",
  "5 000 000",
  "7 000 000",
  "10 000 000",
  "30 000 000",
  "Other",
]);

const activePicker = ref(0);

function changeactivePicker(index) {
  if (index === 5) {
    fuu.value = true;
    activePicker.value = 5;
    items[5] = buu.value;
  } else {
    fuu.value = false;
    activePicker.value = index;
  }
}

// let defaultColor = ref()
const defaultColor = () => {
  afto.value =
    "w-full outline-none  border py-3 px-4 rounded-md bg-[rgba(224,231,255,0.2)]";
  redNumber.value =
    "w-full outline-none border py-3 px-4 rounded-md bg-[rgba(224,231,255,0.2)] pl-16 font-normal text-[#2E384D]";
};
const awesome = ref(false);

const name = ref("");
const number = ref("");
const organization = ref("");
const getMoney = ref("");
let afto = ref(
  "w-full outline-none border py-3 px-4 rounded-md bg-[rgba(224,231,255,0.2)]"
);
let redNumber = ref(
  "w-full outline-none border py-3 px-4 rounded-md bg-[rgba(224,231,255,0.2)] pl-16 font-normal text-[#2E384D]"
);

const postUser = async () => {
  if (name.value == "") {
    afto.value =
      "w-full outline-none !border-red-500 border py-3 px-4 rounded-md bg-[rgba(224,231,255,0.2)]";
  }
  if (number.value == "") {
    redNumber.value =
      "w-full outline-none border !border-red-500 py-3 px-4 rounded-md bg-[rgba(224,231,255,0.2)] pl-16 font-normal text-[#2E384D] ";
  } else {
    await axios
      .post("https://metsenatclub.xn--h28h.uz/api/v1/sponsor-create/", {
        full_name: name.value,
        phone: number.value,
        firm: organization.value,
        sum:
          +items[activePicker.value].replace(/\s/g, "") == 0
            ? buu.value.replace(/\s/g, "")
            : items[activePicker.value].replace(/\s/g, ""),
        payment_type: ["44"],
      })
      .then((res) => {
        awesome.value = true;
        console.log(res.status);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(5px);
  opacity: 0;
}
.had-enter-active,
.had-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.had-enter-from,
.had-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
