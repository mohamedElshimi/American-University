<template>
    <div class="container mx-auto">
        <h1 class="title1 text-center my-5">Graduated Studies</h1>
        <div class="my-10">
            <div class="border-2 border-b-0 flex justify-between items-center py-3 px-5 accordion" @click="showNextRow" id="1">
                <p class="text-primary font-bold">Program #1</p>
                <i class="fa-solid fa-chevron-down ms-2 transition-all duration-500" :class="{'iconRotate':show1}"></i>
            </div>
            <div class="border-2 border-b-0 flex justify-between items-center py-3 px-5 accordion-hidden" :class="{'show':show1}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            <div class="border-2 border-b-0 flex justify-between items-center py-3 px-5 accordion" @click="showNextRow" id="2">
                <p class="text-primary font-bold">Program #2</p>
                <i class="fa-solid fa-chevron-down ms-2 transition-all duration-500" :class="{'iconRotate':show2}"></i>
            </div>
            <div class="border-2 border-b-0 flex justify-between items-center py-3 px-5 accordion-hidden" :class="{'show':show2}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
            <div class="border-2 flex justify-between items-center py-3 px-5 accordion" :class="{'border-b-hidden':show3}" @click="showNextRow" id="3">
                <p class="text-primary font-bold">Program #3</p>
                <i class="fa-solid fa-chevron-down ms-2 transition-all duration-500" :class="{'iconRotate':show3}"></i>
            </div>
            <div class="border-2 flex justify-between items-center py-3 px-5 accordion-hidden" :class="{'show':show3}">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'GraduatedStudies',
        data(){
            return{
                show1:false,
                show2:false,
                show3:false,
            }
        },
        methods:{
            showNextRow(index){
                if (index.target.id == 1) {
                    this.show1 = !this.show1;
                    this.show2 = false;
                    this.show3 = false;
                    console.log('1');
                } else if (index.target.id == 2){
                    this.show1 = false;
                    this.show2 = !this.show2;
                    this.show3 = false;
                    console.log('2');
                }else{
                    this.show1 = false;
                    this.show2 = false;
                    this.show3 = !this.show3;
                    console.log('3');
                }
            }
        }
    }
</script>

<style scoped>
.accordion-hidden{
    /* overflow: hidden; */
    display: none;
    transition: all 0.5s;
}

.show{
    display: block;
    transition: all 0.5s;
}
.border-b-hidden{
    border-bottom: 0;
}
.iconRotate{
    @apply -rotate-180 transition-all duration-700
}
/* tr:hover + tr{
    display: block;
} */
</style>