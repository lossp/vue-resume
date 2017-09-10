<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
        <Editor class="editor"/>
        <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'


export default {
  components: {
      Topbar, Editor, Preview
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

</style>
