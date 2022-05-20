<template>
    <div class="search">
        <input class="search__input" value="Поиск книг" />
        <svg><use :xlink:href="getSvgImage() + '#search_icon'"></use></svg>
    </div>
</template>
<script>

export default {
    name: "search-input",
    data() {
        return {
        }
    },
    methods: {
        getSvgImage() {
            return "assets/svg/SvgCollection.svg"
        }
    }
}
</script>
<style lang="scss">
.search {
    position: relative;
    margin-left: 40px;
    svg {
        height: 10px;
        position: absolute;
        left: 0px;
        top: 10px;
        /* width: 30px;
        height: 30px; */
        z-index: 4;
    }
    &__input {
        border: none;
        border-radius: 20px;
        background-color: #EDF0F7;
        width: 322px;
        height: 40px;
        font: 16px/32px "Source Sans Pro", sans-serif;
        display: flex;
        align-items: center;
        outline: none;
        color: #252626;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 16px 0px 56px;
        z-index: 3;
        // -webkit-transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);
        // transition: width 0.4s cubic-bezier(0, 0.795, 0, 1);
        cursor: pointer;
    }
}
</style>
