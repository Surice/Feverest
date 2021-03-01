<template>
    <div class="content">
        <div class="background-resStyle">
            <navbar></navbar>
            <br>
            <h1 class="headline">Fuel Calculator</h1>
            <div style="width: 100vw; display: flex; justify-content: flex-end; transform: translateY(-40px);">
                <button class="btnHelp" v-on:click="help=true">?</button>
            </div>
            <br>
            <div class="help" v-if="help==true">
                <div class="helpHeader-div">
                    <h3>Help</h3>
                </div>
                <div class="canBtn-div">
                    <button v-on:click="help=false" class="canBtn">x</button>
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

                        *The Save Fuel Checkbox add 1,8 laps. That preset is for always get the checkered Flag. It is still under development.
                    </p>
                </div>
            </div>
        </div>
        <div class="all">
            <div class= "TimeLapsTable">
                    <div class="TimeLapsTableHead-div">
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
                                        <option value="2" v-on:click="calcIndivRaceDist()">Laps</option>
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
                                <td style="text-align: center;"><input type="checkbox" class="checkbox" id= "checkbox" v-model="input.checkbox2laps"></td>
                                <td></td>
                                <td>+ Formation lap and Inlap</td>
                            </tr>
                            <tr>
                                <td style="text-align: center;"><input type="checkbox" class="checkbox" v-model="input.checkboxSaveFuel"></td>
                                <td></td>
                                <td>Save Fuel Preset*</td>
                            </tr>
                        </table>
                    </div>
                    <div class="div-input" v-if="dropLaps == false">
                        <label class="headline-input"><b>Average-Laptimes:</b></label>
                        <br>
                        <div class="inputLaptime-div">
                            <div class="inputLaptimeMin-div">
                                <input type="number" id="laptimeMIN" class="input" min="0" v-model="input.laptime[0]">   
                                <select class="dropdown" >
                                    <option>Minutes</option>
                                </select>
                            </div>
                            <div class="inputLaptimeSec-div">
                                <input type="number" id="laptimeSEC" class="input" min="0" v-model="input.laptime[1]">
                                <select class="dropdown">
                                    <option>Secondes</option>
                                </select>
                            </div>    
                        </div>    
                    </div>
                    <div class="div-input">
                        <label class="headline-input"><b>Fuel Consumption:</b></label>
                        <br>
                        <input type="number" id="FuelConsumption" class="input inputWidth" min="0" v-model="input.fuelcon">
                        <select class="dropdown">
                            <option>Liters</option>
                        </select>
                    </div>
                    <div v-if="pre==false" class="div-input div-input-Fueltank">
                        <label class="headline-input"><b>Fueltank:</b></label>
                        <br>
                        <input type="number" id= "Fueltank" class="input inputWidth" min="0" v-model="input.fueltank">
                        <select class="dropdown">
                            <option>Liters</option>
                        </select>
                    </div>
                    <div v-if="pre==true" class="div-input"></div>

            </div>

            <div class="divBTNCalculate">
                <button class="BTNCalculate" v-on:click="calculate" >Calculate</button>
                <button class="BTNCalculateMobile" v-on:click="calculate" ><i class="fas fa-calculator fa-lg"></i></button>
            </div>

            <div class="results">
                <div class="resultsHead-div">
                    <h1><u>Results:</u></h1>
                </div> 
                <div class="results-div">
                    <div class="line">  
                        <div><label>Driving laps are:</label></div>
                        <div><p id="drivingLaps" class="outputLine"> <b>{{ output.laps }}</b> Laps</p></div>
                    </div> 
                    <br>
                    <div class="line">
                        <div><label>The Fuel consumption per race is:</label></div>
                        <div><p id= 'ResultFuelCon' class="outputLine"> <b>{{ output.fuel }}</b>Liters</p></div>
                    </div>
                    <br>
                    <div class="line">
                        <div><label>Required pit stops are: </label></div>
                        <div><p id= 'ResultBoxenstops' class="outputLine"> <b>{{ output.boxenstops }}</b> </p></div>     
                    </div>  
                </div>
            </div>
            <div class= "footer">
                <div class="vers">
                    <p style="margin-right: 10px;">Version 1.3</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./fuelCalculator.component.js"></script>
<style scoped src="./fuelCalculator.component.css"></style>