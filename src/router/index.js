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
  ]
})

export default router
