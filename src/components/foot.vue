<template>
    <footer class="footer">
      <div class="foo-col">
        <h5>Contact:</h5>
        <p>
          Timon Carstens, <br>
          Sebastian Ulrich <br>
          E-Mail: <a href="mailto:info@feverest.de">info@feverest.de</a>
        </p>
      </div>
      <div class="vl"></div>
      <div class="foo-col">
        <h5>Social Media:</h5>
        <div class="socials">
          <a href="https://github.com/Surice/Feverest" target="_blank">Github Repository</a>
          <a href="https://Instagram.com/Feverest" target="_blank">our Instagram</a>
        </div>
      </div>
      <div class="vl"></div>
      <div class="foo-col">
        <h5>Feedback / Bug report:</h5>
        <p>
          if you find any bugs or have a suggestion<br>
          for improvements please let us know<br>
          <br>
          E-Mail: <a href="mailto:info@feverest.de?subject=Feedback / Bug report">info@feverest.de</a>
        </p>
      </div>
    </footer>
</template>
<script>
export default {
    name: 'foot'
}
</script>
<style scoped>
    .footer{
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-evenly;
        width: 100vw;
        background: rgba(10, 10, 10, 0.6);
        color: rgb(135, 135, 135);
    }
    .footer p{
        font-size: 0.8rem;
        margin-left: 8px
    }

    .foo-col{ 
        text-align: center;
        margin: 15px;
    }
    .socials{
        display: flex;
        flex-flow: column;
    }
</style>