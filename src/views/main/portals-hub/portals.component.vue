<template>
    <div class="portals">
        <navbar></navbar>
        <br>
        <h1 class="headline">Portals</h1>
        <br>
        <div class="content">
            <div class="project">
                <img src="@/assets/user.png" class="small-box">
                <router-link to="/" class="big-box" tag="button">
                    <h4>User Portal</h4>
                    <p>
                        comming soon...
                    </p>
                </router-link>
            </div>
            <div class="project">
                <img src="@/assets/code.jpg" class="small-box">
                <router-link to="/dev-portal/home" class="big-box" tag="button">
                    <h4>DEV Portal</h4>
                    <p>
                        portal for the Site-developer to see some Insights
                    </p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script src="./portals.component.js"></script>
<style scoped src="./portals.component.css"></style>