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

    <footer class="footer">
      <div class="foo-col">
        <h5>Contact:</h5>
        <p>
          Timon Carstens, <br>
          Sebastian Ulrich <br>
          E-Mail: <a href="mailto:info@feverest.de">info@feverest.de</a>
        </p>
      </div>
      <div class="vl"></div>
      <div class="foo-col">
        <h5>Social Media:</h5>
        <div class="socials">
          <a href="https://github.com/Surice/Feverest" target="_blank">Github Repository</a>
          <a href="https://Instagram.com/Feverest" target="_blank">our Instagram</a>
        </div>
      </div>
      <div class="vl"></div>
      <div class="foo-col">
        <h5>Feedback / Bug report:</h5>
        <p>
          if you find any bugs or have a suggestion<br>
          for improvements please let us know<br>
          <br>
          <b>E-Mail: <a href="mailto:info@feverest.de?subject=Feedback / Bug report">info@feverest.de</a></b>
        </p>
      </div>
    </footer>
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
    .banner-img{
      height: 20vh;
    }
  }
  @media only screen and (min-width: 821px){
    .banner-img{
      height: 30vh;
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
    align-items: center;
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

  .footer{
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100%;
    background: rgba(10, 10, 10, 0.6);
    color: rgb(135, 135, 135);
    justify-content: space-evenly;
  }
  .footer p{
    font-size: 0.7rem;
    margin-left: 8px
  }

  .foo-col{ 
    text-align: center;
    margin: 15px;
  }
  .socials{
    display: flex;
    flex-flow: column;
  }
</style>
