<template>
  <header class="bg-[#F8DAD0]">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 pb-4" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <!-- logo ở đay -->
          <img class="h-10 w-auto" src="D:/project_daydu_ct499/quanlimuonsach_frontend/public/logo.png" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">


        <a href="/" class="text-sm font-semibold leading-6 text-gray-900">Home</a>



        <a href="/books" class="text-sm font-bold leading-6 text-gray-900">Books</a>
        <a href="/rent" class="text-sm font-bold leading-6 text-gray-900">Rent</a>
        <a href="/profile" class="text-sm font-bold leading-6 text-gray-900">Profile</a>
      </PopoverGroup>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <div class="infoUser">
          <!-- <div class="btnLogin">Login</div> -->
          <div v-if="isUserLoggedIn()" class="flex items-center space-x-2">
            <span class="text-sm font-semibold">{{ name }}</span>
            <a href="/profile">
              <img :src="avatar" class="w-10 h-10 rounded-full" alt="noImage" />
            </a>



          </div>
          <div v-else>

            <a href="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
                aria-hidden="true">&rarr;</span></a>
          </div>

        </div>
      </div>

    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <div class="infoUser">
            <!-- <div class="btnLogin">Login</div> -->
            <div v-if="isUserLoggedIn()" class="flex items-center space-x-2">

              <a href="/profile">
                <img :src="avatar" class="w-10 h-10 rounded-full" alt="noImage" />
              </a>
              <span class="text-sm font-semibold">{{ name }}</span>



            </div>
            <div v-else>

              <a href="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
                  aria-hidden="true">&rarr;</span></a>
            </div>

          </div>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">

              <a href="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
              <a href="/books"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Books</a>
              <a href="/rent"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Rent</a>
              <a href="/profile"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Profile</a>
            </div>

          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const isUserLoggedIn = () => {
  return localStorage.getItem("isLoginDG") === "true";
};


import axios from "axios";
import { toast } from "vue3-toastify";
const data = ref({});
const name = ref("");
const birth = ref();
const phone = ref("");
const avatar = ref("");
const ID_DG = localStorage.getItem("ID_DG");
const fetchData = () => {
  axios
    .get("http://localhost:3000/authentication/" + ID_DG)
    .then((res) => {
      data.value = res.data;
      console.log(data.value);
      name.value = res.data.Ten;
      birth.value = res.data.NgaySinh;
      phone.value = res.data.DienThoai;

      avatar.value = `http://localhost:3000/upload/${res.data.Avatar}`;
      console.log(`http://localhost:3000/upload/${res.data.Avatar}`);

    })
    .catch((err) => console.log(err));
};

fetchData();

const mobileMenuOpen = ref(false)
</script>