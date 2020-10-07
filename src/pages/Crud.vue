<template>
    <div class="p-grid">
        <div class="p-col-12">
            <Toast></Toast>

            <div class="card">
                <Toolbar class="p-mb-4">
                    <template #left>
                        <Button
                            label="New"
                            icon="pi pi-plus"
                            class="p-button-success p-mr-2 p-ripple"
                            @click="openNew()"
                        ></Button>
                        <Button
                            label="Delete"
                            icon="pi pi-trash"
                            class="p-button-danger p-ripple"
                            @click="confirmDeleteSelected()"
                            :disabled="
                                !selectedProducts || !selectedProducts.length
                            "
                        ></Button>
                    </template>

                    <template #right>
                        <FileUpload
                            mode="basic"
                            accept="image/*"
                            :maxFileSize="1000000"
                            label="Import"
                            chooseLabel="Import"
                            class="p-mr-2 p-d-inline-block"
                        ></FileUpload>
                        <Button
                            label="Export"
                            icon="pi pi-upload"
                            class="p-button-help p-ripple"
                            click="dt.exportCSV()"
                        ></Button>
                    </template>
                </Toolbar>

                <DataTable
                    ref="dt"
                    :value="products"
                    :rows="10"
                    :paginator:="true"
                    :globalFilterFields="[
                        'name',
                        'country.name',
                        'representative.name',
                        'status',
                    ]"
                    :selection.sync="selectedProducts"
                    :rowHover="true"
                    dataKey="id"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                    :showCurrentPageReport="true"
                >
                    <template #header>
                        <div class="p-d-flex p-ai-center p-jc-between">
                            <h5 class="p-m-0">Manage Products</h5>
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText
                                    type="text"
                                    @input="
                                        dt.filterGlobal(
                                            $event.target.value,
                                            'contains'
                                        )
                                    "
                                    placeholder="Search..."
                                />
                            </span>
                        </div>
                    </template>

                    <Column
                        selectionMode="multiple"
                        headerStyle="width:3rem"
                    ></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="image" header="Image">
                        <template #body="product">
                            <img
                                :src="
                                    'assets/demo/images/product/' +
                                    product.data.image
                                "
                                :alt="product.data.name"
                                width="100"
                                class="p-shadow-4"
                            /> </template
                    ></Column>
                    <Column field="price" header="Price" sortable>
                        <template #body="product">
                            {{ formatCurrency(product.data.price) }}
                        </template>
                    </Column>
                    <Column
                        field="category"
                        header="Category"
                        sortable
                    ></Column>
                    <Column field="review" header="Review" sortable
                        ><template #body="product">
                            <Rating
                                :model="product.data.rating"
                                :readonly="true"
                                :cancel="false"
                            ></Rating></template
                    ></Column>
                    <Column field="inventoryStatus" header="Status" sortable
                        ><template #body="product">
                            <span
                                :class="
                                    'product-badge status-' +
                                    product.data.inventoryStatus.toLowerCase()
                                "
                                >{{ product.data.inventoryStatus }}</span
                            ></template
                        ></Column
                    >

                    <Column>
                        <template #body="product">
                            <Button
                                icon="pi pi-pencil"
                                class="p-ripple p-button-rounded p-button-success p-mr-2"
                                @click="editProduct(product)"
                            ></Button>
                            <Button
                                icon="pi pi-trash"
                                class="p-ripple p-button-rounded p-button-warning"
                                @click="openConfirmation()"
                            ></Button>
                        </template>
                    </Column>
                </DataTable>

                <Dialog
                    :visible.sync="productDialog"
                    :style="{ width: '450px' }"
                    header="Product Details"
                    :modal="true"
                    class="p-fluid"
                >
                </Dialog>

                <Dialog
                    header="Confirm"
                    :visible.sync="confirmation"
                    :modal="true"
                    :style="{ width: '450px' }"
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
                            @click="closeConfirmation()"
                            class="p-button-text" />
                        <Button
                            label="Yes"
                            icon="pi pi-check"
                            @click="deleteProduct()"
                            class="p-button-text"
                            autofocus
                    /></template>
                </Dialog>

                <Dialog
                    :visible.sync="deleteProductsDialog"
                    header="Confirm"
                    :modal="true"
                    :style="{ width: '450px' }"
                >
                    <div class="confirmation-content">
                        <i
                            class="pi pi-exclamation-triangle p-mr-3"
                            style="font-size: 2rem"
                        />
                        <span
                            >Are you sure you want to delete the selected
                            products?</span
                        >
                    </div>
                    <template #footer>
                        <Button
                            label="No"
                            icon="pi pi-times"
                            class="p-button-text"
                            @click="deleteProductsDialog = false"
                        ></Button>
                        <Button
                            label="Yes"
                            icon="pi pi-check"
                            class="p-button-text"
                            @click="deleteSelectedProducts"
                        ></Button>
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
</template>

<script>
/*eslint-disable */
import ProductService from "../service/ProductService";
export default {
    name: "Crud",
    data() {
        return {
            confirmation: false,
            selectedProducts: [],
            deleteProductsDialog: false,
            products: null,
            productDialog: false,
            cols: [
                { field: "name", header: "Name" },
                { field: "price", header: "Price" },
                { field: "category", header: "Category" },
                { field: "rating", header: "Reviews" },
                { field: "inventoryStatus", header: "Status" },
            ],
        };
    },
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService
            .getProducts()
            .then((data) => (this.products = data));
    },
    methods: {
        openNew() {
            this.product = {};
            this.submitted = false;
            this.productDialog = true;
        },

        confirmDeleteSelected() {
            this.deleteProductsDialog = true;
        },

        deleteSelectedProducts() {
            this.products = this.products.filter(
                (val) => !this.selectedProducts.includes(val)
            );
            this.deleteProductsDialog = false;
            this.selectedProducts = null;
            this.$toast.add({
                severity: "success",
                summary: "Successful",
                detail: "Products Deleted",
                life: 3000,
            });
        },

        editProduct(product) {
            this.product = { ...product };
            this.productDialog = true;
        },

        deleteProduct() {
            this.products = this.products.filter(
                (val) => val.id !== this.product.id
            );
            this.deleteProductDialog = false;
            this.product = {};
            this.$toast.add({
                severity: "success",
                summary: "Successful",
                detail: "Product Deleted",
                life: 3000,
            });
        },

        hideDialog() {
            this.productDialog = false;
            this.submitted = false;
        },

        saveProduct() {
            this.submitted = true;

            if (this.product.name.trim()) {
                if (this.product.id) {
                    this.products[
                        this.findIndexById(this.product.id)
                    ] = this.product;
                    this.messageService.add({
                        severity: "success",
                        summary: "Successful",
                        detail: "Product Updated",
                        life: 3000,
                    });
                } else {
                    this.product.id = this.createId();
                    this.product.image = "product-placeholder.svg";
                    this.products.push(this.product);
                    this.messageService.add({
                        severity: "success",
                        summary: "Successful",
                        detail: "Product Created",
                        life: 3000,
                    });
                }

                this.products = [...this.products];
                this.productDialog = false;
                this.product = {};
            }
        },

        findIndexById(id) {
            let index = -1;
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].id === id) {
                    index = i;
                    break;
                }
            }

            return index;
        },

        createId() {
            let id = "";
            const chars =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < 5; i++) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return id;
        },

        formatCurrency(value) {
            return value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
            });
        },

        openConfirmation() {
            this.confirmation = true;
        },
        closeConfirmation() {
            this.confirmation = false;
        },
    },
};
</script>


<style lang="scss" scoped>
/deep/ .p-dialog .product-image {
    width: 150px;
    margin: 0 auto 2rem auto;
    display: block;
}
</style>