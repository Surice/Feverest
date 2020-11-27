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
                        <input type="number" id= "inputTime" onchange="detectTime()" min="0" class="input">
                        <select id="time" onchange="detectTime()" class="dropdown">
                            <option value="1">Hours</option>
                            <option value="2">Minutes</option>
                            <option value="0">Laps</option>
                        </select>
                        <br>
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
                        <input type="number" id="FuelConsumption" class="input" min="0">
                        <select class="dropdown">
                            <option>Liters</option>
                        </select>
                    </div>
                    <div>
                        <lable class="headline-input"><b>Fueltank:</b></lable>
                        <br>
                        <input type="number" id= "Fueltank" class="input" min="0">
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
        border: groove;
        border-radius: 8px;
        -webkit-appearance: none;
    }
    .dropdown{
        height: 28px;
        padding-right: 0.3vw;
        align-items: center;
        border: groove;
        border-radius: 8px;
        margin-left: 0.5vw;
        font-size: 18px;
    }
    .TimeLapsTable{
        border: 1px;
        border-style: solid;
        width: 40%;
        height: 65vh;
        background-color: rgba(248 ,248 , 248 ,0.4)   
    }   
    .TimeLapsTableDiv{
        height: 65vh;
        margin-left: 5vw;
        display: flex;
        flex-flow: column; 
        justify-content: space-evenly;
    }
    .headline-input{
        font-size: 20px;
        text-decoration: underline;
    }
    .inputDistance-div{
        font-size: 18px;
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
        height: 65vh;
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