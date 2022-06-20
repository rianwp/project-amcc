<template>
    <div class="row">
        <div class="flex col-12 col-md-8 bg-img vh-100">
            <div class="px-3 py-4 card border-rounded col-10 col-sm-9 d-md-none mx-auto text-center">
                <slot></slot>
            </div>
            <h1 class="p-2 mx-auto d-md-inline d-none text-white font-judul text-center font-poppins-bold">
            Buat Wedding Card Digital Impianmu
            </h1>
        </div>
        <div class="flex col-0 col-md-4 d-none d-md-block vh-100">
            <div class="p-2 w-100 right-bar text-center flex-justify">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
<style scoped>
  .bg-img{
    background-image: url(../assets/1.png);
    background-size: cover;
    background-position: center;
  }
  .flex{
    display: flex !important;
    flex-direction: column;
    justify-content: center;
  }
  .font-judul{
    font-size: 60px;
  }
  h1, div{
    margin:0;
    padding:0;
  }
  .border-rounded{
    border-radius:10px;
  }
  .right-bar{
    height: 60vh;
  }
  .flex-justify{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 75vh;
  }
</style>