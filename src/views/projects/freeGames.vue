<template>
    <div class="freeGames">
        <navbar></navbar>
        
        <code id="lastScan" class="lastScan">Last Scan: {{ date }}</code>
        <div class="content">
            <h1 class="headline">Free Games</h1>

            <table class="table-me" id="table-me">
                <tr class="table-head">
                    <th class="tableE"><strong>Name</strong></th>
                    <th class="tableE"><strong>Plattform</strong></th>
                    <th class="tableE"><strong>Link</strong></th>
                </tr>
                <tr v-for="content in contents" :key="content.name">
                    <th class="tableE">{{ content.name }}</th>
                    <th class="tableE">{{ content.plattform }}</th>
                    <th class="tableE">
                        <a target="_blank" class="link" :href="content.url">{{ content.url }}</a>
                    </th>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import navbar from '@/components/header.vue';
    import axios from 'axios';

    export default {
        name: 'Free_Games',
        data: function() {
            return{
                date: "--none--",
                reqUrl: `/api/gameStores/getFreeGames`,
                contents: [{
      "name": "World of Warships — Exclusive Starter Pack",
      "plattform": "steam",
      "url": "https://store.steampowered.com/app/844890"
    },
    {
      "name": "Metro: Last Light Redux",
      "plattform": "epic",
      "url": "https://www.epicgames.com/store/en-US/product/metro-last-light-redux/home"
    },
    {
      "name": "For The King",
      "plattform": "epic",
      "url": "https://www.epicgames.com/store/en-US/product/for-the-king/home/home"
    }],
            }
        },
        components: {
            navbar
        },
        mounted(){
            axios
                .get(this.reqUrl)
                .then(response => {
                    this.date = response.data.state;
                    this.contents = response.data.data;
                });
        }
    }
</script>
<style scoped>
    .freeGames{
        background-image: url('../../assets/cloudly_forrest.jpg');
        background-size: cover;
        min-height: 100vh;
    }
    .content{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .lastScan{
        margin: 5px;
        margin-top: 2vh;
        text-decoration: underline;
        color: rgb(141, 141, 141);
    }

    .table-me{
        min-width: 65vw;
        max-width: 80vw;
        margin-top: 5vh;
        text-align: center;
        color: white;
        border-collapse: collapse;
        margin-bottom: 20px;
    }
    .tableE{
        padding: 12px;
        font-weight: normal;
    }
    .table-head{
        border-bottom: rgb(50,56,62) 6px solid;
    }
    tr{
        border-top: 1.2px solid rgb(50,56,62);
        background-color: rgba(29, 29, 29, 1);
    }
    tr:nth-child(even){
        background-color: rgba(35, 35, 35, 1);
    }
    .link{
        word-break: break-word;
    }
    .link:hover{
        color: rgb(44,44,44);
    }
</style>