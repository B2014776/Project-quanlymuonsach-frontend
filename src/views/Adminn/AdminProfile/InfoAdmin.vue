<template>
  <div class="containPage">
    <div class="titlePage">

    </div>
    <div class="flex justify-center items-center">
      <div class="w-[800px] h-[600px] rounded-[10px] bg-cover bg-no-repeat"
        style="background-image: url('https://i.pinimg.com/564x/0b/bc/75/0bbc751d6344bef3f5bfa608059f7dbe.jpg');">
        <div class="flex-col h-full flex justify-center items-center">
          <img v-if="data.Avatar" :src="'http://localhost:3000/upload/' + data.Avatar" alt="Generic placeholder image"
            class="w-[200px] h-[200px] mt-4 mb-2" style="z-index: 1" />

          <div class="">
            <div class="w-[600px]">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Họ tên</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{{ data.HoTenNv }}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Số điện thoại</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">
                      {{ data.SoDienThoai }}
                    </p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Địa chỉ</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{{ data.DiaChi }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-between ">
              <router-link to="/admin/editprofile">
                  <button type="button" class="w-[250px] h-[50px] rounded-[10px] bg-[#70c2b4] text-white">
                    Edit
                  </button>
                </router-link>

                <router-link to="/login" >
                      <button type="button" @click="handleLogout" class="w-[250px] h-[50px] rounded-[10px] bg-[#2d99ae] text-white">
                        Logout
                      </button>
                    </router-link>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const data = ref({});
const ID_User = localStorage.getItem("ID_User");
const fetchData = () => {
  axios
    .get("http://localhost:3000/authentication/info/staff/" + ID_User)
    .then((res) => {
      console.log("Data", res.data);
      data.value = res.data;
    })
    .catch((err) => console.log(err));
};
fetchData();

const handleLogout = () => {
  // Xóa thông tin đăng nhập từ localStorage
  localStorage.removeItem("ID_DG");
  localStorage.removeItem("isLoginDG");
  localStorage.removeItem("TenDG");
  localStorage.removeItem("AvatarDG");

  // Điều hướng người dùng về trang đăng nhập
  router.push("/login");
};
</script>
<style lang="scss" scoped>
@import "InfoAdmin";
</style>