<template>
  <nav class="navbar navbar-light">
  <div class="container d-flex justify-content-between">
    <div>
        <a class="navbar-brand navbar-link" href="/">Logo</a>
        <a class="navbar-link" href="/">Template</a>
    </div>
    <div class="d-flex align-items-center">
        <div class="icon-group">
            <IconNavbar link="/qna"><i class="bi bi-question-circle"></i></IconNavbar>
            <IconNavbar link="/user"><i class="bi bi-gear"></i></IconNavbar>
        </div>
        <ButtonNavbar children="Login" link="/login"/>
        <ButtonNavbar children="Sign Up" link="/signup"/>
    </div>
  </div>
  
</nav>
</template>

<script setup>
import ButtonNavbar from './ButtonNavbar.vue';
import IconNavbar from './IconNavbar.vue';
</script>
<style scoped>
.navbar{
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: sticky;
    top: 0;
    z-index: 10;
  }
.icon-group{
    margin-right: 10px;
}
.navbar-link{
    text-decoration: none;
    color:black;
    transition: 200ms;
}
.navbar-link:hover{
    opacity: 0.8;
}
</style>