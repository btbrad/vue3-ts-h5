<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {getUserInfo} from '@/api/user'
console.log(111, import.meta.env)

const params = {user: 'zhangsan'}
getUserInfo(params)
  .then(() => {})
  .catch(() => {})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <van-button type="primary">主要按钮</van-button>
  <div class="box"></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  width: 150px;
  height: 150px;
  background: #f40;;
}
</style>
