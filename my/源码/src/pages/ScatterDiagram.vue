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
import * as echarts from 'echarts';
export default {
    name:'PieChart',
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
              data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {},
            series: [
              {
                type: 'scatter',
                data: [689, 869, 1052, 960, 854, this.All],
                symbolSize: 20,
                label: {
                        show: true,
                        position: 'bottom',
                        textStyle: {
                        fontSize: 20
                        }
                    },
                symbol:
                  'path://M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z'
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