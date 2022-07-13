<template>
  <div>
   <el-collapse v-model="activeName" accordion>
     <div v-for="data in Data" :key="data.id">
  <el-collapse-item :title="data.title" :name="data.id">
     <div>{{data.body}}</div>
  </el-collapse-item>
  </div>

  
</el-collapse>
  </div>
</template>

<script>
export default {
    name:'CheckData',
      data() {
      return {
        activeName: '1',
        Data:JSON.parse(localStorage.getItem('WriteData'))

      };
    }
}
</script>

<style>

</style>