<template>
  <TheNavbar />
  <div class="bg-white mb-10">
    <div class="flex mb-10 container items-center py-7">
      <router-link to="/sponsor" class="flex hover:opacity-75 duration-300">
        <div>
          <img class="mt-1" src="@/assets/icon/arrow-left.png" alt="icon" />
        </div>
        <h4 class="font-['sfpro'] font-bold text-2xl text-[#28293D] ml-4 mr-3">
          <!-- {{data.full_name}} -->
         Eshmuhammedov Aziz Ishqobilovich
        </h4>
      </router-link> 

      <span
        class="bg-[#DDFFF2] rounded-lg py-1.5 px-3 font-normal text-xs text-[#00CF83]"
        >Confirmed</span
      >
    </div>
  </div>

  <!-- form start  -->
  <div
    class="my-0 mx-auto px-8 py-7 w-[793px] h-[259px] bg-white border border-[#EBEEFC ] rounded-xl shadow-[0px_5px_40px_rgba(0,0,0,0.03)]"
  >
    <div class="flex flex-wrap items-center justify-between">
      <h4>About the sponsor</h4>
      <button
        @click="toggleModal"
        class="py-2 px-8 bg-edit rounded-md flex gap-2.5 font-medium text-sm text-editing items-center border border-edit hover:border hover:border-blue-500 duration-300"
      >
        <img src="@/assets/icon/edit-icon.png" alt="edit" />
        Editing
      </button>
    </div>

    <div class="my-6 flex gap-5 items-center">
      <div class="rounded-md bg-[#EAECF0] p-4 border border-border">
        <img src="@/assets/icon/contact.png" alt="" />
      </div>
      <div class="font-medium text-conatcttext max-w-[163px]">
        Eshmuhammedov Aziz Ishqobilovich
      </div>
    </div>

    <div class="flex justify-between">
      <div class="uppercase">
        <h5 class="font-medium text-xs text-[#B5B5C3] mb-4">Phone number</h5>

        <h6 class="font-medium text-conatcttext">+998 99 973-72-60</h6>
      </div>
      <div class="uppercase">
        <h5 class="font-medium text-xs text-[#B5B5C3] mb-4">
          sponsorship amount
        </h5>

        <h6 class="font-medium text-conatcttext">30 000 000 UZS</h6>
      </div>
    </div>
    <button class="mt-[175px]">
      <router-link to="/sponsors/single">
        <img src="@/assets/image/single.png" alt="image" />
      </router-link>
    </button>
  </div>

  <teleport to="#modal" class="modal duration-300" v-if="isOpen">
    <Modal @close="toggleModal">
      <ModalEditing @close="toggleModal" />
    </Modal>
  </teleport>
  <!-- form end  -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import TheNavbar from "@/components/TheNavbar.vue";
import Modal from "@/components/Modal/Modal.vue";
import ModalEditing from "@/components/ModalContents/ModalEditing.vue";
import ModalContent from "@/components/Modal/ModalContent.vue";

const isOpen = ref(false);

const toggleModal = () => {
  isOpen.value = !isOpen.value;
};
// getSponsorId
const getSponsorId = async () => {
  await axios
    .get(
      `https://metsenatclub.xn--h28h.uz/api/v1/sponsor-detail/${$sponsor_id}`
    )
    .then((res) => {
      data.value = res.data;
    })
    .catch((err) => {
      console.log(err);
      alert(err);
    });
};
onMounted(() => {
  getSponsorId();
});
</script>
