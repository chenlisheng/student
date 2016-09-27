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

    <div class="tab_bar_list">
      <div class="logo">
      </div>
      <div class="tab_bar">
        <dl id="school_survey" class="menu">
          <dt @mouseover="showTabList($event)" @mouseout="hiddenTabList($event)">
            <span>学校概况</span>
          </dt>
          <dl class="item">
            <dd><a href="#">学校简介</a></dd>
            <dd><a href="#">武大标识</a></dd>
            <dd><a href="#">百年校史</a></dd>
            <dd><a href="#">历任领导</a></dd>
            <dd><a href="#">现任领导</a></dd>
            <dd><a href="#">杰出校友</a></dd>
            <dd><a href="#">武大百科</a></dd>
            <dd><a href="#">统计概览</a></dd>
            <dd><a href="#">校园导览</a></dd>
          </dl>
        </dl>
        <dl id="organization_setup" class="menu">
          <dt @mouseover="showTabList($event)" @mouseout="hiddenTabList($event)">
            <span>机构设置</span>
          </dt>
          <dl class="item">
            <dd><a href="#">院系设置</a></dd>
            <dd><a href="#">职能部门</a></dd>
            <dd><a href="#">群团组织</a></dd>
            <dd><a href="#">直属单位</a></dd>
            <dd><a href="#">附属医院</a></dd>
          </dl>
        </dl>
        <dl id="teacher_staff" class="menu">
          <dt @mouseover="showTabList($event)" @mouseout="hiddenTabList($event)">
            <span>师资队伍</span>
          </dt>
          <dl class="item">
            <dd><a href="#">两院院士</a></dd>
            <dd><a href="#">人文社科资深教授</a></dd>
            <dd><a href="#">国家教学名师</a></dd>
            <dd><a href="#">国家杰青</a></dd>
            <dd><a href="#">长江学者</a></dd>
          </dl>
        </dl>
        <dl id="talent_cultivation" class="menu">
          <dt @mouseover="showTabList($event)" @mouseout="hiddenTabList($event)">
            <span>人才培养</span>
          </dt>
          <dl class="item">
            <dd><a href="#">本科生教育</a></dd>
            <dd><a href="#">研究生教育</a></dd>
            <dd><a href="#">国际教育</a></dd>
            <dd><a href="#">学生资助</a></dd>
            <dd><a href="#">继续教育</a></dd>
          </dl>
        </dl>
        <dl id="scientific_research" class="menu">
          <dt @mouseover="showTabList($event)" @mouseout="hiddenTabList($event)">
            <span>科学研究</span>
          </dt>
          <dl class="item">
            <dd><a href="#">2011计划</a></dd>
            <dd><a href="#">多学科交叉研究院</a></dd>
            <dd><a href="#">科研机构</a></dd>
            <dd><a href="#">学术期刊</a></dd>
            <dd><a href="#">学科建设</a></dd>
          </dl>
        </dl>
        <dl id="social_services" class="menu">
          <dt @mouseover="showTabList($event)" @mouseout="hiddenTabList($event)">
            <span>社会服务</span>
          </dt>
          <dl class="item">
            <dd><a href="#">驻外研究机构</a></dd>
            <dd><a href="#">科技成果转化平台</a></dd>
            <dd><a href="#">重点产学研发中心</a></dd>
            <dd><a href="#">重点科技企业</a></dd>
            <dd><a href="#">大型仪器设备共享</a></dd>
          </dl>
        </dl>
        <dl id="exchange_cooperate" class="menu">
          <dt @mouseover="showTabList($event)" @mouseout="hiddenTabList($event)">
            <span>交流合作</span>
          </dt>
          <dl class="item">
            <dd><a href="#">国际学院</a></dd>
            <dd><a href="#">孔子学院</a></dd>
            <dd><a href="#">昆山杜克大学</a></dd>
            <dd><a href="#">汉推基地</a></dd>
          </dl>
        </dl>
        <dl id="cultural_life" class="menu">
          <dt @mouseover="showTabList($event)" @mouseout="hiddenTabList($event)">
            <span>文化生活</span>
          </dt>
          <dl class="item">
            <dd><a href="#">早期建筑群</a></dd>
            <dd><a href="#">工会活动</a></dd>
            <dd><a href="#">学生活动</a></dd>
            <dd><a href="#">博物馆</a></dd>
            <dd><a href="#">文体场馆</a></dd>
          </dl>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showTabList: function(e){
      var attr = e.target.parentNode.attributes;
      var node = '';
      for(let i=0;i<attr.length;i++){
        if(attr[i].name === 'id'){
          node = '#' + attr[i].value + ' dl';
          break;
        }
      }
      $(node).addClass('active');
    },
    hiddenTabList: function(e){
      var attr = e.target.parentNode.attributes;
      var node = '';
      for(let i=0;i<attr.length;i++){
        if(attr[i].name === 'id'){
          node = '#' + attr[i].value + ' dl';
          break;
        }
      }
      $(node).removeClass('active');
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
  height: 100%;
  width: 100%;
}

.person_navbar ul li {
  list-style-type:none;
  float:left;
  margin: 0 5px;
}

.system_navbar ul li {
  list-style-type:none;
  float:left;
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

.tab_bar_list {
  background-color:#fff;
  padding: 0;
  position: relative;
  width: 1166px;
  left: 50%;
  margin-left: -583px;
  height: 108px;
  z-index: 999;
}

.tab_bar_list a {
  color: #000;
  font-size: 18px;
  text-decoration: none;
  padding:0 10px;
}

.logo {
  background-image:url("../../../static/images/logo.png");
  background-repeat:no-repeat;
  width: 265px;
  height: 78px;
  margin: 15px 5px;
  float: left;
}

.tab_bar {
  height: 78px;
  margin: 15px 0px 0px 300px;
}

.tab_bar dl.menu {
  float: left;
  margin: 0px;
  padding: 0px;
  width: 100px;
  
}    

.tab_bar dl.menu dt {
  height: 70px;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 100;
}

.tab_bar dl.menu dt span {
  position: relative;
  top: 25px;
}

.tab_bar dl.menu dt:hover {
  color: #688C00;
}

.tab_bar dl.menu dl.item {
  display: none;
  margin: 0px 0px 0px -25px;
  border: 1px solid #EADCDC;
  width: 150px;
}

.tab_bar dl.menu dl.item:hover {
  display: block;
}

.tab_bar dl.menu dl.item dd {
  margin: 0px;
  text-align: center;
  height: 30px;
  background-color: #fff;
  cursor: pointer;
  width: 100%;
}

.tab_bar dl.menu dl.item dd:hover {
  background-color: #eee;
}

.tab_bar dl.menu dl.active {
  display: block;
}

.tab_bar dl.menu dl.item dd a {
  position: relative;
  top: 5px;
  font-size: 14px;
  font-weight: 100;
}
</style>
