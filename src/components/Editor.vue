<template>
    <div id="editor">
        <div id="items-selection">
            <ul id="items-selection">
                <li v-for="(item, index) in resume.config"
                    v-bind:class="{active: item.field === selected}"
                    v-on:click="selected = item.field">
                    <svg class="icon" aria-hidden="true">
                        <use v-bind:xlink:href="`#icon-${item.icon}`"></use>
                    </svg>
                </li>
            </ul>
        </div>
        <div id="panels">
            <transition-group name="fade" tag="ul">
                <li v-for="(item,index) in resume.config" v-if="item.field === selected" v-bind:key="index">
                    <div v-for="(subitem, key) in resume[item.field]">
                        <label>{{key}}</label>
                        <el-input :value="subitem" @input.native="changeResumeField(`${item.field}.${key}`, $event.target.value)"></el-input>
                    </div>
             
                </li>
          
            </transition-group>
        </div>
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<script>
export default {
  name: 'panels',
  computed: {
    count() {
      return this.$store.state.count
    },
    selected: {
        get() {
        return this.$store.state.selected
      },
      set(value) {
        return this.$store.commit('switchTab',value)
      }
    },
    resume() {
      return this.$store.state.resume
    }
  },
  methods: {
    changeResumeField(path, value) {
      this.$store.commit('updateResume',{
        path,
        value
      })
    }
  }
}



</script>


<style lang="scss">
    #editor{
        border-radius: 10px;
        min-height: 500px;
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
                height: 100%;
            }
            & .active{
                display: block;
            }
        }
    }

.fade-enter-active, .fade-leave-active {
  transition: opacity 0s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}

</style>