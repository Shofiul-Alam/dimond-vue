<template>
    <div class="layout-search" :class="{ 'layout-search-active': search }">
        <div class="search-container fade-in-up">
            <i class="pi pi-search"></i>
            <InputText type="text" placeholder="Search" @click="searchClick" />
        </div>
    </div>
</template>

<script>
/*eslint-disable */
export default {
    name: "AppSearch",
    props: {
        search: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        searchClick(event) {
            this.$emit("on-search-click", event);
        },
    },
};
</script>