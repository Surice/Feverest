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
                        <lable class="headline-input"><b>Racedistance:</b></lable>
                        <br>         
                        <div class="distance-line"> 
                            <div v-if="pre==false">
                                <input type="number" id= "inputTime" onchange="detectTime()" min="0" class="input inputWidth">
                                <select id="time" onchange="detectTime()" class="dropdown">
                                    <option value="1">Hours</option>
                                    <option value="2">Minutes</option>
                                    <option value="0">Laps</option>
                                </select>
                            </div>
                            <div v-if="pre==true">
                                <div>
                                    <p>20min</p>
                                </div>
                                <div>
                                    <p>30min</p>
                                </div>
                                <div>
                                    <p>60min</p>
                                </div>
                            </div>
                            <div class="distance-change" v-if="pre==true">
                                <button v-on:click="pre=true" class="aktiv">Pre-Set</button>
                                <button v-on:click="pre=false">Individual</button>
                            </div>
                            <div class="distance-change" v-if="pre==false">
                                <button v-on:click="pre=true">Pre-Set</button>
                                <button v-on:click="pre=false" class="aktiv">Individual</button>
                            </div>
                        </div>    
                        <br>
                        <table>
                            <tr>
                                <td>Minutes:</td>
                                <td style="width: 24vw"></td>
                                <td><output id="resultMinutes"></output></td>
                            </tr>
                            <tr>
                                <td>Secondes:</td>
                                <td></td>
                                <td><output id="resultSecondes"></output></td>
                            </tr>
                            <tr>
                                <td style="text-align: center;"><input type="checkbox" id= "checkbox"></td>
                                <td>+ Formationlap and inlap</td>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <lable class="headline-input"><b>Average-Laptimes:</b></lable>
                        <br>
                        <input type="number" id="laptimeMIN" class="inputLaptime input" min="0">   
                        <select class="selectLaptime dropdown" >
                            <option>Minutes</option>
                        </select>
                        <input type="number" id="laptimeSEC" class="inputLaptime input inputLaptimeSec" min="0">
                        <select class="selectLaptime dropdown">
                            <option>Secondes</option>
                        </select>
                    </div>
                    <div>
                        <lable class="headline-input"><b>Fuel Consumption:</b></lable>
                        <br>
                        <input type="number" id="FuelConsumption" class="input inputWidth" min="0">
                        <select class="dropdown">
                            <option>Liters</option>
                        </select>
                    </div>
                    <div v-if="pre==false">
                        <lable class="headline-input"><b>Fueltank:</b></lable>
                        <br>
                        <input type="number" id= "Fueltank" class="input inputWidth" min="0">
                        <select class="dropdown">
                            <option>Liters</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="divBTNCalculate">
                <button class="BTNCalculate dropdown">Calculate</button>
            </div>

            <div class="results">
                <div>
                    <h1><u>Results:</u></h1>
                </div> 
                <div class="results-div">
                    <div class="line">  
                        <lable>Driving Laps are:  </lable>
                        <div><p id="drivingLaps" class="outputLine">{{ output.laps }}</p></div>
                        <label>Laps</label>
                    </div> 
                    <br>
                    <div class="line">
                        <lable>The Fuel Consumption is: </lable>
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
                    <p style="margin-right: 10px;">Version 1.0</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/header.vue'

export default {
    name: 'ACC-Helper',
    data: () => {
        return {
            reqUrl: "",
            output: {
                laps: 99,
                fuel: 99,
                boxenstops: 99
            },
            pre: true
        }
    },
    components: {
        navbar
    }
}

</script>
<style scoped>
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
    .aktiv{
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
    .distance-change{
        height: 28px;
        display: flex;
        flex-flow: row;
        margin: 0;
        margin-left: 1vw;
        border-radius: 8px;
        box-shadow: 4px 5px 3px rgb(73, 73, 73);
        font-size: 16px;
        background-color: rgb(110, 110, 110);
    }
    .distance-change button{
        height: 28px;
        margin: 0;
        padding: 3px;
        align-self: center;
        border: none;
        border-radius: 8px;
        outline: none;
        background-color: rgb(110, 110, 110);
    }
    .inputDistance-div{
        font-size: 18px;
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