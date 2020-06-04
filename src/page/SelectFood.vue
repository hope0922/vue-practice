<template>
    <div class="main">
        <header>
            <p>汉堡小子</p>
        </header>
        <section>
            <div class="top-header">
                <span>点餐</span>
                                <span>套餐</span>
            </div>
            <div class="main-menu">
                <ul class="left-menu">
                    <li v-for="(category,index) of categoryList" :key=index>1123</li>
                </ul>
                <ul class="right-menu">
                    <li v-for="(food,index) of foodList" :key=index>222</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            categoryList:[1,2,3,4,5],
            foodList:[1,2,3,4,5]
        };
    },
    props: {},
    components: {},
    mounted() {},
    methods: {}
};
</script>

<style lang="scss" scoped>
.main-menu{
    display: flex;
    flex-direction: row;
    width: 100%;
}
</style>