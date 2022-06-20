<template>
  <Navbar/>
  <div class="container">
    <div class="card bg-hero align-items-center py-3 mt-5 text-center px-5">
      <h1 class="font-poppins-bold text-white mb-3">What will you design?</h1>
      <div class="px-3 card bg-light flex-row col-12 col-md-6 mb-3">
        <button class="search-button" type="submit"><i class="bi bi-search"></i></button>
        <input class="search-bar font-poppins-regular" type="text" placeholder="Search your content wedding card"/>
      </div>
      <div class="d-flex gap-md-5 align-items-center font-poppins-regular text-white">
        <div>
          <IconHero><img class="icon-hero" src="../assets/foryou.png" alt=""></IconHero>
          <p class="d-none d-md-inline">For You</p>
        </div>
        <div>
          <IconHero link="/ig"><img class="icon-hero" src="../assets/ig.png" alt=""></IconHero>
          <p class="d-none d-md-inline">Instagram</p>
        </div>
        <div>
          <IconHero link="/template"><img class="icon-hero" src="../assets/template.png" alt=""></IconHero>
          <p class="d-none d-md-inline">Template</p>
        </div>
      </div>
    </div>
    <Carousel/>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import IconHero from '../components/IconHero.vue';
import Carousel from '../components/Carousel.vue';
</script>
<style scoped>
  .bg-hero{
    background-image: url(../assets/2.png);
    background-size: cover;
    background-position: center;
    outline: none;
    border: none;
  }
.search-bar{
  outline: none;
  border: none;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  width: 100%;
}
.flex-row{
  align-items: center;
}
.search-button{
  border: none;
  outline: none;
  background-color: transparent;
}
.icon-hero{
    width: 60px;
    height: 60px;
}
</style>