<template>
  <div class="home" id="all">
    <navbar></navbar>
    
    <div class="banner-welcomen">
      <p>Welcomen!</p>
    </div>
    <div class="banner-phrases">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/header.vue'

export default {
  name: 'Home',
  data: function(){
    return{
      text: "Take it, or leave it!"
    }
  },
  components: {
    navbar
  }
}
</script>
<style>
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
    right: 14vw;
    top: 50vh;
  }
  .banner-phrases p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
    font-size: 48px;
  }
</style>
