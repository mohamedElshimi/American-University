<template>
    <div class="w-10/12 mx-auto">
        <div class="mb-3 mt-5">
            <h3 class="lg:text-4xl md:text-3xl text-xl font-semibold text-gray-600">Tag: {{ pageName }}</h3>
            <router-link to="/SouthAfrican" class="text-red-500 hover:underline"><h2 class="lg:text-4xl md:text-3xl text-xl font-semibold text-red-600 my-5">South African universities trail other BRICS</h2></router-link>
            <div class="w-full">
                <img src="../assets/AfricianTag.jpeg" alt="singleTag" class="w-full h-full">
            </div>
            <p class="mt-3">South Africa has eight of the top 15 universities in Africa but its higher learning institutions are rated as the worst performing among the BRICS emerging market nations.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SingleAfricanTag',
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