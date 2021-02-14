import navbar from '@/components/header/header.component.vue';
import axios from 'axios';

export default {
    name: 'Free_Games',
    data: function() {
        return{
            date: "--none--",
            reqUrl: `/api/gameStores/getFreeGames`,
            contents: [],
        }
    },
    components: {
        navbar
    },
    mounted(){
        axios
            .get(this.reqUrl)
            .then(response => {
                this.date = response.data.state;
                this.contents = response.data.data;
            });
    }
}