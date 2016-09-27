<template>
  <div class="common_bottom">
    <div class="bottom">
      <div class="bottom_content">
        <div class="bottom_log">
          <p>
            <a>
              <img src="../../../static/images/logo2.png"></img>
            </a>
          </p>
        </div>
        <div class="bottom_link">
          <div class="list">
            <ul>
              <li><a href="#">学术委员会</a></li>
              <li><a href="#">图书馆</a></li>
              <li><a href="#">校友总会</a></li>
              <li><a href="#">基金会</a></li>
              <li><a href="#">领导信箱</a></li>
            </ul>
          </div>
          <div class="list">
            <ul>
              <li><a href="#">信息公开</a></li>
              <li><a href="#">招投标信息</a></li>
              <li><a href="#">人才招聘</a></li>
              <li><a href="#">VPN通道</a></li>
              <li><a href="#">学生服务</a></li>
            </ul>
          </div>
          <div class="list">
            <ul>
              <li><a href="#">教工服务</a></li>
              <li><a href="#">校友服务</a></li>
              <li><a href="#">阳关招生</a></li>
              <li><a href="#">学生资助</a></li>
              <li><a href="#">武汉大学报</a></li>
            </ul>
          </div>
        </div>
        <div class="bottom_toggleCode">
          <ul>
            <li>
              <p>
                <a @mouseover="showCodeSpan(0)" @mouseout="hideCodeSpan(0)">
                  <img src="../../../static/images/icon60-wechat.png"></img>
                </a>
              </p>
              <p>官方微信</p>
              <div class="codeSpan">
                <img src="../../../static/images/code-wx.jpg"></img>
              </div>
            </li>
            <li>
              <p>
                <a @mouseover="showCodeSpan(1)" @mouseout="hideCodeSpan(1)">
                  <img src="../../../static/images/icon60-sina.png"></img>
                </a>
              </p>
              <p>官方微博</p>
              <div class="codeSpan">
                <img src="../../../static/images/code-wb.png"></img>
              </div>
            </li>
            <li>
              <p>
                <a @mouseover="showCodeSpan(2)" @mouseout="hideCodeSpan(2)">
                  <img src="../../../static/images/icon60-app.png"></img>
                </a>
              </p>
              <p>移动应用</p>
              <div class="codeSpan">
                <img src="../../../static/images/code-yd.png"></img>
              </div>
            </li>
            <li>
              <p>
                <a @mouseover="showCodeSpan(3)" @mouseout="hideCodeSpan(3)">
                  <img src="../../../static/images/icon60-wechat.png"></img>
                </a>
              </p>
              <p>珞珈山水</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="copyright_content">
        <div class="left">
          <p>
            Copyright武汉大学2014
            地址：湖北省武汉市武昌区八一路299号
            邮编：430072
          </p>
          <p>
            鄂ICP备05003330
            鄂公网安备42010602000219
          </p>
        </div>
        <div class="right">
          <div>
            <a href="#">联系我们</a>
          </div>
          <div>
            <a href="#">网站地图</a>
          </div>
          <div class="last">
            <a href="#">信息中心</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showCodeSpan: function(index){
      var attr = 'div.bottom_toggleCode ul li:eq('+index+') div.codeSpan';
      if($(attr).length>0){
        for(let i=0;i<$(attr)[0].attributes.length;i++){
          if($(attr)[0].attributes[i].name === 'class'){
            $(attr)[0].attributes[i].value += ' active';
          }
        }
      }
    },
    hideCodeSpan: function(index){
      var attr = 'div.bottom_toggleCode ul li:eq('+index+') div.codeSpan';
      if($(attr).length>0){
        for(let i=0;i<$(attr)[0].attributes.length;i++){
          if($(attr)[0].attributes[i].name === 'class'){
            $(attr)[0].attributes[i].value = 'codeSpan';
          }
        }
      }
    }
  }
}
</script>


<style scoped>
.common_bottom {
  position: fixed;
  bottom: 0;
  height: 460px;
  width: 100%;
  background: #fff;
}

.bottom {
  padding: 50px 0;
  background: #F6F6F6;
  position: relative;
  height: 280px;
  font-size: 14px;
}

.bottom .bottom_content{
  width: 1166px;
  height: 100%;
  margin: 0 auto;
}

.bottom .bottom_content .bottom_log {
  width: 33%;
  height: 100%;
  float: left;
}

.bottom .bottom_content .bottom_log p {
  margin-bottom: 30px;
  text-align: center;
  top: 54px;
  position: relative;
}

.bottom .bottom_content .bottom_log p a {
  cursor: pointer;
}

.bottom .bottom_content .bottom_link {
  width: 42%;
  height: 100%;
  float: left;
}

.bottom .bottom_content .bottom_link .list {
  width: 33.333333%;
  float: left;
  margin-top: 60px;
}

.bottom .bottom_content .bottom_link .list ul {
  margin: 0 5px;
  padding: 0;
}

.bottom .bottom_content .bottom_link .list ul li {
  height: 30px;
  list-style-type: none;
}

.bottom .bottom_content .bottom_link .list ul li a{
  text-decoration: none;
  padding: 5px 0;
}

.bottom .bottom_content .bottom_link .list ul li a:hover{
  text-decoration: underline;
  color: #688C00;
}

.bottom .bottom_content .bottom_toggleCode {
  width: 25%;
  height: 100%;
  float: left;
}

.bottom .bottom_content .bottom_toggleCode ul {
  padding: 0;
  width: 100%;
  height: 140px;
  margin: 70px 0;
}

.bottom .bottom_content .bottom_toggleCode ul li {
  height: 100%;
  list-style-type: none;
  width: 60px;
  margin: 0 5px;
  float: left;
}

.bottom .bottom_content .bottom_toggleCode ul li a {
  cursor: pointer;
}

.bottom .bottom_content .bottom_toggleCode ul li div.codeSpan{
  left: -230px;
  top: -230px;
  padding: 10px;
  background: #fff;
  position: relative;
  bottom: 0;
  right: 100%;
  width: 200px;
  display: none;
  box-shadow: 1px 1px 2px rgba(0,0,0,.15);
}

.bottom .bottom_content .bottom_toggleCode ul li div.codeSpan img{
  width: 200px;
}

.bottom .bottom_content .bottom_toggleCode ul li div.active{
  display: block;
}

.copyright {
  height: 75px;
  background: #f93f3f;
}

.copyright .copyright_content{
  width: 1166px;
  height: 100%;
  margin: 0 auto;
  font-size: 18px;
  color: #fff;
}

.copyright .copyright_content .left{
  width: 700px;
  padding-top: 10px;
  float: left;
}

.copyright .copyright_content .left p{
  margin: 0 0 10px;
}

.copyright .copyright_content .right{
  width: 300px;
  padding-top: 10px;
  float: right;
}

.copyright .copyright_content .right div{
  border-right: 1px solid #fff;
  float: left;
  padding: 0 5px;
}

.copyright .copyright_content .right div.last{
  border-right: 0px;
}

.copyright .copyright_content .right div a{
  color: #fff;
  text-decoration: none;
  font-size: 14px
}

</style>
