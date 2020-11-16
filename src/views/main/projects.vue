<template>
    <div>
        <navbar></navbar>
        <!-- <div class="projects"> -->
            <div class="project1">
                <div class="small-box">.img</div>
                <div class="big-box">Free Steam Games</div>
            </div>
            <div class="project">
                <div class="small-box">.img</div>
                <div class="big-box">Assetto Corsa Competizione Assistant</div>
            </div>
            <div class="project">
                <div class="small-box">.img</div>
                <div class="big-box">Mincraft Assistant</div>
            </div>
        <!-- </div> -->
    </div>
</template>
<script>
import navbar from '@/components/header.vue'

export default {
    name: 'Projects',
    components: {
        navbar
    }
}
</script>
<style scoped>
/* .projects{
    display: flex; 
    flex-flow: column;
    justify-content: center;

} */
.small-box{
    background-color: royalblue;
    width: 16vw;
    height: 20vh;
}
.big-box{
    background-color: slateblue;
    width: 40vw;
    height: 20vh;
}
.project1{
    width: 68vw;
    margin-top: 15vh;
    margin-left: 32vh;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
}
.project{
    width: 68vw;
    margin-top: 5vh;
    margin-left: 32vh;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
}
</style>