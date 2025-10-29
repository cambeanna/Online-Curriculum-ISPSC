<template>
  <div id="homepage" class="homepage">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xl-5">
          <div class="text-container">
            <h1 class="h1-large">
              Explore what journey you will take to fulfill your dreams!
            </h1>
            <a class="details">
              <router-link to="/">See More!</router-link>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
/******************/
/*     Header     */
/******************/
h1 {
  color: #021d35;
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 3.25rem;
  letter-spacing: 0.4px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.homepage {
  padding-top: 8rem;
  padding-bottom: 15em;
  background: url("../assets/ispsc_gate.jpg") center center no-repeat;
  background-size: cover;
  text-align: center;
}

.details {
  display: inline-block;
  padding: 1.625rem 2.625rem 1.625rem 2.625rem;
  border: 1px solid #0092ff;
  border-radius: 30px;
  background-color: #2476ba;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.876rem;
  line-height: 0;
  text-decoration: none;
  transition: all 0.2s;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.details a:hover {
  background-color: transparent;
  color: #04365c; /* needs to stay here because of the color property of a tag */
  text-decoration: none;
}
</style>
