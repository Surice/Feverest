import navbar from '@/components/header/header.component.vue';
import foot from '@/components/foot.vue';

import axios from 'axios';

export default {
    name: 'Login',
    data: function(){
        return{
            showDismissibleAlert: {
                trigger: false,
                content: ""
            },
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
            let self = this,
                cookieBanner = localStorage.getItem('cookie:accepted');

            if(cookieBanner != "true"){
                this.showDismissibleAlert.trigger = true;
                this.showDismissibleAlert.content = "please accept Cookies";

                localStorage.removeItem('cookie:accepted');

                return
            }


            await axios.post('/api/user/login', this.input).then(cookie => {
                if(cookie.data.token){
                    this.$cookie.set('token', cookie.data.token, 30);
                    this.$router.push('/dev-portal/home');
                }
            }).catch(err=> {
                self.showDismissibleAlert.trigger = true;
                self.showDismissibleAlert.content = "incorrect logindata";
            });
        }
    }
}