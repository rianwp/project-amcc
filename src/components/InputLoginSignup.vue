<template>
      <div class="mb-4 px-xl-4 px-2 text-start">
        <label :for="props.identifier" class="form-label mb-2 label-style">{{props.label}}</label>
        <input :type="props.inputtype" class="form-control input-style" :placeholder="props.placeholder" :id="props.inputtype">
      </div>
</template>

<script setup>
const props = defineProps({
  inputtype: {
    type: String
  },
  identifier : {
    type: String
  },
  placeholder: {
    type: String
  },
  label: {
    type: String
  }
})
</script>

<style scoped>
  .input-style{
    border-radius:10px;
    border-color: #320E3B;
    box-shadow: none;
    margin-bottom: 20px
  }
  .label-style{
    color: #320E3B;
  }
  input::placeholder{
    font-size: 15px;
    color: #320e3bb0;
  }
  input:focus{
    box-shadow: 0px 0px 0px 0.5px #320E3B;
  }

</style>