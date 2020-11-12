<template>
  <div class="intro">
    <navbar></navbar>
    <br>
    <h1 class="headline-intro">Introduction</h1>
    <br>
    <div class="content-intro">
      <div class="row-me row-1">
        <div class="container-me container-1">
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
      <div class="row-me row-2">
        <div class="container-me container-2">
          <h3>Über Uns</h3>
          <p>
            Wir sind Timon und Sebastian. Zwei junge Hobbyentwickler aus dem schönen Norden von Deutschland.
            ** hier fehlen mir bissl die Ideen **
          </p>
        </div>
        <div class="container-me container-3">
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
<style>
  .intro{
    min-height: 100vh;
    background-color: rgb(162, 177, 121);
    /* background-image: url('https://cdn.pixabay.com/photo/2017/10/05/09/05/railway-2818748_960_720.jpg'); */
  }
  .headline-intro{
    text-align: center;
    text-shadow: 2px 2px 3px rgb(219, 219, 219);
  }
  .content-intro{
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
  }
  .container-me{
    max-width: 40vw;
    margin: 2.2vw;
    padding: 1em;
    background-color: rgba(245, 245, 245, 0.8);
    border: none;
    border-radius: 4px;
    box-shadow: 2px 3px rgba(78, 78, 78, 0.4);
  }
</style>
