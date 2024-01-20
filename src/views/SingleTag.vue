<template>
    <div class="w-10/12 mx-auto">
        <div class="mb-3 mt-5">
            <h3 class="lg:text-4xl md:text-3xl text-xl font-semibold">Tag: {{ pageName }}</h3>
            <router-link to="/ourMainTarget" class="text-red-500 hover:underline"><h2 class="lg:text-4xl md:text-3xl text-xl font-semibold text-red-600 my-5">{{ research.title }}</h2></router-link>
            <div class="w-full">
                <img :src="research.media[0].url" alt="singleTag" class="w-full h-full">
            </div>
            <p class="mt-3">{{ research.description }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name:'SingleTag',
        data(){
            return{
                pageName:'',
                id:'',
                digitalLib:[],
                research:{},
            }
        },
        created(){
            this.pageName = this.$route.params.name;
            this.id = this.$route.params.id;
            axios.get('https://apis-amirican-university.quickly-egypt.com/api/category/Digital-Library').then((res)=>{
                this.digitalLib = res.data.data
                this.research = this.digitalLib.find(obj => obj['id'] == this.id)
                console.log(this.research);
            }).catch(err=>console.log(err))
        }
    }
</script>

<style scoped>

</style>