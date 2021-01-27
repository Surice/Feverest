<template>
    <div class="mcCGuide">
        <navbar></navbar>
        <div class="banner-img">
            <br>
            <h1 class="headline">Minecraft crafting Guide</h1>
            <br>
        </div>
        <div class="content">
            <div class="left_side">
                <div class="input-area field">
                    <div class="input-part">
                        <h3>Input</h3>

                        <label>select the to be crafted item:</label>
                        <select id="sel-item" v-model="itemName">
                            <option v-for="key in keys" :key="key">{{ key }}</option>
                        </select>
                    </div>
                    <div class="input-part">
                        <label>select the quantity:</label>
                        <input v-model="quan" id="inp-quan" type="number" value="1">
                    </div>

                    <button v-on:click="calculate" class="btn-calc">Calculate</button>
                </div>
                
                <div class="output-required field">
                    <h3>Required Resources:</h3>
                    <ul class="result">
                        <li v-for="(item, key) in output.requiredItems" :key="key">{{ item }}X {{ key }}</li>
                    </ul>
                </div>

                <div class="output-unused field">
                    <h3>Unused Resources:</h3>
                    <ul class="result">
                        <li v-for="(item, key) in output.unusedItems" :key="key">{{ item }}X {{ key }}</li>
                    </ul>
                </div>
            </div>

            <div class="output-craftingSteps field">
                <h3>Crafting Steps:</h3>
                <div id="cra-step" class="cra-step">
                    <dl class="result" v-for="(step, key) in output.sortedCraftingSteps" :key="key">
                        <dt>{{ step.quan }} {{ key }}:</dt>
                        <dd v-for="(quan, name) in step.recipe" :key="name">- {{ quan }}X {{ name }}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import navbar from '@/components/header.vue';
    import axios from 'axios';

    export default {
        name: 'MC-Crafting-Guide',
        data: () => {
            return {
                reqUrl: `/api/mcCGuide`,
                keys: [],
                output: {
                    sortedCraftingSteps: {},
                    requiredItems: {},
                    unusedItems: {},
                },
                itemName: "--Item--",
                quan: "1"
            }
        },
        beforeMount() {
            this.init();
        },
        components: {
            navbar
        },
        methods: {
            init(){
                axios
                    .get(`${this.reqUrl}/getAllItems`)
                    .then(response => {
                        this.keys = response.data;
                    });
            },
            async calculate() {
                await axios({
                    method: 'post',
                    url: `${this.reqUrl}/composeRecipe`,
                    data: {
                        itemName: this.itemName,
                        quan: this.quan
                    }
                }).then(res => {
                    this.output = res.data;
                });
            }
        }
    }
</script>
<style scoped>
@media only screen and (min-width: 821px){
    .left_side{
        max-width: 60vw;
    }
    .content{
        justify-content: flex-start;
    }
}
@media only screen and (max-width: 820px){
    .left_side{
        max-width: 80vw;
    }
    .content{
        justify-content: center;
    }
}
    .banner-img{
        background: url('../../assets/mc_screen_crafting.png');
        width: 100vw;
        height: 25vh;
        background-size: cover;
        background-position: top;
    }
    .mcCGuide{
        min-height: 100vh;
    }

    .content{
        display: flex;
        flex-flow: row wrap;
        min-height: 100%;
        min-width: 100%;
    }
    .left_side{
        height: 100%;
        display: flex;
        flex-flow: row wrap;
    }

    .field{
        padding: 1em;
        margin: 2em;
        background-color: rgb(73, 73, 73);
        border: none;
        border-radius: 4px;
        box-shadow: 4px 3px 8px rgb(24, 24, 24);
        min-width: 25vw;
        max-width: 80vw;
        height: 100%;
    }

    .result{
        list-style: none;
    }

    .input-area{
        display: flex;
        flex-flow: column;
        width: auto;
    }
    .input-part{
        display: flex;
        flex-flow: column;
        margin-bottom: 3vh;
    }

    #sel-item{
        -moz-appearance: none;
        -webkit-appearance: none;

        background-color: rgb(235, 235, 235);
        background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
        background-repeat: no-repeat;
        background-position: right .7em top 50%, 0 0;
        background-size: .65em auto, 100%;

        color: rgb(78, 45, 14);
        font-size: 16px;
        font-family: sans-serif;
        padding: 3px;
        border: 1px solid black;
        border-radius: .5em;
        box-shadow: 2px 2px 5px rgb(31, 31, 31);
    }
    #inp-quan{
        background-color: rgb(235, 235, 235);
        font-size: 14px;
        font-family: sans-serif;
        color: #422616;
        padding: 5px;
        border: 1px solid black;
        border-radius: .5em;
        width: 8em;
        box-shadow: 2px 2px 5px rgb(31, 31, 31);
    }
    .btn-calc{
        background-color: rgb(235, 235, 235);
        font-size: 17px;
        font-family: 'Segoe UI', Arial;
        font-weight: bolder;
        color: rgb(41, 175, 64);
        border: 1px solid black;
        border-radius: 5px;
        width: 9em;
        height: 2em;
        box-shadow: 2px 2px 5px rgb(31, 31, 31);
        outline: none;
    }
    .btn-calc:hover{
        background-color: rgb(200, 200, 200);
    }
    .btn-calc:active{
        background-color: rgb(180, 180, 180);
    }

    h3{
        text-decoration: underline;
    }
    h3, label, li, dd, dt{
        color: white;
    }
</style>