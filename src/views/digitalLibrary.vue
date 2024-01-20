<template>
    <section>
        <div class="w-full min-h-screen relative flex justify-center items-center">
            <div class="img-overlay z-10 border-t-4 border-secondry"></div>
            <h2 class="lg:text-6xl md:text-5xl text-4xl font-bold text-secondry relative z-20">Digital Library</h2>

        </div>
        <div class="container mx-auto md:px-2 px-5">
            <div class="my-7">
                <h3 class="lg:text-3xl md:text-2xl text-xl font-semibold text-gray-800">Details about how to Apply to Digital Library</h3>
                <p class="md:text-base text-sm mt-4">Access our digital library from the comfort of your home or on the go. As a member of the AUST Library, you will have world-class resources at the tip of your fingers, from online study resources to popular eBooks and audiobooks, and award-winning documentaries.</p>
                <p class="md:text-base text-sm mt-4">And that’s not all: Digital Library membership gives you access to magazines and newspapers, comics and graphics novels from around the world, learning resources to develop your skills and access to exclusive content from our partners over the world.</p>
            </div>
            <div class="my-10">
                <h3 class="lg:text-3xl md:text-2xl text-xl font-semibold text-gray-800">Books and Researches</h3>
                <div class="flex flex-wrap">
                    <div class="lg:w-4/12 md:w-6/12 w-full mt-5 px-3" v-for="(Lib,index) in digitalLib" :key="index">
                        <div class="card h-full">
                            <!-- Card Header with Image -->
                            <div class="mb-4 relative">
                                <h6 class="bg-[#00000099] text-white px-3 text-sm rounded-lg absolute right-5 top-4">ADVERISEMENT</h6>
                                <img :src="Lib.media[0].url" alt="Card Image" class="card-image" />
                            </div>
                            <!-- Card Title -->
                            <router-link :to="`/SingleResearch/${Lib.id}`" class="text-blue-500 hover:underline"><h2 class="card-title">{{ Lib.title }}</h2></router-link>
                            <!-- Card Body -->
                            <p class="card-body">{{ Lib.description }}</p>
                            <!-- Read more link -->
                            <router-link :to="`/SingleResearch/${Lib.id}`" class="text-blue-500 hover:underline mx-5">Read more</router-link>
                            <hr class="my-3 mx-0">
                            <div class="flex justify-between px-5 text-xs">
                                <span class="text-gray-400">{{ Lib.create_date }}</span>
                                <span class="text-gray-400" v-if="!Lib.comments_count">No Comment</span>
                                <span class="text-gray-400" v-if="Lib.comments_count">{{ Lib.comments_count }} Comment</span>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-4/12 md:w-6/12 w-full mt-5 px-3">
                        <div class="card h-full">
                        <div class="mb-4 relative">
                            <h6 class="bg-[#00000099] text-white px-3 text-sm rounded-lg absolute right-5 top-4">TECHNOLOGY</h6>
                            <img src="../assets/about-university2.jpg" alt="Card Image" class="card-image" />
                        </div>
                        <router-link to="/BodyCameras" class="text-blue-500 hover:underline"><h2 class="card-title">Body Cameras on Public-School Educators</h2></router-link>
                        <p class="card-body">Some of can’t rely on stable worlds economic</p>
                        <router-link to="/BodyCameras" class="text-blue-500 hover:underline mx-5">Read more</router-link>
                        <hr class="my-3 mt-9 mx-0">
                        <div class="flex justify-between px-5 text-xs">
                            <span class="text-gray-400">August 9, 2018</span>
                            <span class="text-gray-400">No Comments</span>
                        </div>
                    </div>
                    </div>
                    <div class="lg:w-4/12 md:w-6/12 w-full mt-5 px-3">
                        <div class="card h-full">
                        <div class="mb-4 relative">
                            <h6 class="bg-[#00000099] text-white px-3 text-sm rounded-lg absolute right-5 top-4">HOBBIES</h6>
                            <img src="../assets/about-university2.jpg" alt="Card Image" class="card-image" />
                        </div>
                        <router-link to="/USTeens" class="text-blue-500 hover:underline"><h2 class="card-title">US Teens Win International Rocketry Challenge</h2></router-link>
                        <p class="card-body">Throughout the United States, police officers are beginning</p>
                        <router-link to="/USTeens" class="text-blue-500 hover:underline mx-5">Read more</router-link>
                        <hr class="my-3 mx-0">
                        <div class="flex justify-between px-5 text-xs">
                            <span class="text-gray-400">August 9, 2018</span>
                            <span class="text-gray-400">No Comments</span>
                        </div>
                    </div>
                    </div>
                    <div class="lg:w-4/12 md:w-6/12 w-full mt-5 px-3">
                        <div class="card h-full">
                        <div class="mb-4 relative">
                            <h6 class="bg-[#00000099] text-white px-3 text-sm rounded-lg absolute right-5 top-4">HOBBIES</h6>
                            <img src="../assets/about-university2.jpg" alt="Card Image" class="card-image" />
                        </div>
                        <router-link to="/SouthAfrican" class="text-blue-500 hover:underline"><h2 class="card-title">South African universities trail other BRICS</h2></router-link>
                        <p class="card-body">South Africa has eight of the top 15 universities in Africa but its higher learning institutions are rated as the worst performing among the BRICS emerging market nations.</p>
                        <a href="#" class="text-blue-500 hover:underline mx-5">Read more</a>
                        <hr class="my-3 mx-0">
                        <div class="flex justify-between px-5 text-xs">
                            <span class="text-gray-400">August 9, 2018</span>
                            <span class="text-gray-400">No Comments</span>
                        </div>
                    </div>
                    </div>
                    <div class="lg:w-4/12 md:w-6/12 w-full mt-5 px-3">
                        <div class="card h-full">
                        <div class="mb-4 relative">
                            <h6 class="bg-[#00000099] text-white px-3 text-sm rounded-lg absolute right-5 top-4">HOBBIES</h6>
                            <img src="../assets/about-university2.jpg" alt="Card Image" class="card-image" />
                        </div>
                        <router-link to="/BeautyChildhood" class="text-blue-500 hover:underline"><h2 class="card-title">The Beauty of the Childhood</h2></router-link>
                        <p class="card-body">After years of watching Vancouver housing prices climb, driven in part by Chinese investment, Eveline Xia came to a painful realization: Despite having a Master’s degree and solid career prospects.</p>
                        <router-link to="/BeautyChildhood" class="text-blue-500 hover:underline mx-5">Read more</router-link>
                        <hr class="my-3 mt-4 mx-0">
                        <div class="flex justify-between px-5 text-xs">
                            <span class="text-gray-400">August 9, 2018</span>
                            <span class="text-gray-400">No Comments</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
    export default {
        name:'digitalLibrary',
        data(){
            return{
                digitalLib:[],
            }
        },
        created(){
            axios.get('https://apis-amirican-university.quickly-egypt.com/api/category/Digital-Library').then((res)=>{
                this.digitalLib = res.data.data
                console.log(this.digitalLib);
            }).catch(err=>console.log(err))
        }
    }
</script>

<style scoped>
.img-overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: #888 url(../assets/library.jpg);
    background-size: 100% 100%;
    background-blend-mode: multiply;
}
</style>