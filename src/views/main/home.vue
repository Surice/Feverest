<template>
  <div class="home">
    <navbar></navbar>
    <img src='@/assets/tastatur.jpg' class="banner-img">

    <div class="content">
      <img src='@/assets/computer.jpg' class="main-img">

      <div class="banner">
        <div class="banner-welcome">
          <p>Welcome!</p>
        </div>
        <div class="banner-phrases">
          <p ref="typedText"></p> 
        </div>
      </div>
    </div>

    <foot></foot>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/header.vue';
import foot from '@/components/foot.vue';

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
    navbar,
    foot
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
    .banner-img{
      height: 20vh;
    }
  }
  @media only screen and (min-width: 821px){
    .banner-img{
      height: 30vh;
    }
    .content{
      align-items: center;
    }
  }

  .vl{
    display: none;
    height: 100%;
    border-left: 4px solid black
  }

  .home{
    width: 100vw;
    height: 100vh;
  }
  .content{
    height: 50vh;
    display: flex;
  }
  .banner-img{
    width: 100vw;
    object-fit: cover;
    object-position: 20% 50%;
  }
  .main-img{
    margin-left: 5vw;
    height: 35vh;
    width: 45vw;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 3px 4px 6px 2px rgba(0, 0, 0, 0.6);
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
    height: 48px;
  }
  .banner-phrases p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 500;
    font-size: 48px;
    color: white;
    text-shadow: 3px 2px 4px rgb(36, 36, 36);
  }
</style>
