<template>
  <div>
    <h6>{{showme}}</h6>
   <el-carousel :interval="4000" type="card" height="251px" >
    <el-carousel-item v-for="item in 5" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="古月方源" name="1">
    <div>想到这里，方源慢慢地停下脚步。</div>
    <div>不知不觉间，他已经走到窗边，于是信手推开了窗户。</div>
    <div>隔牖风惊竹，开窗雪满山。</div>
    <div>月光下，雪如白玉，铺得眼前世界如水晶宫殿，纤尘不染。</div>
    <div>雪光映照在方源年轻的脸上，他面色沉静，双眉舒展，一对眸子好似月下幽泉。</div>
    <div>寒风扑面而来，少年忽的一笑：“不过是些许风霜罢了。</div>
  </el-collapse-item>
  <el-collapse-item title="文艺复兴" name="2">
    <div>“文艺复兴”的概念在14-16世纪时已被意大利的人文主义作家和学者所使用。当时的人们认为，文艺在希腊、罗马古典时代曾高度繁荣，但在中世纪“黑暗时代”却衰败湮没，直到14世纪后才获得“再生”与“复兴”，因此称为“文艺复兴”。</div>
    <div>文艺复兴最先在意大利各城邦兴起，以后扩展到西欧各国，于16世纪达到顶峰，带来一段科学与艺术革命时期，揭开了近代欧洲历史的序幕，被认为是中古时代和近代的分界。文艺复兴是西欧近代三大思想解放运动（文艺复兴、宗教改革与启蒙运动）之一。</div>
  </el-collapse-item>
  <el-collapse-item title="洋务运动" name="3">
    <div>洋务运动，又称自强运动。是19世纪60年代到90年代晚清洋务派以“自强”、“求富”为口号所进行的一场引进西方军事装备、机器生产和科学技术以挽救清朝统治的自救运动。</div>
    <div>洋务运动虽然在客观上刺激中国资本主义发展、并且在一定程度上抵制了外国资本主义的经济输入，但是并没有使中国走上富强之路。</div>
  </el-collapse-item>
  <el-collapse-item title="太平天国" name="4">
    <div>太平天国（1851年—1864年），后期曾先后改称上帝天国、天父天兄天王太平天国。</div>
    <div>1850年（道光三十年）末至1851年初，由洪秀全、杨秀清、萧朝贵、冯云山、韦昌辉、石达开组成的领导集团在广西金田村发动反抗清朝的武装起义。后建立“太平天国”，并于1853年3月攻下江宁（今南京），定都于此，改称天京。1864年8月，太平天国首都天京被湘军攻陷，洪秀全之子、幼天王洪天贵福被俘。1872年，最后一支太平军部队，翼王石达开余部李文彩在贵州败亡。</div>
  </el-collapse-item>
</el-collapse>
  </div>
</template>

<script>
export default {
    name:'MyMessage',
    data(){
        return {
            showme:'',
            activeNames: ['1']
        }
    },
    methods:{
         handleChange(val) {
        console.log(val);
      }
    },
    mounted(){
        const xhr =new XMLHttpRequest();
        xhr.open('GET','https://api.uixsj.cn/hitokoto/get?type=social') ;
        xhr.send();
        xhr.onreadystatechange=()=>{
                    if(xhr.readyState ===4){
                        if(xhr.status>=200 &&xhr.status<300){
                           // console.log(xhr.response)
                            this.showme=xhr.response
                        }
                        else{
                            console.log('出了点问题')
                        }
                    }
                }
    }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(5n+1) {
    background-color: #99a9bf;
    background-image: url(../images/1.png);
  }
  
  .el-carousel__item:nth-child(5n+2) {
    background-color: #d3dce6;
   background-image: url(../images/2.png);
  }
    .el-carousel__item:nth-child(5n+3) {
    background-color: #d3dce6;
   background-image: url(../images/3.png);
  }
     .el-carousel__item:nth-child(5n+4) {
    background-color: #d3dce6;
   background-image: url(../images/4.png);
  }
     .el-carousel__item:nth-child(5n+5) {
    background-color: #d3dce6;
   background-image: url(../images/5.png);
  }
</style>