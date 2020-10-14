<template>
    <div class="layout-search" :class="{ 'layout-search-active': search }">
        <div class="search-container fade-in-up">
            <i class="pi pi-search"></i>
            <InputText type="text" name="search" placeholder="Search" />
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
    }
};
</script>