<template>
  <div class="max-w-full h-screen justify-center flex flex-col items-center">
    <div class="mb-12">
      <img src="@/assets/icon/logo.png" alt="logo"/>
    </div>
    <div
        class="w-[379px] h-[456px] p-8 bg-white border border-solid border-[#EBEEFC] shadow-[0px_5px_40px_rgba(0,0,0,0.03)] rounded-xl"
    >
      <form @submit.prevent>
        <h3 class="font-['sfpro'] font-bold text-2xl text-[#28293D] mb-11">
          Kirish
        </h3>
        <div class="block">
          <label class="uppercase font-medium text-xs text-[#1D1D1F] mb-2"
          >login</label>
          <input
              v-model="username"
              type="text"
              placeholder="adm8904"
              class="w-full block outline-none duration-200 focus:border-[#2E5BFF] bg-[rgba(224, 231, 255, 0.2)] border border-solid border-[#E0E7FF] rounded-md py-4 px-3"
          />
        </div>

        <div class="block mt-5">
          <label class="uppercase font-medium text-xs text-[#1D1D1F] mb-2"
          >parol</label
          >
          <input autocomplete="off"
                 v-model="password"
                 type="password"
                 placeholder="Password"
                 class="w-full block outline-none duration-200 focus:border-[#2E5BFF] bg-[rgba(224, 231, 255, 0.2)] border border-solid border-[#E0E7FF] rounded-md py-4 px-3"
          />
        </div>
        <button
            class="bg-[#2E5BFF] border-[#2E5BFF] rounded-md font-medium text-white py-[14px] mt-6 w-full border-2 borer-solid hover:border-[#2E5BFF] duration-300 hover:bg-inherit hover:text-black"
            @click="getMethods" type="submit"
        >
          Kirish
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const route = useRouter()


const username = ref("");
const password = ref("");

const getMethods = async () => {
  const obj = {
    username: username.value,
    password: password.value,
  };
  console.log(obj);
  await axios
      .post("https://metsenatclub.xn--h28h.uz/api/v1/auth/login/", obj)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          route.push("/dashboard")
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err)
      })
};
</script>

