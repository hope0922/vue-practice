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
// #app {
//     background: #fff;
// }
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
    will-change: transform;
    transition: all 0.2s;
    position: absolute;
}
.slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
</style>
