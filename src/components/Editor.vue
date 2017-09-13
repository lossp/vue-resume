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
                    <profileEditor v-bind:informations='resume.profile' v-bind:labels="{name:`名字`, city:`城市`,birth:`出生日期`}" title="个人信息"></profileEditor>
                </li>
                <li v-bind:class="{active: currentTab===1}">
                    <ArrayEditor v-bind:items='resume.works' v-bind:labels="{company:`公司`, content:`工作内容`}" title="工作经历"></ArrayEditor>
                </li>
                <li v-bind:class="{active: currentTab===2}">
                    <ArrayEditor v-bind:items ='resume.education' v-bind:labels="{school:'学习',major:'专业',degree:'学位',awards:'获奖经历'}" title="教育经历"></ArrayEditor>
                </li>
                <li v-bind:class="{active: currentTab===3}">
                     <ArrayEditor v-bind:items ='resume.projects' v-bind:labels="{project:'项目',content:'项目内容'}" title="项目经历"></ArrayEditor>
                </li>
                <li v-bind:class="{active: currentTab===4}">
                     <profileEditor v-bind:informations ='resume.contacts' v-bind:labels="{qqnumber:'QQ',weixin:'微信', number:'联系电话', email:'电子邮箱'}" title="项目经历"></profileEditor>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import profileEditor from './profileEditor';
    import ArrayEditor from './ArrayEditor';

    export default{
        components:{profileEditor, ArrayEditor},
        props:['resume'],
        data(){
            return{
                currentTab: 0,
                icons:['jibenxinxi','gongzuojingli','huojiangjingli17','health','lianxifangshi'],

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