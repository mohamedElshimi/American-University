<template>
    <div class="bg-primary flex py-3">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
            <div class="flex items-center">
                <i class="fa-solid fa-envelope text-secondry text-lg"></i>
                <p class="ms-2 text-white text-[17px]">info@aust-edu.us</p>
            </div>
            <div class="flex">
                <button class="flex items-center text-white border border-2 py-1 px-2 font-bold text-base" @click="toggleQuickLinks">
                    <p>Quick Links</p>
                    <i class="fa-solid fa-chevron-down ms-2 transition-all duration-500" :class="iconRotate"></i>
                </button>
                <ul class="border absolute z-20 text-black bg-white p-0 mt-11" v-if="quickLinks">
                    <router-link to="/GraduatedStudies" class="block py-1 hover:bg-slate-100 w-full px-3" :class="{ active: isRouteActive('/GraduatedStudies') }"><li>Graduated Studies</li></router-link><hr>
                    <router-link to="/UndergraduateStudies" class="block py-1 hover:bg-slate-100 w-full px-3" :class="{ active: isRouteActive('/UndergraduateStudies') }"><li>Undergraduate Studies</li></router-link><hr>
                    <router-link to="/AgentsNpartners" class="block py-1 hover:bg-slate-100 w-full px-3" :class="{ active: isRouteActive('/AgentsNpartners') }"><li>Agents & Partners</li></router-link><hr>
                    <router-link to="/TestCenters" class="block py-1 hover:bg-slate-100 w-full px-3" :class="{ active: isRouteActive('/TestCenters') }"><li>Authorized Test Centers</li></router-link><hr>
                    <router-link to="/ContactUs" class="block py-1 hover:bg-slate-100 w-full px-3" :class="{ active: isRouteActive('/ContactUs') }"><li>Contact Us</li></router-link><hr>
                </ul>
                <router-link to="/RegisterPage" class="secondry-button ms-3">Register</router-link>
            </div>
        </div>
    </div>
    <div class="container mx-auto flex items-center justify-between py-2">
        <div class="w-1/3">
            <img src="../assets/final-logo-1024x325.jpg" alt="American University" />
        </div>
        <div class="flex w-1/2 justify-end">
            <div><input type="text" class="input-field w-full" placeholder="Enter a Registration-ID"></div>
            <button class="secondry-button ms-2">Verify</button>
        </div>
    </div>
    <nav class="bg-white relative border-gray-200 dark:text-white dark:bg-primary dark:border-gray-700">
        <button class="resposive-icon mx-auto hidden text-2xl" @click="toggleMenuBar"><i class="fa-solid fa-bars text-white"></i></button>
        <ul class="flex flex-wrap ul-menu" v-if="menubarOpen || windowWidth >= 780">
            <router-link to="/" class="menu-item md:w-3/12 lg:w-[11%]" :class="{ active: isRouteActive('/') }">
                <li :class="{ 'active': currentRoute === 'home' }">Home</li>
            </router-link>
            <router-link to="/about" class="menu-item md:w-3/12 lg:w-[12.5%]" :class="{ active: isRouteActive('/about') }">
                <li :class="{ 'active': currentRoute === 'about' }">About University</li>
            </router-link>
            <li class="menu-item md:w-3/12 lg:w-[12.5%]">
                Graduated Studies<i class="fa-solid fa-chevron-down ms-2 transition-all duration-700" :class="iconLiRotate"></i>
                <ul class="sub-menu">
                    <router-link to="/honordoctor" :class="{ active: isRouteActive('/honordoctor') }"><li>Honor Doctorate</li></router-link>
                    <router-link to="/DPApage" :class="{ active: isRouteActive('/DPApage') }"><li>DBA</li></router-link>
                    <router-link to="/MBApage" :class="{ active: isRouteActive('/MBApage') }"><li>MBA</li></router-link>
                    <router-link to="/ProfessionalDoctorate" :class="{ active: isRouteActive('/ProfessionalDoctorate') }"><li>Professional Doctorate Degree</li></router-link>
                    <router-link to="/ProfessionalMaster" :class="{ active: isRouteActive('/ProfessionalMaster') }"><li>Professional Master Degree</li></router-link>
                </ul>
            </li>
            <li class="menu-item md:w-3/12 lg:w-[14.5%]">
                Undergraduate Studies<i class="fa-solid fa-chevron-down ms-2 transition-all duration-700" :class="iconLiRotate"></i>
                <ul class="sub-menu">
                    <router-link to="/ProfessionalBachelor" :class="{ active: isRouteActive('/ProfessionalBachelor') }"><li>Professional Bachelor</li></router-link>
                    <router-link to="/ProfessionalDiploma" :class="{ active: isRouteActive('/ProfessionalDiploma') }"><li>Professional Diploma</li></router-link>
                </ul>
            </li>
            <li class="menu-item md:w-3/12 lg:w-[12.5%]">
                Programs
                <i class="fa-solid fa-chevron-down ms-2 transition-all duration-700" :class="iconLiRotate"></i>
                <ul class="sub-menu">
                    <router-link to="/honordoctor" :class="{ active: isRouteActive('/honordoctor') }"><li>Honor Doctorate</li></router-link>
                    <router-link to="/DPApage" :class="{ active: isRouteActive('/DPApage') }"><li>DBA</li></router-link>
                    <router-link to="/ProfessionalDoctorate" :class="{ active: isRouteActive('/ProfessionalDoctorate') }"><li>Professional Doctorate Degree</li></router-link>
                    <router-link to="/MBApage" :class="{ active: isRouteActive('/MBApage') }"><li>MBA</li></router-link>
                    <router-link to="/ProfessionalMaster" :class="{ active: isRouteActive('/ProfessionalMaster') }"><li>Professional Master Degree</li></router-link>
                    <router-link to="/ProfessionalBachelor" :class="{ active: isRouteActive('/ProfessionalBachelor') }"><li>Professional Bachelor</li></router-link>
                    <router-link to="/ProfessionalDiploma" :class="{ active: isRouteActive('/ProfessionalDiploma') }"><li>Professional Diploma</li></router-link>
                </ul>
            </li>
            <router-link to="/AgentsNpartners" class="menu-item md:w-3/12 lg:w-[12.5%]" :class="{ active: isRouteActive('/AgentsNpartners') }">
                <li>Agents & Partners</li>
            </router-link>
            <router-link to="/TestCenters" class="menu-item md:w-3/12 lg:w-[13.5%]" :class="{ active: isRouteActive('/TestCenters') }">
                <li>Authorized Test Centers</li>
            </router-link>
            <router-link to="/ContactUs" class="menu-item md:w-3/12 lg:w-[11%]" :class="{ active: isRouteActive('/ContactUs') }">
                <li>Contact Us</li>
            </router-link>
        </ul>
    </nav>

</template>

<script>
    export default {
        name:'NavBar',
        data(){
            return{
                quickLinks:false,
                iconRotate:'rotate-0',
                menubarOpen:false,
                windowWidth: window.innerWidth,
                currentRoute: '',
                
            }
        },
        methods:{
            toggleQuickLinks(){
                this.quickLinks = !this.quickLinks;
                this.iconRotate = this.quickLinks ? '-rotate-90' : 'rotate-0'
            },
            toggleMenuBar(){
                this.menubarOpen = !this.menubarOpen;
            },
            updateWindowWidth() {
                this.windowWidth = window.innerWidth;
            },
            isRouteActive(route) {
                // console.log(this.$route);
                return this.$route.fullPath === route;
            },

        },
        beforeUnmount() {
            // Remove the resize event listener when the component is unmounted
            window.removeEventListener('resize', this.updateWindowWidth);
        },
        mounted() {
            // Add a listener to update windowWidth when the window is resized
            window.addEventListener('resize', this.updateWindowWidth);
        },
        watch: {
            $route(to) {
            // Update currentRoute when the route changes
            this.currentRoute = to.name;
            console.log(this.currentRoute);
            },
        },
    }
</script>

<style scoped>
.responsive-icon{
    display: none;
}
@media (max-width: 767.999999999999999px){
    .resposive-icon{
        display: block;
    }
    .ul-menu{
        position: absolute;
        top: 30px;
        z-index: 9999999;
        @apply bg-primary block w-full
        /* display: none; */
    }
    .ul-menu li{
        display: block;
        @apply py-3
    }
    .sub-menu{
        @apply static
    }
    .sub-menu li{
        @apply w-full static
    }
    .active {
        @apply bg-secondry text-white
    }
    
}
</style>