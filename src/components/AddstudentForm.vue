1
<template>
  <div
      class="bg-white p-7 mt-10 w-[793px] mb-36  mx-auto border border-border shadow-[0px_5px_40px_rgba(0,0,0,0.03)] rounded-xl">
    <form @submit.prevent="onSubmit">
      <div class="flex w-full gap-7">
        <div class="w-full">
          <label class="font-medium text-xs uppercase  text-conatcttext mb-2">F.I.Sh. (Familiya Ism Sharif)</label>
          <input class="block w-full py-3 px-4 outline-none bg-[rgba(224,231,255,0.2)] border border-border rounded-md"
                 type="text" placeholder="Abdullayev Abdulla Abdulla o’g’li"
                 maxlength="50"
                 v-model="student.full_name">
        </div>

        <div class="w-full relative">
          <label class="font-medium text-xs uppercase  text-conatcttext mb-2">Telefon raqam</label>
          <text class="block absolute top-[37px] left-[17px] text-[#2E384D]">+998</text>
                   <input
                       type="text"
                       class="w-full outline-none border py-3 px-4 rounded-md bg-[rgba(224,231,255,0.2)] pl-16 font-normal text-[#2E384D]"
                       placeholder="__ ___ __ __"
                       v-maska data-maska="(##) ###-##-##"
                       v-model="student.phone"
                   />
          <!-- <input type="number" v-model="student.phone" placeholder="ajfhajihi"> -->
        </div>
      </div>
      <div class="w-full mt-7">
        <label class="font-medium text-xs uppercase  text-conatcttext mb-2">OTM</label>
        <Dropdown :items="data" class="dropdown" v-model="student.institute"/>

      </div>
      <div class="flex w-full gap-7 my-7 border-b border-border pb-7">
        <div class="w-full">
          <label class="font-medium text-xs uppercase  text-conatcttext mb-2">Talabalik turi</label>
          <Dropdown :items="studentType" v-model="student.type"/>
        </div>
        <div class="w-full">
          <label class="font-medium text-xs uppercase  text-conatcttext mb-2">Kontrakt summa</label>
                   <input class="block w-full py-3 px-4 outline-none bg-[rgba(224,231,255,0.2)] border border-border rounded-md"
                          v-maska
                          data-maska="# ### ### ### ###"
                          data-maska-tokens="9:[0-9]:repeated"
                          data-maska-reversed
                          maxlength="15"
                          placeholder="Summani kiriting"
                          v-model="student.contract"
                   >

          <!-- <input type="number" v-model="student.contract" placeholder="fawfawf "> -->
        </div>
      </div>

      <div class="flex justify-end cursor-pointer">
        <BButton class=" flex gap-2.5 items-center" type="submit">
          <img src="@/assets/icon/plus.png" alt="icon">
          Add
        </BButton>
      </div>
    </form>
  </div>
</template>

<script setup>
import BButton from "@/components/UI/BButton.vue"
import Dropdown from "@/components/Dropdown.vue"
import axios from "axios";
import {computed, onMounted, ref} from "vue";
import {vMaska} from "maska"


const data = ref([])

const getUniversity = async () => {
  await axios
      .get("https://metsenatclub.xn--h28h.uz/api/v1/institute-list/")
      .then((res) => {
        data.value = res.data
      }).catch((err) => {
        console.log(err);
        alert(err)
      });
};

onMounted(() => {
  getUniversity()
})

//
// const full_name = ref("")
// const phone = ref("")
// const institute = ref("")
//
// const contract = ref("")

// const postStudent = async () => {
//   const obj = {
//     full_name: full_name.value,
//     phone: phone.value,
//     institute: institute.value,
//     given: given.value,
//     contract: contract.value,
//   };
//   console.log(obj);
//   await axios
//       .post("https://metsenatclub.xn--h28h.uz/api/v1/student-create/", obj)
//       .then((res) => {
//         console.log(res.status);
//         // if (res.status === 200) {
//         //   route.push("/dashboard")
//         // }
//       })
//       .catch((err) => {
//         console.log(err);
//         alert(err)
//       })
// };

const student = {}
const student_type = [
  {
    id: 1,
    name: "Bakalavr"
  },
  {
    id: 2,
    name: "Magistir"
  },
  {
    id: 3,
    name: "Asperant"
  }
]

const studentType = computed(() => student_type)

const onSubmit = () => {
  postStudent()
}

// const postStudent = async () => {
//   const url = 'https://club.metsenat.uz/api/v1/student-create/';
//   const data = {
//     full_name: student.full_name,
//     type: student.type,
//     phone: student.phone,
//     institute: String(student.institute),
//     contract: student.contract,
//   }
//
//   const response = await axios
//       .post(url, data, {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json;charset=UTF-8",
//         },
//       }).catch(function (error) {
//         console.log(error);
//       });
//   if (response?.status === 201) {
//     router.push("/students");
//   }
// }

const postStudent = async () => {
  const data = {
    full_name: student.full_name,
    // type: student.type,
    phone: student.phone,
    // institute: String(student.institute),
    contract: student.contract,
  };
  console.log(data);
  await axios
      .post('https://club.metsenat.uz/api/v1/student-create/', data)
      .then((res) => {
        console.log(res.status);
        if (res.status === 201) {
          router.push("/students")
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err)
      })
};


</script>

<style>
.dropdown ul {
  height: 300px;
  overflow: auto;
}
</style>