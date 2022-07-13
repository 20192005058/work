<template>
  <div class="contanier">
    <span>逻辑类图书变化</span>
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
    name:'LineChartLogic',
    mounted() {
    this.initEcharts();
  },
   data(){
      return{
        Logic:JSON.parse(localStorage.getItem('Logic')),   
      }
    },
  methods: {
    initEcharts() {
      const option = {
                xAxis: {
                    data: ['一月', '二月', '三月', '四月', '五月', '六月']
                },
                yAxis: {},
                series: [
                    {
                    data: [290,382, 541, 375, 278,this.Logic],
                    type: 'line',
                    label: {
                        show: true,
                        position: 'bottom',
                        textStyle: {
                        fontSize: 20
                        }
                    }
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