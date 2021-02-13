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
<script src="./freeGames.component.js"></script>
<style scoped src="./freeGames.component.css"></style>