<template>
    <div class="login">

        <navbar></navbar>
        <br>
        <h1 class="headline">DEV-Login</h1>
        
        <div class="content">
            <div class="card" style="width: 18rem;">
                <div class="card-header align-items-center"><b>Login</b></div>

                <div class="card-body">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input v-model="input.email" id="email" type="text" name="email" class="form-control">
                        <br>
                        <label for="password">Password:</label>
                        <input v-model="input.password" id="password" type="password" name="password" class="form-control">
                        <br>
                        <button v-on:click="submit" type="submit" class="btn btn-primary mb-3">Submit!</button>

                        <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
                            {{ showDismissibleAlert }}
                        </b-alert>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./login.component.js"></script>
<style scoped src="./login.component.css"></style>