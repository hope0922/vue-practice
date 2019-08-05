<template>
    <nav class="foot-nav">
        <ul>
            <li v-for="(item,index) in footNavConfig" :key="index">{{item.name}}</li>
        </ul>
    </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            footNavConfig: []
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
    computed: {
        ...mapState(["userInfo"])
    },

    methods: {}
};
</script>
<style  lang="scss" scoped>
@import "../style/mixin";
.foot-nav{
    display: flex;
    position: fixed;
    bottom:0;
    left: 0;
    @include wh(100%,2rem);
    background: $white;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
    ul{
        display: flex;
        flex: 1;
    }
    li{
        display: flex;
        flex:1;
    	text-align: center;
    	flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 0.6rem;
    }
}

</style>
