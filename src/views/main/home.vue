<template>
  <div class="home">
    <navbar></navbar>
      <h1>Home!</h1>
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
    background-image: url('https://cdn.pixabay.com/photo/2018/03/08/09/10/dawn-3208158_1280.jpg');
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
</style>
