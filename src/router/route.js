import { createWebHistory, createRouter } from "vue-router";

// Layouts
import AdminLayout from "../Layouts/AdminLayout/AdminLayout.vue";

// router DashBoard
import Admin from "@/views/Adminn/DashBoard/Admin.vue";

import AuthLayout from "@/Layouts/AuthLayout/AuthLayout.vue";

import AboutAdmin from "@/views/Adminn/ListBook/AboutAdmin.vue";
import InfoAdmin from "@/views/Adminn/AdminProfile/InfoAdmin.vue";
import EditProfileAdmin from "@/views/Adminn/EditProfileAdmin/EditProfileAdmin.vue";
import Customer from "@/views/Adminn/Reader/Customer.vue";
import DefaultLayout from "@/Layouts/DefaultLayout/DefaultLayout.vue";
import HistoryAdmin from "@/views/Adminn/Approval/HistoryAdmin.vue";

// import user
import About from "@/views/User/ListBookUser/About.vue";
import Home from "@/views/User/Home/Home.vue";
import Login from "@/views/User/Login/Login.vue";
import Register from "@/views/User/Signup/Register.vue";
import Profile from "@/views/User/Profile/Profile.vue";
import EditProfile from "@/views/User/EditProfile/EditProfile.vue";
import Order from "@/views/User/Rent/Order.vue";
const routes = [
  // router DashBoard


  {
    path: "/admin/dashboard",
    component: Admin,
    meta: {
      layout: AdminLayout,
    },
  },
  {
    path: "/admin/listbook",
    component: AboutAdmin,
    meta: {
      layout: AdminLayout,
    },
  },
  {
    path: "/admin/profile",

    component: InfoAdmin,
    meta: {
      layout: AdminLayout,
    },
  },
  {
    path: "/admin/editprofile",

    component: EditProfileAdmin,
    meta: {
      layout: AdminLayout,
    },
  },
  {
    path: "/admin/reader",

    component: Customer,
    meta: {
      layout: AdminLayout,
    },
  },
  {
    path: "/admin/approval",
    component: HistoryAdmin,
    meta: {
      layout: AdminLayout,
    },
  },
  //route user 
  {
    path: "/",
    component: Home,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      layout: AuthLayout,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      layout: AuthLayout,
    },
  },
  {
    path: "/books",
    component: About,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/editprofile",
    component: EditProfile,
    meta: {
      layout: DefaultLayout,
    },
  },
  {
    path: "/rent",
    component: Order,
    meta: {
      layout: DefaultLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;