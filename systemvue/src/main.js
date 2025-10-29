// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Campus from './components/Campus'
import Navbar from './components/Navbar'
import CandonCampus from './components/Campuses/CandonCampus'
import CervantesCampus from './components/Campuses/CervantesCampus'
import NLPSCMainCampus from './components/Campuses/NLPSCMainCampus'
import NarvacanCampus from './components/Campuses/NarvacanCampus'
import SanJuanCampus from './components/Campuses/SanJuanCampus'
import SantiagoCampus from './components/Campuses/SantiagoCampus'
import SantaMariaCampus from './components/Campuses/SantaMariaCampus'
import TagudinCampus from './components/Campuses/TagudinCampus'
import GraduateSchool from './components/Campuses/GraduateSchool'
import LaboratoryHighSchool from './components/Campuses/LaboratoryHighSchool'

import BachelorofScienceinInformationTechnology from './components/Campuses/CandonCampus/CourseOffered/BachelorofScienceinInformationTechnology'
import BachelorofScienceinHospitalityManagement from './components/Campuses/CandonCampus/CourseOffered/BachelorofScienceinHospitalityManagement'
import BachelorofTourismManagement from './components/Campuses/CandonCampus/CourseOffered/BachelorofTourismManagement'
import BachelorofScienceinSecondaryEducation from './components/Campuses/CandonCampus/CourseOffered/BachelorofScienceinSecondaryEducation'
import BachelorofElementaryEducation from './components/Campuses/CervantesCampus/CourseOffered/BachelorofElementaryEducation'
import BachelorofTechnologyandLivelihoodEducation from './components/Campuses/CervantesCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation'
import BachelorofTechnicalVocationalTeacherEducation from './components/Campuses/CervantesCampus/CourseOffered/BachelorofTechnicalVocationalTeacherEducation'
import BachelorofScienceinScienceinInformationTechnology from './components/Campuses/CervantesCampus/CourseOffered/BachelorofScienceinScienceinInformationTechnology'
import BachelorofScienceinCriminology from './components/Campuses/CervantesCampus/CourseOffered/BachelorofScienceinCriminology'
import BachelorofArtsinEnglishLanguage from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofArtsinEnglishLanguage'
import BachelorofArtsinPoliticalScience from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofArtsinPoliticalScience'
import BachelorofScienceinComputerScience from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinComputerScience'
import BachelorofTechnologyandLivelihoodEducation1 from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation1'
import BachelorofScienceinMidwifery from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinMidwifery'
import BachelorofScienceBusinessAdministration from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceBusinessAdministration'
import BachelorofScienceinOfficeAdministration from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinOfficeAdministration'
import BachelorofSecondaryEducation from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofSecondaryEducation'
import BachelorofElementaryEducation1 from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofElementaryEducation1'
import BachelorofCultureandArtsEducation from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofCultureandArtsEducation'
import BachelorofPhysicalEducation from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofPhysicalEducation'
import BachelorofScienceinCriminology1 from './components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinCriminology1'
import BachelorofTechnologyandLivelihoodEducation2 from './components/Campuses/NarvacanCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation2'
import BachelorofTechnicalVocationalTeacherEducation1 from './components/Campuses/NarvacanCampus/CourseOffered/BachelorofTechnicalVocationalTeacherEducation1'
import BachelorofPhysicalEducation1 from './components/Campuses/NarvacanCampus/CourseOffered/BachelorofPhysicalEducation1'
import BachelorofScienceinIndustrialTechnology from './components/Campuses/SantiagoCampus/CourseOffered/BachelorofScienceinIndustrialTechnology'
import BachelorinTechnicalVocationalTeacherEducation from './components/Campuses/SantiagoCampus/CourseOffered/BachelorinTechnicalVocationalTeacherEducation'
import BachelorofScienceinMechanicsTechnology from './components/Campuses/SantiagoCampus/CourseOffered/BachelorofScienceinMechanicsTechnology'

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  { path: '/Campus', component: Campus },
  { path: '/Navbar', component: Navbar },
  { path: '/Campuses/CandonCampus', component: CandonCampus },
  { path: '/Campuses/CervantesCampus', component: CervantesCampus },
  { path: '/Campuses/NLPSCMainCampus', component: NLPSCMainCampus },
  { path: '/Campuses/NarvacanCampus', component: NarvacanCampus },
  { path: '/Campuses/SanJuanCampus', component: SanJuanCampus },
  { path: '/Campuses/SantiagoCampus', component: SantiagoCampus },
  { path: '/Campuses/SantaMariaCampus', component: SantaMariaCampus },
  { path: '/Campuses/TagudinCampus', component: TagudinCampus },
  { path: '/Campuses/GraduateSchool', component: GraduateSchool },
  { path: '/Campuses/LaboratoryHighSchool', component: LaboratoryHighSchool },
  { path: '/Campuses/CandonCampus/CourseOffered/BachelorofScienceinInformationTechnology', component: BachelorofScienceinInformationTechnology },
  { path: '/Campuses/CandonCampus/CourseOffered/BachelorofScienceinHospitalityManagement', component: BachelorofScienceinHospitalityManagement },
  { path: '/Campuses/CandonCampus/CourseOffered/BachelorofTourismManagement', component: BachelorofTourismManagement },
  { path: '/Campuses/CandonCampus/CourseOffered/BachelorofScienceinSecondaryEducation', component: BachelorofScienceinSecondaryEducation },
  { path: '/Campuses/CervantesCampus/CourseOffered/BachelorofElementaryEducation', component: BachelorofElementaryEducation },
  { path: '/Campuses/CervantesCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation', component: BachelorofTechnologyandLivelihoodEducation },
  { path: '/Campuses/CervantesCampus/CourseOffered/BachelorofTechnicalVocationalTeacherEducation', component: BachelorofTechnicalVocationalTeacherEducation },
  { path: '/Campuses/CervantesCampus/CourseOffered/BachelorofScienceinScienceinInformationTechnology', component: BachelorofScienceinScienceinInformationTechnology },
  { path: '/Campuses/CervantesCampus/CourseOffered/BachelorofScienceinCriminology', component: BachelorofScienceinCriminology },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofArtsinEnglishLanguage', component: BachelorofArtsinEnglishLanguage },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofArtsinPoliticalScience', component: BachelorofArtsinPoliticalScience },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinComputerScience', component: BachelorofScienceinComputerScience },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation1', component: BachelorofTechnologyandLivelihoodEducation1 },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinMidwifery', component: BachelorofScienceinMidwifery },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceBusinessAdministration', component: BachelorofScienceBusinessAdministration },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinOfficeAdministration', component: BachelorofScienceinOfficeAdministration },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofSecondaryEducation', component: BachelorofSecondaryEducation },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofElementaryEducation1', component: BachelorofElementaryEducation1 },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofCultureandArtsEducation', component: BachelorofCultureandArtsEducation },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofPhysicalEducation', component: BachelorofPhysicalEducation },
  { path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinCriminology1', component: BachelorofScienceinCriminology1 },
  { path: '/Campuses/NarvacanCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation2', component: BachelorofTechnologyandLivelihoodEducation2 },
  { path: '/Campuses/NarvacanCampus/CourseOffered/BachelorofTechnicalVocationalTeacherEducation1', component: BachelorofTechnicalVocationalTeacherEducation1 },
  { path: '/Campuses/NarvacanCampus/CourseOffered/BachelorofPhysicalEducation1', component: BachelorofPhysicalEducation1 },
  { path: '/Campuses/SantiagoCampus/CourseOffered/BachelorofScienceinIndustrialTechnology', component: BachelorofScienceinIndustrialTechnology },
  { path: '/Campuses/SantiagoCampus/CourseOffered/BachelorinTechnicalVocationalTeacherEducation', component: BachelorinTechnicalVocationalTeacherEducation },
  { path: '/Campuses/SantiagoCampus/CourseOffered/BachelorofScienceinMechanicsTechnology', component: BachelorofScienceinMechanicsTechnology },
]
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
