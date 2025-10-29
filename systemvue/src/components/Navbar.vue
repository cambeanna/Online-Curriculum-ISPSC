<template>
  <nav id="vue">
    <div class="menu-item">
      <router-link exact-active-class="active" to="/">Home</router-link>
    </div>
    <div class="menu-item">
      <router-link exact-active-class="active" to="./Admissions"
        >Admissions</router-link
      >
    </div>
    <Campus title="Campuses" />
    <div class="menu-item">
      <router-link exact-active-class="active" to="./About">About</router-link>
    </div>
  </nav>
</template>

<script>
import Home from '../components/Home'
import Campus from '../components/Campus'
import Admissions from '../components/Admissions'
import About from '../components/About'

export default {
  name: 'navbar',
  components: { Home, Campus, Admissions, About }
}
</script>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: rgb(245, 177, 31);
  font-size: 20px;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  border-bottom-color: #0f9531;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
  color: rgb(245, 177, 31);
}
</style>
