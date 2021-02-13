<template>
  <div class="home">
    <navbar></navbar>
    <br>
    <h1 class="headline">Welcome to the Dev-Portal, {{ user.username }}</h1>
    <br>
    <br>

    <div class="dashboard">
      <div class="pattern">
        <img src="@/assets/logo.png" alt="Logo" class="img">
      </div>
      <div class="pattern">
        <h3>Registered Users</h3>
        <p>Acount Count: {{ accountsCount }}</p>
      </div>
      <div class="pattern">
        <h3>Visits</h3>
        <p>total Visits: {{ visits.total }}</p>
        <p>last 7 Days: {{ visits.temp }}</p>
      </div>
      <div class="pattern">
        <h3>Time</h3>
        <p class="clock">
            {{ clock.time }}
        </p>
        <p class="date">
            {{ clock.date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script src="./home.component.js"></script>
<style scoped src="./home.component.css"></style>
