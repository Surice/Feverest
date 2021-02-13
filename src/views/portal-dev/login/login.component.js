import navbar from '@/components/header.vue';
import foot from '@/components/foot.vue';

import axios from 'axios';

export default {
    name: 'Login',
    data: function(){
        return{
            showDismissibleAlert: false,
            input: {
                email: "",
                password: ""
            }
        }
    },
    components: {
        navbar,
        foot
    },
    methods: {
        async submit() {
            let cookie = await axios.post('/api/user/login', this.input);

            if(cookie.status == 200){
                if(cookie.data.token){
                    this.$cookie.set('token', cookie.data.token, 30);
                    this.$router.push('/dev-portal/home');
                }else{
                    this.showDismissibleAlert = "unexpected Error";
                }
            }else if(cookie.status == 401){
                this.showDismissibleAlert = "incorrect logindata";
            }
        }
    }
}