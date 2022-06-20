<template>
    <div>
        <a :href="props.link"><slot></slot></a>
    </div>
</template>
<script setup>
const props = defineProps({
  link: {
    type: String
  }
})
</script>
<style scoped>

</style>