<template>
  <div class="containPage">
    <div class="titlePage">
      <!-- <h2>Profile</h2> -->
    </div>
    <div class="contentPage">

      <div class="flex flex-row items-stretch">
        <div class="w-1/2 p-2 h-full mr-2">
          <div class="col">
            <!-- <div class="card"> -->
            <div class=" rounded-top text-white d-flex flex-row bgProfile">
              <div class="mt-5 d-flex flex-column" style="width: 150px; margin-left: 20px">
                <img v-if="data.Avatar != undefined" :src="'http://localhost:3000/upload/' + data.Avatar"
                  alt="Generic placeholder image" class="img-fluid mt-4 mb-2"
                  style="width: 150px; z-index: 1" />
                <router-link to="/editprofile">
                  <button type="button" class="w-[150px] h-[30px] rounded-[10px] bg-[#70c2b4] text-white">
                    Edit
                  </button>
                </router-link>
              </div>

            </div>
            <div class="p-4 text-black" style="background-color: #f8f9fa">
            </div>
            <div class="card-body text-black">
              <div class="mb-5">
                
                <div class="" style="background-color: #f8f9fa">
                  <div class="card-body flex flex-col items-center">
                    <div class="row w-full">
                      <div class="col-sm-3">
                        <p class="mb-0">Name</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">{{ data.Ten }}</p>
                      </div>
                    </div>
                    <hr />
                    <div class="row w-full">
                      <div class="col-sm-3">
                        <p class="mb-0">Phone</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">{{ data.DienThoai }}</p>
                      </div>
                    </div>
                    <hr />
                    <div class="row w-full">
                      <div class="col-sm-3">
                        <p class="mb-0">Location</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">{{ data.DiaChi }}</p>
                      </div>
                    </div>
                    <router-link to="/login" class="mt-4">
                      <button type="button" @click="handleLogout" class="w-[650px] h-[50px] rounded-[10px] bg-[#2d99ae] text-white">
                        Logout
                      </button>
                    </router-link>
                  </div>
                </div>



              </div>
            </div>

            <!-- </div> -->
          </div>
        </div>
        <img class="w-1/2 m-2 rounded-[10px] h-[600px]"
          src="D:/project_daydu_ct499/quanlimuonsach_frontend/public/banner5.jpg" alt="">
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const data = ref({});
const ID_DG = localStorage.getItem("ID_DG");
const fetchData = () => {
  axios
    .get("http://localhost:3000/authentication/" + ID_DG)
    .then((res) => {
      console.log("Data aaaaaaaaaa", res.data);
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
@import "./Profile.scss";
</style>