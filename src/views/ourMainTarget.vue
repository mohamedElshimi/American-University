<template>
    <div class="w-10/12 mx-auto">
        <div class="my-7">
            <h2 class="lg:text-4xl md:text-3xl text-xl font-semibold">Our main target is to “Developing Yourself as a Leader”</h2>
            <p class="my-5">Tagged <router-link to="/SingleTag/developing" class="mx-3 text-blue-500 hover:underline">developing</router-link> <router-link to="/SingleTag/leader" class="me-3 text-blue-500 hover:underline">leader</router-link> <router-link to="/SingleTag/target" class="text-blue-500 hover:underline">target</router-link></p>
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
        name:'ourMainTarget',
    }
</script>

<style scoped>

</style>