<template>
  <div class="home">
    <navbar></navbar>
      <div class="banner-welcomen">
        <p>Welcomen!</p>
      </div>
      <div class="banner-phrases">
        <p>Go, get it!</p>
      </div>
    </div>

</template>

<script>
// @ is an alias to /src
import navbar from '@/components/header.vue'

export default {
  name: 'Home',
  components: {
    navbar
  }
}
</script>
<style>
  .home{
    height: 100vh;
    width: 100vw;
    background-image: url('../../assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
  }
  .headline{
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin-top: 5vh;
    text-decoration: underline;
  }
  .banner-welcomen{
  width: 26vw;
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
    width: 26vw;
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
