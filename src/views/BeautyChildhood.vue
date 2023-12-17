<template>
    <div class="w-10/12 mx-auto">
        <div class="my-5">
            <h2 class="lg:text-4xl md:text-3xl text-xl font-bold text-gray-700">The Beauty of the Childhood</h2>
            <p class="mt-5">Online diplomas are awarded for one to two years of study at a community college, technical school or university. If determined, students can complete an online diploma program while continuing to work, care for loved ones or fulfill other commitments. Online diploma programs are highly practical, allowing students to study a specific area, with a thorough overview of the field.</p>
            <p class="ms-10 my-5">Associate degrees usually take approximately two years when studying full time and are available at community colleges and technical schools around the world</p>
            <p class="mt-5">Summer courses are a great way to gain qualifications and academic credits in a convenient format. Offered during the summer months while some working professionals and students are taking a break, online summer courses fit nicely into a busy schedule. The web-based study format opens doors to studying at a university that is geographically distant, or at times that are most convenient for each individual student.</p>
            <div class="flex justify-between w-11/12 mx-auto my-5">
                <div>
                    <ul class="list-disc ms-5">
                        <li>Associate degrees usually take approximately two years.</li>
                        <li>Offered at schools in Germany, Italy, the Netherlands.</li>
                        <li>The web-based study format opens doors to studying.</li>
                    </ul>
                </div>
                <div>
                    <ol class="list-decimal">
                        <li>Like most certificate programs, online undergraduate.</li>
                        <li>Online certificate programs are more flexible and accessible.</li>
                        <li>You can find online certificates in a wide variety of undergraduate.</li>
                    </ol>
                </div>
            </div>
            <!--  -->
            <p>Studies are designed for students whose scheduling commitments would otherwise make it difficult to enroll in a full-time higher education program. Offered for individual courses, diplomas, associate’s degrees and certificate programs, online studies are a valuable option.</p>
            <p class="my-5">Tagged <router-link to="/SingleChildhoodTag/beauty" class="mx-3 text-blue-500 hover:underline">beauty</router-link> <router-link to="/SingleChildhoodTag/childs" class="me-3 text-blue-500 hover:underline">childs</router-link> <router-link to="/SingleChildhoodTag/painting" class="text-blue-500 hover:underline">painting</router-link></p>
            <h2 class="lg:text-3xl md:text-2xl text-xl font-semibold text-gray-800">Leave a Reply</h2>
            <p class="text-gray-700 my-5">Your email address will not be published. Required fields are marked *</p>
            <div class="w-full my-2">
                <label for="" class="my-input-label">Your Message (required)</label>
                <textarea name="" id="" class="input-field" cols="50" rows="5"></textarea>
            </div>
            <div class="w-full my-2">
                <label for="" class="my-input-label">Name</label>
                <input type="text" class="input-field" name="" id="">
            </div>
            <div class="w-full my-2">
                <label for="" class="my-input-label">E-Mail</label>
                <input type="email" class="input-field" name="" id="">
            </div>
            <div class="w-full my-2">
                <label for="" class="my-input-label">Website</label>
                <input type="text" class="input-field" name="" id="">
            </div>
            <div class="w-full mb-2">
                <input type="checkbox" name="degree" id="ProfessionalDiploma" class="me-2">
                <label for="ProfessionalDiploma" class="font-semibold md:text-base text-sm">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <button class="secondry-button lg:w-3/12 md:w-6/12 w-full mt-2">Post Comment</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'BeautyChildhood',
    }
</script>

<style scoped>

</style>