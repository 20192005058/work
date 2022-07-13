<template>
  <div class="contanier">
    <span>图书总量变化</span>
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
    name:'LineChartAll',
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
        Literature:JSON.parse(localStorage.getItem('Literature'))
    }
  },
  computed:{
      All(){
        return this.Philosophy+this.Logic+this.Economics+this.Politics+this.History+this.Art+this.Literature
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
                    data: [689,869, 1052, 960, 854,this.All],
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