import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Campus from '@/components/Campus'
import Admissions from '@/components/Admissions'
import About from '@/components/About'
import CandonCampus from '@/components/Campuses/CandonCampus'
import CervantesCampus from '@/components/Campuses/CervantesCampus'
import NLPSCMainCampus from '@/components/Campuses/NLPSCMainCampus'
import NarvacanCampus from '@/components/Campuses/NarvacanCampus'
import SanJuanCampus from '@/components/Campuses/SanJuanCampus'
import SantiagoCampus from '@/components/Campuses/SantiagoCampus'
import SantaMariaCampus from '@/components/Campuses/SantaMariaCampus'
import TagudinCampus from '@/components/Campuses/TagudinCampus'

import BachelorofScienceinInformationTechnology from '@/components/Campuses/CandonCampus/CourseOffered/BachelorofScienceinInformationTechnology'
import BachelorofScienceinHospitalityManagement from '@/components/Campuses/CandonCampus/CourseOffered/BachelorofScienceinHospitalityManagement'
import BachelorofTourismManagement from '@/components/Campuses/CandonCampus/CourseOffered/BachelorofTourismManagement'
import BachelorofScienceinSecondaryEducation from '@/components/Campuses/CandonCampus/CourseOffered/BachelorofScienceinSecondaryEducation'
import BachelorofElementaryEducation from '@/components/Campuses/CervantesCampus/CourseOffered/BachelorofElementaryEducation'
import BachelorofTechnologyandLivelihoodEducation from '@/components/Campuses/CervantesCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation'
import BachelorofTechnicalVocationalTeacherEducation from '@/components/Campuses/CervantesCampus/CourseOffered/BachelorofTechnicalVocationalTeacherEducation'
import BachelorofScienceinScienceinInformationTechnology from '@/components/Campuses/CervantesCampus/CourseOffered/BachelorofScienceinScienceinInformationTechnology'
import BachelorofScienceinCriminology from '@/components/Campuses/CervantesCampus/CourseOffered/BachelorofScienceinCriminology'
import BachelorofArtsinEnglishLanguage from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofArtsinEnglishLanguage'
import BachelorofArtsinPoliticalScience from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofArtsinPoliticalScience'
import BachelorofScienceinComputerScience from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinComputerScience'
import BachelorofTechnologyandLivelihoodEducation1 from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation1'
import BachelorofScienceinMidwifery from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinMidwifery'
import BachelorofScienceBusinessAdministration from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceBusinessAdministration'
import BachelorofScienceinOfficeAdministration from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinOfficeAdministration'
import BachelorofSecondaryEducation from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofSecondaryEducation'
import BachelorofElementaryEducation1 from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofElementaryEducation1'
import BachelorofCultureandArtsEducation from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofCultureandArtsEducation'
import BachelorofPhysicalEducation from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofPhysicalEducation'
import BachelorofScienceinCriminology1 from '@/components/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinCriminology1'
import BachelorofTechnologyandLivelihoodEducation2 from '@/components/Campuses/NarvacanCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation2'
import BachelorofTechnicalVocationalTeacherEducation1 from '@/components/Campuses/NarvacanCampus/CourseOffered/BachelorofTechnicalVocationalTeacherEducation1'
import BachelorofPhysicalEducation1 from '@/components/Campuses/NarvacanCampus/CourseOffered/BachelorofPhysicalEducation1'
import BachelorofScienceinIndustrialTechnology from '@/components/Campuses/SantiagoCampus/CourseOffered/BachelorofScienceinIndustrialTechnology'
import BachelorinTechnicalVocationalTeacherEducation from '@/components/Campuses/SantiagoCampus/CourseOffered/BachelorinTechnicalVocationalTeacherEducation'
import BachelorofScienceinMechanicsTechnology from '@/components/Campuses/SantiagoCampus/CourseOffered/BachelorofScienceinMechanicsTechnology'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Campus',
      name: 'Campus',
      component: Campus
	},
    {
      path: '/Admissions',
      name: 'Admissions',
      component: Admissions
	},
    {
      path: '/About',
      name: 'About',
      component: About
	},
    {
      path: '/Campuses/CandonCampus',
      name: 'CandonCampus',
      component: CandonCampus
	},
    {
      path: '/Campuses/CervantesCampus',
      name: 'CervantesCampus',
      component: CervantesCampus
	},
    {
      path: '/Campuses/NLPSCMainCampus',
      name: 'NLPSCMainCampus',
      component: NLPSCMainCampus
	},
    {
      path: '/Campuses/NarvacanCampus',
      name: 'NarvacanCampus',
      component: NarvacanCampus
	},
    {
      path: '/Campuses/SanJuanCampus',
      name: 'SanJuanCampus',
      component: SanJuanCampus
	},
    {
      path: '/Campuses/SantiagoCampus',
      name: 'SantiagoCampus',
      component: SantiagoCampus
	},
    {
      path: '/Campuses/SantaMariaCampus',
      name: 'SantaMariaCampus',
      component: SantaMariaCampus
	},
    {
      path: '/Campuses/TagudinCampus',
      name: 'TagudinCampus',
      component: TagudinCampus
	},
    {
      path: '/Campuses/GraduateSchool',
      name: 'GraduateSchool',
      component: GraduateSchool
	},
    {
      path: '/Campuses/LaboratoryHighSchool',
      name: 'LaboratoryHighSchool',
      component: LaboratoryHighSchool
	},
    {
      path: '/Campuses/CandonCampus/CourseOffered/BachelorofScienceinInformationTechnology',
      name: 'BachelorofScienceinInformationTechnology',
      component: BachelorofScienceinInformationTechnology
	},
    {
      path: '/Campuses/CandonCampus/CourseOffered/BachelorofScienceinHospitalityManagement',
      name: 'BachelorofScienceinHospitalityManagement',
      component: BachelorofScienceinHospitalityManagement
	},
    {
      path: '/Campuses/CandonCampus/CourseOffered/BachelorofTourismManagement',
      name: 'BachelorofTourismManagement',
      component: BachelorofTourismManagement
	},
    {
      path: '/Campuses/CandonCampus/CourseOffered/BachelorofScienceinSecondaryEducation',
      name: 'BachelorofScienceinSecondaryEducation',
      component: BachelorofScienceinSecondaryEducation
	},
    {
      path: '/Campuses/CervantesCampus/CourseOffered/BachelorofElementaryEducation',
      name: 'BachelorofElementaryEducation',
      component: BachelorofElementaryEducation
	},
    {
      path: '/Campuses/CervantesCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation',
      name: 'BachelorofTechnologyandLivelihoodEducation',
      component: BachelorofTechnologyandLivelihoodEducation
	},
    {
      path: '/Campuses/CervantesCampus/CourseOffered/BachelorofTechnicalVocationalTeacherEducation',
      name: 'BachelorofTechnicalVocationalTeacherEducation',
      component: BachelorofTechnicalVocationalTeacherEducation
	},
    {
      path: '/Campuses/CervantesCampus/CourseOffered/BachelorofScienceinScienceinInformationTechnology',
      name: 'BachelorofScienceinScienceinInformationTechnology',
      component: BachelorofScienceinScienceinInformationTechnology
	},
    {
      path: '/Campuses/CervantesCampus/CourseOffered/BachelorofScienceinCriminology',
      name: 'BachelorofScienceinCriminology',
      component: BachelorofScienceinCriminology
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofArtsinEnglishLanguage',
      name: 'BachelorofArtsinEnglishLanguage',
      component: BachelorofArtsinEnglishLanguage
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofArtsinPoliticalScience',
      name: 'BachelorofArtsinPoliticalScience',
      component: BachelorofArtsinPoliticalScience
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinComputerScience',
      name: 'BachelorofScienceinComputerScience',
      component: BachelorofScienceinComputerScience
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation1',
      name: 'BachelorofTechnologyandLivelihoodEducation1',
      component: BachelorofTechnologyandLivelihoodEducation1
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinMidwifery',
      name: 'BachelorofScienceinMidwifery',
      component: BachelorofScienceinMidwifery
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceBusinessAdministration',
      name: 'BachelorofScienceBusinessAdministration',
      component: BachelorofScienceBusinessAdministration
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinOfficeAdministration',
      name: 'BachelorofScienceinOfficeAdministration',
      component: BachelorofScienceinOfficeAdministration
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofSecondaryEducation',
      name: 'BachelorofSecondaryEducation',
      component: BachelorofSecondaryEducation
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofElementaryEducation1',
      name: 'BachelorofElementaryEducation1',
      component: BachelorofElementaryEducation1
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofCultureandArtsEducation',
      name: 'BachelorofCultureandArtsEducation',
      component: BachelorofCultureandArtsEducation
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofPhysicalEducation',
      name: 'BachelorofPhysicalEducation',
      component: BachelorofPhysicalEducation
	},
    {
      path: '/Campuses/NLPSCMainCampus/CourseOffered/BachelorofScienceinCriminology1',
      name: 'BachelorofScienceinCriminology1',
      component: BachelorofScienceinCriminology1
	},
    {
      path: '/Campuses/NarvacanCampus/CourseOffered/BachelorofTechnologyandLivelihoodEducation2',
      name: 'BachelorofTechnologyandLivelihoodEducation2',
      component: BachelorofTechnologyandLivelihoodEducation2
	},
    {
      path: '/Campuses/NarvacanCampus/CourseOffered/BachelorofTechnicalVocationalTeacherEducation1',
      name: 'BachelorofTechnicalVocationalTeacherEducation1',
      component: BachelorofTechnicalVocationalTeacherEducation1
	},
    {
      path: '/Campuses/NarvacanCampus/CourseOffered/BachelorofPhysicalEducation1',
      name: 'BachelorofPhysicalEducation1',
      component: BachelorofPhysicalEducation1
	},
    {
      path: '/Campuses/SantiagoCampus/CourseOffered/BachelorofScienceinIndustrialTechnology',
      name: 'BachelorofScienceinIndustrialTechnology',
      component: BachelorofScienceinIndustrialTechnology
	},
    {
      path: '/Campuses/SantiagoCampus/CourseOffered/BachelorinTechnicalVocationalTeacherEducation',
      name: 'BachelorinTechnicalVocationalTeacherEducation',
      component: BachelorinTechnicalVocationalTeacherEducation
	},
    {
      path: '/Campuses/SantiagoCampus/CourseOffered/BachelorofScienceinMechanicsTechnology',
      name: 'BachelorofScienceinMechanicsTechnology',
      component: BachelorofScienceinMechanicsTechnology
	},
  ]
})
