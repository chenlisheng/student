<template>
  
    <common-header id="home_header"></common-header>
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

    <div class="content"></div>
    <common-bottom id="home_bottom"></common-bottom>
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

}

.scroll_panel {
  position: relative;
  top:172px;
  width: 1166px;
  left: 50%;
  margin-left: -583px;
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
</style>
