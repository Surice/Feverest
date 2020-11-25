<template>
  <div class="intro">
    <navbar></navbar>
    <br>
    <h1 class="headline">Introduction</h1>
    <br>
    <div class="content">
      <div class="row-me">
        <div class="container-me">
          <h3>Was es hier gibt</h3>
          <p>
            Auf dieser Seite findest du hauptsächlich Guides, Helper, Assistants, whatever
            für die unterschiedlichsten Spiele von Rennsimulationen über Open-World bis  zu Shootern.
            Darüber hinaus bieten wir ein System, welches Täglich die besten Angebote an spielen sucht und mit Link zur Verfügung stellt.
            Des weiteren haben wir ein Userprotal welches ein paar Organisationselemente mit sich bringt.
            Du hast die Möglichkeit dort eine Todo-Liste zu führen mit unterschiedlichen Tabellen und Aufgaben. Das ganze ist Accountbasiert was bedeutet,
            dass du von überall mit einem Internetzugang auf deine Aufgaben, Notizen und auch deinen persönlichen Kalender zugreifen kannst.
            </p>
        </div>
      </div>
      <div class="row-me">
        <div class="container-me">
          <h3>Über Uns</h3>
          <p>
            Wir sind Timon und Sebastian. Zwei junge Hobbyentwickler aus dem schönen Norden von Deutschland.
            ** hier fehlen mir bissl die Ideen **
          </p>
        </div>
        <div class="container-me">
          <h3>Unsere Idee</h3>
          <p>
            Irgendwie bauen wir doch alle nur sinnlose Skripte die dann mehr oder weniger funktionieren,
            sie dann aber doch niemand braucht, also musste mal was gescheites her.
            In unserer Freizeit zocken wir gerne die Unterschiedlichsten Spiele wo uns hier und da mal so ein Kleines Hilfsprogramm fehlte (nein, keine Hack Clients).
            Deswegen haben wir uns drangesetzt einfach selbst diese Programme zu schreiben und wollen sie auf dieser Seite als Paket zur Verfügung stellen,
            dass sie jeder einzelne von euch nutzen kann.
          </p>
        </div>
      </div>
    </div>
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
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Battambang');


  .intro{
    min-height: 100vh;
    /* background-image: url('https://cdn.pixabay.com/photo/2017/10/05/09/05/railway-2818748_960_720.jpg'); */
  }
  .content{
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
  }
  .container-me{
    max-width: 40vw;
    margin: 2.2vw;
    padding: 1em;
    background-color: rgb(230, 230, 230);
    border: none;
    border-radius: 4px;
    box-shadow: 5px 6px 10px rgb(59, 59, 59);
  }
  .container-me h3{
    font-family: cursive;
    font-weight: bold;
  }
  .container-me p{
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(12, 12, 12);
    font-size: 1.2rem;
  }
</style>
