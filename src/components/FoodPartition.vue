<template>
    <div class="sort-container">
        <ul>
            <li v-for="(item,index) in foodSortData" :key="index">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            foodSortData: []
        };
    },

    mounted() {
        this.foodSortData = [
            {
                name: "美食"
            },
            {
                name: "超市便利"
            },
            {
                name: "蔬菜水果"
            },
            {
                name: "美团专送"
            },
            {
                name: "跑腿代购"
            },
            {
                name: "下午茶"
            },
            {
                name: "津贴联盟"
            },
            {
                name: "汉堡披萨"
            },
            {
                name: "家常菜"
            },
            {
                name: "小吃馆"
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
.sort-container {
    padding: 0.4rem;
    font-size: 0.6rem;
    @include wh(100%, 7rem);
    li {
        float: left;
        @include wh(3rem, 3rem);
        @include borderRadius(1.5rem);
        border: 1px solid #333;
        text-align: center;
        line-height: 3rem;
    }
}
</style>
