import navbar from '@/components/header/header.component.vue'
import axios from 'axios';


export default {
    name: 'Fuel-Helper',
    data: () => {
        return {
            reqUrl: `/api/accAss/calculate`,
            input:  {
                distance: 20,
                dropdown: 0,
                laptime: [],
                fuelcon: 0,
                fueltank: 0,
            },
            output: {
                laps: "",
                fuel: "",
                boxenstops: ""
            },
            endurance: false,
            dropLaps: false
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
            this.dropLaps = false;

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
                document.getElementById("preSetSec").innerHTML = "-----";
                this.dropLaps = true;
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
        },
        calculateFuel() {
            let distanceSEC = document.getElementById('preSetSec').value,
                lapTimeMIN = document.getElementById('laptimeMIN').value,
                laptimeSEC = document.getElementById('laptimeSEC').value, 
                fuelCon = document.getElementById('fuelCon').value;
                // fuelTank = document.getElementById('fuelTank').value;

                
            
            let lapTime = lapTimeMIN*60+laptimeSEC*1,
                laps = distanceSEC/lapTime,
                fuel = Math.round(((laps*fuelCon)*100)/100),
                saveFuel = Math.round(laps*fuelCon+fuelCon*1.8);
                // boxenstops = (fuel/fuelTank).toFixed(0);

            if(fuel == 0 || fuel == Infinity || fuel == NaN) {
                document.getElementById('fuelOutput').innerHTML = `<b>-</b>`;
                document.getElementById('saveFuelOutput').innerHTML = `<b>-</b>`;
            } else {
                document.getElementById('fuelOutput').innerHTML = `<b>${fuel}</b>`;
                document.getElementById('saveFuelOutput').innerHTML = `<b>${saveFuel}</b>`;
                // document.getElementById('boxenstopsOutput').innerHTML = `<b>${boxenstops}</b>`;
            }
        }
    },
    mounted(){
        this.calcRaceDist();
        window.addEventListener("keypress", this.calculate)
    }
}