<template>
        <section class="head-area">
            <div class="title">
            <i class="el-icon-arrow-left" v-if='isBack' @click="goBack"></i>
            <span>{{navStr}}</span>
            </div>
        </section>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {

        };
    },

    mounted() {
        console.log(this)
    },
    components: {

    },
    computed: {
        ...mapState(["userInfo"])
    },
    props: ['navStr','isBack'],
    methods: {
        goBack(){
            this.$router.go(-1);
        }
    }
};
</script>
<style  lang="scss" scoped>
@import "../../style/mixin";
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
    }
}
</style>