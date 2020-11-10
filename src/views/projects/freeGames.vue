<template>
    <div class="content">
        <navbar></navbar>
        
        <code id="lastScan" class="lastScan">Last Scan: {{ date }}</code>
        <div class="siteContent">
            <h1 class="head-txt">Free Games</h1>

            <table class="table-me" id="table-me">
                <tr class="table-head">
                    <th class="tableE"><strong>Name</strong></th>
                    <th class="tableE"><strong>Link</strong></th>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import navbar from '@/components/header.vue'

    const reqUrl = "";
    var temp = {"03/03/2003": [["game #1","google.com"],["game #2","amazon.com/ssd"],["game #3","sebastian-web.de"]]};
    buildTable(temp);

    var xml = new XMLHttpRequest();
    xml.open("GET", reqUrl);
//    xml.send();
    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
            var content = JSON.parse(xml.responseText);

            buildTable(content);
        }
    }

    function buildTable(items){
        for (var e in items){
//            document.getElementById('lastScan').innerHTML += e.toString();
            items = items[e];
        }
        return
        items.forEach(e=>{
            document.getElementById('table-me').innerHTML +=
            `
                <tr class="table-body">
                    <th class="tableE">${e[0]}</th>
                    <th class="tableE">
                        <a target="_blank" class="link" href="${e[1]}")>${e[1]}</a>
                    </th>
                </tr>
            `;
        });
    }

    export default {
        name: 'Free_Games',
        components: {
            navbar
        }
    }
</script>
<style>
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