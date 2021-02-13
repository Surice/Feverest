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
            let cookie = false;
            try{
                await axios.post('/api/user/login', this.input);
            }catch(err) {
                this.showDismissibleAlert = "cannot connect to backend";
            }

            if(cookie.status == 200){
                if(cookie.data.token){
                    this.$cookie.set('token', cookie.data.token, 30);
                    this.$router.push('/dev-portal/home');
                }else{
                    this.showDismissibleAlert = "login data Incorrect";
                }
            }else{
                this.showDismissibleAlert = "unexpected Error";
            }
        }
    }
}