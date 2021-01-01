<template>
    <div class="content">
        <navbar></navbar>
        <br>
        <h1 class="headline">Fuel Calculator</h1>
        <div style="width: 100vw; display: flex; justify-content: flex-end; transform: translateY(-40px);">
            <button class="btnHelp" v-on:click="help=true">?</button>
        </div>
        <br>
        <div class="help" v-if="help==true">
            <div class="helpHeader-div">
                <p>Help</p>
            </div>
            <div class="canBtn-div">
                <button v-on:click="help=false" class="canBtn">X</button>
            </div>
            <div class="helpText-div">
                <p>
                    This is the perfect assistant for sim-racing. It helps you to calculate the fuel for your race.<br>
                    <br>
                    Here is some important information you probably need while using it:<br>
                    <br>
                    The Preset's are for a faster input. If you are doing sprint Races with a distance of 20/30/60 minutes, you can take these and this isn't calculating the Pit stops you need because of enough fuel in one tank for a sprint race.<br>
                    An Individual Race distance you can make by click on the "Individual” Button. The Input can switch between minutes, hours or laps.<br>
                    In the checkbox below you can add 2 more laps, for the Formation-lap and Inlap. You can use this also for a safe fuel-result.<br>
                    As developer of this assistant, I would give you the tip to add some liters of fuel to your result for a safe result.<br>
                    Your Result you can calculate with the Button in the middle or the Key-input of "space" or "enter".
                </p>
            </div>
        </div>
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
                                    <input type="number" min="0" class="input inputWidth" v-model="input.distance" v-on:change="calcIndivRaceDist(input.distance)">
                                    <select id="time" class="dropdown" v-model="input.dropdown"  v-on:change="calcIndivRaceDist()">
                                        <option value="0">Minutes</option>
                                        <option value="1" v-on:click="calcIndivRaceDist()">Hours</option>
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
                                <button v-on:click="pre=true; changeVar('20')">Pre-Set</button>
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
                                <td style="text-align: center;"><input type="checkbox" class="checkbox" id= "checkbox" v-model="input.checkbox"></td>
                                <td></td>
                                <td>+ Formation lap and Inlap</td>
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
                        <label>Driving laps are:  </label>
                        <div><p id="drivingLaps" class="outputLine"> {{ output.laps }} </p></div>
                        <label>Laps</label>
                    </div> 
                    <br>
                    <div class="line">
                        <label>The Fuel consumption per race is: </label>
                        <div><p id= 'ResultFuelCon' class="outputLine"> {{ output.fuel }} </p></div>
                        <label> Liters</label>
                    </div>
                    <br>
                    <div class="line">
                        <label>Required pit stops are: </label>
                        <div><p id= 'ResultBoxenstops' class="outputLine"> {{ output.boxenstops }} </p></div>     
                    </div>  
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class= "footer">
                <div class="vers">
                    <p style="margin-right: 10px;">Version 1.0</p>
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
                reqUrl: `/api/accAss/calculate`,
                input:  {
                    distance: 20,
                    dropdown: 0,
                    checkbox: false,
                    laptime: [],
                    fuelcon: 0,
                    fueltank: 0,
                },
                output: {
                    laps: "",
                    fuel: "",
                    boxenstops: ""
                },
                pre: true,
                help: false
            }
        },
        components: {
            navbar
        },
        methods: {
            changeVar(value){
                this.input.dropdown = "0";
                this.input.distance = value;

                document.getElementById("preSetMin").innerHTML = this.input.distance;
                document.getElementById("preSetSec").innerHTML = Math.round((this.input.distance*60)*100)/100;

                document.getElementsByClassName("aktiv")[0].className = document.getElementsByClassName("aktiv")[0].className.replace(" aktiv","")
                document.getElementById(value.toString()).className += " aktiv";
            },
            calcRaceDist(){
                document.getElementById("preSetMin").innerHTML = this.input.distance;
                document.getElementById("preSetSec").innerHTML = Math.round((this.input.distance*60)*100)/100
            },
            calcIndivRaceDist(){
                if(this.input.dropdown == 0){
                    document.getElementById("preSetMin").innerHTML = this.input.distance;
                    document.getElementById("preSetSec").innerHTML = Math.round((this.input.distance*60)*100)/100
                }
                if(this.input.dropdown == 1){
                    document.getElementById("preSetMin").innerHTML = Math.round((this.input.distance*60)*100)/100;
                    document.getElementById("preSetSec").innerHTML = Math.round((this.input.distance*60*60)*100)/100
                }
                if(this.input.dropdown == 2){
                    document.getElementById("preSetMin").innerHTML = "-----";
                    document.getElementById("preSetSec").innerHTML = "-----"
                }
            },
            calculate(e){
                if(e.constructor.name == "KeyboardEvent" && e.keyCode != 32 && e.keyCode != 13) return;

                axios({
                    url: this.reqUrl, 
                    method: 'POST',
                    data: this.input
                }).then(response => { 
                    console.log(response.data)
                    this.output = response.data;
                });
            }
        },
        mounted(){
            this.calcRaceDist();
            window.addEventListener("keypress", this.calculate)
        }
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
        z-index: -1;
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
    .distance-change button:hover{
        background-color: rgba(225, 225, 225, 0.8);
    }
    .distance-pre{
        display: flex;
        flex-flow: row;
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
    .distance-preBtn:hover{
        background-color: rgba(225, 225, 225, 0.8);
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
    .checkbox{
        height: 16px;
        width: 16px;
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
        min-width: 50px;
        display: flex;
        flex-flow: row;
        justify-content: center;
        font-weight: bold;
    }
    .BTNCalculate{
        background-color: whitesmoke;
        padding-left: 4px;
    }
    .BTNCalculate:hover{
        background-color: rgba(205, 205, 205, 1);
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
    .btnHelp{
        width: 32px;
        height: 32px;
        font-size: 24px;
        border: none;
        border-radius: 8px;
        box-shadow:  4px 5px 3px rgb(73, 73, 73);
        margin-right: 12px;
    }
    .btnHelp:hover{
        background-color: rgb(205, 205, 205);
    }
    .help{
        width: 60vw;
        height: 60vh;
        top: 20vh;
        left: 20vw;
        position: absolute;
        color: white;
        background-color: rgb(73, 73, 73);
        border-radius: 8px;
        border: solid black;
        box-shadow: 4px 5px 3px rgb(46, 46, 46);
        z-index: 10;
    }
    .helpHeader-div{
        display: flex;
        justify-content: center;
        font-size: 26px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        text-decoration: underline;
        text-shadow: 2px 2px 0px rgb(54, 54, 54);
        margin-top: 5px; 
    }
    .helpText-div{
        display: flex;
        justify-content: center;
        transform: translateY(-40px);
        text-align: center;
        margin-right: 15px;
        margin-left: 15px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .canBtn-div{
        height: 12%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        transform: translateY(-60px);
        align-items: center;
    }
    .canBtn{
        margin-right: 24px;
        font-size: 190%;
        border: none;
        color: white;
        background-color: rgb(73, 73, 73);
    }
    .canBtn:hover{
        color: rgb(255, 79, 79);
    }
</style>