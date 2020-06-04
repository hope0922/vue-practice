<template>
  <div class="root">
      <Header nav-str="我的" is-back="true"></Header>
      <div class="list-content">
        <ul>
            <li class="list-item" v-for="(item,index) of dataList" :key= index>{{item.name}}</li>
        </ul>
      </div>
      <FootNav></FootNav>
  </div>
</template>

<script>
import Header from "../components/common/Header";
import FootNav from "../components/common/FootNav";
export default {
  name: '',
  data() { 
    return {
        dataList:[{name:'美团红包'},{name:'商家代金券'},{name:'津贴'},{name:'我的地址'}]
    }
  },
  props: {

  },
  components:{
      Header,
      FootNav
  },
  methods:{

  },
 }
</script>

<style  lang="scss" scoped>

.root{
    padding-bottom: 2rem;
    background: #fff;
}
.list-content{
    width: 100%;
    height: 100vh;
        padding-top: 66px;
}
.list-item{
    border-bottom: 1px solid #ddd;
    padding: 10px;
}
.list-item:first-child{
    border-top: 1px solid #ddd;
}
</style>