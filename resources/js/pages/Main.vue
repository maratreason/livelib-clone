<template>
    <liv-section>
        <h2 class="section__title">Новинки книг</h2>
        <ul class="section__list">
            <li><book-card :dataNew="true" /></li>
            <li><book-card :dataNew="true" /></li>
            <li><book-card :dataNew="true" /></li>
            <li><book-card :dataNew="true" /></li>
            <li><book-card :dataNew="true" /></li>
            <li><book-card :dataNew="true" /></li>
        </ul>
    </liv-section>

    <liv-section>
        <h2 class="section__title">Выбор редакции</h2>
        <liv-redaction-block></liv-redaction-block>
    </liv-section>
</template>
<script>
import LivSection from "../components/blocks/Section/Section.vue";
import LivRedactionBlock from "../components/blocks/Redaction/Redaction.vue";
import BookCard from "../components/BookCard/BookCard.vue";

export default {
    components: {
        LivSection,
        BookCard,
        LivRedactionBlock,
    }
}
</script>
<style lang="scss">
.section__title {
    color: #252626;
    font-size: 32px;
    margin-bottom: 3rem;
}

.section__list {
    display: flex;
    li {
        margin-right: 31px;

        &:nth-child(6) {
            margin-right: 0;
        }
    }
}
</style>
