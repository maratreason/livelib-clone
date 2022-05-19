<template>
    <div class="container">
        <liv-navigation></liv-navigation>
        <router-view></router-view>
    </div>
</template>
<script>
import LivNavigation from "./components/blocks/Navigation/Navigation.vue";

export default {
    name: "app-dashboard",
    components: {
        LivNavigation,
    },
    data() {
        return {
            name: 'Dashboard'
        }
    }
}
</script>
<style lang="scss">

</style>
