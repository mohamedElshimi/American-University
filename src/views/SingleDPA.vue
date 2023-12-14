<template>
    <div class="container mx-auto">
        <h1 class="title1 text-center my-5">Degree: DBA</h1>
        <p>Today’s workforce is diverse, so it is not enough to be an expert in traditional management and leadership techniques. Being a successful leader now requires awareness of your own cultural competence and unconscious biases so you can influence and effectively lead multicultural teams.<br>Additionally, these programs will allow attendees to explore the intersection of unconscious bias and cultural intelligence. They will also learn how to become more aware of internal biases and ways to overcome them.<br>You will participate in a variety of highly engaging activities, interactive discussions, and mini- case studies to broaden your management &leadership skills<br>Think of the leaders you most admire. They seem to easily juggle competing demands, confidently motivate their teams to achieve optimum results, effectively navigate across the organization, and never lose their composure. These executives make the job look simple—but it’s not.</p>
        <div class="lg:w-3/12 md:w-6/12 mx-auto pb-3 w-full  text-center mt-7 mb-7 shadow-lg border-t-4 border-secondry">
        <img src="../assets/project-managemen.jpg" class="w-full" alt="">
        <h3 class="font-semibold text-xl my-3">Doctorate in Businesses Project Managment</h3>
        <div class="mb-3">
          <button class="secondry2-button me-3">Details</button>
          <button class="primary-button">Register</button>
        </div>
      </div>
      <p class="text-center my-5">« <button class="me-3" @click="handlePrevious">Previous</button>
        <router-link to="/DPApage" class="me-3">1</router-link>
        <router-link to="/SingleDPA/2" class="me-3">2</router-link>
        <router-link to="/SingleDPA/3" class="me-3">3</router-link>
        <router-link to="/SingleDPA/4" class="me-3">4</router-link>
        <router-link to="/SingleDPA/5" class="me-3">5</router-link>
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
                    this.$router.push(`/SingleDPA/${this.id}`);
                } else {
                    this.$router.push('/DPApage');
                }
            },
            handleNext(){
                this.id = this.$route.params.id
                if (this.id < 5) {
                    this.id++;
                    this.$router.push(`/SingleDPA/${this.id}`);
                }
            }
        }
    }
</script>

<style scoped>

</style>