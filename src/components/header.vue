<template>
    <div class="navbar-me">
            <div class="navbar-el-div">
                <router-link to="/home" class="navbar-el">Home</router-link>
                <router-link to="/intro" class="navbar-el">Introduciton</router-link>
                <router-link to="/projects" class="navbar-el">Projects</router-link>
                <router-link to="/" class="navbar-el">Portals</router-link>
                <router-link to="/impressum" class="navbar-el">Impressum</router-link>
            </div>
        </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}

.navbar-me{
    height: 12vh;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(118, 87, 255);
}

.navbar-el-div{
    width: 60%;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
}

.navbar-el{
    text-decoration: none;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: whitesmoke;
}
</style>