<template>
    <div class="layout-dashboard">
        <div class="p-grid">
            <div class="p-col-12 p-md-6 p-xl-3">
                <div class="card no-gutter widget-overview-box widget-overview-box-1">
                    <span class="overview-icon">
                        <i class="pi pi-shopping-cart"></i>
                    </span>
                    <span class="overview-title">Orders</span>
                    <div class="p-grid overview-detail">
                        <div class="p-col-6">
                            <div class="overview-number">640</div>
                            <div class="overview-subtext">Pending</div>
                        </div>
                        <div class="p-col-6">
                            <div class="overview-number">1420</div>
                            <div class="overview-subtext">Completed</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-col-12 p-md-6 p-xl-3">
                <div class="card no-gutter widget-overview-box widget-overview-box-2">
                    <span class="overview-icon">
                        <i class="pi pi-dollar"></i>
                    </span>
                    <span class="overview-title">Revenue</span>
                    <div class="p-grid overview-detail">
                        <div class="p-col-6">
                            <div class="overview-number">$2,100</div>
                            <div class="overview-subtext">Expenses</div>
                        </div>
                        <div class="p-col-6">
                            <div class="overview-number">$9,640</div>
                            <div class="overview-subtext">Income</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-col-12 p-md-6 p-xl-3">
                <div class="card no-gutter widget-overview-box widget-overview-box-3">
                    <span class="overview-icon">
                        <i class="pi pi-users"></i>
                    </span>
                    <span class="overview-title">Customers</span>
                    <div class="p-grid overview-detail">
                        <div class="p-col-6">
                            <div class="overview-number">8272</div>
                            <div class="overview-subtext">Active</div>
                        </div>
                        <div class="p-col-6">
                            <div class="overview-number">25402</div>
                            <div class="overview-subtext">Registered</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-col-12 p-md-6 p-xl-3">
                <div class="card no-gutter widget-overview-box widget-overview-box-4">
                    <span class="overview-icon">
                        <i class="pi pi-comment"></i>
                    </span>
                    <span class="overview-title">Comments</span>
                    <div class="p-grid overview-detail">
                        <div class="p-col-6">
                            <div class="overview-number">12</div>
                            <div class="overview-subtext">New</div>
                        </div>
                        <div class="p-col-6">
                            <div class="overview-number">85</div>
                            <div class="overview-subtext">Responded</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-col-12 p-xl-6">
                <div class="card no-gutter orders">
                    <div class="card-header">
                        <h4>Orders</h4>
                        <Menu id="orders-button" :popup="true" :model="items" ref="menu" appendTo="body"></Menu>
                        <Button icon="pi pi-search" class="p-button-text p-button-secondary" @click="menuToggle($event)" aria-controls="orders-button" aria-haspopup="true"></Button>
                    </div>

                    <div class="p-grid">
                        <div class="p-col-12">
                            <div id="order-tabs-container" class="p-grid order-tabs">
                                <div class="order-tab order-tab-new p-col-6 p-md-3" @click="changeDataset($event); refreshDataset($event);"
                                    data-label="New Orders" data-index="0" data-stroke="#BBDEFB" data-fill="rgba(100, 181, 246, 0.2)" >
                                    <i class="pi pi-plus-circle"></i>
                                    <span class="order-label">New</span>
                                    <i class="stat-detail-icon icon-arrow-right-circle"></i>
                                    <img src="assets/demo/images/dashboard/graph-new.svg" alt="diamond-vue" />
                                </div>
                                <div class="order-tab order-tab-completed p-col-6 p-md-3" @click="changeDataset($event); refreshDataset($event);"
                                    data-label="Completed Orders" data-index="1" data-stroke="#C5CAE9" data-fill="rgba(121, 134, 203, 0.2)">
                                    <i class="pi pi-check-circle"></i>
                                    <span class="order-label">Completed</span>
                                    <i class="stat-detail-icon icon-arrow-right-circle"></i>
                                    <img src="assets/demo/images/dashboard/graph-completed.svg" alt="diamond-vue" />
                                </div>
                                <div class="order-tab order-tab-refunded p-col-6 p-md-3" @click="changeDataset($event); refreshDataset($event);" 
                                        data-label="Refunded Orders" data-index="2" data-stroke="#B2DFDB" data-fill="rgba(224, 242, 241, 0.5)">
                                    <i class="pi pi-refresh"></i>
                                    <span class="order-label">Refunded</span>
                                    <i class="stat-detail-icon icon-arrow-right-circle"></i>
                                    <img src="assets/demo/images/dashboard/graph-refunded.svg" alt="diamond-vue" />
                                </div>
                                <div class="order-tab order-tab-cancelled p-col-6 p-md-3" @click="changeDataset($event);  refreshDataset($event);"
                                    data-label="Cancelled Orders" data-index="3" data-stroke="#B2EBF2" data-fill="rgba(224, 247, 250, 0.5)">
                                    <i class="pi pi-times-circle"></i>
                                    <span class="order-label">Cancelled</span>
                                    <i class="stat-detail-icon icon-arrow-right-circle"></i>
                                    <img src="assets/demo/images/dashboard/graph-cancelled.svg" alt="diamond-vue" />
                                </div>
                            </div>
                        </div>
                        <div class="p-col-12">
                            <div class="overview-chart">
                                <Chart ref="chart" type="line" :data="ordersChart" :options="ordersChartOptions" id="order-chart"></Chart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-col-12 p-xl-6">
                <div class="card">
                    <div class="card-header">
                        <h4>Recent Sales</h4>
                        <Dropdown :options="orderWeek" v-model="selectedOrderWeek" optionLabel="name" @change="recentSales($event)" class="dashbard-demo-dropdown"></Dropdown>
                    </div>

                    <p>Your sales activity over time.</p>

                    <DataTable :value="products" :paginator="true" :rows="5" responsiveLayout="scroll">
                        <Column field="id" header="ID" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Id</span>
                                {{slotProps.data.id}}
                            </template>
                        </Column>
                        <Column field="category" header="Category" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Category</span>
                                {{slotProps.data.category}}
                            </template>
                        </Column>
                        <Column field="price" header="Price" :sortable="true">
                            <template #body="slotProps">
                                <span class="p-column-title">Price</span>
                                {{ formatCurrency(slotProps.data.price) }}
                            </template>
                        </Column>
                        <Column field="inventoryStatus" header="Status" :sortable="true">
                            <template #body="slotProps">
                                <span :class="'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">{{ slotProps.data.inventoryStatus }}</span>
                            </template>
                        </Column>
                        <Column bodyStyle="text-align: center">
                            <template #body> <Button type="button" icon="pi pi-search"></Button></template
                        ></Column>
                    </DataTable>
                </div>
            </div>

            <div class="p-col-12 p-lg-4">
                <div class="card widget-tasks">
                    <h4>Tasks</h4>
                    <p>Overview of your pending tasks.</p>
                    <div>
                        <div class="task task-1">
                            <div class="task-name"><span>12 Orders</span> to fulfill</div>
                            <div class="task-progress">
                                <div></div>
                            </div>
                        </div>
                        <div class="task task-2">
                            <div class="task-name"><span>40+ Payments</span> to withdraw</div>
                            <div class="task-progress">
                                <div></div>
                            </div>
                        </div>
                        <div class="task task-3">
                            <div class="task-name"><span>4 Reports</span> to revise</div>
                            <div class="task-progress">
                                <div></div>
                            </div>
                        </div>
                        <div class="task task-4">
                            <div class="task-name"><span>6 Questions</span> to respond</div>
                            <div class="task-progress">
                                <div></div>
                            </div>
                        </div>
                        <div class="task task-5">
                            <div class="task-name"><span>2 Chargebacks</span> to review</div>
                            <div class="task-progress">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <h4>Best Sellers</h4>
                    <p>Most popular products from your collection.</p>

                    <ul class="widget-image-list">
                        <li>
                            <span>Product</span>
                            <span>Sales</span>
                        </li>
                        <li>
                            <span>
                                <img src="assets/demo/images/product/bamboo-watch.jpg" alt="diamond-layout" />
                                <span>Bamboo Watch</span>
                            </span>
                            <span class="listitem-value">82</span>
                        </li>
                        <li>
                            <span>
                                <img src="assets/demo/images/product/blue-band.jpg" alt="diamond-layout" />
                                <span>Blue Band</span>
                            </span>
                            <span class="listitem-value">75</span>
                        </li>
                        <li>
                            <span>
                                <img src="assets/demo/images/product/game-controller.jpg" alt="diamond-layout" />
                                <span>Game Controller</span>
                            </span>
                            <span class="listitem-value">64</span>
                        </li>
                        <li>
                            <span>
                                <img src="assets/demo/images/product/lime-band.jpg" alt="diamond-layout" />
                                <span>Lime Band</span>
                            </span>
                            <span class="listitem-value">62</span>
                        </li>
                        <li>
                            <span>
                                <img src="assets/demo/images/product/gold-phone-case.jpg" alt="diamond-layout" />
                                <span>Phone Case</span>
                            </span>
                            <span class="listitem-value">55</span>
                        </li>
                        <li>
                            <span>
                                <img src="assets/demo/images/product/green-t-shirt.jpg" alt="diamond-layout" />
                                <span>Green T-Shirt</span>
                            </span>
                            <span class="listitem-value">48</span>
                        </li>
                        <li>
                            <span>
                                <img src="assets/demo/images/product/purple-t-shirt.jpg" alt="diamond-layout" />
                                <span>Purple T-Shirt</span>
                            </span>
                            <span class="listitem-value">32</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="p-col-12 p-lg-8">
                <div class="card revenue">
                    <h4>Revenue Stream</h4>
                    <p>Comparison of your revenue sources.</p>
                    <div class="revenue-chart-container">
                        <Chart type="pie" id="revenue-chart" :data="revenueChart"></Chart>
                    </div>
                </div>

                <div class="card">
                    <h4>Team Members</h4>
                    <ul class="widget-person-list">
                        <li>
                            <div class="person-item">
                                <img src="assets/demo/images/avatar/amyelsner.png" alt="diamond-layout" />
                                <div class="person-info">
                                    <div class="person-name">Amy Elsner</div>
                                    <div class="person-subtext">Accounting</div>
                                </div>
                            </div>
                            <div class="person-actions">
                                <Button class="p-button-rounded p-button-success" icon="pi pi-envelope"></Button>
                                <Button class="p-button-rounded p-button-warning" icon="pi pi-cog"></Button>
                            </div>
                        </li>
                        <li>
                            <div class="person-item">
                                <img src="assets/demo/images/avatar/annafali.png" alt="diamond-layout" />
                                <div class="person-info">
                                    <div class="person-name">Anna Fali</div>
                                    <div class="person-subtext">Procurement</div>
                                </div>
                            </div>
                            <div class="person-actions">
                                <Button class="p-button-rounded p-button-success" icon="pi pi-envelope"></Button>
                                <Button class="p-button-rounded p-button-warning" icon="pi pi-cog"></Button>
                            </div>
                        </li>
                        <li>
                            <div class="person-item">
                                <img src="assets/demo/images/avatar/bernardodominic.png" alt="diamond-layout" />
                                <div class="person-info">
                                    <div class="person-name">Bernardo Dominic</div>
                                    <div class="person-subtext">Finance</div>
                                </div>
                            </div>
                            <div class="person-actions">
                                <Button class="p-button-rounded p-button-success" icon="pi pi-envelope"></Button>
                                <Button class="p-button-rounded p-button-warning" icon="pi pi-cog"></Button>
                            </div>
                        </li>
                        <li>
                            <div class="person-item">
                                <img src="assets/demo/images/avatar/ivanmagalhaes.png" alt="diamond-layout" />
                                <div class="person-info">
                                    <div class="person-name">Ivan Magalhaes</div>
                                    <div class="person-subtext">Sales</div>
                                </div>
                            </div>
                            <div class="person-actions">
                                <Button class="p-button-rounded p-button-success" icon="pi pi-envelope"></Button>
                                <Button class="p-button-rounded p-button-warning" icon="pi pi-cog"></Button>
                            </div>
                        </li>
                        <li>
                            <div class="person-item">
                                <img src="assets/demo/images/avatar/xuxuefeng.png" alt="diamond-layout" />
                                <div class="person-info">
                                    <div class="person-name">Xuxue Feng</div>
                                    <div class="person-subtext">Management</div>
                                </div>
                            </div>
                            <div class="person-actions">
                                <Button class="p-button-rounded p-button-success" icon="pi pi-envelope"></Button>
                                <Button class="p-button-rounded p-button-warning" icon="pi pi-cog"></Button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductService from '../service/ProductService';
export default {
    data() {
        return {
            selectedOrderWeek: null,
            products: null,
            productsThisWeek: null,
            productsLastWeek: null,
            productService: null,
            cols: [
                { field: 'vin', header: 'Vin' },
                { field: 'year', header: 'Year' },
                { field: 'brand', header: 'Brand' },
                { field: 'color', header: 'Color' },
            ],

            items: [
                {
                    label: 'Shipments',
                    items: [
                        { label: 'Tracker', icon: 'pi pi-compass' },
                        { label: 'Map', icon: 'pi pi-map-marker' },
                        { label: 'Manage', icon: 'pi pi-pencil' },
                    ],
                },
            ],

            ordersChart: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'New',
                        data: [2, 7, 20, 9, 16, 9, 5],
                        backgroundColor: ['rgba(100, 181, 246, 0.2)'],
                        borderColor: ['#64B5F6'],
                        borderWidth: 3,
                        fill: true,
                    },
                ],
            },

            ordersChartOptions: {
                legend: {
                    display: true,
                },
                responsive: true,
                hover: {
                    mode: 'index',
                },
                scales: {
                    yAxes: [
                        {
                            ticks: { min: 0, max: 20},
                        },
                    ],
                },
            },

            orderWeek: [
                { name: 'This Week', code: '0' },
                { name: 'Last Week', code: '1' },
            ],

            revenueChart: {
                labels: ['Direct', 'Promoted', 'Affiliate'],
                datasets: [
                    {
                        data: [40, 35, 25],
                        backgroundColor: ['#64B5F6', '#7986CB', '#4DB6AC'],
                    },
                ],
            }
        };
    },
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProducts().then((data) => (this.products = data));
        this.productService.getProducts().then((data) => (this.productsThisWeek = data));
        this.productService.getProductsMixed().then((data) => (this.productsLastWeek = data));

        this.selectedOrderWeek = this.orderWeek[0];
    },
    methods: {
        changeDataset(event) {
            const dataSet = [
                [2, 7, 20, 9, 16, 9, 5],
                [2, 4, 9, 20, 16, 12, 20],
                [2, 17, 7, 15, 4, 20, 8],
                [2, 2, 20, 4, 17, 16, 20],
            ];

            this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
            this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
            this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
            this.ordersChart.datasets[0].backgroundColor = event.currentTarget.getAttribute('data-fill');
        },

        recentSales($event) {
            if ($event.value.code === '0') {
                this.products = this.productsThisWeek;
            } else {
                this.products = this.productsLastWeek;
            }
        },

        shuffle() {
            for (let i = this.products.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.products[i], this.products[j]] = [this.products[j], this.products[i]];
            }
            return this.products;
        },

        menuToggle($event) {
            this.$refs.menu.toggle($event);
        },

        refreshDataset($event) {
            this.$refs.chart.refresh($event);
        },

        formatCurrency(value) {
            return value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
            });
        },
    },
};
</script>


<style lang="scss" scoped>
.layout-dashboard {
    .orders {
        h4 {
            margin-bottom: 20px;
        }

        .p-button {
            margin-top: -20px;
        }

        .order-tabs {
            margin-bottom: 1rem;

            .order-tab {
                padding: 1rem 2rem 2rem 1rem;
                position: relative;
                transition: box-shadow 0.2s;

                &:hover {
                    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.15);
                    cursor: pointer;
                }

                i {
                    font-size: 1rem;
                    vertical-align: middle;
                }

                .order-label {
                    margin-left: 0.25rem;
                    vertical-align: middle;
                }

                .stat-detail-icon {
                    position: absolute;
                    right: 1rem;
                    top: 2.25rem;
                    height: 1rem;
                    width: 1rem;
                }

                img {
                    position: absolute;
                    bottom: 0;
                    left: 5%;
                    width: 90%;
                }
            }
        }
    }

    .overview-chart {
        overflow: auto;
    }

    .dashbard-demo-dropdown {
        min-width: 8rem;
        margin-left: auto;
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
}
</style>