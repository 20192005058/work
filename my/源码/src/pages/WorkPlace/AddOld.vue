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
        <td>神秘力量：</td>
        <td>
        <el-input v-model="id" placeholder="按F12查看">
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
    <el-button type="success" @click="cancle">取消</el-button>
  </div>
</template>

<script>
export default {
    name:'AddOld',
    data(){
        return{
            radio:'哲学',
            id:'',
            num: 1
        }
    },
    methods:{
        handleChange(value) {
       
         },
        save(){
            let power =false;
             if(this.radio==='哲学'){
                let PhilosophyList= JSON.parse(localStorage.getItem('PhilosophyList'))
                let Philosophy= JSON.parse(localStorage.getItem('Philosophy'))
                for(let key in PhilosophyList){
                    if(PhilosophyList[key].id===this.id){
                        power=true;
                        PhilosophyList[key].num+=this.num
                        Philosophy+=this.num
                    }
                }
                if(power){
                    localStorage.setItem('PhilosophyList',JSON.stringify(PhilosophyList))
                    localStorage.setItem('Philosophy',JSON.stringify(Philosophy))
                    alert('入库成功')
                }else{
                    alert('神秘代码错误，入库失败')
                }
             };
             if(this.radio==='逻辑'){
                let LogicList= JSON.parse(localStorage.getItem('LogicList'))
                let Logic= JSON.parse(localStorage.getItem('Logic'))
                for(let key in LogicList){
                    if(LogicList[key].id===this.id){
                        power=true;
                        LogicList[key].num+=this.num
                        Logic+=this.num
                    }
                }
                if(power){
                    localStorage.setItem('LogicList',JSON.stringify(LogicList))
                    localStorage.setItem('Logic',JSON.stringify(Logic))
                    alert('入库成功')
                }else{
                    alert('神秘代码错误，入库失败')
                }
             };
             if(this.radio==='经济'){
                let EconomicsList= JSON.parse(localStorage.getItem('EconomicsList'))
                let Economics= JSON.parse(localStorage.getItem('Economics'))
                for(let key in EconomicsList){
                    if(EconomicsList[key].id===this.id){
                        power=true;
                        EconomicsList[key].num+=this.num
                        Economics+=this.num
                    }
                }
                if(power){
                    localStorage.setItem('EconomicsList',JSON.stringify(EconomicsList))
                    localStorage.setItem('Economics',JSON.stringify(Economics))
                    alert('入库成功')
                }else{
                    alert('神秘代码错误，入库失败')
                }
             };
             if(this.radio==='政治'){
                let PoliticsList= JSON.parse(localStorage.getItem('PoliticsList'))
                let Politics= JSON.parse(localStorage.getItem('Politics'))
                for(let key in PoliticsList){
                    if(PoliticsList[key].id===this.id){
                        power=true;
                        PoliticsList[key].num+=this.num
                        Politics+=this.num
                    }
                }
                if(power){
                    localStorage.setItem('PoliticsList',JSON.stringify(PoliticsList))
                    localStorage.setItem('Politics',JSON.stringify(Politics))
                    alert('入库成功')
                }else{
                    alert('神秘代码错误，入库失败')
                }
             };
             if(this.radio==='历史'){
                let HistoryList= JSON.parse(localStorage.getItem('HistoryList'))
                let History= JSON.parse(localStorage.getItem('History'))
                for(let key in HistoryList){
                    if(HistoryList[key].id===this.id){
                        power=true;
                        HistoryList[key].num+=this.num
                        History+=this.num
                    }
                }
                if(power){
                    localStorage.setItem('HistoryList',JSON.stringify(HistoryList))
                    localStorage.setItem('History',JSON.stringify(History))
                    alert('入库成功')
                }else{
                    alert('神秘代码错误，入库失败')
                }
             };
             if(this.radio==='艺术'){
                let ArtList= JSON.parse(localStorage.getItem('ArtList'))
                let Art= JSON.parse(localStorage.getItem('Art'))
                for(let key in ArtList){
                    if(ArtList[key].id===this.id){
                        power=true;
                        ArtList[key].num+=this.num
                        Art+=this.num
                    }
                }
                if(power){
                    localStorage.setItem('ArtList',JSON.stringify(ArtList))
                    localStorage.setItem('Art',JSON.stringify(Art))
                    alert('入库成功')
                }else{
                    alert('神秘代码错误，入库失败')
                }
             };
             if(this.radio==='文学'){
                let LiteratureList= JSON.parse(localStorage.getItem('LiteratureList'))
                let Literature= JSON.parse(localStorage.getItem('Literature'))
                for(let key in LiteratureList){
                    if(LiteratureList[key].id===this.id){
                        power=true;
                        LiteratureList[key].num+=this.num
                        Literature+=this.num
                    }
                }
                if(power){
                    localStorage.setItem('LiteratureList',JSON.stringify(LiteratureList))
                    localStorage.setItem('Literature',JSON.stringify(Literature))
                    alert('入库成功')
                }else{
                    alert('神秘代码错误，入库失败')
                }
             }
        },
        cancle(){
            this.radio='哲学';
            this.id='';
            this.num=1
        }
    }
}
</script>

<style>

</style>