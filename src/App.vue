<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <Topbar class="topbar" v-on:preview="preview"/>
    <main>
        <Editor class="editor"/>
        <Preview class="preview"/>
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import store from './store/index'
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'


export default {
  data(){
    return{
      previewMode : false,
    }
  },
  store,
  methods:{
    preview(){
      alert(1)
      this.previewMode = true
    },
    exitPreview(){
      this.previewMode = false
    },
    restoreResumeFromLocalStorage(){
      let resume = localStorage.getItem('resume')
      if(resume){
      this.$store.commit('setResume', JSON.parse(resume))
      }
    }
  },
  components: {
      Topbar, Editor, Preview
  },
  created(){
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state)
    }
    this.$store.commit('initState',state)
  }
}
</script>

<style>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.topbar{
  height: 100px;
  border-radius: 10px;
  margin: 7px;
  box-shadow: 3px 3px 14px #888888;
}
main{
  display: flex;
  flex: 1;
}
main > .editor{
  width: 30em;
  margin: 14px 7px 14px 7px;
}
main > .preview {
  flex: 1;
  margin: 14px 7px 14px 7px;
}
.previewMode > #topbar{
  display: none;
}
.previewMode #editor{
  display: none;
}
.previewMode #preview{
  max-width: 900px;
  margin: 16px auto;
}
#exitPreview{
  display: none;
}
.previewMode #exitPreview{
  display: inline-block;
  position: fixed;
  right: 16px;
  buttom: 16px;
}
</style>
