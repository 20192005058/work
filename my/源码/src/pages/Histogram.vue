<template>
<div class="contanier">
 <div
    class="echart"
    id="mychart"
    :style="{ float: 'left', width: '100%', height: '400px' }"
  ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
    name:'Histogram',
    data(){
      return{
        Philosophy:JSON.parse(localStorage.getItem('Philosophy')),
        Logic:JSON.parse(localStorage.getItem('Logic')),
        Economics:JSON.parse(localStorage.getItem('Economics')),
        Politics:JSON.parse(localStorage.getItem('Politics')),
        History:JSON.parse(localStorage.getItem('History')),
        Art:JSON.parse(localStorage.getItem('Art')),
        Literature:JSON.parse(localStorage.getItem('Literature'))
      }
    },
  mounted() {
    this.initEcharts();
     console.log(this.Philosophy)
     console.log(this.Logic)
  },
  methods: {
    initEcharts() {
      const option = {
        title: {
          text: ""
        },
        tooltip: {},
        legend: {
          data: ["藏书量"]
        },
        xAxis: {
          data: ["哲学", "逻辑", "经济", "政治", "历史",  "艺术", "文学"]
        },
        yAxis: {},
        series: [
          {
            name: "藏书量",
            type: "bar", //类型为柱状图
            data: [this.Philosophy, this.Logic, this.Economics,  this.Politics, this.History, this.Art,  this.Literature]
          }
        ]
      };
      const myChart = echarts.init(document.getElementById("mychart"));// 图标初始化
      myChart.setOption(option);// 渲染页面
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
}
</script>

<style>
  
</style>