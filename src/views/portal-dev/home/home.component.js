import navbar from '@/components/header/header.component.vue';

import axios from 'axios';

export default {
  name: 'Home',
  data: function(){
    return{
      reqUrl: "/api",
      user: {
        username: "--none--"
      },
      visits: {
        total: 0,
        temp: 0
      },
      accountsCount: 0,
      clock: {
        time: "HH:MM:SS",
        date: "Day DD.MM.YYYY"
      },
    }
  },
  async mounted(){
    this.visits = (await axios.get(this.reqUrl+ "/analytics/getVisits")).data.count;
    this.accountsCount = (await axios.get(this.reqUrl+ "/analytics/getRegisteredUsers")).data.count;

    this.user = (await axios.get(this.reqUrl+ "/user/getUser")).data.check;


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
    },
    pullGit(){
      console.log("pulling...");
    }
  }
}