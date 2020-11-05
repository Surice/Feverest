<template>
    <div class="navbar-me">
        <div class="links">
            <router-link to="/home" data-target="#">Home</router-link>
            <router-link to="/intro" data-target="#">Introduction</router-link>
            <router-link to="/projects" data-target="#">Projects</router-link>
            <router-link to="/impressum" data-target="#">Impressum</router-link>
        </div>
        <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>
<style>
    .links{
        display: block;
        background-color: rgb(117, 57, 57);
        padding: 10px;
        font-size: 1.6em;
        font-weight: bold;
    }
    .links a{
        font-size: 1.6em;
        color: black;
        text-decoration: none;
        font-weight: bold;
        background-color: rgba(255, 255, 255, 0.4);
        height: 100%;
        border-radius: 3px;
        margin: 2%;
        padding: 10px;
    }
    .links a:hover{
        color: rgb(24, 73, 206);
        text-decoration: none;
    }
</style>