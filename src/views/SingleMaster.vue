<template>
    <div class="container mx-auto">
        <h1 class="title1 text-center my-5">Degree: Professional Master Degree</h1>
        <p>MBA programs Designed to help managers become more effective leaders, this program delves into the fundamentals of managing yourself, leading teams, and motivating others to accomplish your company’s goals.</p>
        <p>Through relevant readings, case discussions, and introspective exercises, you will gain a broader and deeper understanding of organizational culture and dynamics, management best practices, the role of the manager, and the nature of influence. As you explore your own personality, strengths, and weaknesses, you will begin to evolve a leadership style that is uniquely yours. You will return to work with newfound confidence and an action plan for continuing your growth as a leader.</p>
        <div class="lg:w-3/12 md:w-6/12 mx-auto pb-3 w-full  text-center mt-7 mb-7 shadow-lg border-t-4 border-secondry">
            <img src="../assets/Nutrition1.jpg" class="w-full" alt="">
            <h3 class="font-semibold text-xl my-3">Master of Applied Nutrition & Dietetics</h3>
            <div class="mb-3">
            <button class="secondry2-button me-3">Details</button>
            <button class="primary-button">Register</button>
            </div>
        </div>
        <p class="text-center my-5">« <button class="me-3" @click="handlePrevious">Previous</button>
            <router-link to="/ProfessionalMaster" class="me-3">1</router-link>
            <router-link to="/SingleMaster/2" class="me-3">2</router-link>
            <router-link to="/SingleMaster/3" class="me-3">3</router-link>
            <router-link to="/SingleMaster/4" class="me-3">4</router-link>
            <router-link to="/SingleMaster/5" class="me-3">5</router-link>
        <button @click="handleNext">Next</button> »</p>
    </div>
</template>

<script>
    export default {
        name: "DPApage",
        data(){
            return{
                id:'',
            }
        },
        methods:{
            handlePrevious(){
                this.id = this.$route.params.id
                if (this.id > 2) {
                    this.id--;
                    this.$router.push(`/SingleMaster/${this.id}`);
                } else {
                    this.$router.push('/ProfessionalMaster');
                }
            },
            handleNext(){
                this.id = this.$route.params.id
                if (this.id < 5) {
                    this.id++;
                    this.$router.push(`/SingleMaster/${this.id}`);
                }
            }
        }
    }
</script>

<style scoped>

</style>