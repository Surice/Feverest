<template>
    <div class="content-freeG">
        <navbar></navbar>
        
        <code id="lastScan" class="lastScan">Last Scan: {{ date }}</code>
        <div class="siteContent">
            <h1 class="head-txt">Free Games</h1>

            <table class="table-me" id="table-me">
                <tr class="table-head">
                    <th class="tableE"><strong>Name</strong></th>
                    <th class="tableE"><strong>Link</strong></th>
                </tr>
                <tr v-for="content in contents" :key="content.name">
                    <th class="tableE">{{ content.name }}</th>
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
                reqUrl: "http://localhost:8085/api/gameStores/getFreeGames",
                contents: [],
            }
        },
        components: {
            navbar
        },
        mounted(){
            axios
                .get(this.reqUrl)
                .then(response => {
                    console.log(response.data);
                    for (var e in response.data){
                        this.date = e;
                        this.contents = response.data[e];
                    }
                });
        },
        methods: {
        }
    }
</script>
<style scoped>
    .siteContent{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    .lastScan{
        margin: 5px;
        margin-top: -2vh;
        text-decoration: underline;
    }

    .head-txt{
        color: rgb(133, 65, 27);
        text-align: center;
        font-size: 42px;
        font-weight: bolder;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: 5vh;
    }

    .table-me{
        min-width: 65vw;
        max-width: 80vw;
        text-align: center;
        color: white;
        background-color: rgba(77, 77, 77, 0.7);
        border-collapse: collapse;
    }
    .tableE{
        padding: 12px;
    }
    .table-head{
        background-color: rgba(36, 36, 36, 0.95);
    }
    .table-body{
        border-top: 6px solid rgba(255, 255, 255, 0.04);
    }
    .link{
        color: rgb(44, 44, 44);
        word-break: break-word;
    }
    .link:hover{
        color: rgb(44,44,44);
    }
</style>