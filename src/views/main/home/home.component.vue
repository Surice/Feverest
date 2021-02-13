<template>
  <div class="home">
    <navbar></navbar>
    <img src='@/assets/tastatur.jpg' class="banner-img">

    <div class="content">
      <img src='@/assets/computer.jpg' class="main-img">

      <div class="banner">
        <div class="banner-welcome">
          <p>Welcome!</p>
        </div>
        <div class="banner-phrases">
          <p ref="typedText"></p> 
        </div>
      </div>
    </div>

    <foot></foot>
  </div>
</template>

<script src="./home.component.js"></script>
<style scoped src="./home.component.css"></style>