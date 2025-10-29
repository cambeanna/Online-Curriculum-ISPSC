<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <a href="#">
      {{ title }}
    </a>
    <svg viewBox="0 0 1030 638" width="10">
      <path
        d="M1017 68L541 626q-11 12-16 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
        fill="#fff"
      ></path>
    </svg>
    <transition name="fade" appear>
      <div class="sub-menu1" v-if="isOpen">
        <div class="menu-item">
          <div class="menu-item1">
            <router-link to="/Campuses/CandonCampus">Candon Campus</router-link>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item1">
            <router-link to="/Campuses/CervantesCampus"
              >Cervantes Campus</router-link
            >
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item1">
            <router-link to="/Campuses/NLPSCMainCampus">NLPSC Main Campus</router-link>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item1">
            <router-link to="/Campuses/NarvacanCampus"
              >Narvacan Campus</router-link
            >
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item1">
            <router-link to="/Campuses/SanJuanCampus"
              >San Juan Campus</router-link
            >
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item1">
            <router-link to="/Campuses/SantiagoCampus"
              >Santiago Campus</router-link
            >
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item1">
            <router-link to="/Campuses/SantaMariaCampus"
              >Sta. Maria Campus</router-link
            >
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item1">
            <router-link to="/Campuses/TagudinCampus"
              >Tagudin Campus</router-link
            >
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item1">
            <router-link to="/Campuses/GraduateSchool"
              >Graduate School</router-link
            >
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-item1">
            <router-link to="/Campuses/LaboratoryHighSchool"
              >Laboratory High School</router-link
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<!-- to export the academics dropdown -->
<script>
export default {
  name: 'Campus',
  props: ['title'],
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style>
nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}

nav .menu-item1 {
  color: #ffffff;
}

nav .menu-item .sub-menu1 {
  position: absolute;
  background-color: #430102;
  top: calc(100% + 18px);
  left: 100%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 12px 12px;
  z-index: 1;
}

.sub-menu1 {
  max-height: 350px;
  overflow-y: scroll;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
