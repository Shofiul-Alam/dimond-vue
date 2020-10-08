<template>
	<div class="p-grid p-fluid">
		<div class="p-col-12">
			<div class="card">
				<h5>MenuBar</h5>
				<Menubar :model="tieredItems">
					<template #end>
						<span class="p-input-icon-right">
							<InputText type="text" placeholder="Search" />
							<i class="pi pi-search"></i>
						</span>
					</template>
				</Menubar>
			</div>
		</div>

		<div class="p-col-12">
			<div class="card">
				<h5>Breadcrumb</h5>
				<Breadcrumb
					:model="breadcrumbItems"
					:home="{ icon: 'pi pi-home' }"
				></Breadcrumb>
			</div>
		</div>

		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>Steps</h5>
				<Steps :model="stepsItems"></Steps>
				<router-view></router-view>
			</div>
		</div>

		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>TabMenu</h5>
				<TabMenu :model="tabMenuItems"></TabMenu>
				<router-view></router-view>
			</div>
		</div>

		<div class="p-col-12 p-md-4">
			<div class="card">
				<h5>TieredMenu</h5>
				<TieredMenu
					:model="tieredItems"
					:style="{ width: '100%', 'margin-bottom': '20px' }"
				></TieredMenu>
			</div>

			<div class="card">
				<h5>MenuButton</h5>
				<Menu
					id="menubutton"
					ref="menu"
					:popup="true"
					:model="menuItems"
					:style="{ width: '250px' }"
				></Menu>
				<Button
					type="button"
					icon="pi pi-chevron-down"
					label="Options"
					@click="toggleMenu($event)"
					style="width: auto"
					aria-controls="menubutton"
				></Button>
			</div>
		</div>

		<div class="p-col-12 p-md-4">
			<div class="card">
				<h5>Plain Menu</h5>
				<Menu :model="items" style="{'width':'100%'}"></Menu>
			</div>
		</div>

		<div class="p-col-12 p-md-4">
			<div class="card">
				<h5>ContextMenu</h5>
				Right click to display.

				<ContextMenu :global="true" :model="menuItems"></ContextMenu>
			</div>
		</div>

		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>MegaMenu - Horizontal</h5>
				<MegaMenu :model="megaMenuItems"></MegaMenu>

				<h5>MegaMenu - Vertical</h5>
				<MegaMenu
					:model="megaMenuItems"
					orientation="vertical"
					:style="{ width: '200px' }"
				></MegaMenu>
			</div>
		</div>

		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>PanelMenu</h5>
				<PanelMenu :model="panelMenuItems"></PanelMenu>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MenusDemo",
	data() {
		return {
			tieredItems: [
				{
					label: "Customers",
					icon: "pi pi-fw pi-table",
					items: [
						{
							label: "New",
							icon: "pi pi-fw pi-plus",
							items: [
								{
									label: "Customer",
									icon: "pi pi-fw pi-plus",
								},
								{
									label: "Duplicate",
									icon: "pi pi-fw pi-copy",
								},
							],
						},
						{
							label: "Edit",
							icon: "pi pi-fw pi-user-edit",
						},
					],
				},
				{
					label: "Orders",
					icon: "pi pi-fw pi-shopping-cart",
					items: [
						{
							label: "View",
							icon: "pi pi-fw pi-list",
						},
						{
							label: "Search",
							icon: "pi pi-fw pi-search",
						},
					],
				},
				{
					label: "Shipments",
					icon: "pi pi-fw pi-envelope",
					items: [
						{
							label: "Tracker",
							icon: "pi pi-fw pi-compass",
						},
						{
							label: "Map",
							icon: "pi pi-fw pi-map-marker",
						},
						{
							label: "Manage",
							icon: "pi pi-fw pi-pencil",
						},
					],
				},
				{
					label: "Profile",
					icon: "pi pi-fw pi-user",
					items: [
						{
							label: "Settings",
							icon: "pi pi-fw pi-cog",
						},
						{
							label: "Billing",
							icon: "pi pi-fw pi-file",
						},
					],
				},
				{ separator: true },
				{
					label: "Quit",
					icon: "pi pi-fw pi-sign-out",
				},
			],

			items: [
				{
					label: "Customers",
					items: [
						{
							label: "New",
							icon: "pi pi-fw pi-plus",
						},
						{
							label: "Edit",
							icon: "pi pi-fw pi-user-edit",
						},
					],
				},
				{
					label: "Orders",
					items: [
						{
							label: "View",
							icon: "pi pi-fw pi-list",
						},
						{
							label: "Search",
							icon: "pi pi-fw pi-search",
						},
					],
				},
				{
					label: "Shipments",
					items: [
						{
							label: "Tracker",
							icon: "pi pi-fw pi-compass",
						},
						{
							label: "Map",
							icon: "pi pi-fw pi-map-marker",
						},
						{
							label: "Manage",
							icon: "pi pi-fw pi-pencil",
						},
					],
				},
			],

			menuItems: [
				{
					label: "Save",
					icon: "pi pi-fw pi-check",
				},
				{
					label: "Update",
					icon: "pi pi-fw pi-refresh",
				},
				{
					label: "Delete",
					icon: "pi pi-fw pi-trash",
				},
				{
					separator: true,
				},
				{
					label: "Quit",
					icon: "pi pi-fw pi-sign-out",
				},
			],

			breadcrumbItems: [
				{ label: "Computer" },
				{ label: "Notebook" },
				{ label: "Accessories" },
				{ label: "Backpacks" },
				{ label: "Item" },
			],

			tabMenuItems: [
				{ label: "Overview", icon: "pi pi-fw pi-home" },
				{ label: "Members", icon: "pi pi-fw pi-users" },
				{ label: "Sales", icon: "pi pi-fw pi-shopping-cart" },
				{ label: "Profile", icon: "pi pi-fw pi-user" },
				{ label: "Settings", icon: "pi pi-fw pi-cog" },
			],

			megaMenuItems: [
				{
					label: "Fashion",
					icon: "pi pi-fw pi-tag",
					items: [
						[
							{
								label: "Women",
								items: [
									{ label: "Women Item" },
									{ label: "Women Item" },
									{ label: "Women Item" },
								],
							},
							{
								label: "Men",
								items: [
									{ label: "Men Item" },
									{ label: "Men Item" },
									{ label: "Men Item" },
								],
							},
						],
						[
							{
								label: "Kids",
								items: [
									{ label: "Kids Item" },
									{ label: "Kids Item" },
								],
							},
							{
								label: "Luggage",
								items: [
									{ label: "Luggage Item" },
									{ label: "Luggage Item" },
									{ label: "Luggage Item" },
								],
							},
						],
					],
				},
				{
					label: "Electronics",
					icon: "pi pi-fw pi-desktop",
					items: [
						[
							{
								label: "Computer",
								items: [
									{ label: "Computer Item" },
									{ label: "Computer Item" },
								],
							},
							{
								label: "Camcorder",
								items: [
									{ label: "Camcorder Item" },
									{ label: "Camcorder Item" },
									{ label: "Camcorder Item" },
								],
							},
						],
						[
							{
								label: "TV",
								items: [
									{ label: "TV Item" },
									{ label: "TV Item" },
								],
							},
							{
								label: "Audio",
								items: [
									{ label: "Audio Item" },
									{ label: "Audio Item" },
									{ label: "Audio Item" },
								],
							},
						],
						[
							{
								label: "Sports.7",
								items: [
									{ label: "Sports.7.1" },
									{ label: "Sports.7.2" },
								],
							},
						],
					],
				},
				{
					label: "Furniture",
					icon: "pi pi-fw pi-image",
					items: [
						[
							{
								label: "Living Room",
								items: [
									{ label: "Living Room Item" },
									{ label: "Living Room Item" },
								],
							},
							{
								label: "Kitchen",
								items: [
									{ label: "Kitchen Item" },
									{ label: "Kitchen Item" },
									{ label: "Kitchen Item" },
								],
							},
						],
						[
							{
								label: "Bedroom",
								items: [
									{ label: "Bedroom Item" },
									{ label: "Bedroom Item" },
								],
							},
							{
								label: "Outdoor",
								items: [
									{ label: "Outdoor Item" },
									{ label: "Outdoor Item" },
									{ label: "Outdoor Item" },
								],
							},
						],
					],
				},
				{
					label: "Sports",
					icon: "pi pi-fw pi-star-o",
					items: [
						[
							{
								label: "Basketball",
								items: [
									{ label: "Basketball Item" },
									{ label: "Basketball Item" },
								],
							},
							{
								label: "Football",
								items: [
									{ label: "Football Item" },
									{ label: "Football Item" },
									{ label: "Football Item" },
								],
							},
						],
						[
							{
								label: "Tennis",
								items: [
									{ label: "Tennis Item" },
									{ label: "Tennis Item" },
								],
							},
						],
					],
				},
			],

			panelMenuItems: [
				{
					label: "Customers",
					items: [
						{
							label: "New",
							icon: "pi pi-fw pi-plus",
							items: [
								{
									label: "Customer",
									icon: "pi pi-fw pi-plus",
								},
								{
									label: "Duplicate",
									icon: "pi pi-fw pi-copy",
								},
							],
						},
						{
							label: "Edit",
							icon: "pi pi-fw pi-user-edit",
						},
					],
				},
				{
					label: "Orders",
					items: [
						{
							label: "View",
							icon: "pi pi-fw pi-list",
						},
						{
							label: "Search",
							icon: "pi pi-fw pi-search",
						},
					],
				},
				{
					label: "Shipments",
					items: [
						{
							label: "Tracker",
							icon: "pi pi-fw pi-compass",
						},
						{
							label: "Map",
							icon: "pi pi-fw pi-map-marker",
						},
						{
							label: "Manage",
							icon: "pi pi-fw pi-pencil",
						},
					],
				},
				{
					label: "Profile",
					items: [
						{
							label: "Settings",
							icon: "pi pi-fw pi-cog",
						},
						{
							label: "Billing",
							icon: "pi pi-fw pi-file",
						},
					],
				},
			],

			stepsItems: [
				{
					label: "Personal",
				},
				{
					label: "Seat",
				},
				{
					label: "Payment",
				},
				{
					label: "Confirmation",
				},
			],
		};
	},
	methods: {
		toggleMenu($event) {
			this.$refs.menu.toggle($event);
		},
	},
};
</script>

<style lang="scss" scoped>
.product-item {
	.product-item-content {
		border: 1px solid var(--surface-d);
		border-radius: 3px;
		margin: 0.3rem;
		text-align: center;
		padding: 2rem 0;
	}

	.product-image {
		width: 50%;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	}
}
</style>