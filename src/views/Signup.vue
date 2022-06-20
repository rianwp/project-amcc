<template>
  <LoginSignupTemplate>
    <div class="mb-4 font-poppins-regular">
      <h1 class="mb-4 font-poppins-bold" style="font-size: 30px;">Sign Up</h1>
      <InputLoginSignup inputtype="email" label="Email" placeholder="Masukan Email" identifier="Email"></InputLoginSignup>
      <InputLoginSignup inputtype="password" label="Password" placeholder="Masukan Password" identifier="Password1"></InputLoginSignup>
      <InputLoginSignup inputtype="password" label="Konfirmasi Password" placeholder="Masukan Ulang Password" identifier="Password2"></InputLoginSignup>
    </div>
    <div class="flex align-items-center font-poppins-regular">
      <button class="btn-signup mb-3">Sign Up</button>
      <a class="direct-link" href="/login">Sudah memiliki akun? Login</a>
    </div>
  </LoginSignupTemplate>
</template>

<script setup>
import LoginSignupTemplate from '../components/LoginSignupTemplate.vue'
import InputLoginSignup from '../components/InputLoginSignup.vue';
</script>

<style scoped>
  h1, div{
    margin:0;
    padding:0;
  }
  .flex{
    display: flex !important;
    flex-direction: column;
    justify-content: center;
  }
  .btn-signup{
    border-radius: 10px;
    padding: 5px 17.5px 5px 17.5px;
    color: #320E3B;
    background-color: transparent;
    border: none;
    outline: 1px solid #320E3B;
    transition: 400ms;
    text-decoration: none;
  }
  .btn-signup:hover{
    background-color: #320E3B;
    color: white;
  }
  .direct-link{
    color: #7F96FF;
    text-decoration: none;
    font-size: 15px;
    transition: 200ms;
  }
  .direct-link:hover{
    color: #395dff;
  }
</style>
