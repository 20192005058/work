<template>
  <div class="contanier">
    <span>文学类图书变化</span>
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
    name:'LineChartLiterature',
    mounted() {
    this.initEcharts();
  },
  data(){
      return{
        Literature:JSON.parse(localStorage.getItem('Literature')),   
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
                    data: [142,57, 154,168, 218,this.Literature],
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