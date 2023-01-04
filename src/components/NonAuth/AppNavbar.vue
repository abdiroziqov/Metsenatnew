<template>
  <section>
    <div
        class="py-6 flex justify-between shadow-shadow items-center"
    >
      <div>
        <img src="@/assets/icon/logo.png" alt=""/>
      </div>
      <div
          class="font-['sfpro'] font-medium text-sm text-[#28293D] flex items-center gap-10"
      >
        <ul class="flex gap-10 items-center">
          <li class="cursor-pointer hover:text-[#3366FF] duration-200">Main</li>
          <li class="cursor-pointer hover:text-[#3366FF] duration-200">
            Grants
          </li>
          <li class="cursor-pointer hover:text-[#3366FF] duration-200">
            Tax benefits
          </li>
          <router-link to="/auth">
            <li
                class="flex gap-1 cursor-pointer hover:text-[#3366FF] duration-200 items-center"
            >
              <img src="@/assets/icon/log-in.png" alt=""/>
              Access
            </li>
          </router-link>
        </ul>

        <button
            class="text-[#3366FF] py-2 px-8 border-2 border-[#3366FF] hover:text-[#28293D] duration-300 hover:border-[#28293D] rounded-lg"
        >
          Sign up
        </button>

      </div>
    </div>
  </section>
</template>

<script setup></script>