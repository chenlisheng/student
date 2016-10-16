<template>
<div>
  <common-header id="home_header"></common-header>
  <div class="common_detail">
    <div class="detail_left">
      <ul id="detail_list_name">
        <li class="title">
          <span>师资队伍</span>
        </li>
        <li class="item active" @click="showDetails($event)">
          <a>两院院士</a>
        </li>
        <li class="item" @click="showDetails($event)">
          <a>人文社科资深教授</a>
        </li>
        <li class="item" @click="showDetails($event)">
          <a>国家教学名师</a>
        </li>
        <li class="item" @click="showDetails($event)">
          <a>国家杰青</a>
        </li>
        <li class="item" @click="showDetails($event)">
          <a>长江学者</a>
        </li>
      </ul>
      <h4>
        <span class="text">网站链接</span>
        <span class="text-uppercase">LINKS</span>
      </h4>
      <div>
        <ul>
          <li class="item link">
            <a>教师主页</a>
          </li>
          <li class="item link">
            <a>名师库</a>
          </li>
          <li class="item link">
            <a>人才招聘</a>
          </li>
          <li class="item link">
            <a>人事部</a>
          </li>
          <li class="item link">
            <a>博士后</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="detail_right">
      <div class="right_title">
        <span class="title">{{detail_tile}}</span>
        <div class="nav">
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">师资队伍</a></li>
            <li>{{detail_tile}}</li>
          </ul>
        </div>
      </div>
      <div class="right_content">
        <div class="list">
          <div class="list_title" @click="showList($event)">
            <span>第一届（2004年）</span>
          </div>
          <div class="list_detail" style="display: block;">
            <ul>
              <li><a href="#" class="box">韩德培</a></li>
              <li><a href="#">韩德培</a></li>
              <li><a href="#">韩德培</a></li>
              <li><a href="#">韩德培</a></li>
            </ul>
          </div>
        </div>
        <div class="list">
          <div class="list_title" @click="showList($event)">
            <span>第二届（2006年）</span>
          </div>
          <div class="list_detail">
            <ul>
              <li><a href="#">冯天瑜</a></li>
              <li><a href="#">刘纲纪</a></li>
            </ul>
          </div>
        </div>
        <div class="list">
          <div class="list_title" @click="showList($event)">
            <span>第三届（2008年）</span>
          </div>
          <div class="list_detail">
            <ul>
              <li><a href="#">宗福邦</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <common-bottom id="home_bottom"></common-bottom>
</div>
</template>

<script>
export default {
  methods: {
    showDetails:function(e){
      var text= e.target.innerText;
      this.detail_tile = text;
      var li = $('#detail_list_name li.item');
      var length = li.length;
      for(var i=0;i<length;i++){
        for(var j=0;j<li[i].attributes.length;j++){
          if(li[i].attributes[j].name === 'class'){
            if($('#detail_list_name li.item a')[i].text === text){
              li[i].attributes[j].value = 'item active';
            }else{
              li[i].attributes[j].value = 'item';
            }
            break;
          }
        }
      }
    },

    showList: function(e){
      var node = e.target.parentElement.children[1] || e.target.parentElement.parentElement.children[1];
      if(node.style.display === 'none'){
        node.style.display = 'block';
      }else{
        node.style.display = 'none';
      }
    }
  },
  data() {
    return {
      detail_tile: '两院院士'
    }
  }
}
</script>

<style scoped>
.common_detail {
  background-color: #fff;
  padding: 0;
  position: relative;
  width: 1166px;
  left: 50%;
  margin-left: -583px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
}

.detail_left {
  width: 200px;
}

.detail_left ul {
  margin: 0;
  padding: 0;
}

.detail_left ul li {
  width: 100%;
  height: 40px;
  list-style-type: none;
}

.detail_left ul li.title {
  font-size: 16px;
  background: #214E1B;
  color: #fff;
  font-weight: bold;
  border: 1px solid #214E1B;
}

.detail_left ul li.title span {
  position: relative;
  left: 10px;
  top: 7px;
}

.detail_left ul li.item {
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  cursor: pointer;
}

.detail_left ul li.item:hover {
  background-color: #eee;
}

.detail_left ul li.item a {
  position: relative;
  color: #000;
  top: 8px;
  left: 10px;
}

.detail_left ul li.link {
  margin-bottom: 5px;
  background-color: #fbfbfb;
}

.detail_left ul li.active{
  background-color: #eee;
}

.detail_left ul li.active a {
  color: #688C00;
}

.detail_left h4 {
  margin-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 0;
  font-size: 18px;
}

.detail_left h4 span.text-uppercase {
  font-size: 14px;
}

.detail_right {
  margin-left: 50px;
  width: calc(100% - 260px);
}

.right_title {
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
}

.right_title span.title{
  font-size: 24px;
  border-bottom: 1px solid #214E1B;
  display: inline-block;
  position: relative;
  top: 10px;
  height: 30px;
  float: left;
}

.right_title div.nav {
  float: right;
  position: relative;
  margin-top: 10px;
}

.right_title ul {
  margin: 0;
}

.right_title ul li {
  float: left;
  list-style-type: none;
  color: #777;
}

.right_title ul li a {
  text-decoration: none;
  color: #000;
}

.right_title ul li a:hover {
  color: #688C00;
  text-decoration: underline;
}

.right_title ul>li+li:before {
  content: "/\00a0";
  padding: 0 5px;
  color: #ccc;
}

.list {
  width: 100%;
  padding-bottom: 5px;
}

.list_title {
  background-color: #fbfbfb;
  height: 35px;
  width: 100%;
  border-left: 5px solid #214E1B;
  cursor: pointer;
}

.list_title span {
  position: relative;
  top: 8px;
  left: 15px;
}

.list_detail {
  width: 100%;
  text-align: center;
}

.list_detail ul {
  width: 100%;
  margin: 0;
  padding: 0;
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.list_detail ul li {
  height: 50px;
  width: 33.333333%;
  list-style-type: none;
}

.list_detail ul li a {
  text-decoration: none;
  position: relative;
  top: 15px;
  color: #000;
}

.list_detail ul li a:hover {
  color: #688C00;
  text-decoration: underline;
}

.list_detail ul li a.box {
  border: 1px solid #000;
}

</style>
