<template>
  <div id="app">
<div class="line"></div>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-submenu index="1">
    <template slot="title">处理中心</template>
    <el-submenu index="1-1">
       <template slot="title">入库</template>
      <el-menu-item index="1-1-1" @click="showAddNew">新书买入</el-menu-item>
      <el-menu-item index="1-1-2" @click="showAddOld">旧书买入</el-menu-item>
    </el-submenu>
     <el-menu-item index="1-2" @click="showReduce">借出</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">图表</template>
    <el-menu-item index="2-1" @click="showHistogram">图书藏量</el-menu-item>
    <el-submenu index="2-2">
      <template slot="title">藏书量变化</template>
      <el-menu-item index="2-2-1" @click="showLineChartAll">藏书总量变化</el-menu-item>
      <el-menu-item index="2-2-2" @click="showLineChartPhilosophy">哲学类藏书变化</el-menu-item>
      <el-menu-item index="2-2-3" @click="showLineChartLogic">逻辑类藏书变化</el-menu-item>
       <el-menu-item index="2-2-4" @click="showLineChartEconomics">经济类藏书变化</el-menu-item>
       <el-menu-item index="2-2-5" @click="showLineChartPolitics">政治类藏书变化</el-menu-item>
       <el-menu-item index="2-2-6" @click="showLineChartHistory">历史类藏书变化</el-menu-item>
       <el-menu-item index="2-2-7" @click="showLineChartArt">艺术类藏书变化</el-menu-item>
       <el-menu-item index="2-2-8" @click="showLineChartLiterature">文学类藏书变化</el-menu-item>
       <el-menu-item index="2-2-9" @click="showLineChart">每月累计</el-menu-item>
    </el-submenu>
    <!-- <el-menu-item index="2-2" @click="showLineChart">藏书量变化</el-menu-item> -->
 <!--    <el-menu-item index="2-3" @click="showLineChartAll">藏书总量变化</el-menu-item> -->
    <el-menu-item index="2-4" @click="showPieChart">藏书占比</el-menu-item>
    <el-menu-item index="2-5" @click="showScatterDiagram">每月数据</el-menu-item>
    
  </el-submenu>
  <el-menu-item index="3" @click="showMyMessage" >笔记</el-menu-item>
  <el-menu-item index="4" @click="showBookManage">藏书信息</el-menu-item>
</el-menu>


<div class="container1">
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-alarm-clock"></i>
      <span slot="title">工作台</span>
    </template>
    <el-menu-item-group>
      <span slot="title">WorkPlace</span>
      <el-menu-item index="1-1" @click="ShowMeFuture">计划未来库存</el-menu-item>
      <el-menu-item index="1-2" @click="ShowMeHistory">历史借出情况</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-menu-item index="2" @click="ShowTheData">
    <i class="el-icon-date"></i>
    <span slot="title">日历</span>
  </el-menu-item>
  <el-menu-item index="3" @click="ShowWrite">
    <i class="el-icon-document"></i>
    <span slot="title">文摘记录</span>
  </el-menu-item>
  <el-menu-item index="4" @click="CheckTheData">
    <i class="el-icon-setting"></i>
    <span slot="title">历史文摘</span>
  </el-menu-item>
</el-menu>
</div>

<div class="container2">
  
     <router-view></router-view>
  </div>
 </div>
</template>

<script>

import Histogram from './pages/Histogram.vue'
import LineChart from './pages/LineChart.vue'
import PieChart from './pages/PieChart.vue'
import ScatterDiagram from './pages/ScatterDiagram.vue'
import LineChartAll from './pages/LineChartAll.vue'
import LineChartPhilosophy from './pages/LineChartSort/LineChartPhilosophy.vue'
import LineChartArt from './pages/LineChartSort/LineChartArt.vue'
import LineChartEconomics from './pages/LineChartSort/LineChartEconomics.vue'
import LineChartHistory from './pages/LineChartSort/LineChartHistory.vue'
import LineChartLiterature from './pages/LineChartSort/LineChartLiterature.vue'
import LineChartPolitics from './pages/LineChartSort/LineChartPolitics.vue'
import LineChartLogic from './pages/LineChartSort/LineChartLogic.vue'
export default {
  name: 'App',
  components: {  Histogram,LineChart ,PieChart,ScatterDiagram,LineChartAll,
                LineChartPhilosophy,LineChartArt,LineChartEconomics,LineChartHistory,
                LineChartLiterature,LineChartPolitics,LineChartLogic
  },
    data() {
      return {
        activeIndex2: '1',
        isCollapse: true,
         Philosophy:105,
         Logic:320,
         Economics:36,
         Politics:65,
         History:98,
         Art:70,
         Literature:210,
         All:904,
         ArtList:[{
          id:'001',
          name: '第一本艺术书',
          publish: '山东人民出版社',
          num: 15,
        }, {
          id:'002',
          name: '第二本艺术书',
          publish: '北京大学出版社',
          num: 15
        }, {
          id:'003',
          name: '平凡的世界',
          publish: '北京十月文艺出版社',
          num: 25,
        }, {
          id:'004',
          name: '艺术类英语',
          publish: '清华大学出版社',
          num: 15
        },
        ],
        EconomicsList:[
            {id:'001',name:'第一本经济书',publish:'清华大学出版社',num:12},
            {id:'002',name:'第二本经济书',publish:'清华大学出版社',num:12},
            {id:'003',name:'第三本经济书',publish:'清华大学出版社',num:12},
        ],
        HistoryList:[
            {id:'001',name:'第一本历史书',publish:'清华大学出版社',num:41},
            {id:'002',name:'第二本历史书',publish:'清华大学出版社',num:57}
        ],
        LiteratureList:[
            {id:'001',name:'第一本文学书',publish:'清华大学出版社',num:30},
            {id:'002',name:'第二本文学书',publish:'清华大学出版社',num:30},
            {id:'003',name:'第三本文学书',publish:'清华大学出版社',num:30},
            {id:'004',name:'第四本文学书',publish:'清华大学出版社',num:30},
            {id:'005',name:'第五本文学书',publish:'清华大学出版社',num:30},
            {id:'006',name:'第六本文学书',publish:'清华大学出版社',num:30},
            {id:'007',name:'第七本文学书',publish:'清华大学出版社',num:30}
        ],
        LogicList:[
            {id:'001',name:'第一本逻辑书',publish:'清华大学出版社',num:100},
            {id:'002',name:'第二本逻辑书',publish:'清华大学出版社',num:100},
            {id:'003',name:'第三本逻辑书',publish:'清华大学出版社',num:120}
        ],
        PhilosophyList:[
           {id:'001',name:'第一本哲学书',publish:'清华大学出版社',num:35},
           {id:'002',name:'第二本哲学书',publish:'清华大学出版社',num:35},
           {id:'003',name:'第三本哲学书',publish:'清华大学出版社',num:35}
        ],
        PoliticsList:[
          {id:'001',name:'第一本政治书',publish:'清华大学出版社',num:20},
          {id:'002',name:'第二本政治书',publish:'清华大学出版社',num:45}
        ],
      };
    },
    mounted(){
      if(localStorage.getItem('Philosophy'))
      console.log("数据已准备")
      else{
      localStorage.setItem('Philosophy',JSON.stringify(this.Philosophy)),
      localStorage.setItem('Logic',JSON.stringify(this.Logic)),
      localStorage.setItem('Economics',JSON.stringify(this.Economics)),
      localStorage.setItem('Politics',JSON.stringify(this.Politics)),
      localStorage.setItem('History',JSON.stringify(this.History)),
      localStorage.setItem('Art',JSON.stringify(this.Art)),
      localStorage.setItem('Literature',JSON.stringify(this.Literature))
      localStorage.setItem('All',JSON.stringify(this.All))
      localStorage.setItem('ArtList',JSON.stringify(this.ArtList))
      localStorage.setItem('EconomicsList',JSON.stringify(this.EconomicsList))
      localStorage.setItem('HistoryList',JSON.stringify(this.HistoryList))
      localStorage.setItem('LiteratureList',JSON.stringify(this.LiteratureList))
      localStorage.setItem('LogicList',JSON.stringify(this.LogicList))
      localStorage.setItem('PhilosophyList',JSON.stringify(this.PhilosophyList))
      localStorage.setItem('PoliticsList',JSON.stringify(this.PoliticsList))
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      showHistogram(){
     //   console.log('点击了选项1');
        this.$router.push({
             path:'/Histogram',
          })
      },
      showLineChart(){
      //   console.log('点击了选项1');
        this.$router.push({
             path:'/LineChart',
          })
      },
      showPieChart(){
        // console.log('点击了选项1');
        this.$router.push({
             path:'/PieChart',
          })
      },
      showScatterDiagram(){
    //    console.log('点击了选项1');
        this.$router.push({
             path:'/ScatterDiagram',
          })
      },
      showLineChartAll(){
        this.$router.push({
             path:'/LineChartAll',
          })
      },
      showLineChartPhilosophy(){
        this.$router.push({
             path:'/LineChartPhilosophy',
          })
      },
      showLineChartLogic(){
        this.$router.push({
             path:'/LineChartLogic',
          })
      },
      showLineChartEconomics(){
        this.$router.push({
             path:'/LineChartEconomics',
          })
      },
      showLineChartPolitics(){
        this.$router.push({
             path:'/LineChartPolitics',
          })
      },
      showLineChartHistory(){
        this.$router.push({
             path:'/LineChartHistory',
          })
      },
      showLineChartArt(){
        this.$router.push({
             path:'/LineChartArt',
          })
      },
      showLineChartLiterature(){
        this.$router.push({
             path:'/LineChartLiterature',
          })
      },
      showBookManage(){
          this.$router.push({
             path:'/BookManage',
          })
      },
      showAddNew(){
        this.$router.push({
             path:'/AddNew',
          })
      },
      showAddOld(){
        this.$router.push({
             path:'/AddOld',
          })
      },
      showReduce(){
          this.$router.push({
             path:'/Reduce',
          })
      },
      showMyMessage(){
        this.$router.push({
             path:'/MyMessage',
          })
      },
      ShowMeFuture(){
        this.$router.push({
             path:'/ShowFuture',
          })
      },
      ShowMeHistory(){
        this.$router.push({
             path:'/ShowHistory',
          })
      },
      ShowTheData(){
        this.$router.push({
             path:'/IconData',
          })
      },
      ShowWrite(){
         this.$router.push({
             path:'/WriteSome',
          })
      },
      CheckTheData(){
        this.$router.push({
             path:'/CheckData',
          })
      }
    }
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .container1{
     float: left;
     width: 15%;
  }
  .container2{
     float: right;
     width: 85%;
  }
</style>
