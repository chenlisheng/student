<template>
  <div class="home">
    <common-header id="home_header"></common-header>
  
    <div class="content">
      <div class="scroll_panel">
        <img id="scroll_img" src="../../static/images/scroll1.jpg"></img>
        <div id="scroll_caption" class="scroll_panel_caption">
          <ol>
            <li @click="scrollImage(1)" class="active"></li>
            <li @click="scrollImage(2)" class=""></li>
            <li @click="scrollImage(3)" class=""></li>
          </ol>
        </div>
        <div id="scroll_title" class="item">
          <a href="#">天高云淡珞珈秋</a>
        </div>
      </div>

      <div class="row">
        <p class="row_title">
          <span class="title">头条新闻HEADLINE</span>
          <a href="#" style=" margin-top: 18px;"><span class="icon icon-c"></span>武大新闻网</a>
        </p>
        <div class="row_panel">
          <div class="panel">
            <div class="panel_box">
              <div class="panel_image">
                <a href="#" title="武汉大学早期建筑入选“首批中国20世纪建筑遗产”名录">
                  <img src='../../static/images/home1.jpg' style="height: 263px;"/>
                </a>
              </div>
              <div class="panel_body">
                <a class="panel_body_link" href="#" title="武汉大学早期建筑入选“首批中国20世纪建筑遗产”名录">武汉大学早期建筑入选“首批中国20世纪建筑遗产”名录</a>
                <span>由中国文物学会20世纪建筑遗产委员会评出，包括人民大会堂等98项。</span>
              </div>
            </div>
          </div>

          <div class="panel">
            <div class="panel_box showborder">
              <ul class="image_ul">
                <li>
                  <div class="panel_image_small">
                    <a href="#" title="韩进率团赴新疆出席对口支援15周年总结会">
                      <img src='../../static/images/home2.png' style="width: 120px;height: 84px;"/>
                    </a>
                  </div>
                  <div class="panel_body_small">
                    <div>
                      <a class="panel_body_link_small" href="#" 
                      title="韩进率团赴新疆出席对口支援15周年总结会">韩进率团赴新疆出席对口支援15周年总结会</a>
                    </div>
                    <span>签署对口支援新疆大学“十三五”建设目标协议书和新学年工作协议。</span>
                  </div>
                </li>
                <li>
                  <div class="panel_image_small">
                    <a href="#" title="韩进率团赴新疆出席对口支援15周年总结会">
                      <img src='../../static/images/home2.png' style="width: 120px;height: 84px;"/>
                    </a>
                  </div>
                  <div class="panel_body_small">
                    <div>
                      <a class="panel_body_link_small" href="#" 
                      title="韩进率团赴新疆出席对口支援15周年总结会">韩进率团赴新疆出席对口支援15周年总结会</a>
                    </div>
                    <span>签署对口支援新疆大学“十三五”建设目标协议书和新学年工作协议。</span>
                  </div>
                </li>
                <li class="end">
                  <div class="panel_image_small">
                    <a href="#" title="韩进率团赴新疆出席对口支援15周年总结会">
                      <img src='../../static/images/home2.png' style="width: 120px;height: 84px;"/>
                    </a>
                  </div>
                  <div class="panel_body_small">
                    <div>
                      <a class="panel_body_link_small" href="#" 
                      title="韩进率团赴新疆出席对口支援15周年总结会">韩进率团赴新疆出席对口支援15周年总结会</a>
                    </div>
                    <span>签署对口支援新疆大学“十三五”建设目标协议书和新学年工作协议。</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        
          <div class="panel">
            <div class="panel_box showborder">
              <ul class="image_ul">
                <li>
                  <div class="panel_image_small">
                    <a href="#" title="韩进率团赴新疆出席对口支援15周年总结会">
                      <img src='../../static/images/home2.png' style="width: 120px;height: 84px;"/>
                    </a>
                  </div>
                  <div class="panel_body_small">
                    <div>
                      <a class="panel_body_link_small" href="#" 
                      title="韩进率团赴新疆出席对口支援15周年总结会">韩进率团赴新疆出席对口支援15周年总结会</a>
                    </div>
                    <span>签署对口支援新疆大学“十三五”建设目标协议书和新学年工作协议。</span>
                  </div>
                </li>
                <li>
                  <div class="panel_image_small">
                    <a href="#" title="韩进率团赴新疆出席对口支援15周年总结会">
                      <img src='../../static/images/home2.png' style="width: 120px;height: 84px;"/>
                    </a>
                  </div>
                  <div class="panel_body_small">
                    <div>
                      <a class="panel_body_link_small" href="#" 
                      title="韩进率团赴新疆出席对口支援15周年总结会">韩进率团赴新疆出席对口支援15周年总结会</a>
                    </div>
                    <span>签署对口支援新疆大学“十三五”建设目标协议书和新学年工作协议。</span>
                  </div>
                </li>
                <li class="end">
                  <div class="panel_image_small">
                    <a href="#" title="韩进率团赴新疆出席对口支援15周年总结会">
                      <img src='../../static/images/home2.png' style="width: 120px;height: 84px;"/>
                    </a>
                  </div>
                  <div class="panel_body_small">
                    <div>
                      <a class="panel_body_link_small" href="#" 
                      title="韩进率团赴新疆出席对口支援15周年总结会">韩进率团赴新疆出席对口支援15周年总结会</a>
                    </div>
                    <span>签署对口支援新疆大学“十三五”建设目标协议书和新学年工作协议。</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div class="row">
        <div style="height: 360px;">
          <div class="panel">
            <div class="panel_box noborder">
              <p class="row_title intro_title">
                <span class="title">珞珈新闻NEWS</span>
                <a href="#"><span class="icon icon-more"></span>更多</a>
              </p>
              <div class="intro_list">
                <ul class="intro_ul">
                  <li>
                    <a href="#" title="珞珈讲坛第144讲预告" target="_blank">珞珈讲坛第144讲预告</a>
                  </li>
                  <li>
                    <a href="#" title="关于实行冬季作息时间的通知" target="_blank">关于实行冬季作息时间的通知</a>
                  </li>
                  <li>
                    <a href="#" title="武汉大学测绘学科60年发展回顾暨世界一流学科建设高端论坛公告（二号）" target="_blank">武汉大学测绘学科60年发展回顾暨世界一流学科建设高端论坛公告（二号）</a>
                  </li>
                  <li>
                    <a href="#" title="“典藏珞珈——王诚浩、溫庆武、袁诚、周秀梅、杨青纸上作品展”预告" target="_blank">“典藏珞珈——王诚浩、溫庆武、袁诚、周秀梅、杨青纸上作品展”预告</a>
                  </li>
                  <li>
                    <a href="#" title="武汉大学面向海内外公开招聘健康学院院长启事" target="_blank">武汉大学面向海内外公开招聘健康学院院长启事</a>
                  </li>
                  <li>
                    <a href="#" title="停水通知" target="_blank">停水通知</a>
                  </li>
                  <li>
                    <a href="#" title="关于后勤保障部办公电话光纤改造的通知" target="_blank">关于后勤保障部办公电话光纤改造的通知</a>
                  </li>
                  <li>
                    <a href="#" title="致武昌选民书" target="_blank">致武昌选民书</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="panel">
            <div class="panel_box noborder">
              <p class="row_title intro_title">
                <span class="title">珞珈新闻NEWS</span>
                <a href="#"><span class="icon icon-more"></span>更多</a>
              </p>
              <div class="intro_list">
                <ul class="intro_ul">
                  <li>
                    <a href="#" title="珞珈讲坛第144讲预告" target="_blank">珞珈讲坛第144讲预告</a>
                  </li>
                  <li>
                    <a href="#" title="关于实行冬季作息时间的通知" target="_blank">关于实行冬季作息时间的通知</a>
                  </li>
                  <li>
                    <a href="#" title="武汉大学测绘学科60年发展回顾暨世界一流学科建设高端论坛公告（二号）" target="_blank">武汉大学测绘学科60年发展回顾暨世界一流学科建设高端论坛公告（二号）</a>
                  </li>
                  <li>
                    <a href="#" title="“典藏珞珈——王诚浩、溫庆武、袁诚、周秀梅、杨青纸上作品展”预告" target="_blank">“典藏珞珈——王诚浩、溫庆武、袁诚、周秀梅、杨青纸上作品展”预告</a>
                  </li>
                  <li>
                    <a href="#" title="武汉大学面向海内外公开招聘健康学院院长启事" target="_blank">武汉大学面向海内外公开招聘健康学院院长启事</a>
                  </li>
                  <li>
                    <a href="#" title="停水通知" target="_blank">停水通知</a>
                  </li>
                  <li>
                    <a href="#" title="关于后勤保障部办公电话光纤改造的通知" target="_blank">关于后勤保障部办公电话光纤改造的通知</a>
                  </li>
                  <li>
                    <a href="#" title="致武昌选民书" target="_blank">致武昌选民书</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="panel">
            <div class="panel_box noborder">
              <p class="row_title intro_title">
                <span class="title">珞珈新闻NEWS</span>
                <a href="#"><span class="icon icon-more"></span>更多</a>
              </p>
              <div class="intro_list">
                <ul class="intro_ul">
                  <li>
                    <a href="#" title="珞珈讲坛第144讲预告" target="_blank">珞珈讲坛第144讲预告</a>
                  </li>
                  <li>
                    <a href="#" title="关于实行冬季作息时间的通知" target="_blank">关于实行冬季作息时间的通知</a>
                  </li>
                  <li>
                    <a href="#" title="武汉大学测绘学科60年发展回顾暨世界一流学科建设高端论坛公告（二号）" target="_blank">武汉大学测绘学科60年发展回顾暨世界一流学科建设高端论坛公告（二号）</a>
                  </li>
                  <li>
                    <a href="#" title="“典藏珞珈——王诚浩、溫庆武、袁诚、周秀梅、杨青纸上作品展”预告" target="_blank">“典藏珞珈——王诚浩、溫庆武、袁诚、周秀梅、杨青纸上作品展”预告</a>
                  </li>
                  <li>
                    <a href="#" title="武汉大学面向海内外公开招聘健康学院院长启事" target="_blank">武汉大学面向海内外公开招聘健康学院院长启事</a>
                  </li>
                  <li>
                    <a href="#" title="停水通知" target="_blank">停水通知</a>
                  </li>
                  <li>
                    <a href="#" title="关于后勤保障部办公电话光纤改造的通知" target="_blank">关于后勤保障部办公电话光纤改造的通知</a>
                  </li>
                  <li>
                    <a href="#" title="致武昌选民书" target="_blank">致武昌选民书</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div style="height: 210px;">
          <p class="row_title intro_title">
            <span class="title">专题网站 TOPICS</span>
            <a href="#"><span class="icon icon-more"></span>更多</a>
          </p>
          <div class="panel" style="border-top: 0;width: 25%;">
            <div>
              <a href="#" title="“两学一做”学习教育专题">
                <img src='../../static/images/home3.jpg'/>
              </a>
            </div>
            <div class="panel_body" style="text-align: center;border: 0;">
              <a class="panel_body_link" href="#" title="“两学一做”学习教育专题">“两学一做”学习教育专题</a>
            </div>
          </div>
          <div class="panel" style="border-top: 0;width: 25%;">
            <div>
              <a href="#" title="2016网上校园开放日">
                <img src='../../static/images/home4.jpg'/>
              </a>
            </div>
            <div class="panel_body" style="text-align: center;border: 0;">
              <a class="panel_body_link" href="#" title="2016网上校园开放日">2016网上校园开放日</a>
            </div>
          </div>
          <div class="panel" style="border-top: 0;width: 25%;">
            <div>
              <a href="#" title="武汉大学本科招生网">
                <img src='../../static/images/home5.jpg'/>
              </a>
            </div>
            <div class="panel_body" style="text-align: center;border: 0;">
              <a class="panel_body_link" href="#" title="武汉大学本科招生网">武汉大学本科招生网</a>
            </div>
          </div>
          <div class="panel" style="border-top: 0;width: 25%;">
            <div>
              <a href="#" title="迎新网">
                <img src='../../static/images/home6.jpg'/>
              </a>
            </div>
            <div class="panel_body" style="text-align: center;border: 0;">
              <a class="panel_body_link" href="#" title="迎新网">迎新网</a>
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
    scrollImage: function(index){
      var src = "../../static/images/scroll"+index+".jpg";
      var title = "";
      if(index === 1){
        title = "天高云淡珞珈秋";
      }else if(index === 2){
        title = "明月清风伴珞珈";
      }else if(index === 3){
        title = "浅吟低唱颂师恩";
      }

      var attr = $('#scroll_caption ol li');
      var node = '';
      for(let i=0;i<attr.length;i++){
        for(let j=0;j<attr[i].attributes.length;j++){
          if(attr[i].attributes[j].name === 'class'){
            attr[i].attributes[j].value = '';
            break;
          }
        }
      }
      for(let k=0;k<$('#scroll_caption ol li')[index-1].attributes.length;k++){
        if($('#scroll_caption ol li')[index-1].attributes[k].name === 'class'){
          $('#scroll_caption ol li')[index-1].attributes[k].value = 'active';
          break;
        }
      }
      $('#scroll_title a')[0].text = title;
      $('#scroll_img').attr("src",src);
    }
  },
  attached() {
    let url = SERVER_API.users;
      //获取数据列表
    this.$http({ url: url, method: 'GET'})
    .then(function(response) {
      let data = response.data;
      this.data = data;
    }, function(response) {
      
    });
  },
  data () {
    return {
      data:[],
    }
  }
}
</script>


<style scoped>
.home {
  height: 100%;
  width: 100%;
  position: absolute;
}

.content {
  position: relative;
  width: 1166px;
  left: 50%;
  margin-left: -583px;
}

.scroll_panel {
  position: relative;
  height: 400px;
  z-index: 2;
}

.scroll_panel img {
  height: 100%;
  width: 100%;
}

.scroll_panel_caption {
  background: url("../../static/images/bgcolor.png");
  height: 30px;
  top: -50px;
  position: relative;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  width: 150px;
  float: left;
}

.scroll_panel_caption ol {
  left: 0;
  width: auto;
  bottom: 0;
}

.scroll_panel_caption ol li {
  background-color: #fff;
  float: left;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: -5px;
}

.scroll_panel_caption ol li.active {
  background-color: #F60201;
  border_color: #F60201;
}

.scroll_panel .item {
  background: url("../../static/images/bgcolor.png");
  height: 30px;
  top: -50px;
  position: relative;
  z-index: 10;
  bottom: 0;
  padding: 10px;
  margin-left: 170px;
}

.scroll_panel .item a {
  position: relative;
  top: 5px;
  margin-right: 30px;
  float: right;
  text-decoration: none;
  color: #fff;
  font-size: 20px;
}

.scroll_panel .item a:hover{
  color: #F60201;
  text-decoration: underline;
}

.row {
  margin-left: -5px;
  margin-right: -5px;
  padding-bottom: 30px;
}

.row_title {
  height: 60px;
  width: 100%;
  margin: 0;
}

.row_title span.title {
  font-size: 18px;
  position: relative;
  top: 25px;
  margin: 0;
}

.row_title a {
  font-size: 12px;
  height: 16px;
  float: right;
  margin-top: 25px;
  text-decoration: none;
  color: #666;
}

.row_title a:hover {
  color: #688C00;
  text-decoration: underline;
}

.row_title span.icon {
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 5px;
}

.row_title span.icon-c {
  width: 16px;
  height: 16px;
  background: url('../../static/images/icon-c.png') no-repeat;
}

.row_title span.icon-more {
  width: 16px;
  height: 16px;
  background: url('../../static/images/icon-more.png') no-repeat;
}

.row_panel {
  width: 100%;
  height: 360px
}

.panel {
  width: 33.333333%;
  border: 0;
  float: left;
}

.panel_box {
  border-top: 2px solid #688C00;
  width: calc(100% - 10px);
  margin: 0 5px;
}

.noborder {
  border-top: 0;
}

.showborder {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.panel_image {
  height: 263px;
}

.panel_body {
  border: 1px solid #eee;
  border-top: 0;
  padding: 20px;
}

a.panel_body_link {
  max-width: 340px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
}

a.panel_body_link:hover,a.panel_body_link_small:hover {
  color: #688C00;
  text-decoration: underline;
}

.panel_body span{
  max-width: 340px;
  display: inline-block;
  font-size: 14px;
  color: #666;
}

.panel_image_small {
  float: left;
}

ul.image_ul {
  margin: 10px;
  padding: 0;
}

ul.image_ul li {
  list-style-type: none;
  border-bottom: 1px solid #eee;
}

ul.image_ul li.end {
  border-bottom: 0px;
}

.panel_body_small span {
  font-size: 14px;
  color: #666;
  max-width: 220px;
  display: inline-block;
  margin-left: 10px;
}

.panel_body_small {
  margin: 10px;
}

a.panel_body_link_small {
  font-size: 16px;
  max-width: 220px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-decoration: none;
  margin-left: 10px;
}

.intro_title {
  width: 100%;
  border-bottom: 1px solid #ddd;
  margin-bottom: 15px;
}

.intro_list {
  width: 100%;
}

ul.intro_ul {
  margin: 0;
  padding: 0;
}

ul.intro_ul li {
  list-style: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

ul.intro_ul li a {
  font-size: 14px;
  text-decoration: none;
  color: #666;
  display: block;
  padding: 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

ul.intro_ul li a:hover {
  color: #688C00;
  text-decoration: underline;
}
</style>
