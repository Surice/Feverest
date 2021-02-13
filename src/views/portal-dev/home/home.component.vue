<template>
  <div class="home">
    <navbar></navbar>
    <br>
    <h1 class="headline">Welcome to the Dev-Portal, {{ user.username }}</h1>
    <br>
    <br>

    <div class="dashboard">
      <b-card header="Logo" bg-variant="light" class="pattern">  
        <img src="@/assets/logo.png" alt="Logo" class="img">
      </b-card>
      <b-card header="Registered Users" bg-variant="light" class="pattern">
        <b-card-body>Total Acounts: {{ accountsCount }}</b-card-body>
      </b-card>
      <b-card header="Visits" bg-variant="light" class="pattern">
        <b-card-body>
          total Visits: {{ visits.total }} <br>
          last 7 Days: {{ visits.temp }}
        </b-card-body>
      </b-card>
      <b-card header="Time" bg-variant="light" class="pattern">
        <b-card-body class="clock">
            <p class="time">{{ clock.time }}</p>
            <p class="date">{{ clock.date }}</p>
        </b-card-body>
      </b-card>
      <b-card header="Load Git Content" bg-variant="light" class="pattern">
        <b-card-body>
          <p>(comming soon)</p>
          <b-button v-on:click="pullGit" variant="outline-success" size="lg">Pull request</b-button>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="./home.component.js"></script>
<style scoped src="./home.component.css"></style>
