<template>
    <div class="p-grid list-demo">
        <div class="p-col-12">
            <div class="card">
                <h5>DataView</h5>
                <DataView
                    ref="dv"
                    :value="products"
                    :paginator="true"
                    :rows="9"
                    filterBy="name"
                    :sortField="sortField"
                    :sortOrder="sortOrder"
                    :layout="layout"
                >
                    <template #header>
                        <div
                            class="p-d-flex p-flex-column p-flex-md-row p-jc-md-between"
                        >
                            <Dropdown
                                :options="sortOptions"
                                optionLabel="label"
                                v-model="sortKey"
                                placeholder="Sort By Price"
                                @change="onSortChange($event)"
                                styleClass="p-mb-2 p-mb-md-0"
                            ></Dropdown>
                            <span class="p-input-icon-left p-mb-2 p-mb-md-0">
                                <i class="pi pi-search"></i>
                                <InputText
                                    type="search"
                                    placeholder="Search by Name"
                                    @input="dv.filter($event.target.value)"
                                />
                            </span>
                            <DataViewLayoutOptions
                                v-model="layout"
                            ></DataViewLayoutOptions>
                        </div>
                    </template>
                    <template #list="product">
                        <div class="p-col-12">
                            <div class="product-list-item">
                                <img
                                    :src="
                                        'assets/demo/images/product/' +
                                        product.data.image
                                    "
                                    :alt="product.data.name"
                                />
                                <div class="product-list-detail">
                                    <div class="product-name">
                                        {{ product.data.name }}
                                    </div>
                                    <div class="product-description">
                                        {{ product.data.description }}
                                    </div>
                                    <Rating
                                        v-model="product.data.rating"
                                        :readonly="true"
                                        :cancel="false"
                                    ></Rating>
                                    <i
                                        class="pi pi-tag product-category-icon"
                                    ></i
                                    ><span class="product-category">{{
                                        product.data.category
                                    }}</span>
                                </div>
                                <div class="product-list-action">
                                    <span class="product-price"
                                        >${{ product.data.price }}</span
                                    >
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        label="Add to Cart"
                                        :disabled="
                                            product.data.inventoryStatus ===
                                            'OUTOFSTOCK'
                                        "
                                    ></Button>
                                    <span
                                        :class="
                                            'product-badge status-' +
                                            product.data.inventoryStatus.toLowerCase()
                                        "
                                        >{{
                                            product.data.inventoryStatus
                                        }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </template>
                    <template #grid="product">
                        <div class="p-col-12 p-md-4">
                            <div class="product-grid-item card">
                                <div class="product-grid-item-top">
                                    <div>
                                        <i
                                            class="pi pi-tag product-category-icon"
                                        ></i>
                                        <span class="product-category">{{
                                            product.data.category
                                        }}</span>
                                    </div>
                                    <span
                                        :class="
                                            'product-badge status-' +
                                            product.data.inventoryStatus.toLowerCase()
                                        "
                                        >{{
                                            product.data.inventoryStatus
                                        }}</span
                                    >
                                </div>
                                <div class="product-grid-item-content">
                                    <img
                                        :src="
                                            'assets/demo/images/product/' +
                                            product.data.image
                                        "
                                        :alt="product.name"
                                    />
                                    <div class="product-name">
                                        {{ product.data.name }}
                                    </div>
                                    <div class="product-description">
                                        {{ product.data.description }}
                                    </div>
                                    <Rating
                                        v-model="product.data.rating"
                                        :readonly="true"
                                        :cancel="false"
                                    ></Rating>
                                </div>
                                <div class="product-grid-item-bottom">
                                    <span class="product-price"
                                        >${{ product.data.price }}</span
                                    >
                                    <Button
                                        icon="pi pi-shopping-cart"
                                        :disabled="
                                            product.data.inventoryStatus ===
                                            'OUTOFSTOCK'
                                        "
                                    ></Button>
                                </div>
                            </div>
                        </div>
                    </template>
                </DataView>
            </div>
        </div>

        <div class="p-col-12 p-lg-8">
            <div class="card">
                <h5>PickList</h5>
                <PickList v-model="sourceCities" dataKey="code">
                    <template #sourceHeader> From </template>
                    <template #targetHeader> To </template>
                    <template #item="sourceCities">
                        <div>{{ sourceCities.item.name }}</div>
                    </template>
                </PickList>
            </div>
        </div>

        <div class="p-col-12 p-lg-4">
            <div class="card">
                <h5>OrderList</h5>
                <OrderList
                    v-model="orderCities"
                    listStyle="{ height: 'auto' }"
                    dataKey="code"
                >
                    <template #header> Cities </template>
                    <template #item="orderCities">
                        <div>{{ orderCities.item.name }}</div>
                    </template>
                </OrderList>
            </div>
        </div>
    </div>
</template>

<script>
/*eslint-disable */
import ProductService from "../service/ProductService";
export default {
    name: "ListDemo",
    data() {
        return {
            products: [],
            sourceCities: [
                [
                    { name: "San Francisco", code: "SF" },
                    { name: "London", code: "LDN" },
                    { name: "Paris", code: "PRS" },
                    { name: "Istanbul", code: "IST" },
                    { name: "Berlin", code: "BRL" },
                    { name: "Barcelona", code: "BRC" },
                    { name: "Rome", code: "RM" },
                ],
                [],
            ],
            targetCities: [],
            orderCities: [
                { name: "San Francisco", code: "SF" },
                { name: "London", code: "LDN" },
                { name: "Paris", code: "PRS" },
                { name: "Istanbul", code: "IST" },
                { name: "Berlin", code: "BRL" },
                { name: "Barcelona", code: "BRC" },
                { name: "Rome", code: "RM" },
            ],
            sortOptions: [
                { label: "Price High to Low", value: "!price" },
                { label: "Price Low to High", value: "price" },
            ],
            sortKey: null,
            sortOrder: null,
            sortField: null,
            layout: "grid",
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
        onSortChange($event) {
            const value = $event.value;

            if (value.indexOf("!") === 0) {
                this.sortOrder = -1;
                this.sortField = value.substring(1, value.length);
            } else {
                this.sortOrder = 1;
                this.sortField = value;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
/deep/ .p-dropdown {
    width: 14rem;
    font-weight: normal;
}

.product-name {
    font-size: 1.5rem;
    font-weight: 700;
}

.product-description {
    margin: 0 0 1rem 0;
}

.product-category-icon {
    vertical-align: middle;
    margin-right: 0.5rem;
}

.product-category {
    font-weight: 600;
    vertical-align: middle;
}

.product-list-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;

    img {
        width: 150px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        margin-right: 2rem;
    }

    .product-list-detail {
        flex: 1 1 0;
    }

    .p-rating {
        margin: 0 0 0.5rem 0;
    }

    .product-price {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        align-self: flex-end;
    }

    .product-list-action {
        display: flex;
        flex-direction: column;
    }

    .p-button {
        margin-bottom: 0.5rem;
    }

    .product-grid-item {
        margin: 0.5em;
        border: 1px solid #dee2e6;

        .product-grid-item-top,
        .product-grid-item-bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        img {
            width: 75%;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
                0 3px 6px rgba(0, 0, 0, 0.23);
            margin: 2rem 0;
        }

        .product-grid-item-content {
            text-align: center;
        }

        .product-price {
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
}

.product-badge {
    border-radius: 2px;
    padding: 0.25em 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: 0.3px;

    &.status-instock {
        background: #c8e6c9;
        color: #256029;
    }

    &.status-outofstock {
        background: #ffcdd2;
        color: #c63737;
    }

    &.status-lowstock {
        background: #feedaf;
        color: #8a5340;
    }
}

@media screen and (max-width: 576px) {
    /deep/ .product-list-item {
        flex-direction: column;
        align-items: center;

        img {
            width: 75%;
            margin: 2rem 0;
        }

        .product-list-detail {
            text-align: center;
        }

        .product-price {
            align-self: center;
        }

        .product-list-action {
            display: flex;
            flex-direction: column;
        }

        .product-list-action {
            margin-top: 2rem;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }
}
</style>