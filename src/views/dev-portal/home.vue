<template>
  <div class="home">
    <navbar></navbar>
    <br>
    <h1 class="headline">Welcome to the Dev-Portal, {{ user.username }}</h1>
    <br>
    <br>

    <div class="dashboard">
      <div class="pattern">
        <img src="@/assets/logo.png" alt="Logo" class="img">
      </div>
      <div class="pattern">
        <h3>Registered Users</h3>
        <p>Acount Count: {{ accountsCount }}</p>
      </div>
      <div class="pattern">
        <h3>Visits</h3>
        <p>total Visits: {{ visits }}</p>
      </div>
      <div class="pattern">
        <h3>Time</h3>
        <p class="clock">
            {{ clock.time }}
        </p>
        <p class="date">
            {{ clock.date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/header.vue';
import foot from '@/components/foot.vue';

import axios from 'axios';

export default {
  name: 'Home',
  data: function(){
    return{
      user: {
        username: "--none--"
      },
      visits: 0,
      accountsCount: 0,
      clock: {
        time: "HH:MM:SS",
        date: "Day DD.MM.YYYY"
      },
    }
  },
  mounted(){
    const self = this;
    setInterval(() =>{
      const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

      let now = new Date(),
          hh = now.getHours(),
          mm = now.getMinutes(),
          ss = now.getSeconds(),
          day = days[now.getDay()],
          date = now.toLocaleDateString();

      self.clock.time = `${self.format(hh)}:${self.format(mm)}:${self.format(ss)}`;
      self.clock.date = `${day}, ${date}`;
    }, 1000);
  },
  components: {
    navbar
  },
  methods: {
    format(item){
      return item.toString().padStart(2, "0");
    }
  }
}
</script>
<style scoped>
  @media only screen and (max-width: 820px){

  }
  @media only screen and (min-width: 821px){

  }

  .home{
    width: 100vw;
    height: 100vh;
  }
  h3{
    font-weight: bold;
  }

  .dashboard{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
  .img{
    width: 8vw;
    border: none;
    border-radius: 3px;
    box-shadow: 3px 4px 6px rgb(24, 24, 24);
  }
  .pattern{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    background: rgb(73, 73, 73);
    color: white;
    border: none;
    border-radius: 4px;
    box-shadow: 3px 4px 10px rgb(24, 24, 24);
    padding: 16px;
    margin: 30px;
    margin-left: 6vw;
    margin-right: 6vw;
    font-size: 1.6rem;
  }
  .pattern p{
    margin: 0
  }

</style>
