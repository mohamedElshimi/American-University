<template>
    <div>
        <section class="py-4 bg-[#1c3160]">
            <div class="container ps-12 flex lg:justify-around md:justify-between justify-center flex-wrap mx-auto text-white">
                <div class="lg:w-4/12 w-10/12 lg:order-none order-last">
                <h2 class="lg:text-3xl md:text-2xl text-lg my-5 font-bold">ABOUT UNIVERSITY</h2>
                <ul class="md:text-lg">
                    <li class="mb-3">The American University of Science& Technology (AUST) was founded in order to fulfill the need for non-traditional higher education in the world.</li>
                    <li>We believe that we are capable of doing this.</li>
                </ul>
                </div>
                <div class="lg:w-3/12 md:w-5/12 w-10/12">
                    <h2 class="lg:text-3xl md:text-2xl text-lg my-5 font-bold">CONTACT US</h2>
                    <ul class="md:text-lg">
                        <li class="mb-3">Address :8 Green St. kent,dover, delaware,.USA</li>
                        <li class="mb-3">Postal code:19901</li>
                        <li>Email:info@aust-edu.us</li>
                    </ul>
                </div>
                <div class="lg:w-3/12 md:w-5/12 w-10/12">
                <h2 class="lg:text-3xl md:text-2xl text-lg my-5 font-bold">QUICK LINKS</h2>
                <ul class="md:text-lg">
                    <router-link to="/"><li class="mb-5 li-dec"><span class="span-dec relative" :class="{ active2: isRouteActive('/') }">Homepage</span></li></router-link>
                    <router-link to="/AgentsNPartners"><li class="mb-5 li-dec"><span class="span-dec relative" :class="{ active2: isRouteActive('/AgentsNPartners') }">Agents & Partners</span></li></router-link>
                    <router-link to="/TestCenters"><li class="mb-5 li-dec"><span class="span-dec relative" :class="{ active2: isRouteActive('/TestCenters') }">Authorized Test Centers</span></li></router-link>
                    <router-link to="/ContactUs"><li class="li-dec"><span class="span-dec relative" :class="{ active2: isRouteActive('/ContactUs') }">Contact Us</span></li></router-link>
                </ul>
                </div>
            </div>
        </section>
        <footer class="py-4 bg-[#1c2b3c] border-t-4 border-secondry text-white">
            <p class="text-center md:text-lg font-semibold">Copyright &copy; www.aust-edu.us All Rights Reserved American University of Science & Technology PROGRAMED BY OTech</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        methods:{
            isRouteActive(route) {
                // console.log(this.$route);
                return this.$route.fullPath === route;
            },
        }
    }
</script>

<style scoped>
.span-dec::before,
.span-dec::after{
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -3px;
  background: #f4a024;
  transition: 0.7s;
}
.span-dec::after{
  right: 0;
}
.li-dec:hover .span-dec::after,
.li-dec:hover .span-dec::before{
  width: 50%;
}
.span-dec.active2::before,
.span-dec.active2::after{
    @apply w-1/2 bg-slate-100
}
</style>