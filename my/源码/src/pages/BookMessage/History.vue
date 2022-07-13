<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column 
      prop="name"
      label="书名"
      width="260">
    </el-table-column>
    <el-table-column
      prop="publish"
      label="出版社"
      width="360">
    </el-table-column>
    <el-table-column
      prop="num"
      label="存量">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name:'History',
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData: JSON.parse(localStorage.getItem('HistoryList'))
      }
    }
  }
</script>


<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>