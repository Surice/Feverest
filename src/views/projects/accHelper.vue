<template>
    <div class="content">
        <navbar></navbar>
        <br>
        <h1 class="headline">ACC Assistant</h1>
        <br>
        <div class="all">
            <div class= "TimeLapsTable">
                <div class="TimeLapsTableDiv">
                    <div>
                        <u><h1>Required Information:</h1></u>
                    </div>
                    <div class="inputDistance-div">
                        <label class="headline-input"><b>Racedistance:</b></label>
                        <br>         
                        <div class="distance-line"> 
                            <div class="distance-input-line">
                                <div class="distance-individual" v-if="pre==false">
                                    <input type="number" min="0" class="input inputWidth" v-model="input.distance" v-on:change="changeVar(input.distance)">
                                    <select id="time" class="dropdown" v-model="input.dropdown" v-on:change="calcIndivRaceDist()">
                                        <option value="0">Minutes</option>
                                        <option value="1">Hours</option>
                                        <option value="2">Laps</option>
                                    </select>
                                </div>
                                <div class="distance-pre" v-if="pre==true">
                                    <div class="distance-preBtnDiv">
                                        <button v-on:click="changeVar('20')" id="20" class="distance-preBtn aktiv">20 min</button>
                                        <button v-on:click="changeVar('30')" id="30" class="distance-preBtn">30 min</button>
                                        <button v-on:click="changeVar('60')" id="60" class="distance-preBtn">60 min</button>
                                    </div>
                                </div>
                            </div>
                            <div class="distance-change" v-if="pre==true">
                                <button v-on:click="pre=true" class="aktiv2">Pre-Set</button>
                                <button v-on:click="pre=false">Individual</button>
                            </div>
                            <div class="distance-change" v-if="pre==false">
                                <button v-on:click="pre=true">Pre-Set</button>
                                <button v-on:click="pre=false" class="aktiv2">Individual</button>
                            </div>
                        </div>    
                        <br>
                        <table class="outputMinSec">
                            <tr>
                                <td>Minutes:</td>
                                <td style="width: 25px"></td>
                                <td><output id="preSetMin"></output></td>
                            </tr>
                            <tr>
                                <td>Secondes:</td>
                                <td></td>
                                <td><output id="preSetSec"></output></td>
                            </tr>
                            <tr>
                                <td style="text-align: center;"><input type="checkbox" id= "checkbox"></td>
                                <td></td>
                                <td>+ Formationlap and inlap</td>
                            </tr>
                        </table>
                    </div>
                    <div class="div-input">
                        <label class="headline-input"><b>Average-Laptimes:</b></label>
                        <br>
                        <input type="number" id="laptimeMIN" class="inputLaptime input" min="0" v-model="input.laptime[0]">   
                        <select class="selectLaptime dropdown" >
                            <option>Minutes</option>
                        </select>
                        <input type="number" id="laptimeSEC" class="inputLaptime input inputLaptimeSec" min="0" v-model="input.laptime[1]">
                        <select class="selectLaptime dropdown">
                            <option>Secondes</option>
                        </select>
                    </div>
                    <div class="div-input">
                        <label class="headline-input"><b>Fuel Consumption:</b></label>
                        <br>
                        <input type="number" id="FuelConsumption" class="input inputWidth" min="0" v-model="input.fuelcon">
                        <select class="dropdown">
                            <option>Liters</option>
                        </select>
                    </div>
                    <div v-if="pre==false" class="div-input">
                        <label class="headline-input"><b>Fueltank:</b></label>
                        <br>
                        <input type="number" id= "Fueltank" class="input inputWidth" min="0" v-model="input.fueltank">
                        <select class="dropdown">
                            <option>Liters</option>
                        </select>
                    </div>
                    <div v-if="pre==true" class="div-input"></div>
                </div>
            </div>

            <div class="divBTNCalculate">
                <button class="BTNCalculate dropdown" v-on:click="calculate" >Calculate</button>
            </div>

            <div class="results">
                <div>
                    <h1><u>Results:</u></h1>
                </div> 
                <div class="results-div">
                    <div class="line">  
                        <label>Driving Laps are:  </label>
                        <div><p id="drivingLaps" class="outputLine">{{ output.laps }}</p></div>
                        <label>Laps</label>
                    </div> 
                    <br>
                    <div class="line">
                        <label>The Fuel Consumption per Race is: </label>
                        <div><p id= 'ResultFuelCon' class="outputLine">{{ output.fuel }}</p></div>
                        <label> Liters</label>
                    </div>
                    <br>
                    <div class="line">
                        <label>Required Boxenstops are: </label>
                        <div><p id= 'ResultBoxenstops' class="outputLine">{{ output.boxenstops }}</p></div>     
                    </div>  
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class= "footer">
                <div class="vers">
                    <p style="margin-right: 10px;">Version 0.0</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import navbar from '@/components/header.vue'
    import axios from 'axios';


    export default {
        name: 'ACC-Helper',
        data: () => {
            return {
                reqUrl: "http://localhost:8085/api/accAss/calculate",
                input:  {
                    distance: 20,
                    dropdown: 0,
                    laptime: [],
                    fuelcon: 0,
                    fueltank: 0,
                },
                output: {
                    raceMin: "",
                    laps: "",
                    fuel: "",
                    boxenstops: ""
                },
                pre: true
            }
        },
        components: {
            navbar
        },
        methods: {
            changeVar(value){
                this.input.distance = value;

                document.getElementById("preSetMin").innerHTML = this.input.distance;
                document.getElementById("preSetSec").innerHTML = Math.round((this.input.distance*60)*100)/100;

                document.getElementsByClassName("aktiv")[0].className = document.getElementsByClassName("aktiv")[0].className.replace(" aktiv","")
                document.getElementById(value.toString()).className += " aktiv";
            },
            calcRaceDist(){
                document.getElementById("preSetMin").innerHTML = this.input.distance;
                document.getElementById("preSetSec").innerHTML = Math.round((this.input.distance*60)*100)/100;
            },
            calcIndivRaceDist(){
                if(document.getElementById("time").value == 1){
                    console.log(this.input.distance)
                    let preSetMin = Math.round((this.input.distance*60)*100)/100
                    console.log(this.input.distance)
                    console.log(preSetMin)
                }
            },
            calculate(){
                axios({
                    url: this.reqUrl, 
                    method: 'POST',
                    data: this.input
                }).then(response => {
                    this.output = response.data.result;
                })
            }
        },
        mounted(){
            this.calcRaceDist()
        },
    }

</script>
<style scoped>
    *{
        outline: none !important;
    }
    .content{
        height: 100vh;
        background-color: rgba(85, 75, 104, 0.26);
        background-image: url(https://cdn.pixabay.com/photo/2019/08/09/06/16/car-racing-4394462_1280.jpg);
        background-size: 100%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .all{
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        align-items: center;
        margin: 0;
    }
    .div-input{
        height: 10vh;
    }
    .input{
        height: 28px;
        box-shadow: 4px 5px 3px rgb(73, 73, 73);
        border: none;
        border-radius: 8px;
    }
    .dropdown{
        height: 28px;
        padding-right: 0.3vw;
        align-items: center;
        box-shadow: 4px 5px 3px rgb(73, 73, 73);
        border: none;
        border-radius: 8px;
        margin-left: 0.5vw;
        font-size: 18px;
    }
    .aktiv, .aktiv2{
        background-color: whitesmoke !important;
    }
    .TimeLapsTable{
        border: 1px;
        border-style: solid;
        width: 40%;
        height: 70vh;
        background-color: rgba(248 ,248 , 248 ,0.4)   
    }   
    .TimeLapsTableDiv{
        height: 65vh;
        margin-left: 4vw;
        display: flex;
        flex-flow: column; 
        justify-content: space-evenly;
    }
    .headline-input{
        font-size: 20px;
        text-decoration: underline;
    }
    .distance-line{
        display: flex;
        flex-flow: row;
    }
    .distance-input-line{
        width: 20vw;
        height: 28px;
    }
    .distance-change{
        height: 28px;
        display: flex;
        flex-flow: row;
        margin: 0;
        margin-left: 1vw;
        border-radius: 8px;
        box-shadow: 4px 5px 3px rgb(73, 73, 73);
        font-size: 16px;
        background-color: rgb(160, 160, 160);
    }
    .distance-change button{
        height: 28px;
        margin: 0;
        padding: 3px;
        align-self: center;
        border: none;
        border-radius: 8px;
        outline: none;
        background-color: rgb(160, 160, 160);
    }
    .distance-pre{
        /* width: 10.5vw; */


        display: flex;
        flex-flow: row;
        /* justify-content: space-around; */

    }
    .distance-preBtnDiv{
        background-color: rgb(160, 160, 160);        
        border-radius: 8px;
        box-shadow: 4px 5px 3px rgb(73, 73, 73);
    }
    .distance-preBtn{
        background-color: rgb(160, 160, 160);
        padding-left: 1px;
        padding-right: 2.5px;
        border: none;
        border-radius: 8px;
    }
    .inputDistance-div{
        font-size: 18px;
    }
    .outputMinSec td{
        margin: 0 !important;
        padding: 0;
    }
    .outputMinSec tr{
        height: 26px !important;
    }
    .inputWidth{
        width: 12vw;
    }
    .inputLaptime{  
        width: 6vw;
    }
    .inputLaptimeSec{
        margin-left: 1vw;
    }
    .selectLaptime{
        margin-right: 0px;
    }
    .results{
        border: 1px;
        border-style: solid;
        width: 40vw;
        height: 70vh;
        padding-left: 5vw;
        background-color: rgba(248 ,248 , 248 ,0.4);   
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        align-items: flex-start;
    } 
    .results-div{
        height: 45vh;
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
    }
    .line{
        display: flex;
        flex-flow: row;
        align-items: flex-start;
        font-size: 20px;
        font-weight: 500;
    }
    .line label, .line p{
        margin: 0;
    }
    .outputLine{
        width: 50px;
        display: flex;
        flex-flow: row;
        justify-content: center;
        font-weight: bold;
    }
    .BTNCalculate{
        background-color: whitesmoke;
    }
    .divBTNCalculate{
        text-align: center;
    }
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: rgba(73, 73, 73, 0.45);
    }
    .vers{
        display: flex;
        flex-flow: row;
        justify-content: flex-end;
    }
</style>