<template>
    <div id="editor">
        <div id="items-selection">
            <ul id="items-selection">
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
                <li v-bind:class="{active: currentTab===0}">
                    <profileEditor v-bind:profile='profile'></profileEditor>
                </li>
                <li v-bind:class="{active: currentTab===1}">
                <h2>工作经历</h2>
                    <el-form>
                        <div class='container' v-for="(work, index) in works">
                            <el-form-item label="城市">
                                <el-input v-model="work.company"></el-input>
                            </el-form-item>
                            <el-form-item label="出生日期">
                                <el-input v-model="work.content"></el-input>
                            </el-form-item>
                            <i class ='el-icon-delete' v-on:click="workDelete(index)"></i>
                            <hr>
                        </div> 
                        <el-button type="primary" v-on:click="addWork">添加栏目</el-button>   
                    </el-form>
                              
                </li>
                <li v-bind:class="{active: currentTab===2}">3</li>
                <li v-bind:class="{active: currentTab===3}">4</li>
                <li v-bind:class="{active: currentTab===4}">5</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import profileEditor from './profileEditor'
    export default{
        components:{profileEditor},
        data(){
            return{
                currentTab: 0,
                icons:['jibenxinxi','gongzuojingli','huojiangjingli17','health','lianxifangshi'],
                profile:{
                    name:'',
                    city:'',
                    birth:''
                },
                works:[
                    {company: '', content: ''}
                ]
            }
        },
        methods:{
            addWork: function(){
                this.works.push({
                    company:'',
                    content:''
                })
            },
            workDelete(index){
                this.works.splice(index, 1)
            }
        }
    }
</script>


<style lang="scss">
    #editor{
        border-radius: 10px;
        min-height: 300px;
        box-shadow: 3px 3px 14px #888888;
        display: flex;
        flex: 1;
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
            overflow: auto;
            padding: 8px;
            flex:1;
             .container{
                position: relative;
                .el-icon-delete{
                    position: absolute;
                    top: 0;
                    right: 0;
                    color:#888888;
                }
            }
            >ul>li{
                display: none;
                height: 100%;
            }
            & .active{
                display: block;
            }
        }
    }
</style>