<template>
    <div id="editor">
        <div id="items-selection">
            <ul>
                <li v-for="i in [0,1,2,3,4]"
                    v-bind:class="{active: currentTab===i}"
                    v-on:click="currentTab = i">
                    <svg class="icon" aria-hidden="true">
                        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                    </svg>
                </li>
            </ul>
        </div>
        <div id="panels">
            <ul>
                <li v-for="i in [0,1,2,3,4]"
                    v-bind:class="{active: currentTab===i}"
                    v-on:click="currentTab = i">tab{{i+1}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                currentTab: 0,
                icons:['jibenxinxi','gongzuojingli','huojiangjingli17','health','lianxifangshi']
            }
        }
    }
</script>


<style lang="scss">
    #editor{
        border-radius: 10px;
        min-height: 100px;
        box-shadow: 3px 3px 14px #888888;
        >#items-selection{
            width: 80px;
            height: 100%;
            background-color: #888888;
            border-radius: 10px 0px 0px 10px;
            color: white;
            display: inline-block; 
            >ul>li{
                text-align: center;
                font-size: 24px;
                padding-top: 20px;
                padding-bottom: 20px;              
            }
            & .active{
                background: white;
                color: black;
            }        
        }
        >#panels{
            display: inline-block;
            position: relative;
            top: -280px;
            >ul>li{
                display: none;
            }
            & .active{
                display: block;
            }
        }
    }
</style>