<template>
    <div class="header-fluid">
        <div class="container">
            <div class="header">
                <liv-burger />
                <ul class="menu__list">
                    <li
                        class="menu__item"
                        v-for="menu in menuList"
                        :key="menu.id"
                    >
                        <router-link to="menu.path" class="menu__link" tag="a">
                            {{ menu.name }}
                        </router-link>
                    </li>
                </ul>
                <img class="header__logo" :src="getLogo()" />
                <search-input />
                <liv-notify />
                <user-avatar />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "liv-navigation",

    data() {
        return {
            menuList: [
                { id: 1, name: "Главная", path: "/home" },
                { id: 2, name: "Книжный вызов 2022", path: "/challenge/2022" },
                { id: 3, name: "Что почитать", path: "/books" },
                { id: 4, name: "Лента", path: "/feed" },
            ],
        };
    },
    methods: {
        getLogo() {
            return "assets/images/logo_ll.svg";
        },
    },
};
</script>
<style lang="scss">
.header-fluid {
    border-bottom: 1px solid #ccc;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
}

.menu__list {
    display: flex;
    margin-left: 20px;
}

.menu__item {
    margin-right: 22px;
}

.menu__link {
    font-size: 0.9rem;
    text-decoration: none;
    color: inherit;
}
</style>
