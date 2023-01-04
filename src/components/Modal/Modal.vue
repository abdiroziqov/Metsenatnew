<template>
  <div class="modal fixed top-0 left-0 z-[1000] w-screen h-screen">
      <div
      class="modal__backdrop  bg-[#00000066] justify-center flex min-w-full min-h-full "
      @click.self="$emit('close')"
    >
      <div class="modal__container flex justify-center items-center min-screen">
        <slot>
        default
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>





<!-- modal ochilshi uchun yoziladi

<template>
   <teleport to="#modal" class="modal duration-300" v-if="isOpen">
    <transition name="modals">
      <Modal @close="toggleModal">
        <ModalItem @close="toggleModal" />
      </Modal>
    </transition>
  </teleport>
</template>

<script setup>
import { ref } from "vue";

import Modal from "@/components/Modal/Modal";
import ModalItem from "@/components/Modal/ModalItem";
import ModalContent from "@/components/Modal/ModalContent";
const isOpen = ref(false);

const toggleModal = () => {
  isOpen.value = !isOpen.value;
};
</script>
 -->