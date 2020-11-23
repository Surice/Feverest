<template>
    <div class="content">
        <navbar></navbar>
        <br>
        <h1 class="headline">ACC Assistant</h1>
        <br>
        <div class="all">
            <div class= "TimeLapsTable">
                <div class="TimeLapsTableDiv">
                    <div class="TimeLapsTableHead">
                        <u><h1>Required Information:</h1></u>
                    </div>
                    <div>
                        <lable class="headInput"><b>Racedistance:</b></lable>
                        <br>            
                        <input type="number" id= "inputTime" onchange="detectTime()" min="0">
                        <select id="time" onchange="detectTime()">
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
                        <lable class="headInput"><b>Average-Laptimes:</b></lable>
                        <br>
                        <input type="number" id="laptimeMIN" class="inputLaptime" min="0">   
                        <select class="selectLaptime" >
                            <option>Minutes</option>
                        </select>
                        <input type="number" id="laptimeSEC" class="inputLaptime" min="0">
                        <select class="selectLaptime">
                            <option>Secondes</option>
                        </select>
                    </div>
                    <div>
                        <lable class="headInput"><b>Fuel Consumption:</b></lable>
                        <br>
                        <input type="number" id="FuelConsumption" min="0">
                        <select>
                            <option>Liters</option>
                        </select>
                    </div>
                    <div>
                        <lable class="headInput"><b>Fueltank:</b></lable>
                        <br>
                        <input type="number" id= "Fueltank" min="0">
                        <select>
                            <option>Liters</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="divBTNCalculate">
                <button class="BTNCalculate">Calculate</button>
            </div>

            <div class="results">
                <div>
                    <h1><u>Results:</u></h1>
                </div> 
                <div class="line">  
                    <lable>Driving Laps are:  </lable>
                    <div id="drivingLaps" class="outputLine"></div>
                    <label>Laps</label>
                </div> 
                <br>
                <div class="line">
                    <lable>The Fuel Consumption is: </lable>
                    <br>
                    <div><p id= 'ResultFuelCon' class="outputLine"></p></div>
                    <label> Liters</label>
                </div>
                <br>
                <div class="line">
                    <label>Required Boxenstops are: </label>
                    <br>
                    <div><p id= 'ResultBoxenstops' class="outputLine"></p></div>     
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
}
.TimeLapsTable{
    border: 1px;
    border-style: solid;
    width: 40%;
    height: 70vh;
    background-color: rgba(248 ,248 , 248 ,0.4)   
    
}   
.TimeLapsTableDiv{
    height: 70vh;
    margin-left: 14%;
    display: flex;
    flex-flow: column; 
    justify-content: space-evenly;
}
.TimeLapsTableHead{
    display: flex;
    flex-flow: row;
    justify-content: center;
}
.headInput{
    font-size: 20px;
}
.inputLaptime{
    width: 6vw;
}
.selectLaptime{
    margin-right: 0px;
}
.results{
    border: 1px;
    border-style: solid;
    width: 40%;
    height: 70vh;
    background-color: rgba(248 ,248 , 248 ,0.4);   
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
} 
.line{
    display: flex;
    flex-flow: row;
    align-items: center;
}
.outputLine{
    width: 50px;
    display: flex;
    flex-flow: row;
    justify-content: center;
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