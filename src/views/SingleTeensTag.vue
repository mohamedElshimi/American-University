<template>
    <div class="w-10/12 mx-auto">
        <div class="mb-3 mt-5">
            <h3 class="lg:text-4xl md:text-3xl text-xl font-semibold text-gray-600">Tag: {{ pageName }}</h3>
            <router-link to="/USTeens" class="text-red-500 hover:underline"><h2 class="lg:text-4xl md:text-3xl text-xl font-semibold text-red-600 my-5">US Teens Win International Rocketry Challenge</h2></router-link>
            <div class="w-full">
                <img src="../assets/SingleTeens.jpg" alt="singleTag" class="w-full h-full">
            </div>
            <p class="mt-3">Throughout the United States, police officers are beginning</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SingleTeensTag',
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