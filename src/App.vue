<template>
    <div id="app">
        <!-- 过度动画 -->
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            transitionName: ""
        };
    },
    watch: {
        $route(to, from) {
            const toDepth = to.path.split("/").length;
            const fromDepth = from.path.split("/").length;
            this.transitionName =
                toDepth < fromDepth ? "slide-right" : "slide-left";
        }
    }
};
</script>

<style lang="scss">
@import "./style/common.scss";
</style>
