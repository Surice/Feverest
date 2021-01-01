<template>
  <div class="intro">
    <navbar></navbar>
    <br>
    <h1 class="headline">Introduction</h1>
    <br>
    <div class="content">
      <div class="row-me">
        <div class="container-me">
          <h3>Things you can find here</h3>
          <p>
            On this page you will primarily find guides, helpers, assistants, whatever for the various games from racing simulations through open-world to shooters,
            which will help you to solve time-consuming calculations and make them clearly accessible.
            In addition, we offer a system that searches for the best offers on games every day and provides them with a link to the specific gamestore.
            </p>
        </div>
      </div>
      <div class="row-me">
        <div class="container-me">
          <h3>About us</h3>
          <p>
            Our names are Timon and Sebastian. We are two young hobby developers from the beautiful north of Germany.
            It started for each of us a few years ago with frontend development where we got interested in creating websites using HTML and CSS.
            After a while we started to learn Python and Javascript to add more logic to the pages.
            As time passed we improved these skills to be able to write proper programs.
          </p>
        </div>
        <div class="container-me">
          <h3>The idea</h3>
          <p>
            Somehow we all just write useless scripts that work more or less, but then nobody needs them.
            so we had to develop something smart.In our spare time we like to play the most different games where such a small tool was missing (no, no hack clients).
            That's why we startet to write these utilities ourselves and want to make them available on this page as a package, so everyone can use them.
          </p>
        </div>
      </div>
    </div>

    <foot></foot>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/header.vue'
import foot from '../../components/foot.vue'

export default {
  name: 'Intro',
  components: {
    navbar,
    foot
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Battambang');

  @media only screen and (max-width: 820px){
    .container-me{
      max-width: 80vw;
    }
  }
  @media only screen and (min-width: 821px){
    .container-me{
      max-width: 40vw;
    }
  }

  .intro{
    min-height: 100vh;
    /* background-image: url('https://cdn.pixabay.com/photo/2017/10/05/09/05/railway-2818748_960_720.jpg'); */
  }
  .content{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  .container-me{
    margin: 2.2vw;
    padding: 1em;
    background-color: rgb(73, 73, 73);
    border: none;
    border-radius: 4px;
    box-shadow: 3px 4px 10px rgb(24, 24, 24);
    min-width: 250px;
  }
  .container-me h3{
    font-family: cursive;
    font-weight: bold;
    text-decoration: underline;
    color: rgb(255, 255, 255);
  }
  .container-me p{
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(255, 255, 255);
    font-size: 1.2rem;
    word-wrap: break-word;
  }
</style>
