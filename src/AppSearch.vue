<template>
    <div class="layout-search" :class="{ 'layout-search-active': search }" @click="onSearchClick">
        <div class="search-container fade-in-up">
            <i class="pi pi-search"></i>
            <InputText type="text" name="search" placeholder="Search" @click="clicked" />
        </div>
    </div>
</template>

<script>
export default {
    name: "AppSearch",
    props: {
        search: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        onSearchClick(event){
            this.$emit('search-click', event);
            event.preventDefault()
        },
        clicked(event){
            this.$emit('search-input-click', event)
        }
    }
};
</script>