<template>
    <div class="login">

        <navbar></navbar>
        <br>
        <h1 class="headline">DEV-Login</h1>
        
        <div class="content">
            <div class="card" style="width: 18rem;">
                <div class="card-header align-items-center">Login</div>
                <div class="card-body">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-bind="input.email" id="email" type="text" name="email" class="form-control">
                        <br>
                        <label for="password">Password</label>
                        <input v-bind="input.password" id="password" type="password" name="password" class="form-control">
                        <br>
                        <button v-on:click="submit" class="btn btn-primary mb-3">Submit!</button>

                        <div class="row">
                            <div class="alert alert-danger p-1" style="display: inline-block; margin-top: 8px;" role="alert"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/header.vue';
import foot from '@/components/foot.vue';

import axios from 'axios';

export default {
    name: 'Login',
    data: function(){
        return{
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
                }
            }
        }
    }
}
</script>
<style scoped>
    .login{
        height: 100vh;
        display: flex;
        flex-flow: column;
        align-items: center;
        background: url('./../../assets/road.jpg')
    }
    .content{
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card{
        border: none;
        box-shadow: 4px 5px 8px rgb(24, 24, 24);
    }
    .card-header{
        background: rgb(70, 144, 255);
    }

</style>