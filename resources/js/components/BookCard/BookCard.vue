<template>
    <div class="bookcard">
        <template v-if="dataNew">
            <div class="bookcard__new">Новинка</div>
        </template>
        <a href="" class="bookcard__header"><img class="bookcard__image" :src="getBookImage()" alt="" /></a>
        <div class="bookcard__content">
            <a class="bookcard__title">Длинный путь</a>
            <dots-menu />
            <a class="bookcard__author">Стивен Кинг</a>
            <div class="bookcard__rating">
                <svg class="bookcard__star">
                    <use :xlink:href="getSvgImage() + '#rate_star_icon'"></use>
                </svg>
                <span class="bookcard__rate-number">8,9</span>
            </div>
            <liv-button class="btn-add">
                <svg class="bookcard__star">
                    <use :xlink:href="getSvgImage() + '#btn_plus_icon'"></use>
                </svg>
                Добавить
            </liv-button>
        </div>
    </div>
</template>
<script>
export default {
    name: "book-card",

    props: ['dataNew'],

    data() {},

    methods: {
        getSvgImage() {
            return "assets/svg/SvgCollection.svg";
        },
        getBookImage() {
            return "assets/images/books/Stiven_King__Dlinnyj_put.jpeg";
        }
    }
}
</script>
<style lang="scss" scoped>
.bookcard {
    width: 170px;
    height: 100%;
    position: relative;

    &__new {
        position: absolute;
        top: -24px;
        left: 1px;
        background-color: #E6E9F0;
        border-radius: 16px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        padding: 5px 16px;
        max-width: 170px;
        min-width: 140px;
        height: 48px;
        color: #252626;
        font-size: 0.8rem;
    }

    &__header {
        height: 256px;
        width: 170px;
        border-radius: 8px;
        z-index: 2;
        overflow: hidden;
        position: relative;
        background-color: #fff;
        display: flex;
        align-items: center;
        overflow: hidden;
    }

    &__image {
        max-width: 105%;
    }

    &__content {
        display: flex;
        flex-direction: column;
        position: relative;
        border: 1px solid #e3e5e6;
        border-top: none;
        border-radius: 0 0 24px 24px;
        margin-top: -8px;
        color: #252626;
        padding: 18px 15px 15px;
        box-sizing: border-box;
    }

    &__title {
        font: 600 16px "Source Sans Pro", sans-serif;
        color: #252626;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 32px;
        width: 100%;
        margin-bottom: 0.5rem;
    }

    &__menu {
        width: 16px;
        height: 16px;
        padding: 5px 5px 5px 11px;
        position: absolute;
        margin: 0;
        top: 16px;
        right: 15px;

        &::after {
            position: absolute;
            content: '';
            top: 12px;
            left: 18px;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background-color: #88898C;
            box-shadow: 0 -6px 0 0 #88898c, 0 6px 0 0 #88898c;
        }
    }

    &__author {
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
        color: #252626;
    }

    &__rating {}

    &__star {
        width: 30px;
        height: 30px;
    }

    &__rate-number {
        font-size: 1.4rem;
        font-weight: thin;
    }
}
</style>
