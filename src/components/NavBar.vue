<template>
    <div class="bg-primary flex py-3">
        <div class="container mx-auto flex flex-wrap items-center justify-between sm:px-2 px-5">
            <div class="flex items-center sm:mb-0 mb-5">
                <i class="fa-solid fa-envelope text-secondry text-lg"></i>
                <p class="ms-2 text-white text-[17px]">info@aust-edu.us</p>
            </div>
            <div class="flex relative">
                <button class="resposive-icon mx-auto hidden h-full text-2xl px-2" @click="toggleQuickLinksToggler" v-if="!mdQuickLinks"><i class="fa-solid fa-bars text-white"></i></button>
                <button class="resposive-icon mx-auto text-white hidden h-full text-2xl px-2" @click="toggleQuickLinksToggler" v-if="mdQuickLinks"><i class="fa-solid fa-x"></i></button>
                <button class="flex items-center text-white md:static absolute bg-slate-400 z-10 right-[50%] top-12 w-[150px] px-3 border-2 py-1 md:px-2 font-bold text-base" @click="toggleQuickLinks" v-if="mdQuickLinks">
                    <p>Quick Links</p>
                    <i class="fa-solid fa-chevron-down ms-2 transition-all duration-500" :class="iconRotate"></i>
                </button>
                <ul class="border absolute z-[10000000] text-black bg-white p-0 md:top-[42.5px] top-[80px] md:right-[42%] right-[50%] md:w-full w-[150px]" v-if="quickLinks">
                    <router-link to="/GraduatedStudies" class="block py-1 hover:bg-secondry-600 w-full px-3" :class="{ active: isRouteActive('/GraduatedStudies') }" @click="toggleQuickLinks"><li>Graduated Studies</li></router-link><hr>
                    <router-link to="/UndergraduateStudies" class="block py-1 hover:bg-secondry-600 w-full px-3" :class="{ active: isRouteActive('/UndergraduateStudies') }" @click="toggleQuickLinks"><li>Undergraduate Studies</li></router-link><hr>
                    <router-link to="/AgentsNpartners" class="block py-1 hover:bg-secondry-600 w-full px-3" :class="{ active: isRouteActive('/AgentsNpartners') }" @click="toggleQuickLinks"><li>Agents & Partners</li></router-link><hr>
                    <router-link to="/TestCenters" class="block py-1 hover:bg-secondry-600 w-full px-3" :class="{ active: isRouteActive('/TestCenters') }" @click="toggleQuickLinks"><li>Authorized Test Centers</li></router-link><hr>
                    <router-link to="/ContactUs" class="block py-1 hover:bg-secondry-600 w-full px-3" :class="{ active: isRouteActive('/ContactUs') }"><li>Contact Us</li></router-link><hr>
                </ul>
                <router-link to="/RegisterPage" class="secondry-button ms-3">Register</router-link>
            </div>
        </div>
    </div>
    <div class=" mx-auto relative pt-3 flex flex-wrap items-center justify-between sm:my-0 my-5">
        <div class="w-1/3 container ps-5">
            <a href="/"><img src="../assets/final-logo-1024x325.jpg" alt="American University" /></a>
        </div>
        <div class="sm:flex md:w-1/2 w-2/3 justify-end pe-5 container hidden">
            <div><input type="text" class="input-field w-full" placeholder="Enter a Registration-ID"></div>
            <button class="secondry-button ms-2">Verify</button>
        </div>
        <nav class="bg-white sm:relative static sm:w-full w-auto sm:me-0 me-5 border-gray-200 md:py-0 py-2 dark:text-white dark:bg-primary dark:border-gray-700">
            <button class="resposive-icon mx-auto hidden h-full text-2xl px-2" @click="toggleMenuBar" v-if="!menubarOpen"><i class="fa-solid fa-bars text-white"></i></button>
            <button class="resposive-icon mx-auto hidden h-full text-2xl px-2" @click="toggleMenuBar" v-if="menubarOpen"><i class="fa-solid fa-x"></i></button>
            <ul class="flex flex-wrap top-[75px] sm:top-[47px] ul-menu right-0 py-2" v-if="menubarOpen || windowWidth >= 780">
                <router-link to="/" class="menu-item md:w-3/12 lg:w-[11%]" :class="{ active: isRouteActive('/') }">
                    <li class="border-r-2 border-white" :class="{ 'active': currentRoute === 'home' }" @click="toggleMenuBar"><p>Home</p></li>
                </router-link>
                <router-link to="/about" class="menu-item md:w-3/12 lg:w-[12.5%]" :class="{ active: isRouteActive('/about') }">
                    <li class="border-r-2 border-white" :class="{ 'active': currentRoute === 'about' }" @click="toggleMenuBar"><p>About University</p></li>
                </router-link>
                <li class="menu-item md:w-3/12 lg:w-[12.5%] border-r-2 border-white">
                    <p @click="toggleSubMenu('1')">Graduated Studies<i class="fa-solid fa-chevron-down ms-2 transition-all duration-700" :class="iconRotate1"></i></p>
                    <ul class="sub-menu" v-if="subMenu1 || windowWidth >= 1024.999999999999999">
                        <router-link to="/honordoctor"><li :class="{ active: isRouteActive('/honordoctor') }" @click="toggleMenuBar">Honor Doctorate</li></router-link>
                        <router-link to="/DPApage"><li :class="{ active: isRouteActive('/DPApage') }" @click="toggleMenuBar">DBA</li></router-link>
                        <router-link to="/MBApage"><li :class="{ active: isRouteActive('/MBApage') }" @click="toggleMenuBar">MBA</li></router-link>
                        <router-link to="/ProfessionalDoctorate"><li :class="{ active: isRouteActive('/ProfessionalDoctorate') }" @click="toggleMenuBar">Professional Doctorate Degree</li></router-link>
                        <router-link to="/ProfessionalMaster"><li :class="{ active: isRouteActive('/ProfessionalMaster') }" @click="toggleMenuBar">Professional Master Degree</li></router-link>
                    </ul>
                </li>
                <li class="menu-item md:w-3/12 lg:w-[14.5%] border-r-2 border-white">
                    <p @click="toggleSubMenu('2')">Undergraduate Studies<i class="fa-solid fa-chevron-down ms-2 transition-all duration-700" :class="iconRotate2"></i></p>
                    <ul class="sub-menu" v-if="subMenu2 || windowWidth >= 1024.999999999999999">
                        <router-link to="/ProfessionalBachelor"><li :class="{ active: isRouteActive('/ProfessionalBachelor') }" @click="toggleMenuBar">Professional Bachelor</li></router-link>
                        <router-link to="/ProfessionalDiploma"><li :class="{ active: isRouteActive('/ProfessionalDiploma') }" @click="toggleMenuBar">Professional Diploma</li></router-link>
                    </ul>
                </li>
                <li class="menu-item md:w-3/12 lg:w-[12.5%] border-r-2 border-white">
                    <p @click="toggleSubMenu('3')">Programs<i class="fa-solid fa-chevron-down ms-2 transition-all duration-700" :class="iconRotate3"></i></p>
                    <ul class="sub-menu" v-if="subMenu3 || windowWidth >= 1024.999999999999999">
                        <router-link to="/honordoctor"><li :class="{ active: isRouteActive('/honordoctor') }" @click="toggleMenuBar">Honor Doctorate</li></router-link>
                        <router-link to="/DPApage"><li :class="{ active: isRouteActive('/DPApage') }" @click="toggleMenuBar">DBA</li></router-link>
                        <router-link to="/ProfessionalDoctorate"><li :class="{ active: isRouteActive('/ProfessionalDoctorate') }" @click="toggleMenuBar">Professional Doctorate Degree</li></router-link>
                        <router-link to="/MBApage"><li :class="{ active: isRouteActive('/MBApage') }" @click="toggleMenuBar">MBA</li></router-link>
                        <router-link to="/ProfessionalMaster"><li :class="{ active: isRouteActive('/ProfessionalMaster') }" @click="toggleMenuBar">Professional Master Degree</li></router-link>
                        <router-link to="/ProfessionalBachelor"><li :class="{ active: isRouteActive('/ProfessionalBachelor') }" @click="toggleMenuBar">Professional Bachelor</li></router-link>
                        <router-link to="/ProfessionalDiploma"><li :class="{ active: isRouteActive('/ProfessionalDiploma') }" @click="toggleMenuBar">Professional Diploma</li></router-link>
                    </ul>
                </li>
                <router-link to="/AgentsNpartners" class="menu-item md:w-3/12 lg:w-[12.5%] border-r-2 border-white">
                    <li :class="{ active: isRouteActive('/AgentsNpartners') }" @click="toggleMenuBar"><p>Agents & Partners</p></li>
                </router-link>
                <router-link to="/TestCenters" class="menu-item md:w-3/12 lg:w-[13.5%] border-r-2 border-white">
                    <li :class="{ active: isRouteActive('/TestCenters') }" @click="toggleMenuBar"><p>Authorized Test Centers</p></li>
                </router-link>
                <router-link to="/ContactUs" class="menu-item md:w-3/12 lg:w-[11%]">
                    <li :class="{ active: isRouteActive('/ContactUs') }" @click="toggleMenuBar"><p>Contact Us</p></li>
                </router-link>
            </ul>
        </nav>
    </div>

</template>

<script>
    export default {
        name:'NavBar',
        data(){
            return{
                quickLinks:false,
                iconRotate:'rotate-0',
                iconRotate1:'rotate-0',
                iconRotate2:'rotate-0',
                iconRotate3:'rotate-0',
                menubarOpen:false,
                windowWidth: window.innerWidth,
                currentRoute: '',
                subMenu1: false,
                subMenu2: false,
                subMenu3: false,
                mdQuickLinks: false,
            }
        },
        methods:{
            toggleQuickLinks(){
                this.quickLinks = !this.quickLinks;
                this.iconRotate = this.quickLinks ? '-rotate-90' : 'rotate-0'
            },
            toggleMenuBar(){
                this.menubarOpen = !this.menubarOpen;
                this.closeAllSub();
            },
            updateWindowWidth() {
                this.windowWidth = window.innerWidth;
            },
            toggleQuickLinksToggler(){
                this.mdQuickLinks = !this.mdQuickLinks;
                
            },
            toggleSubMenu(num){
                if (this.windowWidth < 1024) {
                    if (num == '1') {
                    this.subMenu1= !this.subMenu1;
                    this.subMenu2= false;
                    this.subMenu3= false;
                    this.iconRotate1 = this.subMenu1 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate2 = this.subMenu2 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate3 = this.subMenu3 ? '-rotate-90' : 'rotate-0'
                } else if(num == '2'){
                    this.subMenu2= !this.subMenu2;
                    this.subMenu1= false;
                    this.subMenu3= false;
                    this.iconRotate1 = this.subMenu1 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate2 = this.subMenu2 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate3 = this.subMenu3 ? '-rotate-90' : 'rotate-0'
                }else{
                    this.subMenu3= !this.subMenu3;
                    this.subMenu2= false;
                    this.subMenu1= false;
                    this.iconRotate1 = this.subMenu1 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate2 = this.subMenu2 ? '-rotate-90' : 'rotate-0'
                    this.iconRotate3 = this.subMenu3 ? '-rotate-90' : 'rotate-0'
                }
                }
            },
            closeAllSub(){
                this.subMenu3= false;
                this.subMenu2= false;
                this.subMenu1= false;
                this.iconRotate1 = this.subMenu1 ? '-rotate-90' : 'rotate-0'
                this.iconRotate2 = this.subMenu2 ? '-rotate-90' : 'rotate-0'
                this.iconRotate3 = this.subMenu3 ? '-rotate-90' : 'rotate-0'
            },
            isRouteActive(route) {
                return this.$route.fullPath === route;
            },

        },
        beforeUnmount() {
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
            },
        },
    }
</script>

<style scoped>
.responsive-icon{
    display: none;
}
/* min-width: 1200px */
@media (max-width: 767.999999999999999px){
    .resposive-icon{
        display: block;
    }
    .ul-menu{
        position: absolute;
        z-index: 9999999;
        width: 100vw;
        @apply bg-primary block w-full
        /* display: none; */
    }
    .ul-menu li p{
        display: block;
        @apply py-3
    }
    .sub-menu{
        @apply static w-full
    }
    .sub-menu li{
        @apply w-full static
    }
    .active {
        @apply bg-secondry text-white
    }
    
    
}
nav p,
li
{    
    user-select: none;
}
</style>