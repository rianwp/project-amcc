<template>
    <a :href="props.link" class="btn-navbar mx-1"><slot></slot></a>
</template>
<script setup>
const props = defineProps({
  link: {
    type: String
  }
})
</script>
<style scoped>
  .btn-navbar{
    background-color: transparent;
    transition: 400ms;
    text-decoration: none;
    color: #320E3B;
    font-size: 24px;
  }
  .btn-navbar:hover{
    fill: #320E3B;
  }
</style>