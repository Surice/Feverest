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
                checkbox2laps: false,
                checkboxSaveFuel: false,
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
        }
    },
    mounted(){
        this.calcRaceDist();
        window.addEventListener("keypress", this.calculate)
    }
}