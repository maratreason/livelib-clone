<template>
    <svg class="notify">
        <use :xlink:href="`${getSvgImage()}#notify_icon`"></use>
    </svg>
</template>
<script>
export default {
    name: "liv-notify",
    methods: {
        getSvgImage() {
            return "assets/svg/SvgCollection.svg";
        }
    }
}
</script>
<style lang="scss">
.notify {
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: 10px;
}
</style>
