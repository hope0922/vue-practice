<template>
    <div class="root">
        <Header nav-str="选择收货地址" :is-back="true"></Header>
        <div class="postion-search">
            <div class="postion-head">
                <i class="el-icon-location-outline"></i>
                <span>宁波市</span>
                <i class="el-icon-arrow-down"></i>
            </div>
            <el-input placeholder="请输入收货地址" v-model="searchValue">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <div class="restart-position">
            <p>{{isPositing?'定位中...':postionStr}}</p>
            <div @click="restartPosition">
                <i class="el-icon-aim"></i>
                <span class="btn">{{isPositing?'正在定位':'重新定位'}}</span>
            </div>
        </div>
        <div class="my-path">
            <div>
                <i class="el-icon-house"></i>
                <span>我的收货地址</span>
            </div>
            <ul class="my-path-list">
                <li v-for="(item,index) in pathList" :key="index">
                    <p>程波华庭152204</p>
                    <div>
                        <span>谢先生 18368493703</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="my-path">
            <div>
                <i class="el-icon-house"></i>
                <span>附近地址</span>
            </div>
            <ul class="my-path-list">
                <li v-for="(item,index) in pathList" :key="index">
                    <p>程波华庭152204</p>
                </li>
            </ul>
        </div>
        <div class="new-path">
            <i class="el-icon-circle-plus-outline"></i>
            <span>新增收货地址</span>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Header from "./common/Header";
export default {
    data() {
        return {
            footNavConfig: [],
            searchValue: "",
            isPositing: false,
            pathList: [1, 2, 34]
        };
    },

    mounted() {
        this.getPostion();
    },
    components: {
        Header
    },
    computed: {
        ...mapState(["postionStr"])
    },

    methods: {
        ...mapActions(["getPostion"]),
        restartPosition() {
            this.isPositing = true;
            this.$router.push('/home');
        }
    }
};
</script>
<style  lang="scss" scoped>
@import "../style/mixin";
.root{
    padding-bottom: 2rem;
    background: #fff;
}
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
    margin-top: 2.9rem;
    align-items: center;
    font-size: 0.6rem;
    padding: 0.4rem 0.8rem;
    vertical-align: middle;
    .postion-head {
        width: 110px;
    }
}
.restart-position {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.8rem;
    font-size: 0.8rem;
    border-top: 1px solid #ddd;
    .el-icon-aim,
    .btn {
        color: $yellow;
    }
}
.my-path {
    padding: 0.2rem 0.8rem;
    font-size: 0.7rem;
    border-top: 1px solid #ddd;
    .my-path-list {
        padding: 0 0.9rem;
        li {
            padding: 0.9rem 0;
        }
        li:not(:last-child) {
            border-bottom: 1px solid #ddd;
        }
        p {
            font-weight: bold;
            margin-bottom: 0.2rem;
        }
        span {
            color: #999;
        }
    }
}
.new-path{
    position: fixed;
    bottom: 0;
    left:0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    border-top: 1px solid #ddd;
    @include wh(100%,2rem);
    background: #fff;
}
</style>
