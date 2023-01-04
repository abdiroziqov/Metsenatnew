<template>
  <div class="overflow-x-auto relative mt-10">
    <table class="w-full text-sm text-left mb-7 border-separate border-spacing-x-0 border-spacing-y-3">
      <thead class="text-xs uppercase font-medium text-[#B1B1B8]">
      <tr>
        <th scope="col" class="py-3 pl-6">
          #
        </th>
        <th scope="col" class="py-3 pr-6">
          fish
        </th>
        <th scope="col" class="py-3 px-6">
          type
        </th>
        <th scope="col" class="py-3 px-6 text-center">
          phone
        </th>
        <th scope="col" class="py-3 px-6 text-center">
          otm
        </th>
        <th scope="col" class="py-3 px-6 text-center">
          Contract amount
        </th>
        <!--   <th scope="col" class="py-3 px-6">
            Amallar
          </th> -->
        <th scope="col" class="py-3 px-6 text-center">
          Actions
        </th>
      </tr>
      </thead>
      <tbody class="rounded-lg mb-20 ">
      <tr
          v-for="item in data"
          :key="item"
          class="font-normal text-[#1D1D1F] bg-white border border-[rgba(46,91,255,0.08)] rounded-lg"
      >
        <th scope="row" class="py-4 px-6 font-medium rounded-l-lg">
          {{ item.id }}
        </th>
        <td class="py-4 pr-6">
          {{ item.full_name }}
        </td>
        <td class="py-4 pl-6">
          {{ item.type}}
        </td>
        <td class="py-4 w-36">{{ item.phone }}</td>
        <td class="py-4 px-6 text-center">{{ item.institute.name }}</td>
        <td class="py-4 px-6 text-center">
          {{ item.contract }}
        </td>
        <td class="py-4 px-6 text-center">
          {{ item.given }}
        </td>
        <td class="px-6 py-4  !rounded-r-md">
          <button>
            <router-link to="/sponsors/single">
              <img src="@/assets/icon/eye.png" alt="eye"/>
            </router-link>
          </button>

        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";

const data = ref([])
const studentType = ref(null)
const getMethods = async () => {
  await axios
      .get("https://metsenatclub.xn--h28h.uz/api/v1/student-list/")
      .then((res) => {
        data.value = res.data.results
      }).catch((err) => {
        console.log(err);
        alert(err)
      });
};

onMounted(() => {
  getMethods()

  /* let sana = "2022-12-17T11:41:36.897602+05:00"

  let date = new Date(sana);
  console.log(date.getFullYear());
  console.log(date.getDay());
  console.log(date.getHours());
  console.log(date); */
})

// function dates(params) {

// }



</script>
