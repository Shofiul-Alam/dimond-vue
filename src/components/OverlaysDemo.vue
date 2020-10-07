<template>
    <div class="p-grid">
        <div class="p-col-12 p-lg-6">
            <div class="card p-fluid">
                <h5>Dialog</h5>
                <Dialog
                    header="Dialog"
                    :visible.sync="display"
                    :modal="true"
                    showEffect="fade"
                    :style="{
                        width: '400px',
                    }"
                >
                    <div style="line-height: 1.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </div>
                    <template #footer>
                        <Button
                            type="button"
                            icon="pi pi-check"
                            @click="display = false"
                            label="Yes"
                            class="p-button-text"
                        ></Button>
                        <Button
                            type="button"
                            icon="pi pi-times"
                            @click="display = false"
                            label="No"
                            class="p-button-text"
                        ></Button>
                    </template>
                </Dialog>

                <Button
                    type="text"
                    @click="display = true"
                    icon="pi pi-external-link"
                    label="Show"
                ></Button>
            </div>

            <div class="card p-fluid">
                <h5>Overlay Panel</h5>
                <div class="p-grid">
                    <div class="p-col-6">
                        <Button
                            type="button"
                            label="Image"
                            @click="toggleImage($event)"
                            class="p-button-success"
                        ></Button>
                        <OverlayPanel ref="op1" appendTo="body">
                            <img
                                src="assets/demo/images/nature/nature1.jpg"
                                alt="Nature 1"
                            />
                        </OverlayPanel>
                    </div>
                    <div class="p-col-6">
                        <Button
                            type="button"
                            label="DataTable"
                            @click="op2Toggle($event)"
                            class="p-button-success"
                        ></Button>
                        <OverlayPanel
                            ref="op2"
                            appendTo="body"
                            :showCloseIcon="true"
                            style="width: 450px"
                        >
                            <DataTable
                                :value="products"
                                selectionMode="single"
                                :selection.sync="selectedProduct"
                                :paginator="true"
                                :rows="5"
                                @row-select="op2.hide()"
                            >
                                <Column
                                    field="name"
                                    header="Name"
                                    sortable
                                ></Column>
                                <Column field="image" header="Image">
                                    <template #body="product">
                                        <img
                                            :src="
                                                'assets/demo/images/product/' +
                                                product.data.image
                                            "
                                            :alt="product.data.image"
                                            class="product-image"
                                        />
                                    </template>
                                </Column>
                                <Column
                                    field="price"
                                    header="Price"
                                    sortable
                                ></Column>
                            </DataTable>
                        </OverlayPanel>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-col-12 p-lg-6">
            <div class="card p-fluid">
                <h5>Confirmation</h5>
                <Button
                    type="text"
                    @click="openConfirmation()"
                    icon="pi pi-trash"
                    label="Delete"
                    class="p-button-danger"
                ></Button>

                <Dialog
                    header="Confirmation"
                    :visible.sync="confirmation"
                    :modal="true"
                    icon="pi pi-exclamation-triangle"
                    style="
                         {
                            width: '425px';
                        }
                    "
                >
                    <div class="confirmation-content">
                        <i
                            class="pi pi-exclamation-triangle p-mr-3"
                            style="font-size: 2rem"
                        />
                        <span>Are you sure you want to proceed?</span>
                    </div>
                    <template #footer>
                        <Button
                            label="No"
                            icon="pi pi-times"
                            @click="closeConfirmation"
                            class="p-button-text"
                        />
                        <Button
                            label="Yes"
                            icon="pi pi-check"
                            @click="closeConfirmation"
                            class="p-button-text"
                            autofocus
                        /> </template
                ></Dialog>
            </div>

            <div class="card">
                <h5>Sidebar</h5>
                <Sidebar :visible.sync="visibleSidebar1" :baseZIndex="10000">
                    <h3 style="font-weight: normal">Left Sidebar</h3>
                </Sidebar>

                <Sidebar
                    :visible.sync="visibleSidebar2"
                    position="right"
                    :baseZIndex="10000"
                >
                    <h3 style="font-weight: normal">Right Sidebar</h3>
                </Sidebar>

                <Sidebar
                    :visible.sync="visibleSidebar3"
                    position="top"
                    :baseZIndex="10000"
                >
                    <h3 style="font-weight: normal">Top Sidebar</h3>
                </Sidebar>

                <Sidebar
                    :visible.sync="visibleSidebar4"
                    position="bottom"
                    :baseZIndex="10000"
                >
                    <h3 style="font-weight: normal">Bottom Sidebar</h3>
                </Sidebar>

                <Sidebar
                    :visible.sync="visibleSidebar5"
                    position="full"
                    :baseZIndex="10000"
                >
                    <h3 style="font-weight: normal">Full Screen Sidebar</h3>
                </Sidebar>

                <Button
                    type="button"
                    @click="visibleSidebar1 = true"
                    icon="pi pi-arrow-right"
                    class="p-button-warning"
                ></Button>
                <Button
                    type="button"
                    @click="visibleSidebar2 = true"
                    icon="pi pi-arrow-left"
                    class="p-button-warning"
                ></Button>
                <Button
                    type="button"
                    @click="visibleSidebar3 = true"
                    icon="pi pi-arrow-down"
                    class="p-button-warning"
                ></Button>
                <Button
                    type="button"
                    @click="visibleSidebar4 = true"
                    icon="pi pi-arrow-up"
                    class="p-button-warning"
                ></Button>
                <Button
                    type="button"
                    @click="visibleSidebar5 = true"
                    icon="pi pi-th-large"
                    class="p-button-warning"
                ></Button>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <h5>Tooltip</h5>
                <div class="p-formgroup-inline">
                    <div class="p-field">
                        <label for="firstname5" class="p-sr-only"
                            >Username</label
                        >
                        <InputText
                            id="firstname5"
                            type="text"
                            placeholder="Username"
                            pTooltip="Enter your username"
                        />
                    </div>
                    <Button
                        class="p-ripple"
                        type="button"
                        label="Submit"
                        v-tooltip="'Click to proceed'"
                    ></Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/*eslint-disable */
import ProductService from "../service/ProductService";
export default {
    name: "OverlaysDemo",
    data() {
        return {
            display: false,
            confirmation: false,
            products: [],
            selectedProduct: [],
            visibleSidebar1: null,
            visibleSidebar2: null,
            visibleSidebar3: null,
            visibleSidebar4: null,
            visibleSidebar5: null,
            images: [
                {
                    source: "assets/demo/images/sopranos/sopranos1.jpg",
                    thumbnail:
                        "assets/demo/images/sopranos/sopranos1_small.jpg",
                    title: "Sopranos 1",
                },
                {
                    source: "assets/demo/images/sopranos/sopranos2.jpg",
                    thumbnail:
                        "assets/demo/images/sopranos/sopranos2_small.jpg",
                    title: "Sopranos 2",
                },
                {
                    source: "assets/demo/images/sopranos/sopranos3.jpg",
                    thumbnail:
                        "assets/demo/images/sopranos/sopranos3_small.jpg",
                    title: "Sopranos 3",
                },
                {
                    source: "assets/demo/images/sopranos/sopranos4.jpg",
                    thumbnail:
                        "assets/demo/images/sopranos/sopranos4_small.jpg",
                    title: "Sopranos 4",
                },
            ],
        };
    },
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService
            .getProductsSmall()
            .then((products) => (this.products = products));
    },
    methods: {
        openConfirmation() {
            this.confirmation = true;
        },
        closeConfirmation() {
            this.confirmation = false;
        },
        toggleImage($event) {
            this.$refs.op1.toggle($event);
        },
        op2Toggle($event) {
            this.$refs.op2.toggle($event);
        },
    },
};
</script>

<style lang="scss" scoped>
.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

button {
    margin-right: 0.25em;
}
</style>