<template>
    <div class="layout-search">
        <transition name="search-container" @enter="onEnter">
            <div v-show="searchActive" class="search-container" @click="onSearchContainerClick">
                <i class="pi pi-search"></i>
                <InputText ref="searchInput" type="text" name="search" placeholder="Search" @keydown="onInputKeydown" />
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "AppSearch",
    emits: ["search-click", "search-hide"],
    props: {
        searchActive: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        onEnter() {
            if (this.$refs.searchInput) {
                this.$refs.searchInput.$el.focus();
            }
        },
        onSearchContainerClick(event) {
            this.$emit("search-click", event);
        },
        onInputKeydown(event) {
            const key = event.which;
            
            //escape, tab and enter
            if (key === 27 || key === 9 || key === 13) {
                this.$emit("search-hide", event);
            }
        }
    }
};
</script>