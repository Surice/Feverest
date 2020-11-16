<template>
  <div class="home" id="all">
    <navbar></navbar>
      <img src='../../assets/computer.jpg' class="background-img">

      <div class="banner-welcomen">
        <p>Welcomen!</p>
      </div>
      <div class="banner-phrases">
        <p ref="typedText"></p> 
      </div>
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
      texts: [
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
        strings: this.texts,
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
    background-image: url('../../assets/tastatur.jpg');
    /* background-image: url('https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_960_720.jpg'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center ;
  }  
  .background-img{
    margin-top: 35vh;
    margin-left: 2vw;
    height: 35vh;
    width: 45vw;
    object-fit: cover;
    border-radius: 5px;
  }
  .banner-welcomen{
  position: fixed;
  right: 26vw;
  top: 40vh;
  }
  .banner-welcomen p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 64px;
    color: white;
  }
  .banner-phrases{
    position: fixed;
    left: 60vw;
    top: 50vh;
    color: white;
  }
  .banner-phrases p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 48px;
  }
</style>
