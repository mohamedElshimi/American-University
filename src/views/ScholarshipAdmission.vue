<template>
    <div>
        <div class="img-overlay w-full min-h-screen flex justify-center items-center">
            <div class="text-center">
                <h1 class="lg:text-3xl md:text-2xl text-xl text-secondry font-semibold">Scholarship Admission</h1>
                <h3 class="lg:text-3xl md:text-2xl text-xl text-white font-semibold mt-3">Apply for Scholarship Admission</h3>
            </div>
        </div>
        <div class="w-10/12 mx-auto">
            <div class="my-7">
                <h2 class="lg:text-3xl md:text-2xl text-xl font-semibold">Details about how to Apply for Scholarship Programs</h2>
                <p class="mt-5 lg:text-sm text-xs">One of the University’s major priorities is providing scholarships and financial aid support to its students, in order to further <span class="font-bold">AUST</span> mission of building a culture of leadership, lifelong learning, and dedication to making significant contributions to the international community in diverse fields. Through scholarship awards, <span class="font-bold">AUST</span> attracts gifted young men and women, regardless of their financial circumstances, to the University and provides them with an education that empowers them to create positive change in the world.</p>
                <p class="mt-5 lg:text-sm text-xs"><span class="font-bold">AUST</span> offers scholarships based on merit and need. Students with special qualifications, such as academic, athletic or artistic talent and who demonstrate high financial need compete for these scholarships.</p>
                <p class="mt-5 lg:text-sm text-xs">AUST offers a variety of partial scholarships in many countries.</p>
            </div>
            <div>
                <h1 class="title1 text-black text-center my-5">Contact Us</h1>
                <div class="my-5 flex flex-wrap mx-auto">
                    <div class="w-full my-2">
                        <label for="" class="my-input-label">Name<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                        <input type="text" class="input-field" name="" id="">
                    </div>
                    <div class="w-full my-2">
                        <label for="" class="my-input-label">E-Mail<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                        <input type="email" class="input-field" name="" id="">
                    </div>
                    <div class="w-full my-2">
                        <label for="" class="my-input-label">Subject<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                        <input type="text" class="input-field" name="" id="">
                    </div>
                    <div class="lg:w-[20%] md:w-6/12 w-full my-2 sm:px-2 px-5">
                        <label for="" class="my-input-label">Qualifications<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                        <input type="file" class="input-field" name="" id="">
                    </div>
                    <div class="lg:w-[20%] md:w-6/12 w-full my-2 sm:px-2 px-5">
                        <label for="" class="my-input-label">National ID<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                        <input type="file" class="input-field" name="" id="">
                    </div>
                    <div class="lg:w-[20%] md:w-6/12 w-full my-2 sm:px-2 px-5">
                        <label for="" class="my-input-label">Passport-Copy<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                        <input type="file" class="input-field" name="" id="">
                    </div>
                    <div class="lg:w-[20%] md:w-6/12 w-full my-2 sm:px-2 px-5">
                        <label for="" class="my-input-label">CV<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                        <input type="file" class="input-field" name="" id="">
                    </div>
                    <div class="lg:w-[20%] md:w-6/12 w-full my-2 sm:px-2 px-5">
                        <label for="" class="my-input-label">Other Document<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                        <input type="file" class="input-field" name="" id="">
                    </div>
                    <div class="w-full my-2">
                        <label for="" class="my-input-label">Address<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                        <input type="text" class="input-field" name="" id="">
                    </div>
                    <div class="w-full my-2">
                        <label for="" class="my-input-label">Phone/Whatsapp<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                        <input type="text" class="input-field" name="" id="">
                    </div>
                    <div class="w-full my-2">
                        <label for="" class="my-input-label">Your Message<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                        <textarea name="" id="" class="input-field" cols="50" rows="5"></textarea>
                    </div>
                    <button class="primary-button w-full mt-2">Apply Addmission</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ScholarshipAdmission',
    }
</script>

<style scoped>
.img-overlay{
    background: #888 url(../assets/about-university2.jpg) center;
    background-size: 100% 100%;
    background-blend-mode: multiply;
}
</style>