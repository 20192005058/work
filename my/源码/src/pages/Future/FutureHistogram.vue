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
        name:'FutureHistogram',
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
        mounted() {
            this.initEcharts();
        },
        methods: {
            initEcharts() {
            const option = {
                title: {
                text: ""
                },
                tooltip: {},
                legend: {
                data: ["计划藏书量"]
                },
                xAxis: {
                data: ["七月", "八月", "九月", "十月", "十一月",  "十二月"]
                },
                yAxis: {},
                series: [
                {
                    color:'#BA55D3',
                    barWidth: '25%',
                    name: "计划藏书量",
                    type: "bar", //类型为柱状图
                    data: [this.Jul, this.Aug, this.Sept,  this.Oct, this.Nov, this.Dec]
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