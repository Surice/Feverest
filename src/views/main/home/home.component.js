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