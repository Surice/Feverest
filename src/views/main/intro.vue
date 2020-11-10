<template>
  <div class="intro">
    <navbar></navbar>

    <h1>Introduction</h1>
    <br>
    <p>This side will be showen some useful Gaming helper, Guides and Assistants to level up your gaming experience to an new level</p>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/header.vue'

export default {
  name: 'Intro',
  components: {
    navbar
  }
}
</script>
