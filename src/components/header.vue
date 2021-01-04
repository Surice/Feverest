<template>
    <div class="navbar-me">
        <h2 class="nav-txt">Feverest</h2>
        
        <div class="navbar-el-div">
            <router-link to="/home" class="navbar-el">Home</router-link>
            <router-link to="/intro" class="navbar-el">Introduciton</router-link>
            <div class="dropdown">
                <router-link to="/projects" class="navbar-el navbar-el-router">Projects <i class="fas fa-chevron-down"></i></router-link>
                <div class="dropdown-content">
                    <router-link to="/project/free_Games">Free Games</router-link>
                    <router-link to="/project/acc_helper">Fuel Calculator</router-link>
                    <router-link to="/project/mc_c_guide">MC Crafting Guide</router-link>
                </div>
            </div>
            <div class="dropdown">
                <router-link to="/portals" class="navbar-el navbar-el-router">Portals <i class="fas fa-chevron-down"></i></router-link>
                <div class="dropdown-content">
                    <router-link to="/">User-Portal</router-link>
                    <router-link to="/dev-portal/home">DEV-Portal</router-link>
                </div>
            </div>    
            <router-link to="/impressum" class="navbar-el">Impressum</router-link>
        </div>

        <div class="navbar-el-dropdown">
            <p class="navbar-el dropdown-me">Menu <i class="fas fa-chevron-down"></i></p>
            <div class="dropdown-me-content">
                <router-link to="/home">Home</router-link>
                <router-link to="/intro">Introduciton</router-link>
                <router-link to="/projects">Projects</router-link>
                <router-link to="/portals">Portals</router-link>
                <router-link to="/impressum">Impressum</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    mounted() {
        let fontAwesome = document.createElement('script')
        fontAwesome.setAttribute('src', 'https://kit.fontawesome.com/732a3ed8e9.js')
        document.head.appendChild(fontAwesome)
    }
}
</script>
<style scoped>
@media only screen and (min-width: 821px){
    .navbar-el-div{
        display: flex;
    }
    .navbar-el-dropdown{
        display: none;
    }
    .navbar-me{
        justify-content: flex-start;
    }
}
@media only screen and (max-width: 820px){
    .navbar-me{
        justify-content: space-between;
    }
    .navbar-el-div{
        display: none;
    }
    .navbar-el-dropdown{
        display: flex;
    }
}


*{
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.navbar-me{
    width: 100%;
    height: 4.66em;
    display: flex;
    flex-flow: row;
    align-items: center;
    /* background: linear-gradient(rgb(78, 39, 255), rgb(118, 87, 255)); */
    /* background: linear-gradient(rgb(48, 176, 240), rgb(50, 152, 216)); */
    /* background: linear-gradient(rgb(237, 223, 159), rgb(237, 223, 169)); */
    /* background: linear-gradient(rgb(56, 173, 105), rgb(41, 133, 79)); */
    /* background: linear-gradient(rgb(121, 91, 250), rgb(113, 87, 230)); */
    background: linear-gradient(rgb(70, 144, 255), rgb(84, 124, 204));
    border-bottom: 4px solid rgb(32, 86, 173)
}
.nav-txt{
    margin: 0;
    margin-left: 3vw;
    margin-right: 8vw;
    font-weight: 800;
    color: whitesmoke;
}
.navbar-el-div{
    min-width: 60%;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
}
.navbar-el{
    text-decoration: none;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: rgb(245, 245, 245) !important;
    padding: 12px;
}
.navbar-el-router{
    padding-bottom: 25px;
}
.navbar-el:hover{
    color: rgb(136, 203, 219);
    text-decoration: none;  
    border-top: solid;
    border-color: rgb(136, 203, 219);
}
.dropdown{
    display: inline-block;
    height: 100%;
}
.dropdown a:hover ~ .dropdown-content{
    display: flex;
}
.dropdown-content{
    position: absolute;
    z-index: 1;
    display: none;
    flex-flow: column;
    height: auto;
    width: 16.666vw;
    background-color: white;
    margin-top: 17px;
    padding-bottom: 5px;
    padding-top: 5px;
    border-radius: 3px;
    box-shadow: 2px 2px 3px gray;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 300;
    border: none;
}
.dropdown-content a{
    padding: 1.6vh;    
    color: darkblue !important;
    font-weight: bolder;
}
.dropdown-content a:hover{
    background-color: lightgrey;
    text-decoration: none;
}
.dropdown-content:hover{
    display: flex;
}
.router-link-active:not(:hover){
    color: rgb(50, 211, 163);
}

.navbar-el-dropdown{
    margin-right: 12px;
    justify-content: flex-end;
}
.dropdown-me-content{
    position: absolute;
    display: none;
    transform: translateY(6vh);
    flex-flow: column;
    height: auto;
    width: auto;
    background-color: white;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 2px 2px 3px gray;
    border: none;
}
.dropdown-me-content a{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 300;
    font-size: 30px;

}

.dropdown-me:hover ~ .dropdown-me-content{
    display: flex;
}
.dropdown-me-content:hover{
    display: flex;
}
</style>