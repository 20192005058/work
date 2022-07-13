<template>
  <div class="contanier">
    <span>每月累计</span>
 <div
    class="echart"
    id="mychart"
    :style="{ float: 'left', width: '100%', height: '400px' }"
  ></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
    name:'LineChart',
    mounted() {
    this.initEcharts();
  },
   data(){
      return{
        Philosophy:JSON.parse(localStorage.getItem('Philosophy')),
        Logic:JSON.parse(localStorage.getItem('Logic')),
        Economics:JSON.parse(localStorage.getItem('Economics')),
        Politics:JSON.parse(localStorage.getItem('Politics')),
        History:JSON.parse(localStorage.getItem('History')),
        Art:JSON.parse(localStorage.getItem('Art')),
        Literature:JSON.parse(localStorage.getItem('Literature')),
        All:JSON.parse(localStorage.getItem('All'))
      }
    },
  methods: {
    initEcharts() {
      const option =  {
            xAxis: {
                data: ['一月', '二月', '三月', '四月', '五月','六月']
            },
            yAxis: {},
            series: [
                {
                data: [27,42, 28, 67, 75,this.Art],
                type: 'line',
                stack: 'x'
                },
                {
               data: [45,25, 52, 68, 26,this.Economics],
                type: 'line',
                stack: 'x'
                },
                {
                 data: [54,74, 81, 54, 25,this.History],
                type: 'line',
                stack: 'x'
                },
                {
                data: [142,57, 154,168, 218,this.Literature],
                type: 'line',
                stack: 'x'
                },
                {
                data: [290,382, 541, 375, 278,this.Logic],
                type: 'line',
                stack: 'x'
                },
                {
                data: [110,214, 117, 214, 158,this.Philosophy],
                type: 'line',
                stack: 'x'
                },
                {
               data: [21,75, 79, 14, 74,this.Politics],
                type: 'line',
                stack: 'x'
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