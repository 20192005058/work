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
  methods: {
    initEcharts() {
      const option = {
            title: {
                text: '图书类别',
                left: 'center',
                top: 'center'
            },
            series: [
                {
                type: 'pie',
                data: [
                    {
                    value: this.Philosophy,
                    name: '哲学'
                    },
                    {
                    value: this.Logic,
                    name: '逻辑'
                    },
                    {
                    value: this.Economics,
                    name: '经济'
                    },
                     {
                    value: this.Politics,
                    name: '政治'
                    },
                    {
                    value: this.History,
                    name: '历史'
                    },
                    {
                    value: this.Art,
                    name: '艺术'
                    },
                     {
                    value: this.Literature,
                    name: '文学'
                    },
                ],
              
                radius: ['40%', '70%']
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