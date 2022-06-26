<template>
   <a :href="props.link" class="link-text d-flex flex-column align-items-center">
      <img class="icon-hero" :src="props.filename" :alt="props.alt">
      <p class="d-none d-md-inline text-white">{{props.alt}}</p>
    </a>     
</template>
<script setup>
const props = defineProps({
  link: {
    type: String
  },
  filename: {
    type: String
  },
  alt: {
    type: String
  },
})
</script>
<style scoped>
.link-text{
  text-decoration: none;
}
.icon-hero{
    width: 60px;
    height: 60px;
}
</style>