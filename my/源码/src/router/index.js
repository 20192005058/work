import VueRouter from "vue-router";
import Histogram from '../pages/Histogram.vue'
import LineChart from '../pages/LineChart.vue'
import PieChart from '../pages/PieChart.vue'
import LineChartAll from '../pages/LineChartAll.vue'
import ScatterDiagram from '../pages/ScatterDiagram.vue'
import LineChartPhilosophy from '../pages/LineChartSort/LineChartPhilosophy.vue'
import LineChartArt from '../pages/LineChartSort/LineChartArt.vue'
import LineChartEconomics from '../pages/LineChartSort/LineChartEconomics.vue'
import LineChartHistory from '../pages/LineChartSort/LineChartHistory.vue'
import LineChartLiterature from '../pages/LineChartSort/LineChartLiterature.vue'
import LineChartPolitics from '../pages/LineChartSort/LineChartPolitics.vue'
import LineChartLogic from '../pages/LineChartSort/LineChartLogic.vue'
import BookManage from '../pages/BookManage.vue'
import Art from '../pages/BookMessage/Art.vue'
import Economics from '../pages/BookMessage/Economics.vue'
import History from '../pages/BookMessage/History.vue'
import Literature from '../pages/BookMessage/Literature.vue'
import Logic from '../pages/BookMessage/Logic.vue'
import Philosophy from '../pages/BookMessage/Philosophy.vue'
import Politics from '../pages/BookMessage/Politics.vue'

import WorkPlace from '../pages/WorkPlace.vue'
import AddNew from '../pages/WorkPlace/AddNew.vue'
import Reduce from '../pages/WorkPlace/Reduce.vue'
import AddOld from '../pages/WorkPlace/AddOld.vue'

import MyMessage from '../pages/MyMessage.vue'

import ShowFuture from '../pages/Future/ShowFuture.vue'
import FutureLineChart from '../pages/Future/FutureLineChart.vue'
import FutureHistogram from '../pages/Future/FutureHistogram.vue'

import ShowHistory from '../pages/ShowHistory.vue'

import IconData from '../pages/IconData.vue'

import WriteSome from '../pages/WriteSome.vue'

import CheckData from '../pages/CheckData.vue'
export default new VueRouter({
    routes:[
        {
            path:'/CheckData',
            component:CheckData
        },
        {
            path:'/WriteSome',
            component:WriteSome
        },
        {
            path:'/IconData',
            component:IconData
        },
        {
            path:'/ShowHistory',
            component:ShowHistory
        },
        {
            path:'/FutureHistogram',
            component:FutureHistogram
        },
        {
            path:'/FutureLineChart',
            component:FutureLineChart
        },
        {
            path:'/ShowFuture',
            component:ShowFuture,
        },
        {
            path:'/MyMessage',
            component:MyMessage
        },
        {
            path:'/AddNew',
            component:AddNew
        },
        {
            path:'/AddOld',
            component:AddOld
        },
        {
            path:'/Reduce',
            component:Reduce
        },
        {
            path:'/WorkPlace',
            component:WorkPlace
        },
        {
            path:'/Histogram',
            component:Histogram
        },
        {
            path:'/LineChart',
            component:LineChart
        },
        {
            path:'/PieChart',
            component:PieChart
        },
        {
            path:'/ScatterDiagram',
            component:ScatterDiagram
        },
        {
            path:'/LineChartAll',
            component:LineChartAll
        },
        {
            path:'/LineChartPhilosophy',
            component:LineChartPhilosophy
        },
        {
            path:'/LineChartLogic',
            component:LineChartLogic
        },
        {
            path:'/LineChartEconomics',
            component:LineChartEconomics
        },
        {
            path:'/LineChartPolitics',
            component:LineChartPolitics
        },
        {
            path:'/LineChartHistory',
            component:LineChartHistory
        },
        {
            path:'/LineChartArt',
            component:LineChartArt
        },
        {
            path:'/LineChartLiterature',
            component:LineChartLiterature
        },
        {
            path:'/BookManage',
            component:BookManage,
            children:[
                {
                    path:'Art',
                    component:Art
                },
                {
                    path:'Economics',
                    component:Economics
                },
                {
                    path:'History',
                    component:History
                },
                {
                    path:'Literature',
                    component:Literature
                },
                {
                    path:'Logic',
                    component:Logic
                },
                {
                    path:'Philosophy',
                    component:Philosophy
                },
                {
                    path:'Politics',
                    component:Politics
                },
            ]
        },
    ]
})