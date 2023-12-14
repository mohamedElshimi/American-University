<template>
    <div class="container mx-auto">
        <h1 class="title1 text-center my-5">Contact Us</h1>
        <div class="lg:w-6/12 md:w-8/12 w-11/12 my-5 flex flex-wrap mx-auto">
            <div class="w-full my-2">
                <label for="" class="my-input-label">Your Name (required)</label>
                <input type="text" class="input-field" name="" id="">
            </div>
            <div class="w-full my-2">
                <label for="" class="my-input-label">Your E-Mail (required)</label>
                <input type="email" class="input-field" name="" id="">
            </div>
            <div class="w-full my-2">
                <label for="" class="my-input-label">Subject (required)</label>
                <input type="text" class="input-field" name="" id="">
            </div>
            <div class="w-full my-2">
                <label for="" class="my-input-label">Your Message (required)</label>
                <textarea name="" id="" class="input-field" cols="50" rows="5"></textarea>
            </div>
            <button class="primary-button w-full mt-2">Send</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ContactUs'
    }
</script>

<style scoped>

</style>