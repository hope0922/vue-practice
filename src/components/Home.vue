<template>
    <div>
        <section class="head-area">
            <div class="title">
                <span>超市优选</span>
                <span v-if="!showSearch">饿了么超市</span>
                <input
                    v-if="showSearch"
                    class="top-search"
                    @focus="gotoSearch"
                    placeholder="输入商家、商品名称"
                />
            </div>
        </section>
        <section class="mt20">
            <div class="search-food">
                <span class="title-tip">要啥有啥 好货速达</span>
                <div class="center">
                    <input id="search-input" @focus="gotoSearch" placeholder="输入商家、商品名称" />
                </div>
            </div>
            <div class="supermarket-card" v-for="(item,index) in foodList" :key="index">321312</div>
        </section>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            foodList: [1, 2, 3, 4, 5, 6],
            showSearch: false
        };
    },

    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    computed: {
        ...mapState(["userInfo"])
    },

    methods: {
        gotoSearch() {
            this.$router.push("/search/geohash");
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
.mt20 {
    margin-top: 2.8rem;
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
        @include fj();
    }
    span {
        color: #fff;
    }
}
.supermarket-card {
    @include wh(100%, 6rem);
    padding: 1rem;
    border-bottom: 1px solid #ddd;
}
.title-tip {
    font-size: 0.6rem;
    color: #fff;
    text-align: left;
}
.search-food {
    background: $blue;
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
