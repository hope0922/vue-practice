<template>
    <div>
        <section class="head-area">
            <div class="title">
                <span>美团外卖</span>
                <input
                    v-if="showSearch"
                    class="top-search"
                    @focus="gotoSearch"
                    placeholder="输入商家、商品名称"
                />
            </div>
        </section>
        <section class="main">
            <div class="search-food">
                <span class="local-tip" @click='gotoSelectPostion'>{{postion}}></span>
                <div class="center">
                    <input id="search-input" @focus="gotoSearch" placeholder="输入商家、商品名称" />
                </div>
            </div>
            <FoodPartition></FoodPartition>
            <div class="supermarket-card" v-for="(item,index) in foodList" :key="index">321312</div>
        </section>
        <FootNav></FootNav>
    </div>
</template>
<script>
import { mapState } from "vuex";
import { getCurrentCity, transformPostion } from "../service/api";
import FoodPartition from "./FoodPartition";
import FootNav from "./common/FootNav";
export default {
    data() {
        return {
            foodList: [1, 2, 3, 4, 5, 6],
            showSearch: false,
            postion: "获取失败"
        };
    },

    mounted() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const positionData = position.coords;
                const { longitude, latitude } = positionData;
                // alert(latitude);
                getCurrentCity({
                    location: `${longitude},${latitude}`,
                    ak: "vYATQ8UrSFjpqTcWRbkfwgDZ7KwcgkzS",
                    coordtype: "wgs84ll"
                }).then(res => {
                    // alert(res.recommendstops.name);
                    if (res.data.status === 0) {
                        this.postion = res.data.recommendStops[0].name;
                    }
                });
            });
        }
        window.addEventListener("scroll", this.handleScroll);
    },
    components: {
        FoodPartition,
        FootNav
    },
    computed: {
        ...mapState(["userInfo"])
    },

    methods: {
        gotoSearch() {
            this.$router.push("/search/geohash");
        },
        gotoSelectPostion(){
            this.$router.push("/selectPostion");
        },
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            let offsetTop =
                document.querySelector("#search-input").offsetTop +
                parseInt(
                    document.querySelector("html").style.fontSize.split("px")[0]
                ) *
                    2;
            this.showSearch = scrollTop == offsetTop || scrollTop > offsetTop;
            console.log(this.userInfo);
        }
    }
};
</script>
<style  lang="scss" scoped>
@import "../style/mixin";
.main {
    margin-top: 2.8rem;
    margin-bottom: 2rem;
}
.top-search {
    text-align: center;
    @include wh(8rem, 1.2rem);
    @include borderRadius(0.4rem);
    padding: 0 0.4rem;
    background: $bc;
}
.head-area {
    width: 100%;
    position: fixed;
    top: 0;
    background: $white;
    padding: 0.8rem;
    z-index: 100;
    .title {
        font-size: 0.9rem;
        color: #333;
        @include fj();
    }
}
.supermarket-card {
    @include wh(100%, 6rem);
    padding: 1rem;
    border-bottom: 1px solid #ddd;
}
.local-tip {
    font-size: 0.6rem;
    color: #fff;
    text-align: left;
}
.search-food {
    background: #f9d675;
    padding: 0.8rem;
    position: relative;
    .center {
        text-align: center;
    }
    input {
        text-align: center;
        @include wh(90%, 2rem);
        @include borderRadius(0.4rem);
        padding: 0 0.4rem;
        margin-top: 0.4rem;
        background: $bc;
    }
}
</style>
