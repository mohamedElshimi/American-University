<template>
    <div class="w-10/12 mx-auto">
        <div class="mb-3 mt-5">
            <h3 class="lg:text-4xl md:text-3xl text-xl font-semibold">Tag: {{ pageName }}</h3>
            <router-link to="/ourMainTarget" class="text-red-500 hover:underline"><h2 class="lg:text-4xl md:text-3xl text-xl font-semibold text-red-600 my-5">Our main target is to “Developing Yourself as a Leader”</h2></router-link>
            <div class="w-full">
                <img src="../assets/singleTag.jpg" alt="singleTag" class="w-full h-full">
            </div>
            <p class="mt-3">The upcoming budget for the Chicago Public Schools</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SingleTag',
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