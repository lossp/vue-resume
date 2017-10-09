<template>
  <div id="resumePreview">
    <!--{{resume}}-->
    <section data-name="prefile" v-show="resume.profile">
      <h1>{{resume.profile.name}}</h1>
      <p>
        <small><span>居住地:</span>{{resume.profile.city}} | <span>出生日期:</span>{{resume.profile.birth}}</small>
      </p>
    </section>

    <section data-name="works" v-show="resume.works">
      <h2>工作经历</h2>
      <div>
        {{resume.works.company || '公司名称'}}
      </div>
      <div>
        {{resume.works.content || '工作内容'}}
      </div>
    </section>

    <section data-name="education" v-show="resume.education">
      <h2>教育经历</h2>
      <div>
        {{resume.education.school || '学校'}}
      </div>
      <div>
        {{resume.education.major || '专业'}}
      </div>
      <div>
        {{resume.education.degree || '学历'}}
      </div>
      <div>
        {{resume.education.awards || '获奖经历'}}
      </div>
    </section>

    <section data-name="projects" v-show="resume.projects">
      <h2>项目经历</h2>
      <div>
        {{resume.projects.project || '项目'}}
      </div>
      <div>
        {{resume.projects.content || '项目内容'}}
      </div>
    </section>

    <section data-name="contacts" v-show="resume.contacts">
      <h2>联系方式</h2>
      <div>
        QQ:{{resume.contacts.qqnumber || '项目内容'}}
      </div>
      <div>
        WeiXin:{{resume.contacts.weixin || '项目内容'}}
      </div>
      <div>
        电话:{{resume.contacts.number || '项目内容'}}
      </div>
      <div>
        邮箱:{{resume.contacts.email || '项目内容'}}
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    name: 'ResumePreview',
    computed: {
    	resume() {
    		return this.$store.state.resume
      }
    }
  }
</script>


<style lang="scss">
  #resumePreview{
    background: #fff;
    width: 900px;
    min-height: 500px;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
    padding: 2em;
    color: #333;
    line-height: 1.2;
    overflow: auto;
    *{
      box-sizing: border-box;
      font-variant: normal;
      font-weight: normal;
    }
    ol{
      list-style: none;
    }
    section+section{
      margin-top: 2em;
    }
    p{
      white-space: pre-line;
    }
    section{
      >h2:first-child{
        background: #ddd;
        display: inline-block;
        padding: .2em;
        margin: .5em;
      }
    }
    section[data-name='profile']{
      >h1{
        margin: .1em 0;
        font-size: 4em;
      }
    }
    section[data-name='workHistory'],
    section[data-name='projects'],
    section[data-name='awards']{
      li+li{
        margin-top: 1em;
      }
      li{
        border-bottom: 1px solid #999;
        padding-bottom: .3em;
        margin-bottom: .3em;
      }
    }
    section[data-name='education']{
      li{
        line-height: 1.5;
      }
    }
    section[data-name='contacts']{
      td:first-child{
        padding-right: 1em;
      }
    }
  }
</style>
