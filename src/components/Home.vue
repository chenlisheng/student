<template>
  <div class="mdl-layout mdl-js-layout">
    <header class="mdl-layout__header  mdl-layout__header--seamed">
      <div class="mdl-layout__header-row">
        <div class="mdl-layout-title">
          <div class="person_navbar">
            <ul>
              <li><a href="">学生</a></li>
              <li><a href="">教工</a></li>
              <li><a href="">校友</a></li>
              <li><a href="">考生</a></li>
              <li><a href="">访客</a></li>
            </ul>
          </div>
        </div>
        <div class="mdl-layout-spacer">
          <div class="system_navbar">
            <ul>
              <li><a href="">信息门户</a></li>
              <li><a href="">邮箱系统</a></li>
              <li><a href="">办公系统</a></li>
            </ul>
          </div>
        </div>
        <nav class="mdl-navigation">
          <div class="keywords-search">
            <input type="text" placeholder="搜索关键词..." v-model="searchKeyWords"/>
            <i class="material-icons">search</i>
          </div>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__tab-bar">
      <div class="logo">
      </div>
      <div class="tab_bar">
        <ul>
          <li><a href="#panel-1" class="mdl-layout__tab">学校概况</a></li>
          <li><a href="#panel-2" class="mdl-layout__tab">机构设置</a></li>
          <li><a href="#panel-3" class="mdl-layout__tab">师资队伍</a></li>
          <li><a href="#panel-1" class="mdl-layout__tab">人才培养</a></li>
          <li><a href="#panel-1" class="mdl-layout__tab">科学研究</a></li>
          <li><a href="#panel-1" class="mdl-layout__tab">社会服务</a></li>
          <li><a href="#panel-1" class="mdl-layout__tab">交流合作</a></li>
          <li><a href="#panel-1" class="mdl-layout__tab">文化生活</a></li>
        </ul>
      </div>
    </div>
    <div class="popup">
      <ul>
        <li v-for="msg in popupMsg[0].value" :click="popupLink({{msg.value}})">{{msg.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods () {
    function popupLink (value) {

    }
  },
  data () {
    return {
      popupMsg: [{
        name: 'survey',
        value: [{
          name: '111111',
          value: 'www.baudu.com'
        },
        {
          name: '111111',
          value: 'www.baudu.com'
        },
        {
          name: '111111',
          value: 'www.baudu.com'
        }]
      },
      {
        name: 'organization',
        value: [{
          name: '222222',
          value: 'www.baudu.com'
        }]
      },
      {
        name: 'teachers',
        value: [{
          name: '333333',
          value: 'www.baudu.com'
        }]
      },
      {
        name: 'talent',
        value: [{
          name: '444444',
          value: 'www.baudu.com'
        }]
      },
      {
        name: 'science',
        value: [{
          name: '555555',
          value: 'www.baudu.com'
        }]
      },
      {
        name: 'society',
        value: [{
          name: '666666',
          value: 'www.baudu.com'
        }]
      },
      {
        name: 'communicate',
        value: [{
          name: '777777',
          value: 'www.baudu.com'
        }]
      },
      {
        name: 'cultural',
        value: [{
          name: '888888',
          value: 'www.baudu.com'
        }]
      }]
    }
  }
}
</script>


<style scoped>
.mdl-layout__header-row a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
}

ul {
  margin: 0;
}

ul li {
  list-style-type:none;
  float:left;
  margin: 0 5px;
}

.system_navbar ul li {
  margin: 0 20px;
}

.person_navbar {
  position: relative;
}

.keywords-search {
  height: 30px;
  background-color: #b8b8b8;
  border: 1px solid #b8b8b8;
  border-bottom: 1px solid #ccc;
  display: inline-flex;
  border-radius: 5px;
}

.mdl-layout__header-row .mdl-navigation {
  margin: 0 150px 0 0;
}

input {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 12px 0px;
  border: none;
  outline: none;
  border-radius: 5px 0 0 5px;
}

.material-icons {
  padding: 3px 8px;
}

.mdl-layout__tab-bar {
  height: 108px;
  background-color:#fff;
}

.mdl-layout__tab-bar a {
  color: #000;
  font-size: 18px;
  text-decoration: none;
  padding:0 10px;
}

.mdl-layout__tab:hover {
  color:blue;
}

.logo {
  background-image:url("../images/logo.png");
  background-repeat:no-repeat;
  width: 250px;
  height: 78px;
  margin: 15px 0;
}

.tab_bar {
  height: 108px;
  width: calc(100% - 250px);
}

.tab_bar ul li {
  position:relative;
  padding:30px 0;
  margin:0;
}
</style>
