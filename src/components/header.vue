<template>
    <div class="navbar-me">
            <div class="navbar-el-div">
                <router-link to="/home" class="navbar-el">Home</router-link>
                <router-link to="/intro" class="navbar-el">Introduciton</router-link>
<<<<<<< HEAD
                <router-link to="/projects" class="navbar-el">Projects</router-link>
                <router-link to="/" class="navbar-el">Portals</router-link>
=======
                <div class="dropdown">
                    <router-link to="/projects" class="navbar-el">Projects</router-link>
                    <div class="dropdown-content">
                        <router-link to="">Free Steam Games</router-link>
                        <router-link to="">ACC Assistant</router-link>
                    </div>
                </div>
                <router-link to="/portals" class="navbar-el">Portals</router-link>
>>>>>>> 863df1ebf1301a4c98a6949addbfb2ce2c38fd60
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
<<<<<<< HEAD
}

=======
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
>>>>>>> 863df1ebf1301a4c98a6949addbfb2ce2c38fd60
.navbar-me{
    height: 12vh;
    display: flex;
    flex-flow: row;
<<<<<<< HEAD
    justify-content: space-around;
    align-items: center;
    background-color: rgb(118, 87, 255);
}

=======
    justify-content: center;
    background: linear-gradient(rgb(78, 39, 255), rgb(118, 87, 255));
}
>>>>>>> 863df1ebf1301a4c98a6949addbfb2ce2c38fd60
.navbar-el-div{
    width: 60%;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
}
<<<<<<< HEAD

=======
>>>>>>> 863df1ebf1301a4c98a6949addbfb2ce2c38fd60
.navbar-el{
    text-decoration: none;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
<<<<<<< HEAD
    color: whitesmoke;
=======
    color: rgb(245, 245, 245);
    padding: 5px;
}
.navbar-el:hover{
    color: rgb(136, 203, 219);
    text-decoration: none;
}

.dropdown{
    display: inline-block;
}
.dropdown a:hover ~ .dropdown-content{
    display: flex;
}
.dropdown-content{
    position: fixed;
    display: none;
    flex-flow: column;
    height: auto;
    background-color: rgba(189, 189, 189, 0.2);
    padding: 5px;
    border-radius: 3px;
    box-shadow: 2px 2px 3px gray;
}
.dropdown-content a{
    margin: 1.2vh;
    color: rgb(57, 43, 117) !important;
    font-weight: bolder;
}
.dropdown-content a:hover{
    color: rgb(78, 39, 255) !important;
    text-decoration: none;
}
.dropdown-content:hover{
    display: flex;
}
.router-link-active:not(:hover){
    color: rgb(50, 211, 163);
>>>>>>> 863df1ebf1301a4c98a6949addbfb2ce2c38fd60
}
</style>