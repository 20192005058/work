<template>
  <div>
    <table cellspacing="20px">
      <tr >
        <td>类别：</td>
     <div>
    <el-radio-group v-model="radio">
      <el-radio-button label="哲学"></el-radio-button>
      <el-radio-button label="逻辑"></el-radio-button>
      <el-radio-button label="经济"></el-radio-button>
      <el-radio-button label="政治"></el-radio-button>
      <el-radio-button label="历史"></el-radio-button>
      <el-radio-button label="艺术"></el-radio-button>
      <el-radio-button label="文学"></el-radio-button>
    </el-radio-group>
  </div>
      </tr>
      <tr>
        <td>书名：</td>
        <td>
          <el-input v-model="name" placeholder="请输入书名">
        </el-input>
        </td>
      </tr>
       <tr>
        <td>出版社：</td>
        <td>
          <el-input v-model="publish" placeholder="请输入出版社">
        </el-input>
        </td>
      </tr>
      <tr>
        <td>数量：</td>
        <td><el-input-number v-model="num" @change="handleChange" :min="1" :max="50" label="数量">
        </el-input-number></td>
      </tr>
    </table>
    <el-button type="primary" @click="save">存入仓库</el-button>
    <el-button type="success" @click="cancle">清空</el-button>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'AddNew',
      data () {
      return {
        radio: '哲学',
        num: 1,
        name: '',
        publish:'',
      }
    },
     methods: {
      handleChange(value) {
       
      },
      save(){
        if(confirm('确定要存入嘛？')){

        if(this.radio==='哲学')
        {
          let PhilosophyList= JSON.parse(localStorage.getItem('PhilosophyList'))
          let Philosophy= JSON.parse(localStorage.getItem('Philosophy'))
          Philosophy+=this.num
          PhilosophyList.unshift({id:nanoid(),name:this.name,publish:this.publish,num:this.num})
          localStorage.setItem('PhilosophyList',JSON.stringify(PhilosophyList))
          localStorage.setItem('Philosophy',JSON.stringify(Philosophy))
        }
        if(this.radio==='逻辑')
        {
          let LogicList= JSON.parse(localStorage.getItem('LogicList'))
          let Logic= JSON.parse(localStorage.getItem('Logic'))
          Logic+=this.num
          LogicList.unshift({id:nanoid(),name:this.name,publish:this.publish,num:this.num})
          localStorage.setItem('LogicList',JSON.stringify(LogicList))
          localStorage.setItem('Logic',JSON.stringify(Logic))
        }
        if(this.radio==='经济')
        {
          let EconomicsList= JSON.parse(localStorage.getItem('EconomicsList'))
          let Economics= JSON.parse(localStorage.getItem('Economics'))
          Economics+=this.num
          EconomicsList.unshift({id:nanoid(),name:this.name,publish:this.publish,num:this.num})
          localStorage.setItem('EconomicsList',JSON.stringify(EconomicsList))
          localStorage.setItem('Economics',JSON.stringify(Economics))
        }
        if(this.radio==='政治')
        {
          let PoliticsList= JSON.parse(localStorage.getItem('PoliticsList'))
          let Politics= JSON.parse(localStorage.getItem('Politics'))
          Politics+=this.num
          PoliticsList.unshift({id:nanoid(),name:this.name,publish:this.publish,num:this.num})
          localStorage.setItem('PoliticsList',JSON.stringify(PoliticsList))
          localStorage.setItem('Politics',JSON.stringify(Politics))
        }
        if(this.radio==='历史')
        {
          let HistoryList= JSON.parse(localStorage.getItem('HistoryList'))
          let History= JSON.parse(localStorage.getItem('History'))
          History+=this.num
          HistoryList.unshift({id:nanoid(),name:this.name,publish:this.publish,num:this.num})
          localStorage.setItem('HistoryList',JSON.stringify(HistoryList))
          localStorage.setItem('History',JSON.stringify(History))
        }
        if(this.radio==='艺术')
        {
          let ArtList= JSON.parse(localStorage.getItem('ArtList'))
          let Art= JSON.parse(localStorage.getItem('Art'))
          Art+=this.num
          ArtList.unshift({id:nanoid(),name:this.name,publish:this.publish,num:this.num})
          localStorage.setItem('ArtList',JSON.stringify(ArtList))
          localStorage.setItem('Art',JSON.stringify(Art))
        }
        if(this.radio==='文学')
        {
          let LiteratureList= JSON.parse(localStorage.getItem('LiteratureList'))
          let Literature= JSON.parse(localStorage.getItem('Literature'))
          Literature+=this.num
          LiteratureList.unshift({id:nanoid(),name:this.name,publish:this.publish,num:this.num})
          localStorage.setItem('LiteratureList',JSON.stringify(LiteratureList))
          localStorage.setItem('Literature',JSON.stringify(Literature))
        }
        this.radio='哲学'
        this.name=''
        this.publish=''
        this.num=1
      }

      },
      cancle(){
        this.radio='哲学'
        this.name=''
        this.publish=''
        this.num=1
      }
    }
  
}
</script>

<style scoped>
 .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

</style>