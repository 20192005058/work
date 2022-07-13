<template>
  <div>
    <h3>未来计划增加藏书</h3>
    <ul >
        <li>七月：<el-input-number v-model="Jul" @change="handleChange" :min="0" :max="500" label="数量" size="mini">
        </el-input-number></li>
        <li>八月：<el-input-number v-model="Aug" @change="handleChange" :min="0" :max="500" label="数量" size="mini">
        </el-input-number></li>
        <li>九月：<el-input-number v-model="Sept" @change="handleChange" :min="0" :max="500" label="数量" size="mini">
        </el-input-number></li>
        <li>十月：<el-input-number v-model="Oct" @change="handleChange" :min="0" :max="500" label="数量" size="mini">
        </el-input-number></li>
        <li>十一月：<el-input-number v-model="Nov" @change="handleChange" :min="0" :max="500" label="数量" size="mini">
        </el-input-number></li>
        <li>十二月：<el-input-number v-model="Dec" @change="handleChange" :min="0" :max="500" label="数量" size="mini">
        </el-input-number></li>
    </ul>
    <br>
    <br>
    <div>
         <el-button type="success" round @click="showHistogram">显示数据</el-button>
         <el-button type="success" round @click="showLineChart">显示变化</el-button>
    </div>
<div class="container2">
     <router-view ></router-view>
  </div>
  </div>
</template>

<script>

export default {
    name:'ShowFuture',
    data() {
        return {
            Jul:0,
            Aug:0,
            Sept:0,
            Oct:0,
            Nov:0,
            Dec:0
        }
    },
    methods:{
         handleChange(value) {
        //console.log('点击！')
         },
         showHistogram(){
          //  console.log('柱状图')
            localStorage.setItem('Jul',JSON.stringify(this.Jul))
            localStorage.setItem('Aug',JSON.stringify(this.Aug))
            localStorage.setItem('Sept',JSON.stringify(this.Sept))
            localStorage.setItem('Oct',JSON.stringify(this.Oct))
            localStorage.setItem('Nov',JSON.stringify(this.Nov))
            localStorage.setItem('Dec',JSON.stringify(this.Dec))
            this.$router.push({
             path:'/FutureHistogram',
          })
         },
         showLineChart(){
          //  console.log('折线图')
            localStorage.setItem('Jul',JSON.stringify(this.Jul))
            localStorage.setItem('Aug',JSON.stringify(this.Aug))
            localStorage.setItem('Sept',JSON.stringify(this.Sept))
            localStorage.setItem('Oct',JSON.stringify(this.Oct))
            localStorage.setItem('Nov',JSON.stringify(this.Nov))
            localStorage.setItem('Dec',JSON.stringify(this.Dec))
            this.$router.push({
             path:'/FutureLineChart',
          })
         }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
        
    }
    ul li{
        float: left;
        
    }
    *{
        margin: 0px;
        padding: 0px;
    }
    input{
        width: 80px;
    }
</style>