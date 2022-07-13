<template>
  <div>
    <table style="width:70%">
        <tr>
            <td>title:</td>
            <td><el-input v-model="input" placeholder="标题"></el-input></td>
        </tr>
        <tr>
            <td>main:</td>
            <td><el-input
                type="textarea"
                :rows="9"
                placeholder="内容"
                v-model="textarea">
                </el-input>
            </td>
        </tr>
        <br>
        <tr>
            <td></td>
            <td>
            <el-button type="success" round size="mini" @click="save">save</el-button>
            <el-button type="success" round size="mini" @click="cancle">cancle</el-button>
            </td>
        </tr>
    </table>
    <div class="div1">{{textarea}}</div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
        name:'WriteSome',
         data() {
            return {
            input: '',
            textarea: '',
            
            }
        },
    methods:{
        save(){
            if(confirm('确定要保存到日志？')){
            if(localStorage.getItem('WriteData')!=null){
                let arr = JSON.parse(localStorage.getItem('WriteData'))
                arr.unshift({id:nanoid(),title:this.input,body:this.textarea})
                localStorage.setItem('WriteData',JSON.stringify(arr))
            }
            else{
                let arr =[{id:nanoid(),title:this.input,body:this.textarea}]
                localStorage.setItem('WriteData',JSON.stringify(arr))
            }
            alert('保存成功！')
            this.input='',
            this.textarea=''
            }
        },
        cancle(){
            this.input='',
            this.textarea=''
        }
    }    
    
        
}
</script>

<style scoped>
    .div1{
        margin-top: 50px;
        margin-left: 160px;
        width: 60%;
        height: 300px;
        background-color: #FCFCFC;
    }
</style>