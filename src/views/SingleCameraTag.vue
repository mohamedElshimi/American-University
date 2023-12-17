<template>
    <div class="w-10/12 mx-auto">
        <div class="mb-3 mt-5">
            <h3 class="lg:text-4xl md:text-3xl text-xl font-semibold text-gray-600">Tag: {{ pageName }}</h3>
            <router-link to="/BodyCameras" class="text-red-500 hover:underline"><h2 class="lg:text-4xl md:text-3xl text-xl font-semibold text-red-600 my-5">Body Cameras on Public-School Educators</h2></router-link>
            <div class="w-full">
                <img src="../assets/singleCameraTag.jpg" alt="singleTag" class="w-full h-full">
            </div>
            <p class="mt-3">Some of can’t rely on stable worlds economic</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SingleCameraTag',
        data(){
            return{
                pageName:''
            }
        },
        created(){
            this.pageName = this.$route.params.name;
        }
    }
</script>

<style scoped>

</style>