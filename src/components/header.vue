<template>
    <div class="navbar-me">
            <div class="navbar-el-div">
                <a href="#" class="navbar-el">Home</a>
                <a href="#" class="navbar-el">Introduciton</a>
                <a href="#" class="navbar-el">Projects</a>
                <a href="#" class="navbar-el">Portals</a>
                <a href="#" class="navbar-el">Impressum</a>
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