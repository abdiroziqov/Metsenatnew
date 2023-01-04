<template>
  <div class="overflow-hidden relative mt-10" @submit.prevent>
    <table
      class="w-full text-sm text-left mb-7 border-separate border-spacing-x-0 border-spacing-y-3"
    >
      <thead class="text-xs uppercase font-medium text-[#B1B1B8]">
        <tr>
          <th scope="col" class="py-3 pl-6">
            #
          </th>
          <th scope="col" class="py-3 pr-6">
            fish
          </th>
          <th scope="col" class="py-3 px-6">
            Tel.Raqami
          </th>
          <th scope="col" class="py-3 px-6">
            Homiylik summasi
          </th>
          <th scope="col" class="py-3 px-6">
            Sarflangan summa
          </th>
          <th scope="col" class="py-3 px-6 text-center">
            Sana
          </th>
          <th scope="col" class="py-3 px-6">
            Holati
          </th>
          <th scope="col" class="py-3 px-6 text-center">
            Amallar
          </th>
        </tr>
      </thead>
      <tbody class="rounded-lg mb-20">
        <tr
          v-for="(item, index) in data"
          :key="index"
          class="font-normal text-[#1D1D1F] bg-white border border-[rgba(46,91,255,0.08)] rounded-lg"
        >
          <th scope="row" class="py-4 px-6 font-medium rounded-l-lg">
            {{ index + 1 }}
          </th>
          <td class="py-4 pr-6">
            {{ item.full_name }}
          </td>
          <td class="py-4 px-6">
            {{ item.phone }}
          </td>
          <td class="py-4 px-6">{{ item.sum }} UZS</td>
          <td class="py-4 px-6 text-center">{{ item.spent }} UZS</td>
          <td class="py-4 px-6">
            {{ item.created_at.slice(0, 10) }}
          </td>
          <td
            class="py-4 px-6 text-center"
            :class="{
              'text-[#5BABF2]': item.get_status_display === 'Yangi',
              'text-[#FFA445]': item.get_status_display === 'Moderatsiyada',
              'text-[#00CF83]': item.get_status_display === 'Tasdiqlangan',
              'text-[#979797;]': item.get_status_display === 'Bekor qilingan',
            }"
          >
            {{ item.get_status_display }}
          </td>
          <td class="py-6 px-6 flex justify-center !rounded-r-lg">
            <button @click="router.push(`sponsors/single/${item.id}`)">
      
                <img src="@/assets/icon/eye.png" alt="eye" /> 
      
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useCounterStore } from "@/stores/search";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const $route = useRoute()
const $sponsor_id = $route.params?.id


function getId (){
  router.push(`sponsors/single/${item.id}`)
}

const data = ref([]);
const store = useCounterStore();
const search = ref(store.getSearch);
const getMethods = async () => {
  await axios
    .get("https://metsenatclub.xn--h28h.uz/api/v1/sponsor-list/", {
      params: {
        search: search,
        // _page: page,
        // _page_size: page_size,
      },
    })
    // this.totalPages = Math.ceil(getMethods.headers['Request URL'] / this.page);
    // console.log(this.totalPages)
    .then((res) => {
      data.value = res.data.results;
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
function filteredSearch() {
  const newArr = data.value.filter((filtered) => {
    filtered.full_name.includes(search);
  });

}

watch(
  () => store.getSearch,
  () => {
    console.log(store.getSearch, "search value in watcher");
    getMethods(store.getSearch);
    filteredSearch();
  }
);
onMounted(() => {
  getMethods();
});


</script>
