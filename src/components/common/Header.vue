<template>
  <div class="mdl-layout">
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
      <div class="logo"></div>
      <div class="tab_bar">
        <ul>
          <li id="school_survey" class="menu">
            <div class="menu_title">
              <span @mouseover="showTabList('school_survey')" @mouseout="showTabList('school_survey')">学校概况</span>
            </div>
              <ul class="item">
                <li><a href="#">学校简介</a></li>
                <li><a href="#">武大标识</a></li>
                <li><a href="#">百年校史</a></li>
                <li><a href="#">历任领导</a></li>
                <li><a href="#">现任领导</a></li>
                <li><a href="#">杰出校友</a></li>
                <li><a href="#">武大百科</a></li>
                <li><a href="#">统计概览</a></li>
                <li><a href="#">校园导览</a></li>
              </ul>
          </li>

          <li id="organization_setup" class="menu">
            <div class="menu_title">
              <span @mouseover="showTabList('organization_setup')" @mouseout="showTabList('organization_setup')">机构设置</span>
            </div>
            <ul class="item">
              <li><a href="#">院系设置</a></li>
              <li><a href="#">职能部门</a></li>
              <li><a href="#">群团组织</a></li>
              <li><a href="#">直属单位</a></li>
              <li><a href="#">附属医院</a></li>
            </ul>
          </li>

          <li id="teacher_staff" class="menu">
            <div class="menu_title">
              <span @mouseover="showTabList('teacher_staff')" @mouseout="showTabList('teacher_staff')">师资队伍</span>
            </div>
            <ul class="item">
              <li><a href="#">两院院士</a></li>
              <li><a href="#">人文社科资深教授</a></li>
              <li><a href="#">国家教学名师</a></li>
              <li><a href="#">国家杰青</a></li>
              <li><a href="#">长江学者</a></li>
            </ul>
          </li>

          <li id="talent_cultivation" class="menu">
            <div class="menu_title">
              <span @mouseover="showTabList('talent_cultivation')" @mouseout="showTabList('talent_cultivation')">人才培养</span>
            </div>
            <ul class="item">
              <li><a href="#">本科生教育</a></li>
              <li><a href="#">研究生教育</a></li>
              <li><a href="#">国际教育</a></li>
              <li><a href="#">学生资助</a></li>
              <li><a href="#">继续教育</a></li>
            </ul>
          </li>

          <li id="scientific_research" class="menu">
            <div class="menu_title">
              <span @mouseover="showTabList('scientific_research')" @mouseout="showTabList('scientific_research')">科学研究</span>
            </div>
            <ul class="item">
              <li><a href="#">2011计划</a></li>
              <li><a href="#">多学科交叉研究院</a></li>
              <li><a href="#">科研机构</a></li>
              <li><a href="#">学术期刊</a></li>
              <li><a href="#">学科建设</a></li>
            </ul>
          </li>

          <li id="social_services" class="menu">
            <div class="menu_title">
              <span @mouseover="showTabList('social_services')" @mouseout="showTabList('social_services')">社会服务</span>
            </div>
            <ul class="item">
              <li><a href="#">驻外研究机构</a></li>
              <li><a href="#">科技成果转化平台</a></li>
              <li><a href="#">重点产学研发中心</a></li>
              <li><a href="#">重点科技企业</a></li>
              <li><a href="#">大型仪器设备共享</a></li>
            </ul>
          </li>

          <li id="exchange_cooperate" class="menu">
            <div class="menu_title">
              <span @mouseover="showTabList('exchange_cooperate')" @mouseout="showTabList('exchange_cooperate')">交流合作</span>
            </div>
            <ul class="item">
              <li><a href="#">国际学院</a></li>
              <li><a href="#">孔子学院</a></li>
              <li><a href="#">昆山杜克大学</a></li>
              <li><a href="#">汉推基地</a></li>
            </ul>
          </li>

          <li id="cultural_life" class="menu">
            <div class="menu_title">
              <span @mouseover="showTabList('cultural_life')" @mouseout="showTabList('cultural_life')">文化生活</span>
            </div>
            <ul class="item">
              <li><a href="#">早期建筑群</a></li>
              <li><a href="#">工会活动</a></li>
              <li><a href="#">学生活动</a></li>
              <li><a href="#">博物馆</a></li>
              <li><a href="#">文体场馆</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showTabList: function(id){
      if($('#'+id+' ul.item').hasClass('active')){
        $('#'+id+' ul.item').removeClass('active');
      }else{
        $('#'+id+' ul.item').addClass('active');
      } 
    }
  }
}
</script>


<style scoped>
.mdl-layout {
  height: auto;
  overflow-y: hidden;
  overflow-x: hidden;
}

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

li{
  list-style-type : none;
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

.tab_bar li.menu {
  float: left;
  margin: 0px;
  padding: 0px;
  width: 100px;
}

.menu_title {
  width: 100px;
  height: 70px;
}

.tab_bar li.menu span {
  height: 70px;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 100;
}

.tab_bar li.menu span {
  position: relative;
  top: 25px;
  left: 15px;
}

.tab_bar li.menu span:hover {
  color: #688C00;
}

.tab_bar li.menu ul.item {
  display: none;
  margin-left: -25px;
  border: 1px solid #EADCDC;
  width: 150px;
}

.tab_bar li.menu ul.item:hover {
  display: block;
}

.tab_bar li.menu ul.item li {
  margin: 0px;
  text-align: center;
  height: 30px;
  background-color: #fff;
  cursor: pointer;
  width: 100%;
}

.tab_bar li.menu ul.item li:hover {
  background-color: #eee;
}

.tab_bar li.menu ul.active {
  display: block;
}

.tab_bar li.menu ul.item li a {
  position: relative;
  top: 5px;
  font-size: 14px;
  font-weight: 100;
}
</style>
