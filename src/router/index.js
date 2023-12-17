import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HonorDoctor from '../views/HonorDoctor.vue'
import DPApage from '../views/DPApage.vue'
import SingleDPA from '../views/SingleDPA.vue'
import MBApage from '../views/MBApage.vue'
import ProfessionalDoctorate from '../views/ProfessionalDoctorate.vue'
import ProfessionalMaster from '../views/ProfessionalMaster.vue'
import SingleMaster from '../views/SingleMaster.vue'
import ProfessionalBachelor from '../views/ProfessionalBachelor.vue'
import ProfessionalDiploma from '../views/ProfessionalDiploma.vue'
import ContactUs from '../views/ContactUs.vue'
import GraduatedStudies from '../views/GraduatedStudies.vue'
import UndergraduateStudies from '../views/UndergraduateStudies.vue'
import RegisterPage from '../views/RegisterPage.vue'
import AgentsNpartners from '../views/AgentsNpartners.vue'
import TestCenters from '../views/TestCenters.vue'
import digitalLibrary from '../views/digitalLibrary.vue'
import ourMainTarget from '../views/ourMainTarget.vue'
import SingleTag from '../views/SingleTag.vue'
import BodyCameras from '../views/BodyCameras.vue'
import SingleCameraTag from '../views/SingleCameraTag.vue'
import USTeens from '../views/USTeens.vue'
import SingleTeensTag from '../views/SingleTeensTag.vue'
import SouthAfrican from '../views/SouthAfrican.vue'
import SingleAfricanTag from '../views/SingleAfricanTag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/honordoctor',
      name: 'honordoctor',
      component: HonorDoctor
    },
    {
      path: '/DPApage',
      name: 'DPApage',
      component: DPApage
    },
    {
      path: '/SingleDPA/:id',
      name: 'SingleDPA',
      component: SingleDPA
    },
    {
      path: '/ProfessionalMaster',
      name: 'ProfessionalMaster',
      component: ProfessionalMaster
    },
    {
      path: '/SingleMaster/:id',
      name: 'SingleMaster',
      component: SingleMaster
    },
    {
      path: '/MBApage',
      name: 'MBApage',
      component: MBApage
    },
    {
      path: '/ProfessionalDoctorate',
      name: 'ProfessionalDoctorate',
      component: ProfessionalDoctorate
    },
    {
      path: '/ProfessionalBachelor',
      name: 'ProfessionalBachelor',
      component: ProfessionalBachelor
    },
    {
      path: '/ProfessionalDiploma',
      name: 'ProfessionalDiploma',
      component: ProfessionalDiploma
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/GraduatedStudies',
      name: 'GraduatedStudies',
      component: GraduatedStudies
    },
    {
      path: '/UndergraduateStudies',
      name: 'UndergraduateStudies',
      component: UndergraduateStudies
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/AgentsNpartners',
      name: 'AgentsNpartners',
      component: AgentsNpartners
    },
    {
      path: '/TestCenters',
      name: 'TestCenters',
      component: TestCenters
    },
    {
      path: '/digitalLibrary',
      name: 'digitalLibrary',
      component: digitalLibrary
    },
    {
      path: '/ourMainTarget',
      name: 'ourMainTarget',
      component: ourMainTarget
    },
    {
      path: '/SingleTag/:name',
      name: 'SingleTag',
      component: SingleTag
    },
    {
      path: '/BodyCameras',
      name: 'BodyCameras',
      component: BodyCameras
    },
    {
      path: '/USTeens',
      name: 'USTeens',
      component: USTeens
    },
    {
      path: '/SouthAfrican',
      name: 'SouthAfrican',
      component: SouthAfrican
    },
    {
      path: '/SingleCameraTag/:name',
      name: 'SingleCameraTag',
      component: SingleCameraTag
    },
    {
      path: '/SingleTeensTag/:name',
      name: 'SingleTeensTag',
      component: SingleTeensTag
    },
    {
      path: '/SingleAfricanTag/:name',
      name: 'SingleAfricanTag',
      component: SingleAfricanTag
    },
  ]
})

export default router
