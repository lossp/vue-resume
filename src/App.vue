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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.topbar{
  background-color: red;
  height: 100px;
}
main{
  background-color: pink;
  display: flex;
  flex: 1;
}
main > .editor{
  width: 20em;
}
main > .preview {
  flex: 1;
}

</style>
