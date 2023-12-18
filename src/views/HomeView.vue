<template>
  <div>
    <section>
      <img src="../assets/banner-1917x742.jpg" class="w-full mx-auto object-cover" alt="">
    </section>
    <section class="container mx-auto flex md:flex-nowrap flex-wrap gap-5 mt-10 sm:px-2 px-5">
      <router-link to="/about" class="lg:w-4/12 md:w-6/12">
        <div>
          <img src="../assets/about-university2.jpg" alt="about-university" class=" hover:scale-105">
          <h3 class="lg:text-2xl md:text-xl text-lg mt-3 text-primary underline text-center font-bold">About University</h3>
        </div>
      </router-link>
      <router-link to="/digitalLibrary" class="lg:w-4/12 md:w-6/12">
        <div>
        <img src="../assets/digital-library.jpg" alt="digital-library" class=" hover:scale-105">
        <h3 class="lg:text-2xl md:text-xl text-lg mt-3 text-primary underline text-center font-bold">Digital Library</h3>
      </div>
      </router-link>
      <router-link to="/ScholarshipAdmission" class="lg:w-4/12 md:w-6/12">
        <div>
          <img src="../assets/sholarship-programs.jpg" alt="sholarship-programs" class=" hover:scale-105">
          <h3 class="lg:text-2xl md:text-xl text-lg mt-3 text-primary underline text-center font-bold">Scholarship Programs</h3>
        </div>
      </router-link>
    </section>
    <section class="container mx-auto mt-10 flex sm:px-2 px-5">
      <div class="md:w-1/2 w-full">
        <img src="../assets/Untitled.png" class="w-full h-full object-cover" alt="">
      </div>
      <div class="md:w-1/2 w-full img-overlay flex items-center">
        <div class="color-overlay"></div>
        <div class="text-white relative text-center z-30">
          <h2 class="lg:text-3xl md:text-2xl text-lg my-4 font-bold">Apply for Admission</h2>
          <h2 class="md:text-xl text-lg my-4 font-bold text-secondry">Applications are now open</h2>
          <p class="md: w-10/12 mx-auto">We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their career—to discover a field they’re passionate about and dare to lead it.</p>
          <router-link to="/RegisterPage"><button class="secondry-button font-semibold my-5">Apply Now</button></router-link>
        </div>
      </div>
    </section>
    <section class="container flex mx-auto flex-wrap mt-10 text-center sm:px-2 px-5">
      <h2 class="md:text-2xl text-lg font-bold w-full text-start mb-3">DBA</h2>
      <div class="lg:w-3/12 mb-4 md:w-6/12 mx-auto pb-3 w-full shadow-lg border-t-4 border-secondry">
        <router-link to="/singleQualityManagement"><img src="../assets/total-quality-management.jpg" class="w-full" alt=""></router-link>
        <router-link to="/singleQualityManagement" class="hover:underline"><h3 class="font-semibold lg:text-xl md:text-lg text-base my-3">Doctorate in Total Quality Management</h3></router-link>
        <div class="mb-3">
          <router-link to="/singleQualityManagement"><button class="secondry2-button me-3">Details</button></router-link>
          <button class="primary-button">Register</button>
        </div>
      </div>
      <div class="lg:w-3/12 mb-4 md:w-6/12 mx-auto w-full md:ps-3">
        <div class=" shadow-lg border-t-4 pb-4 border-secondry">
          <router-link to="/ProjectManagment"><img src="../assets/project-managemen.jpg" class="w-full" alt=""></router-link>
          <router-link to="/ProjectManagment" class="hover:underline"><h3 class="font-semibold lg:text-xl md:text-lg text-base my-3">Doctorate in Businesses Project Managment</h3></router-link>
        <div class="mb-3">
          <router-link to="/ProjectManagment"><button class="secondry2-button me-3">Details</button></router-link>
          <button class="primary-button">Register</button>
        </div>
        </div>
      </div>
      <div class="lg:w-3/12 mb-4 md:w-6/12 mx-auto w-full lg:ps-3">
        <div class=" shadow-lg border-t-4 pb-4 border-secondry">
          <router-link to="/BusinessesAdministration"><img src="../assets/business1.jpg" class="w-full" alt=""></router-link>
          <router-link to="/BusinessesAdministration" class="hover:underline"><h3 class="font-semibold lg:text-xl md:text-lg text-base my-3">Doctorate in Businesses Administration</h3></router-link>
        <div class="mb-3">
          <router-link to="/BusinessesAdministration"><button class="secondry2-button me-3">Details</button></router-link>
          <button class="primary-button">Register</button>
        </div>
        </div>
      </div>
      <div class="lg:w-3/12 mb-4 md:w-6/12 mx-auto w-full md:ps-3">
        <div class="shadow-lg border-t-4 pb-4 border-secondry">
          <router-link to="/ResourcesManagment"><img src="../assets/human-resource-Management3.jpg" class="w-full" alt=""></router-link>
          <router-link to="/ResourcesManagment" class="hover:underline"><h3 class="font-semibold lg:text-xl md:text-lg text-base my-3">Doctorate in Human Resources Managment</h3></router-link>
          <div class="mb-3">
            <router-link to="/ResourcesManagment"><button class="secondry2-button me-3">Details</button></router-link>
            <button class="primary-button">Register</button>
          </div>
        </div>
      </div>
      <div class="w-full mt-3">
        <router-link to="/DPApage"><button class="secondry-button">More</button></router-link>
      </div>
    </section>
    <section class="mt-10 container flex mx-auto flex-wrap text-center sm:px-2 px-5">
      <router-link to="/ProfessionalMaster" class="hover:underline"><h2 class="md:text-2xl text-xl font-bold w-full mb-3">Professional Master Degree</h2></router-link>
      <div class="lg:w-4/12 md:w-6/12 mx-auto pb-3 w-full shadow-lg mb-4 border-t-4 border-secondry">
        <router-link to="/HospitalManagement"><img src="../assets/hospital-management.jpg" class="w-full" alt=""></router-link>
        <router-link to="/HospitalManagement" class="hover:underline"><h3 class="font-semibold lg:text-xl md:text-lg text-base my-3">Master in Hospital Management</h3></router-link>
        <div class="mb-3">
          <router-link to="/HospitalManagement"><button class="secondry2-button me-3">Details</button></router-link>
          <button class="primary-button">Register</button>
        </div>
      </div>
      <div class="lg:w-4/12 md:w-6/12 mx-auto w-full md:ps-3 mb-4">
        <div class=" shadow-lg border-t-4 pb-4 border-secondry">
          <router-link to="/AppliedNutrition"><img src="../assets/Nutrition1.jpg" class="w-full" alt=""></router-link>
          <router-link to="/AppliedNutrition" class="hover:underline"><h3 class="font-semibold lg:text-xl md:text-lg text-base my-3">Master of Applied Nutrition & Dietetics</h3></router-link>
          <div class="mb-3">
            <router-link to="/AppliedNutrition"><button class="secondry2-button me-3">Details</button></router-link>
            <button class="primary-button">Register</button>
          </div>
        </div>
      </div>
      <div class="lg:w-4/12 md:w-6/12 mx-auto w-full lg:ps-3 mb-4">
        <div class=" shadow-lg border-t-4 pb-4 border-secondry">
          <router-link to="/InfectionControl"><img src="../assets/infection-control.jpg" class="w-full" alt=""></router-link>
          <router-link to="/InfectionControl" class="hover:underline"><h3 class="font-semibold lg:text-xl md:text-lg text-base my-3">Master in Infection Control</h3></router-link>
        <div class="mb-3">
          <router-link to="/InfectionControl"><button class="secondry2-button me-3">Details</button></router-link>
          <button class="primary-button">Register</button>
        </div>
        </div>
      </div>
      <div class="w-full mt-3">
        <router-link to="/ProfessionalMaster"><button class="secondry-button">More</button></router-link>
      </div>
    </section>
    <section class="mt-10 img-overlay2 py-3 md:pb-0 pb-9 flex sm:px-2 px-5 md:justify-end justify-center items-center overflow-hidden">
      <div class="gradiant-overlay"></div>
      <div class="lg:w-1/2 md:w-2/3 md:ms-auto w-10/12 mt-10 text-white relative z-30 pe-5">
        <h2 class="font-semibold lg:text-3xl md:text-2xl text-lg text-center my-5">Searching for Certificate/ Authentication</h2>
        <h2 class="font-semibold lg:text-2xl md:text-xl text-lg text-center text-secondry my-5">Registration Verification</h2>
        <p class="lg:text-lg text-base px-1 font-semibold">This fraud prevention system can be used to verify AUST credentials held by candidates world-wide. The Credential Identification Code can be found on all certificates issued by AUST. Upon entering the Identification Code or your email, authentication details relating to the holder of the credentials will be presented.</p>
        <div class="flex flex-wrap my-5">
          <div class=" md:w-8/12 w-full pe-3 md:mb-0 mb-3">
            <input type="text" placeholder="Enter a Registration-ID." class="input-field text-black">
          </div>
          <button class="secondry-button md:w-4/12 w-6/12 md:mx-0 mx-auto">Search</button>
        </div>
      </div>
    </section>
    

  </div>
</template>

<script>
  export default {
    name:'HomeView',
    data(){
    }
  }
</script>

<style scoped>
.img-overlay{
  position: relative;
  background: url(../assets/about-university2.jpg) no-repeat 100% 100%;
}
.color-overlay{
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: #949494d3;
}
.img-overlay2{
  position: relative;
  background: url(../assets/banner-1917x742.jpg) no-repeat 100% 100%;
  min-height: 500px;
}
.gradiant-overlay{
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background: linear-gradient(to left,#49688e,rgba(0,0,0,0));
}

</style>