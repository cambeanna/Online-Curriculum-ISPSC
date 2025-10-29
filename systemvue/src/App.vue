<template>
  <div id="app">
    <header>
      <img class="logo" alt="logo" src="./assets/ISPSC logo.png" />
      <div class="ispsc">Ilocos Sur Polytechnic State College</div>
      <div class="curriculum">Curriculum</div>
      <Navbar />
    </header>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'navbar',
  components: { Navbar }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: rgb(176, 225, 225);
}

header {
  width: 100vw;
  background-color: #430102;
  padding: 15px;
}

.logo {
  width: 80px;
}

.ispsc {
  margin-top: -65px;
  margin-left: 90px;
  text-align: left;
  font-size: 20px;
  color: rgb(245, 177, 31);
}

.curriculum {
  margin-top: 1px;
  margin-left: 90px;
  text-align: left;
  font-size: 20px;
  color: rgb(255, 255, 255);
}
</style>
