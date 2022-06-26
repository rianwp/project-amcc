<template>
    <div class="text-center">
        <h3 class="font-poppins-bold my-4 text-start">You Might to Try</h3>
        <div class="d-flex justify-content-between my-3 overflow-hidden">
            <a v-for="image in images">
                <img class="shadow-lg" :src="image.src" :alt="image.alt"/>
            </a>
        </div>
        <a href="/store" class="font-poppins-bold my-3 d-inline-block text-decoration-none link-more">More...</a>
    </div>
</template>
<script setup>
const images = [
    {
        alt: "Template 1",
        src: "src/assets/Temp1.png",
        link: ""
    },
    {
        alt: "Template 2",
        src: "src/assets/Temp2.png",
        link: ""
    },
    {
        alt: "Template 3",
        src: "src/assets/Temp3.png",
        link: ""
    },
    {
        alt: "Template 4",
        src: "src/assets/Temp4.png",
        link: ""
    },
    {
        alt: "Template 5",
        src: "src/assets/Temp5.png",
        link: ""
    },
    
]
</script>
<style scoped>
.link-more{
    color: black;
    transition: 200ms;
    font-size: 25px;
}
.link-more:hover{
    color: black;
    opacity: 0.8;
}
</style>