<template>
    <img className="avatar" :src="getProfileAvatar()" />
</template>
<script>
export default {
    name: "user-avatar",
    data() {
        return {
        }
    },
    methods: {
        getProfileAvatar() {
            return "assets/images/mini_avatar.jpg";
        }
    }
}
</script>
<style lang="scss">
.avatar {
    border-radius: 50%;
}
</style>
