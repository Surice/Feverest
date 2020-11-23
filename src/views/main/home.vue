<template>
  <div class="home" id="home">
    <navbar></navbar>
      <img src='../../assets/tastatur.jpg' class="banner-img">

      <div class="banner-welcome">
        <p>Welcome!</p>
      </div>
      <div class="banner-phrases">
        <p ref="typedText"></p> 
      </div>

      <img src='../../assets/computer.jpg' class="main-img">
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/header.vue'

import Typed from 'typed.js';

export default {
  name: 'Home',
  data: function(){
    return{
      splashes: [
        "Take it, or leave it!",
        "Go, get it!",
        "Go for win",
        "from gamer, for gamer"
      ]
    }
  },
  mounted(){
    this.typedJs();
  },
  components: {
    navbar
  },
  methods: {
    typedJs: function() {
      const options = {
        strings: this.splashes,
        typeSpeed: 70,
        backSpeed: 30,
        startDelay: 400,
        backDelay: 2000,
        loop: true,
        showCursor: false,
        shuffel: true,
        smartBackspace: false
      };

      var typed = new Typed(this.$refs.typedText, options);
    }
  }
}
</script>
<style scoped>
  .home{
    height: 35vh;
    width: 100vw;
  }
  
  .banner-img{
    width: 100vw;
    height: 30vh;
    object-fit: cover;
    object-position: 20% 50%;
  }  
  .main-img{
    margin-top: 8vh;
    margin-left: 5vw;
    height: 35vh;
    width: 45vw;
    object-fit: cover;
    border-radius: 5px;
  }

  .banner-welcome{
  position: fixed;
  right: 26vw;
  top: 50vh;
  }
  .banner-welcome p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 64px;
    color: white;
  }
  .banner-phrases{
    position: fixed;
    left: 60vw;
    top: 60vh;
    color: white;
  }
  .banner-phrases p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 48px;
  }
</style>
