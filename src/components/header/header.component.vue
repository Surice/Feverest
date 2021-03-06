<template>
    <div class="navbar-me">
        <router-link to="/home" class="nav-logo"><h2 class="nav-txt">Feverest</h2></router-link>
        <ul class="navbar-content">
          <li><router-link class="navbar-element" to="/home">Home</router-link></li>
          <li><router-link class="navbar-element" to="/intro">Introduction</router-link></li>
          <li>
            <router-link class="navbar-element dropdown" to="/projects">Projects <i class="fas fa-chevron-down"></i></router-link>
            <ul class="dropdown-content">
              <li><router-link class="navbar-element dropdown-element" to="/project/free_games">Free Games</router-link></li>
              <li><router-link class="navbar-element dropdown-element" to="/project/acc_helper">Fuel Calculator</router-link></li>
              <li><router-link class="navbar-element dropdown-element" to="/project/mc_c_guide">MC Crafting Guide</router-link></li>
            </ul>
          </li>
          <li>
            <router-link class="navbar-element dropdown" to="/portals">Portals <i class="fas fa-chevron-down"></i></router-link>
            <ul class="dropdown-content">
              <li><router-link class="navbar-element dropdown-element" to="/home">User-Portal</router-link></li>
              <li><router-link class="navbar-element dropdown-element" to="/dev-portal/home">DEV-Portal</router-link></li>
            </ul>
          </li>
          <li><router-link class="navbar-element" to="/impressum">Impressum</router-link></li>
        </ul>

        <ul class="mobile-navbar">
            <li>
                <a class="navbar-element dropdown">Menu <i class="fas fa-chevron-down"></i></a>
                <ul class="mobile-dropdown-content">
                    <li><router-link class="navbar-element dropdown-element" to="/home">Home</router-link></li>
                    <li><router-link class="navbar-element dropdown-element" to="/intro">Introduction</router-link></li>
                    <li><router-link class="navbar-element dropdown-element" to="/projects">Projects</router-link></li>
                    <li><router-link class="navbar-element dropdown-element" to="/portals">Portals</router-link></li>
                    <li><router-link class="navbar-element dropdown-element" to="/impressum">Impressum</router-link></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script src="./header.component.js"></script>
<style scoped src="./header.component.css"></style>