<template>
    <a :href="props.link" class="btn-navbar mx-1">{{props.children}}</a>
</template>
<script setup>
const props = defineProps({
  children: {
    type: String
  },
  link: {
    type: String
  }
})
</script>
<style scoped>
.btn-navbar{
    border-radius: 10px;
    padding: 5px 17.5px 5px 17.5px;
    color: #320E3B;
    background-color: transparent;
    border: none;
    outline: 1px solid #320E3B;
    transition: 400ms;
    text-decoration: none;
  }
  .btn-navbar:hover{
    background-color: #320E3B;
    color: white;
  }
</style>