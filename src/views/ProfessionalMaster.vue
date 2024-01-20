<template>
    <div class="container mx-auto sm:px-2 px-5">
        <h1 class="title1 text-center my-5">Degree: Professional Master Degree</h1>
        <p class="md:text-base text-sm">{{ PMs[0].description }}</p>
        <div class="lg:w-3/12 md:w-6/12 mx-auto pb-3 w-full  text-center mt-7 mb-7 shadow-lg border-t-4 border-secondry">
            <img src="../assets/hospital-management.jpg" class="w-full" alt="">
            <h3 class="font-semibold lg:text-xl md:text-lg text-base my-3">{{ PMs[0].title }}</h3>
            <div class="mb-3">
            <button class="secondry2-button me-3">Details</button>
            <button class="primary-button">Register</button>
            </div>
        </div>
        <p class="text-center my-5">« <button class="me-3" @click="handlePrev">Previous</button>
        <template v-for="index in end" :key="index">
            <router-link to="/DPApage" class="me-3" v-if="index == 1 && index >= start && index <=end">1</router-link>
            <router-link :to="`/SingleMaster/${index}`" class="me-3" v-if="index > 1 && index >= start && index <=end">{{ index }}</router-link>
        </template>
        <!-- <router-link to="/SingleDPA/3" class="me-3">3</router-link>
        <router-link to="/SingleDPA/4" class="me-3">4</router-link>
        <router-link to="/SingleDPA/5" class="me-3">5</router-link> -->
        <button @click="handleNext">Next</button> »</p>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: "ProfessionalMaster",
        data(){
            return{
                PMs:[],
                start:1,
                end:5,
            }
        },
        methods:{
            handleNext(){
                this.start += 5;
                this.end += 5;
                if (this.end > this.PMs.length) {
                    this.start = this.PMs.length-5
                    this.end = this.PMs.length
                }
            },
            handlePrev(){
                this.start -= 5;
                this.end -= 5;
                if (this.start < 1) {
                    this.start = 1
                    this.end = 5
                }
            }
        },
        created(){
            axios.get('https://apis-amirican-university.quickly-egypt.com/api/category/Professional-Master-Degree').then((res)=>{
                this.PMs= res.data.data;
                console.log(this.PMs)
            }).catch(err=>console.log(err))
        }
    }
</script>

<style scoped>

</style>