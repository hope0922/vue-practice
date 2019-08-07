<template>
    <div>
        <Header navStr="选择收货地址" :isBack="true"></Header>
        <div class="postion-search">
            <div class="postion-head">
                <i class="el-icon-location-outline"></i>
                <span>宁波市</span>
                <i class="el-icon-arrow-down"></i>
            </div>
            <el-input placeholder="请输入内容" v-model="searchValue">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <div>
            <p>{{postionStr}}</p>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import Header from "./common/Header";
export default {
    data() {
        return {
            footNavConfig: [],
            searchValue: ""
        };
    },

    mounted() {
        this.footNavConfig = [
            {
                name: "首页"
            },
            {
                name: "订单"
            },
            {
                name: "我的"
            }
        ];
    },
    components: {
        Header
    },
    computed: {
        ...mapState(["postionStr"])
    },

    methods: {}
};
</script>
<style  lang="scss" scoped>
@import "../style/mixin";
.foot-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    @include wh(100%, 2rem);
    background: $white;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
    ul {
        display: flex;
        flex: 1;
    }
    li {
        display: flex;
        flex: 1;
        text-align: center;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 0.6rem;
    }
}
.postion-search {
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
    align-items: center;
    font-size: 0.6rem;
    padding: 0.4rem 0.8rem;
    vertical-align: middle;
    .postion-head{
        width: 110px;
    }
}
</style>
