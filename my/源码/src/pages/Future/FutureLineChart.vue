<template>
  <div class="contanier">
    <span>计划藏书量变化</span>
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
    name:'FutureLineChart',
    mounted() {
    this.initEcharts();
  },
  data(){
    return{
       Jul:JSON.parse(localStorage.getItem('Jul')),
        Aug:JSON.parse(localStorage.getItem('Aug')),
        Sept:JSON.parse(localStorage.getItem('Sept')),
        Oct:JSON.parse(localStorage.getItem('Oct')),
        Nov:JSON.parse(localStorage.getItem('Nov')),
        Dec:JSON.parse(localStorage.getItem('Dec')),
}
  },
  methods: {
    initEcharts() {
      const option = {
                xAxis: {
                    data: ['七月', '八月', '九月', '十月', '十一月', '十二月']
                },
                yAxis: {},
                series: [
                    {
                    data: [this.Jul,this.Aug, this.Sept, this.Oct, this.Nov,this.Dec],
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
      const myChart = echarts.init(document.getElementById("mychart"));
      myChart.setOption(option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
}
</script>

<style>

</style>