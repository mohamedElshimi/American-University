<template>
    <div>
        <section class="min-h-screen relative flex justify-center items-center">
            <div class="img-overlay border-t-8 border-secondry"></div>
            <div class="relative z-10 text-white text-center">
                <h2 class="lg:text-4xl md:text-3xl text-2xl font-bold text-secondry">Admission</h2>
                <h2 class="lg:text-3xl md:text-2xl text-xl font-bold mt-7">Apply for Admission</h2>
            </div>
        </section>
        <section class="container mx-auto">
            <section class="md:px-10 my-20 px-5">
                <h3 class="lg:text-3xl md:text-2xl text-xl font-semibold mb-3">Details about how to Apply</h3>
                <ul class="list-disc">
                    <li class="ms-10 mb-1 md:text-base text-sm">The admission procedure was designed to help you learn about the nature of studying at the American University of Science & Technology (AUST) which would help you and help the University to reach an informed decision regarding joining A.U.S.T.</li>
                    <p class=" md:text-base text-sm">If you are interested in joining A.U.S.T, this is wonderful and we are interested in helping you whether you are finishing High School or want to pursue learning after the BA. Our international university helps you become a critical thinker who has the necessary knowledge and the skills for contributing to society and the job market knowing that the most important step in the journey of lifelong learning is practical application.</p>
                    <li class="font-bold ms-10 mt-2 md:text-base text-sm">Post-graduate studies requirements:</li>
                    <p class="md:text-base text-sm">You must complete an evaluation test conducted by A.U.S.T. This is an internet based that is done after registration. It’s used to help you get ready academically. In order to complete the process, you also have to meet a consultant to join the University. You have to send the official documents to the Faculty that you want to join and send the last degree you received from an accredited institution or an institution accredited by A.U.S.T.</p>
                    <p class="my-3 md:text-base text-sm">We do not ask you only what you want to become in the future but the most important thing for us is who you want to become and what kind of experiences you need.</p>
                    <p class="mb-3 md:text-base text-sm">We ask you what kind of values you hold and what kind of future you expect we have helped graduates answer ask and answer this questions and now it’s your turn.</p>
                    <li class="ms-10 md:text-base text-sm">If you have additional questions, please call the admission consultant at the University.</li>
                </ul>
            </section>
            <section class="md:px-2 px-5 mb-7">
                <h3 class="lg:text-3xl md:text-2xl text-xl font-semibold mb-7">The Application Process</h3>
                <div class="text-red-700 flex flex-wrap justify-center my-16">
                    <div class="lg:text-2xl md:text-xl text-lg font-semibold lg:w-4/12 md:w-6/12 w-full mb-5">1 Start Online Submission</div>
                    <div class="lg:text-2xl md:text-xl text-lg font-semibold lg:w-4/12 md:w-6/12 w-full mb-5">2 Submit the Form</div>
                    <div class="lg:text-2xl md:text-xl text-lg font-semibold lg:w-4/12 md:w-6/12 w-full mb-5">3 Gather Necessary Documents</div>
                    <div class="lg:text-2xl md:text-xl text-lg font-semibold lg:w-4/12 md:w-6/12 w-full mb-5">4 Review the Submission</div>
                    <div class="lg:text-2xl md:text-xl text-lg font-semibold lg:w-4/12 md:w-6/12 w-full mb-5">5 Apply admission</div>
                </div>
                <div>
                    <h3 class="lg:text-3xl md:text-2xl text-xl font-semibold mb-7 text-center text-gray-700">ApplicatIon Form</h3>
                    <form class="flex flex-wrap">
                        <div class="md:w-6/12 w-full my-2 md:px-2 px-5">
                            <label for="" class="my-input-label">Name<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                            <input type="text" class="input-field" name="" id="">
                        </div>
                        <div class="md:w-6/12 w-full my-2 md:px-2 px-5">
                            <label for="" class="my-input-label">Email<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                            <input type="email" class="input-field" name="" id="">
                        </div>
                        <div class="md:w-6/12 w-full my-2 md:px-2 px-5">
                            <label for="" class="my-input-label">Country<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                            <input type="text" class="input-field" name="" id="">
                        </div>
                        <div class="md:w-6/12 w-full my-2 md:px-2 px-5">
                            <label for="" class="my-input-label">Country Code + Phone/Whatsapp<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                            <input type="text" class="input-field" name="" id="">
                        </div>
                        <div class="w-full my-2 sm:px-0 px-5">
                            <label for="" class="my-input-label">Address<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                            <input type="text" class="input-field" name="" id="">
                        </div>
                        <div class="w-full my-2 flex flex-wrap sm:px-0 px-5">
                            <label for="" class="my-input-label w-full">Program- Choose Your Degree<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                            <div class="sm:w-6/12 w-full mb-2">
                                <input type="radio" name="degree" id="HonorDoctorate" class="me-2">
                                <label for="HonorDoctorate" class="font-semibold md:text-base text-sm">Honor Doctorate</label>
                            </div>
                            <div class="sm:w-6/12 w-full mb-2">
                                <input type="radio" name="degree" id="DBA" class="me-2">
                                <label for="DBA" class="font-semibold md:text-base text-sm">DBA</label>
                            </div>
                            <div class="sm:w-6/12 w-full mb-2">
                                <input type="radio" name="degree" id="DoctorateDegree" class="me-2">
                                <label for="DoctorateDegree" class="font-semibold md:text-base text-sm">Professional Doctorate Degree</label>
                            </div>
                            <div class="sm:w-6/12 w-full mb-2">
                                <input type="radio" name="degree" id="MBA" class="me-2">
                                <label for="MBA" class="font-semibold md:text-base text-sm">MBA</label>
                            </div>
                            <div class="sm:w-6/12 w-full mb-2">
                                <input type="radio" name="degree" id="MasterDegree" class="me-2">
                                <label for="MasterDegree" class="font-semibold md:text-base text-sm">Professional Master Degree</label>
                            </div>
                            <div class="sm:w-6/12 w-full mb-2">
                                <input type="radio" name="degree" id="ProfessionalBachelor" class="me-2">
                                <label for="ProfessionalBachelor" class="font-semibold md:text-base text-sm">Professional Bachelor</label>
                            </div>
                            <div class="sm:w-6/12 w-full mb-2">
                                <input type="radio" name="degree" id="ProfessionalDiploma" class="me-2">
                                <label for="ProfessionalDiploma" class="font-semibold md:text-base text-sm">Professional Diploma</label>
                            </div>
                        </div>
                        <div class="md:w-6/12 md:px-2 w-full my-2 sm:px-0 px-5">
                            <label for="" class="my-input-label">Specializations - Write Your Major<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                            <input type="text" class="input-field" name="" id="">
                        </div>
                        <div class="md:w-6/12 md:px-2 w-full my-2 sm:px-0 px-5">
                            <label for="" class="my-input-label">Subject<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                            <input type="text" class="input-field" name="" id="">
                        </div>
                        <div class="w-full my-2 sm:px-2 px-5">
                            <label for="" class="my-input-label">Your Message<sup><i class="fa-solid fa-star-of-life text-[7px] ms-1 text-red-600"></i></sup></label>
                            <textarea name="" id="" cols="30" rows="10" class="input-field"></textarea>
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
                        <div class="sm:px-2 px-5 w-full my-2">
                            <button class="primary-button text-white w-full">Apply Addmission</button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
    export default {
        name:'RegisterPage',
    }
</script>

<style scoped>
.img-overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #777 url('../assets/banner-1917x742.jpg') no-repeat;
    background-blend-mode: multiply;
    background-size: 100% 100%;
}
label{
    user-select: none;
}
@media (max-width: 767.999999999px) {
    .img-overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #777 url('../assets/banner-1917x742.jpg') no-repeat;
    background-blend-mode: multiply;
    background-size: 220% 100%;
    background-position: right;
    }
}
</style>