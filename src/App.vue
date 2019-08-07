<template>
    <div id="app">
        <!-- 过度动画 -->
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style lang="scss">
@import "./style/common.scss";
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
