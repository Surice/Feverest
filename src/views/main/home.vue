<template>
  <div class="home" id="all">
    <navbar></navbar>
    
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
    height: 100vh;
    width: 100vw;
    background-color: rgb(162, 177, 121);
    background-image: url('../../assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
  }
  .banner-welcomen{
  position: fixed;
  right: 24vw;
  top: 40vh;
  }
  .banner-welcomen p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
    font-size: 64px;
  }
  .banner-phrases{
    position: fixed;
    left: 60vw;
    top: 50vh;
  }
  .banner-phrases p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
    font-size: 48px;
  }
</style>
