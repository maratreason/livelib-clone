<template>
    <div class="btn">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "liv-button"
}
</script>
<style lang="scss">
.btn {
    position: relative;
    border: none;
    border-radius: 16px;
    background-color: #3E99ED;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 32px;
    width: 100%;
    color: #fff;
    margin: 10px 0 0;
    cursor: pointer;

    svg {
        position: relative;
        left: -5px;
    }

    &:hover {
        color: #fff;
        background-color: #2f87da;
    }
}

</style>
