<template>
  <div class="home">
    <navbar></navbar>
    <img class="logo" alt="Vue logo" src="../../assets/logo.png">   
    <div class="headline">
      <h1>Home!</h1>
    </div>

    <div>
      <b-dropdown id="dropdown-offset" offset="25" text="Offset Dropdown" class="m-2">
        <b-dropdown-item href="#">Action</b-dropdown-item>
        <b-dropdown-item href="#">Another action</b-dropdown-item>
        <b-dropdown-item href="#">Something else here</b-dropdown-item>
      </b-dropdown>
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
    background-image: url('https://cdn.pixabay.com/photo/2016/04/18/16/22/gradient-1336854_960_720.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
  }

  .logo{
    position: absolute;
    margin: 2em;
  }

  .headline{
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin-top: 5vh;
    text-decoration: underline;
  }
</style>
