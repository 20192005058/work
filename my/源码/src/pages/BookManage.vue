<template>
  <div>
    <h1>藏书信息</h1>
    <el-row>
  <el-button @click="showPhilosophy">哲学类藏书</el-button>
  <el-button type="primary" @click="showLogic">逻辑类藏书</el-button>
  <el-button type="success" @click="showEconomics">经济藏图书</el-button>
  <el-button type="info" @click="showPolitics">政治类藏书</el-button>
  <el-button type="warning" @click="showHistory">历史类藏书</el-button>
  <el-button type="danger" @click="showArt">艺术类藏书</el-button>
  <el-button @click="showLiterature">文学类藏书</el-button>
</el-row>
<div >
  
     <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
        name:'BookManage',
        methods:{
          showArt(){
            this.$router.push({
             path:'/BookManage/Art',
          })
          },
          showPhilosophy(){
            this.$router.push({
             path:'/BookManage/Philosophy',
          })
          },
          showLogic(){
            this.$router.push({
             path:'/BookManage/Logic',
          })
          },
          showEconomics(){
            this.$router.push({
             path:'/BookManage/Economics',
          })
          },
          showPolitics(){
            this.$router.push({
             path:'/BookManage/Politics',
          })
          },
          showHistory(){
            this.$router.push({
             path:'/BookManage/History',
          })
          },
          showLiterature(){
            this.$router.push({
             path:'/BookManage/Literature',
          })
          },
        }

}
</script>

<style>

</style>