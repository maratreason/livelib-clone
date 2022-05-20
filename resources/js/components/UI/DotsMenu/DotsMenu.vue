<template>
    <div className="dotsmenu"></div>
</template>
<script>
export default {
    name: "dots-menu"
}
</script>
<style lang="scss">
.dotsmenu {
    width: 16px;
    height: 16px;
    padding: 5px 5px 5px 11px;
    position: absolute;
    margin: 0;
    top: 16px;
    right: 15px;

    &::after {
        position: absolute;
        content: "";
        top: 12px;
        left: 18px;
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: #88898c;
        box-shadow: 0 -6px 0 0 #88898c, 0 6px 0 0 #88898c;
    }
}

</style>
