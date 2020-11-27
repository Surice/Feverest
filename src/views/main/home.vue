<template>
  <div class="home" id="home">
    <navbar></navbar>
      <img src='../../assets/tastatur.jpg' class="banner-img">

      <div class="content">
        <img src='../../assets/computer.jpg' class="main-img">

        <div class="banner">
          <div class="banner-welcome">
            <p>Welcome!</p>
          </div>
          <div class="banner-phrases">
            <p ref="typedText"></p> 
          </div>
        </div>
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
@media only screen and (max-width: 820px){
  .main-img{
    display: none;
  }
}

  .home{
    width: 100vw;
  }
  .content{
    height: 50vh;
    display: flex;
    align-items: center;
  }
  .banner-img{
    width: 100vw;
    height: 30vh;
    object-fit: cover;
    object-position: 20% 50%;
  }  
  .main-img{
    margin-left: 5vw;
    height: 35vh;
    width: 45vw;
    object-fit: cover;
    border-radius: 5px;
  }

  .banner-welcome{
    margin-left: 8vw;
  }
  .banner-welcome p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 64px;
    color: white;
    text-shadow: 3px 2px 4px rgb(36, 36, 36);
  }
  .banner-phrases{
    margin-left: 10vw;
  }
  .banner-phrases p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 48px;
    color: white;
    text-shadow: 3px 2px 4px rgb(36, 36, 36);
  }
</style>
