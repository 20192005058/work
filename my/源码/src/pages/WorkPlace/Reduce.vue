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
        <td>借出数量：</td>
        <td><el-input-number v-model="num" @change="handleChange" :min="1" :max="50" label="数量">
        </el-input-number></td>
      </tr>
    </table>
    <el-button type="primary" @click="save">借出</el-button>
    <el-button type="success" @click="cancle">取消</el-button>
  </div>
</template>

<script>
export default {
    name:'Reduce',
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
            let can =true;
            console.log(this.id)
             if(this.radio==='哲学'){
                let PhilosophyList= JSON.parse(localStorage.getItem('PhilosophyList'))
                let Philosophy =JSON.parse(localStorage.getItem('Philosophy'))
                for(let key in PhilosophyList){
                    
                    if(PhilosophyList[key]!=null)

                    if(PhilosophyList[key].id===this.id){
                        power=true;
                        PhilosophyList[key].num-=this.num
                        if(PhilosophyList[key].num>=0){
                            Philosophy-=this.num
                        }
                        if(PhilosophyList[key].num<0)
                          can=false;
                         if(PhilosophyList[key].num===0)
                        {
                            delete PhilosophyList[key]
                        } 
                    }
                    console.log('报错！',key)
                }
                if(power && can){
                    localStorage.setItem('PhilosophyList',JSON.stringify(PhilosophyList))
                    localStorage.setItem('Philosophy',JSON.stringify(Philosophy))
                    alert('借出成功')
                }else{
                    if(!power)
                    alert('神秘代码错误，借出失败')
                    else
                    alert('库存数量不足！')
                }
             };
             if(this.radio==='逻辑'){
                let LogicList = JSON.parse(localStorage.getItem('LogicList'))
                let Logic =JSON.parse(localStorage.getItem('Logic'))
                for(let key in LogicList ){
                     if(LogicList[key]!=null)
                    if(LogicList[key].id===this.id){
                        power=true;
                        LogicList[key].num-=this.num
                         if(LogicList[key].num>=0){
                            Logic-=this.num
                        }
                        if(LogicList[key].num<0)
                          can=false;
                           if(LogicList[key].num===0)
                        {
                            delete LogicList[key]
                        } 
                    }
                }
                if(power && can){
                    localStorage.setItem('LogicList',JSON.stringify(LogicList))
                     localStorage.setItem('Logic',JSON.stringify(Logic))
                    alert('借出成功')
                }else{
                    if(!power)
                   { 
                    alert('神秘代码错误，借出失败')
                   }
                    else
                    alert('库存数量不足！')
                }
             };
            if(this.radio==='经济'){
                let EconomicsList = JSON.parse(localStorage.getItem('EconomicsList'))
                let Economics=JSON.parse(localStorage.getItem('Economics'))
                for(let key in EconomicsList ){
                    if(EconomicsList[key]!=null)
                    if(EconomicsList[key].id===this.id){
                        power=true;
                        EconomicsList[key].num-=this.num
                        if(EconomicsList[key].num>=0){
                            Economics-=this.num
                        }
                        if(EconomicsList[key].num<0)
                          can=false;
                            if(EconomicsList[key].num===0)
                        {
                            delete EconomicsList[key]
                        } 
                    }
                }
                if(power && can){
                    localStorage.setItem('EconomicsList',JSON.stringify(EconomicsList))
                    localStorage.setItem('Economics',JSON.stringify(Economics))
                    alert('借出成功')
                }else{
                    if(!power)
                    alert('神秘代码错误，借出失败')
                    else
                    alert('库存数量不足！')
                }
             };
            if(this.radio==='政治'){
                let PoliticsList = JSON.parse(localStorage.getItem('PoliticsList'))
                let Politics = JSON.parse(localStorage.getItem('Politics'))
                for(let key in PoliticsList ){
                     if(PoliticsList[key]!=null)
                    if(PoliticsList[key].id===this.id){
                        power=true;
                        PoliticsList[key].num-=this.num
                        if(PoliticsList[key].num>=0)
                         Politics-=this.num
                        if(PoliticsList[key].num<0)
                          can=false;
                             if(PoliticsList[key].num===0)
                        {
                            delete PoliticsList[key]
                        } 
                    }
                }
                if(power && can){
                    localStorage.setItem('PoliticsList',JSON.stringify(PoliticsList))
                    localStorage.setItem('Politics',JSON.stringify(Politics))
                    alert('借出成功')
                }else{
                    if(!power)
                    alert('神秘代码错误，借出失败')
                    else
                    alert('库存数量不足！')
                }
             };
             if(this.radio==='历史'){
                let HistoryList = JSON.parse(localStorage.getItem('HistoryList'))
                let History = JSON.parse(localStorage.getItem('History'))
                for(let key in HistoryList ){
                      if(HistoryList[key]!=null)
                    if(HistoryList[key].id===this.id){
                        power=true;
                        HistoryList[key].num-=this.num
                        if(HistoryList[key].num>=0)
                        History-=this.num
                        if(HistoryList[key].num<0)
                          can=false;
                               if(HistoryList[key].num===0)
                        {
                            delete HistoryList[key]
                        } 
                    }
                }
                if(power && can){
                    localStorage.setItem('HistoryList',JSON.stringify(HistoryList))
                    localStorage.setItem('History',JSON.stringify(History))
                    alert('借出成功')
                }else{
                    if(!power)
                    alert('神秘代码错误，借出失败')
                    else
                    alert('库存数量不足！')
                }
             };
             if(this.radio==='艺术'){
                let ArtList = JSON.parse(localStorage.getItem('ArtList'))
                let Art = JSON.parse(localStorage.getItem('Art'))
                for(let key in ArtList ){
                    if(ArtList[key]!=null)
                    if(ArtList[key].id===this.id){
                        power=true;
                        ArtList[key].num-=this.num
                        if(ArtList[key].num>=0)
                        Art-=this.num
                        if(ArtList[key].num<0)
                          can=false;
                                 if(ArtList[key].num===0)
                        {
                            delete ArtList[key]
                        } 
                    }
                }
                if(power && can){
                    localStorage.setItem('ArtList',JSON.stringify(ArtList))
                    localStorage.setItem('Art',JSON.stringify(Art))
                    alert('借出成功')
                }else{
                    if(!power)
                    alert('神秘代码错误，借出失败')
                    else
                    alert('库存数量不足！')
                }
             };
             if(this.radio==='文学'){
                let LiteratureList = JSON.parse(localStorage.getItem('LiteratureList'))
                let Literature = JSON.parse(localStorage.getItem('Literature'))
                for(let key in LiteratureList ){
                    if(LiteratureList[key]!=null)
                    if(LiteratureList[key].id===this.id){
                        power=true;
                        LiteratureList[key].num-=this.num
                        if(LiteratureList[key].num>=0)
                        Literature-=this.num
                        if(LiteratureList [key].num<0)
                          can=false;
                        if(LiteratureList[key].num===0)
                        {
                            delete LiteratureList[key]
                        } 
                    }
                }
                if(power && can){
                    localStorage.setItem('LiteratureList',JSON.stringify(LiteratureList))
                    localStorage.setItem('Literature',JSON.stringify(Literature))
                    alert('借出成功')
                }else{
                    if(!power)
                    alert('神秘代码错误，借出失败')
                    else
                    alert('库存数量不足！')
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