<template>
	<div class="p-grid table-demo">
		<Toast></Toast>
		<div class="p-col-12">
			<div class="card">
				<h4>Default</h4>
				<p>Pagination, sorting, filtering and checkbox selection.</p>

				<DataTable
					ref="dt"
					:value="customer1"
					:selection.sync="selectedCustomers1"
					dataKey="id"
					class="p-datatable-customers"
					:rowHover="true"
					:rows="10"
					:paginator="true"
					:filterDelay="0"
					:filters="filters1"
				>
					<template #header>
						<div class="table-header">
							Customers
							<span class="p-input-icon-left">
								<i class="pi pi-search"></i>
								<InputText
									type="text"
									v-model="filters1['global']"
									placeholder="Global Search"
								/>
							</span>
						</div>
					</template>

					<template #empty>No customers found.</template>

					<Column
						selectionMode="multiple"
						headerStyle="width:3rem"
					></Column>

					<Column field="name" header="Name" sortable> </Column>

					<Column
						field="country.name"
						header="Country"
						sortable
						sortField="country.name"
					>
						<template #body="slotProps">
							<img
								src="assets/demo/flags/flag_placeholder.png"
								:class="
									'flag flag-' + slotProps.data.country.code
								"
								width="30"
							/>
							<span
								class="image-text"
								style="
									margin-left: 0.5em;
									vertical-align: middle;
								"
								>{{ slotProps.data.country.name }}</span
							>
						</template>
					</Column>

					<Column
						field="representative.name"
						header="Representative"
						sortable
						sortField="representative.name"
					>
						<template #body="slotProps">
							<img
								:alt="slotProps.data.representative.name"
								:src="
									'assets/demo/images/avatar/' +
									slotProps.data.representative.image
								"
								width="32"
								style="vertical-align: middle"
							/>
							<span
								class="image-text"
								style="
									margin-left: 0.5em;
									vertical-align: middle;
								"
								>{{ slotProps.data.representative.name }}</span
							></template
						>
					</Column>

					<Column field="date" header="Date" sortable></Column>

					<Column field="status" header="Status" sortable>
						<template #body="slotProps">
							<span
								:class="
									'customer-badge status-' +
									slotProps.data.status
								"
								>{{ slotProps.data.status }}</span
							>
						</template>
					</Column>

					<Column field="activity" header="Activity" sortable>
						<template #body="slotProps">
							<ProgressBar
								:value="slotProps.data.activity"
								:showValue="false"
							></ProgressBar>
						</template>
					</Column>

					<Column headerStyle="width:8rem">
						<template #body>
							<Button
								type="button"
								class="p-button-secondary"
								icon="pi pi-cog"
							></Button>
						</template>
					</Column>
				</DataTable>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h4>Customized</h4>
				<p>
					Scrollable table with gridlines
					(<mark>.p-datatable-gridlines</mark>), striped rows
					(<mark>.p-datatable-striped</mark>) and smaller paddings
					(<mark>p-datatable-sm</mark>).
				</p>

				<DataTable
					ref="dtc"
					:value="customer2"
					:selection="selectedCustomers2"
					dataKey="id"
					selectionMode="single"
					class="p-datatable-customers p-datatable-gridlines p-datatable-striped p-datatable-sm"
					:filterDelay="0"
					:filters="filters2"
					:globalFilterFields="[
						'name',
						'country.name',
						'representative.name',
						'status',
					]"
					:paginator="true"
					:rows="10"
				>
					<template #header>
						<div class="table-header">
							Customers
							<span class="p-input-icon-left">
								<i class="pi pi-search"></i>
								<InputText
									type="text"
									v-model="filters2['global']"
									placeholder="Global Search"
								/>
							</span>
						</div>
					</template>

					<template #empty>No customers found.</template>

					<Column field="name" header="Name" sortable></Column>

					<Column field="country.name" header="Country" sortable>
						<template #body="slotProps">
							<span class="p-column-title">Representative</span>
							<img
								src="assets/demo/flags/flag_placeholder.png"
								:class="
									'flag flag-' + slotProps.data.country.code
								"
								width="30"
							/>
							<span
								class="image-text"
								style="
									margin-left: 0.5em;
									vertical-align: middle;
								"
								>{{ slotProps.data.country.name }}</span
							>
						</template>
					</Column>

					<Column
						field="representative.name"
						header="Representative"
						sortable
					>
						<template #body="slotProps">
							<span class="p-column-title">Representative</span>
							<img
								:alt="slotProps.data.representative.name"
								:src="
									'assets/demo/images/avatar/' +
									slotProps.data.representative.image
								"
								width="32"
								style="vertical-align: middle"
							/>
							<span
								class="image-text"
								style="
									margin-left: 0.5em;
									vertical-align: middle;
								"
								>{{ slotProps.data.representative.name }}</span
							>
						</template>
					</Column>

					<Column field="date" header="Date" sortable></Column>

					<Column field="status" header="Status" sortable>
						<template #body="slotProps">
							<span
								:class="
									'customer-badge status-' +
									slotProps.data.status
								"
								>{{ slotProps.data.status }}</span
							>
						</template>
					</Column>

					<Column field="activity" header="Activity" sortable>
						<template #body="slotProps">
							<ProgressBar
								:value="slotProps.data.activity"
								:showValue="false"
							></ProgressBar>
						</template>
					</Column>
				</DataTable>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h4>Row Expand</h4>
				<DataTable
					:value="products"
					dataKey="name"
					:expandedRows.sync="expandedRows"
					@row-expand="onRowExpand"
					@row-collapse="onRowCollapse"
				>
					<template #header>
						<div class="table-header-container">
							<Button
								icon="pi pi-plus"
								label="Expand All"
								@click="expandAll"
								class="p-mr-2"
							/>
							<Button
								icon="pi pi-minus"
								label="Collapse All"
								@click="collapseAll"
							/>
						</div>
					</template>
					<Column :expander="true" headerStyle="width:3rem"></Column>

					<Column field="name" header="Name" sortable></Column>

					<Column header="Image">
						<template #body="slotProps">
							<img
								:src="
									'assets/demo/images/product/' +
									slotProps.data.image
								"
								:alt="slotProps.data.name"
								width="100"
								class="p-shadow-4"
							/>
						</template>
					</Column>

					<Column field="price" header="Price" sortable>
						<template #body="slotProps">
							{{ formatCurrency(slotProps.data.price) }}
						</template>
					</Column>

					<Column
						field="category"
						header="Category"
						sortable
					></Column>

					<Column
						field="rating"
						header="Reviews"
						sortable
					>
						<template #body="slotProps">
							<Rating
								:value="slotProps.data.rating"
								:readonly="true"
								:cancel="false"
							></Rating>
						</template>
					</Column>

					<Column field="inventoryStatus" header="Status" sortable>
						<template #body="slotProps">
							<span
								:class="
									'product-badge status-' +
									slotProps.data.inventoryStatus.toLowerCase()
								"
								>{{ slotProps.data.inventoryStatus }}</span
							>
						</template>
					</Column>

					<template #expansion="slotProps">
						<div class="p-p-3">
							<DataTable
								:value="slotProps.data.orders"
								dataKey="id"
							>
								<Column
									field="id"
									header="Id"
									sortable
								></Column>
								<Column
									field="customer"
									header="Customer"
									sortable
								></Column>
								<Column
									field="date"
									header="Date"
									sortable
								></Column>
								<Column field="amount" header="Amount" sortable>
									<template #body="slotProps">
										{{
											formatCurrency(
												slotProps.data.amount
											)
										}}
									</template>
								</Column>
								<Column field="status" header="Status" sortable>
									<template #body="slotProps">
										<span
											:class="
												'order-badge order-' +
												slotProps.data.status.toLowerCase()
											"
											>{{ slotProps.data.status }}</span
										>
									</template>
								</Column>

								<Column headerStyle="width:4rem">
									<template #body>
										<Button icon="pi pi-search"></Button>
									</template>
								</Column>

								<template #empty
									>There are no order for this product
									yet.</template
								>
							</DataTable>
						</div>
					</template>
				</DataTable>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h4>Row Group</h4>
				<DataTable
					:value="customer3"
					rowGroupMode="subheader"
					groupRowsBy="representative.name"
					sortMode="single"
					sortField="representative.name"
					:sortOrder="1"
				>
					<Column
						field="representative.name"
						header="Representative"
					></Column>
					<Column field="name" header="Name"></Column>
					<Column field="country" header="Country">
						<template #body="slotProps">
							<img
								src="assets/demo/flags/flag_placeholder.png"
								:class="
									'flag flag-' + slotProps.data.country.code
								"
								width="30"
							/>
							<span
								style="
									margin-left: 0.5em;
									vertical-align: middle;
								"
								class="image-text"
								>{{ slotProps.data.country.name }}</span
							>
						</template>
					</Column>
					<Column field="company" header="Company"></Column>
					<Column field="status" header="Status">
						<template #body="slotProps">
							<span
								:class="
									'customer-badge status-' +
									slotProps.data.status
								"
								>{{ slotProps.data.status }}</span
							>
						</template>
					</Column>
					<Column field="date" header="Date"></Column>
					<template #groupheader="slotProps">
						<img
							:alt="slotProps.data.representative.name"
							:src="
								'assets/demo/images/avatar/' +
								slotProps.data.representative.image
							"
							width="32"
							style="vertical-align: middle"
						/>
						<span
							style="margin-left: 0.5em; vertical-align: middle"
							class="image-text p-text-bold p-ml-2"
							>{{ slotProps.data.representative.name }}</span
						>
					</template>
					<template #groupfooter="slotProps">
						<td colspan="4" style="text-align: right">
							Total Customers
						</td>
						<td>
							{{
								calculateCustomerTotal(
									slotProps.data.representative.name
								)
							}}
						</td>
					</template>
				</DataTable>
			</div>
		</div>
	</div>
</template>

<script>
import CustomerService from "../service/CustomerService";
import ProductService from "../service/ProductService";
export default {
	data() {
		return {
			customer1: [],
			customer2: [],
			customer3: [],
			selectedCustomers1: [],
			selectedCustomers2: [],
			products: [],
			expandedRows: [],
			rowGroupMetadata: null,
			filters1: {},
			filters2: {},
		};
	},
	methods: {
		updateRowGroupMetaData() {
			this.rowGroupMetadata = {};

			if (this.customer3) {
				for (let i = 0; i < this.customer3.length; i++) {
					const rowData = this.customer3[i];
					const representativeName = rowData.representative.name;

					if (i === 0) {
						this.rowGroupMetadata[representativeName] = {
							index: 0,
							size: 1,
						};
					} else {
						const previousRowData = this.customer3[i - 1];
						const previousRowGroup =
							previousRowData.representative.name;
						if (representativeName === previousRowGroup) {
							this.rowGroupMetadata[representativeName].size++;
						} else {
							this.rowGroupMetadata[representativeName] = {
								index: i,
								size: 1,
							};
						}
					}
				}
			}
		},
		onRowExpand(event) {
			this.$toast.add({
				severity: "info",
				summary: "Product Expanded",
				detail: event.data.name,
				life: 3000,
			});
		},
		onRowCollapse(event) {
			this.$toast.add({
				severity: "success",
				summary: "Product Collapsed",
				detail: event.data.name,
				life: 3000,
			});
		},
		expandAll() {
			this.expandedRows = this.products.filter((p) => p.id);
			this.$toast.add({
				severity: "success",
				summary: "All Rows Expanded",
				life: 3000,
			});
		},
		collapseAll() {
			this.expandedRows = null;
			this.$toast.add({
				severity: "success",
				summary: "All Rows Collapsed",
				life: 3000,
			});
		},
		formatCurrency(value) {
			return value.toLocaleString("en-US", {
				style: "currency",
				currency: "USD",
			});
		},
		calculateCustomerTotal(name) {
			let total = 0;
			if (this.customer3) {
				for (let customer of this.customer3) {
					if (customer.representative.name === name) {
						total++;
					}
				}
			}
			return total;
		},
	},
	created() {
		this.customerService = new CustomerService();
		this.productService = new ProductService();
	},
	mounted() {
		this.productService
			.getProductsWithOrdersSmall()
			.then((data) => (this.products = data));
		this.customerService
			.getCustomersMedium()
			.then((data) => (this.customer1 = data));
		this.customerService
			.getCustomersLarge()
			.then((data) => (this.customer2 = data));
		this.customerService
			.getCustomersMedium()
			.then((data) => (this.customer3 = data));
		this.loading1 = false;
		this.loading2 = false;
	},
};
</script>

<style lang="scss" scoped>
/deep/ .p-paginator {
	.p-paginator-current {
		margin-left: auto;
	}
}

.p-progressbar {
	height: 0.5rem;
	background-color: #d8dadc;

	.p-progressbar-value {
		background-color: #607d8b;
	}
}

.table-header {
	display: flex;
	justify-content: space-between;
}

.p-calendar .p-datepicker {
	min-width: 25rem;

	td {
		font-weight: 400;
	}
}

.p-datatable.p-datatable-customers {
	.p-datatable-header {
		padding: 1rem;
		text-align: left;
		font-size: 1.5rem;
	}

	.p-paginator {
		padding: 1rem;
	}

	.p-datatable-thead > tr > th {
		text-align: left;
	}

	.p-dropdown-label:not(.p-placeholder) {
		text-transform: uppercase;
	}
}

.p-datatable.p-datatable-customers:not(.p-datatable-gridlines) {
	.p-datatable-tbody > tr > td {
		cursor: auto;
	}
}

/* Responsive */
.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
	display: none;
}

.customer-badge {
	border-radius: 2px;
	padding: 0.25em 0.5rem;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 12px;
	letter-spacing: 0.3px;

	&.status-qualified {
		background: #c8e6c9;
		color: #256029;
	}

	&.status-unqualified {
		background: #ffcdd2;
		color: #c63737;
	}

	&.status-negotiation {
		background: #feedaf;
		color: #8a5340;
	}

	&.status-new {
		background: #b3e5fc;
		color: #23547b;
	}

	&.status-renewal {
		background: #eccfff;
		color: #694382;
	}

	&.status-proposal {
		background: #ffd8b2;
		color: #805b36;
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

.order-badge {
	border-radius: 2px;
	padding: 0.25em 0.5rem;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 12px;
	letter-spacing: 0.3px;

	&.order-delivered {
		background: #c8e6c9;
		color: #256029;
	}

	&.order-cancelled {
		background: #ffcdd2;
		color: #c63737;
	}

	&.order-pending {
		background: #feedaf;
		color: #8a5340;
	}

	&.order-returned {
		background: #eccfff;
		color: #694382;
	}
}

@media screen and (max-width: 960px) {
	/deep/ .p-datatable {
		&.p-datatable-customers {
			.p-datatable-thead > tr > th,
			.p-datatable-tfoot > tr > td {
				display: none !important;
			}

			.p-datatable-tbody > tr {
				border-bottom: 1px solid var(--layer-2);

				> td {
					text-align: left;
					display: block;
					border: 0 none !important;
					width: 100% !important;
					float: left;
					clear: left;
					border: 0 none;

					.p-column-title {
						padding: 0.4rem;
						min-width: 30%;
						display: inline-block;
						margin: -0.4rem 1rem -0.4rem -0.4rem;
						font-weight: bold;
					}

					.p-progressbar {
						margin-top: 0.5rem;
					}
				}
			}
		}
	}
}
</style>