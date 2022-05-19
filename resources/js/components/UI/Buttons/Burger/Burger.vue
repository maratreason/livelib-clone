<template lang="">
    <div class="burger_btn"></div>
</template>
<script>
export default {
    name: "liv-burger"
}
</script>
<style lang="scss">
.burger_btn {
    display: block;
    position: relative;
    width: 24px;
    height: 24px;

    &::before {
        position: absolute;
        content: '';
        top: 12px;
        left: 3px;
        width: 18px;
        height: 1px;
        background: #252626;
        -webkit-box-shadow: 0 -5px 0 0 #252626, 0 5px 0 0 #252626;
        box-shadow: 0 -5px 0 0 #252626, 0 5px 0 0 #252626;
    }
}
</style>
