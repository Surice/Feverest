<template>
    <div class="mcCGuide">
        <navbar></navbar>
        <br>
        <h1 class="headline">Minecraft crafting Guide</h1>
        <br>
        <div class="content">
            <div class="col-me">
                <div class="input-area field">
                    <div class="input-part">
                        <h3>Input</h3>

                        <label>select the to be crafted item:</label>
                        <select id="sel-item">
                            <option>--Item--</option>
                            <option v-for="key in keys" :key="key">{{ key }}</option>
                        </select>
                    </div>
                    <div class="input-part">
                        <label>select the quantity:</label>
                        <input id="inp-quan" type="number" value="1">
                    </div>

                    <button onclick="calculate()" class="btn-calc">Calculate</button>
                </div>

                <div class="output-unused field">
                    <h3>Unused Resources:</h3>
                    <ul id="u-res">
                    </ul>
                </div>
            
            </div>
            <div class="col-me">
                <div class="output-required field">
                    <h3>Required Resources:</h3>
                    <ul id="result">
                    </ul>
                </div>
            </div>

            <div class="col-me">
                <div class="output-craftingSteps field">
                    <h3>Crafting Steps:</h3>
                    <div id="cra-step" class="cra-step">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/header.vue';

export default {
    name: 'MC-Crafting-Guide',
    data: function() {
        return {
            data: {
                "oak wood plank": {"recipe": ["oak log"],"quan": 4},
                "wool": {"recipe": ["string","stiring","string","string"],"quan": 1},
                "stone brick": {"recipe": ["stone","stone","stone","stone"],"quan": 4},
                "bricks": {"recipe": ["brick","brick","brick","brick"],"quan": 1},
                "sand stone": {"recipe": ["sand","sand","sand","sand"],"quan": 4},
                "oak wood slab": {"recipe": ["oak wood plank","oak wood plank","oak wood plank"],"quan": 6},
                "oak boat": {"recipe": ["oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank"],"quan": 1},
                "chest": {"recipe": ["oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank"],"quan": 1},
                "crafting table": {"recipe": ["oak wood plank","oak wood plank","oak wood plank","oak wood plank"],"quan": 1},
                "furnace": {"recipe": ["cobblestone","cobblestone","cobblestone","cobblestone","cobblestone","cobblestone","cobblestone","cobblestone"],"quan": 1},
                "wood button": {"recipe": ["oak wood plank"],"quan": 1},
                "wood pressure plate": {"recipe": ["oak wood plank","oak wood plank"],"quan": 1},
                "stone button": {"recipe": ["stone"],"quan": 1},
                "stone pressure plate": {"recipe": ["stone","stone"],"quan": 1},
                "leaver": {"recipe": ["cobblestone","stick"],"quan": 1},
                "stick": {"recipe": ["oak wood plank","oak wood plank"],"quan": 4},
                "bow": {"recipe": ["stick","stick","stick","string","string","string"],"quan": 1},
                "fishing rod": {"recipe": ["stick","stick","stick","string","string"],"quan": 1},
                "flint and steel": {"recipe": ["flint","iron ingot"],"quan": 1},
                "arrow": {"recipe": ["flint","stick","feather"], "quan": 4},
                "bowl": {"recipe": ["oak wood plank","oak wood plank","oak wood plank"],"quan": 3},
                "bread": {"recipe": ["wheat","wheat","wheat"],"quan": 1},
                "cake": {"recipe": ["milk","milk","milk","sugar","sugar","egg","wheat","wheat","wheat"],"quan": 1},
                "pumpkin pie": {"recipe": ["pumpkin","sugar","egg"],"quan": 1},
                "golden apple": {"recipe": ["gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","apple"],"quan": 1},
                "golden carrot": {"recipe": ["gold nuggot","gold nuggot","gold nuggot","gold nuggot","gold nuggot","gold nuggot","gold nuggot","gold nuggot","carrot"],"quan": 1},
                "cookie": {"recipe": ["wheat","wheat","coco beans"],"quan": 8},
                "wooden sword": {"recipe": ["stick","oak wood plank","oak wood plank"],"quan": 1},
                "wooden pickaxe": {"recipe": ["stick","stick","oak wood plank","oak wood plank","oak wood plank"],"quan": 1},
                "wooden axe": {"recipe": ["stick","stick","oak wood plank","oak wood plank","oak wood plank"],"quan": 1},
                "wooden shovel": {"recipe": ["stick","stick","oak wood plank"],"quan": 1},
                "wooden hoe": {"recipe": ["stick","stick","oak wood plank","oak wood plank"],"quan": 1},
                "leather helmet": {"recipe": ["leather","leather","leather","leather","leather"],"quan": 1},
                "leather tunic": {"recipe": ["leather","leather","leather","leather","leather","leather","leather","leather"],"quan": 1},
                "leather pants": {"recipe": ["leather","leather","leather","leather","leather","leather","leather"],"quan": 1},
                "leather boots": {"recipe": ["leather","leather","leather","leather"],"quan": 1},
                "cobblestone sword": {"recipe": ["stick","cobblestone","cobblestone"],"quan": 1},
                "cobblestone pickaxe": {"recipe": ["stick","stick","cobblestone","cobblestone","cobblestone"],"quan": 1},
                "cobblestone axe": {"recipe": ["stick","stick","cobblestone","cobblestone","cobblestone"],"quan": 1},
                "cobblestone shovel": {"recipe": ["stick","stick","cobblestone"],"quan": 1},
                "cobblestone hoe": {"recipe": ["stick","stick","cobblestone","cobblestone"],"quan": 1},
                "chainmail helmet": {"recipe": ["fire","fire","fire","fire","fire"],"quan": 1},
                "chainmail chestplate": {"recipe": ["fire","fire","fire","fire","fire","fire","fire","fire"],"quan": 1},
                "chainmail leggings": {"recipe": ["fire","fire","fire","fire","fire","fire","fire"],"quan": 1},
                "chainmail boots": {"recipe": ["fire","fire","fire","fire"],"quan": 1},
                "iron sword": {"recipe": ["stick","iron ingot","iron ingot"],"quan": 1},
                "iron pickaxe": {"recipe": ["stick","stick","iron ingot","iron ingot","iron ingot"],"quan": 1},
                "iron axe": {"recipe": ["stick","stick","iron ingot","iron ingot","iron ingot"],"quan": 1},
                "iron shovel": {"recipe": ["stick","stick","iron ingot"],"quan": 1},
                "iron hoe": {"recipe": ["stick","stick","iron ingot","iron ingot"],"quan": 1},
                "shear": {"recipe": ["iron ingot","iron ingot"],"quan": 1},
                "bucket": {"recipe": ["iron ingot","iron ingot","iron ingot"],"quan": 1},
                "iron helmet": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot","iron ingot"],"quan": 1},
                "iron chestplate": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot"],"quan": 1},
                "iron leggings": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot"],"quan": 1},
                "iron boots": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot"],"quan": 1},
                "gold sword": {"recipe": ["stick","gold ingot","gold ingot"],"quan": 1},
                "gold pickaxe": {"recipe": ["stick","stick","gold ingot","gold ingot","gold ingot"],"quan": 1},
                "gold axe": {"recipe": ["stick","stick","gold ingot","gold ingot","gold ingot"],"quan": 1},
                "gold shovel": {"recipe": ["stick","stick","gold ingot"],"quan": 1},
                "gold hoe": {"recipe": ["stick","stick","gold ingot","gold ingot"],"quan": 1},
                "gold helmet": {"recipe": ["gold ingot","gold ingot","gold ingot","gold ingot","gold ingot"],"quan": 1},
                "gold chestplate": {"recipe": ["gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot"],"quan": 1},
                "gold leggings": {"recipe": ["gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot"],"quan": 1},
                "gold boots": {"recipe": ["gold ingot","gold ingot","gold ingot","gold ingot"],"quan": 1},
                "diamond sword": {"recipe": ["stick","diamond","diamond"],"quan": 1},
                "diamond pickaxe": {"recipe": ["stick","stick","diamond","diamond","diamond"],"quan": 1},
                "diamond axe": {"recipe": ["stick","stick","diamond","diamond","diamond"],"quan": 1},
                "diamond shovel": {"recipe": ["stick","stick","diamond"],"quan": 1},
                "diamond hoe": {"recipe": ["stick","stick","diamond","diamond"],"quan": 1},
                "diamond helmet": {"recipe": ["diamond","diamond","diamond","diamond","diamond"],"quan": 1},
                "diamond chestplate": {"recipe": ["diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond"],"quan": 1},
                "diamond leggings": {"recipe": ["diamond","diamond","diamond","diamond","diamond","diamond","diamond"],"quan": 1},
                "diamond boots": {"recipe": ["diamond","diamond","diamond","diamond"],"quan": 1},
                "iron block": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot"],"quan": 1},
                "gold block": {"recipe": ["gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot"],"quan": 1},
                "diamond block": {"recipe": ["diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond","diamond"],"quan": 1},
                "coal block": {"recipe": ["coal","coal","coal","coal","coal","coal","coal","coal","coal"],"quan": 1},
                "lapis lazuli block": {"recipe": ["lapis lazuli","lapis lazuli","lapis lazuli","lapis lazuli","lapis lazuli","lapis lazuli","lapis lazuli","lapis lazuli","lapis lazuli"],"quan": 1},
                "redstone block": {"recipe": ["redstone","redstone","redstone","redstone","redstone","redstone","redstone","redstone","redstone"],"quan": 1},
                "tnt": {"recipe": ["sand","sand","sand","sand","gunpowder","gunpowder","gunpowder","gunpowder","gunpowder"],"quan": 1},
                "snow block": {"recipe": ["snowball","snowball","snowball","snowball"],"quan": 1},
                "quarz block": {"recipe": ["quarz","quarz","quarz","quarz"],"quan": 1},
                "hay bale": {"recipe": ["wheat","wheat","wheat","wheat","wheat","wheat","wheat","wheat","wheat"],"quan": 1},
                "glowstone block": {"recipe": ["glowstone","glowstone","glowstone","glowstone"],"quan": 1},
                "emerald block": {"recipe": ["emerald","emerald","emerald","emerald","emerald","emerald","emerald","emerald","emerald"],"quan": 1},
                "iron bars": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot"],"quan": 16},
                "iron nuggot": {"recipe": ["iron ingot"],"quan": 9},
                "gold nuggot": {"recipe": ["gold ingot"],"quan": 9},
                "oak wood fence": {"recipe": ["oak wood plank","oak wood plank","oak wood plank","oak wood plank","stick","stick"],"quan": 4},
                "oak wood fence gate": {"recipe": ["oak wood plank","oak wood plank","stick","stick","stick","stick"],"quan": 1},
                "trap door": {"recipe": ["oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank"],"quan": 2},
                "sign": {"recipe": ["oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","stick"],"quan": 3},
                "ladder": {"recipe": ["stick","stick","stick","stick","stick","stick","stick"],"quan": 3},
                "bed": {"recipe": ["oak wood plank","oak wood plank","oak wood plank","wool","wool","wool"],"quan": 1},
                "oak wood door": {"recipe": ["oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank"],"quan": 3},
                "wood stairs": {"recipe": ["oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank"],"quan": 4},
                "torch": {"recipe": ["stick","coal"],"quan": 4},
                "redstone torch": {"recipe": ["stick","redstone"],"quan": 1},
                "redstone comparator": {"recipe": ["redstone torch","redstone torch","redstone torch","stone","stone","stone","quarz"],"quan": 1},
                "redstone repeater": {"recipe": ["redstone torch","redstone torch","redstone","stone","stone","stone"],"quan": 1},
                "paper": {"recipe": ["sugar cane","sugar cane","sugar cane"],"quan": 3},
                "sugar": {"recipe": ["sugar cane"],"quan": 1},
                "book": {"recipe": ["paper","paper","paper","leather"],"quan": 1},
                "book shelf": {"recipe": ["book","book","book","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank"],"quan": 1},
                "cauldron": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot"],"quan": 1},
                "anvil": {"recipe": ["iron block","iron block","iron block","iron ingot","iron ingot","iron ingot","iron ingot"],"quan": 1},
                "brewing stand": {"recipe": ["cobblestone","cobblestone","cobblestone","blaze rod"],"quan": 1},
                "minecart": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot","iron ingot"],"quan": 1},
                "rail": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","stick"],"quan": 16},
                "powered rail": {"recipe": ["gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","gold ingot","stick","gold ingot"],"quan": 6},
                "detector rail": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","stone pressure plate", "redstone"],"quan": 6},
                "activator rail": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot","stick","stick","redstone torch"]},
                "piston": {"recipe": ["oak wood plank","oak wood plank","oak wood plank","cobblestone","cobblestone","cobblestone","cobblestone","redstone","iron ingot"],"quan": 1},
                "sticky piston": {"recipe": ["piston","slime"],"quan": 1},
                "dispenser": {"recipe": ["cobblestone","cobblestone","cobblestone","cobblestone","cobblestone","cobblestone","cobblestone","redstone","bow"],"quan": 1},
                "dropper": {"recipe": ["cobblestone","cobblestone","cobblestone","cobblestone","cobblestone","cobblestone","cobblestone","redstone"],"quan": 1},
                "hopper": {"recipe": ["chest","iron ingot","iron ingot","iron ingot","iron ingot","iron ingot"],"quan": 1},
                "note block": {"recipe": ["oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","oak wood plank","redstone"],"quan": 1},
                "compass": {"recipe": ["iron ingot","iron ingot","iron ingot","iron ingot","redstone"],"quan": 1},
                "clock": {"recipe": ["gold ingot","gold ingot","gold ingot","gold ingot","redstone"],"quan": 1},
                "lead": {"recipe": ["string","string","string","string","slime"],"quan": 2},
                "glass pane": {"recipe": ["glass","glass","glass","glass","glass","glass"],"quan": 16},
                "item frame": {"recipe": ["stick","stick","stick","stick","stick","stick","stick","stick","leather"],"quan": 1},
                
                "lead nuggot": {"recipe": ["lead ingot"],"quan": 9},
                "steel nuggot": {"recipe": ["steel ingot"],"quan": 9},
                "invar nuggot": {"recipe": ["invar ingot"],"quan": 9},
                "electrum nuggot": {"recipe": ["electrum ingot"],"quan": 9},
                "enderium nuggot": {"recipe": ["enderium ingot"],"quan": 9},

                "photovoltaic cell": {"recipe": ["glass pane","glass pane","glass pane","electrotine","iron nuggot","iron nuggot","iron nuggot"],"quan": 1},
                "leadstone solar core": {"recipe": ["lead nuggot","lead nuggot","lead nuggot","lead nuggot","iron ingot"],"quan": 1},
                "hardened solar core": {"recipe": ["leadstone solar core","invar nuggot","invar nuggot","invar nuggot","invar nuggot"],"quan": 1},
                "redstone solar core": {"recipe": ["hardened solar core","electrum nuggot","electrum nuggot","electrum nuggot","electrum nuggot"],"quan": 1},
                "resonant solar core": {"recipe": ["redstone solar core","enderium nuggot","enderium nuggot","enderium nuggot","enderium nuggot"],"quan": 1},
                "leadstone solar panel": {"recipe": ["photovoltaic cell","photovoltaic cell","photovoltaic cell","redstone","redstone","leadstone solar core","steel nuggot","steel nuggot","steel nuggot"],"quan": 1},
                "hardened solar panel": {"recipe": ["hardened solar core","leadstone solar panel","leadstone solar panel","leadstone solar panel","leadstone solar panel","leadstone solar panel","leadstone solar panel","leadstone solar panel","leadstone solar panel"],"quan": 1},
                "redstone solar panel": {"recipe": ["redstone solar core","hardened solar panel","hardened solar panel","hardened solar panel","hardened solar panel","hardened solar panel","hardened solar panel","hardened solar panel","hardened solar panel"],"quan": 1},
                "resonant solar panel": {"recipe": ["resonant solar core","redstone solar panel","redstone solar panel","redstone solar panel","redstone solar panel","redstone solar panel","redstone solar panel","redstone solar panel","redstone solar panel"],"quan": 1},
            }
        }
    },
    beforeMount() {

    },
    components: {
        navbar
    },
    computed: {
        keys() {
            return Object.keys(this.data);
        }
    }
}
</script>
<style scoped>
    .mcCGuide{
        min-height: 100vh;
    }

    .headline{
        color: rgb(65, 22, 22);
        text-align: center;
        text-shadow: 3px 3px 4px grey;
    }

    .content{
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        min-height: 100%;
    }

    .col-me{
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        min-height: 80vh;
        min-width: 30vw;
    }

    .field{
        padding: 1em;
        margin-bottom: 5vh;
        background-color: rgb(233, 233, 233);
        border: none;
        border-radius: 4px;
        box-shadow: 2px 3px rgba(78, 78, 78, 0.4);
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
        width: 35em;
        padding: 3px;
        border: 1px solid black;
        border-radius: .5em;
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
    }
    .btn-calc{
        background-color: rgb(235, 235, 235);
        font-size: 17px;
        font-family: 'Segoe UI', Arial;
        color: rgb(35, 114, 48);
        border: 1px solid black;
        border-radius: 5px;
        width: 9em;
        height: 2em;
    }
</style>