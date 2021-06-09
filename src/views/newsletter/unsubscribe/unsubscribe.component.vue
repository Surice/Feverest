<template>
    <div class="unsubscribe">
        <navbar></navbar>
        <div class="">
            <br>
            <h1 class="headline">Unsubscribe to the newsletter</h1>
            <br>
        </div>
        
        <div class="content">
            <div class="card" style="width: 18rem;">
                <div class="card-header align-items-center"><b>Newsletter</b></div>

                <div class="card-body">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input v-model="input.email" id="email" type="text" name="email" class="form-control">
                        <br>
                        <button v-on:click="submit" type="submit" class="btn btn-primary mb-3">Submit!</button>
                        <b-alert v-model="showSuccess" variant="success" dismissabel>
                            Successfully removed
                        </b-alert>
                        <b-alert v-model="showDismissibleAlert.trigger" variant="danger" dismissible>
                            {{ showDismissibleAlert.content }}
                        </b-alert>
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script src="./unsubscribe.component.js"></script>
<style scoped src="./unsubscribe.component.css"></style>