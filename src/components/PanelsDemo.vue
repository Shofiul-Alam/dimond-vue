<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h5>Toolbar</h5>
				<Toolbar>
					<template slot="left">
						<Button
							type="button"
							label="New"
							icon="pi pi-plus"
						></Button>
						<Button
							type="button"
							label="Update"
							class="p-button-secondary"
							icon="pi pi-refresh"
						></Button>

						<i class="pi pi-bars p-toolbar-separator"></i>

						<Button
							type="button"
							class="p-button-success"
							icon="pi pi-check"
						></Button>
						<Button
							type="button"
							class="p-button-help"
							icon="pi pi-print"
						></Button>
						<Button
							type="button"
							class="p-button-danger"
							icon="pi pi-trash"
						></Button>
					</template>

					<template slot="right">
						<SplitButton
							label="Save"
							icon="pi pi-check"
							:model="items"
						></SplitButton>
					</template>
				</Toolbar>
			</div>
		</div>

		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>AccordionPanel</h5>
				<Accordion>
					<AccordionTab header="Header I" :active="true">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</AccordionTab>
					<AccordionTab header="Header II">
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae ab illo inventore veritatis et
						quasi architecto beatae vitae dicta sunt explicabo. Nemo
						enim ipsam voluptatem quia voluptas sit aspernatur aut
						odit aut fugit, sed quia consequuntur magni dolores eos
						qui ratione voluptatem sequi nesciunt. Consectetur,
						adipisci velit, sed quia non numquam eius modi.
					</AccordionTab>
					<AccordionTab header="Header III">
						At vero eos et accusamus et iusto odio dignissimos
						ducimus qui blanditiis praesentium voluptatum deleniti
						atque corrupti quos dolores et quas molestias excepturi
						sint occaecati cupiditate non provident, similique sunt
						in culpa qui officia deserunt mollitia animi, id est
						laborum et dolorum fuga. Et harum quidem rerum facilis
						est et expedita distinctio. Nam libero tempore, cum
						soluta nobis est eligendi optio cumque nihil impedit quo
						minus.
					</AccordionTab>
				</Accordion>
			</div>

			<div class="card">
				<h5>TabView</h5>
				<TabView class="tabview-custom">
					<TabPanel>
						<template slot="header">
							<i class="pi pi-fw pi-check"></i>
							<span>Header I</span>
						</template>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore
							eu fugiat nulla pariatur. Excepteur sint occaecat
							cupidatat non proident, sunt in culpa qui officia
							deserunt mollit anim id est laborum.
						</p>
					</TabPanel>
					<TabPanel>
						<template slot="header">
							<i class="pi pi-fw pi-user"></i>
							<span>Header II</span>
						</template>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit
							voluptatem accusantium doloremque laudantium, totam
							rem aperiam, eaque ipsa quae ab illo inventore
							veritatis et quasi architecto beatae vitae dicta
							sunt explicabo. Nemo enim ipsam voluptatem quia
							voluptas sit aspernatur aut odit aut fugit, sed quia
							consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt. Consectetur, adipisci
							velit, sed quia non numquam eius modi.
						</p>
					</TabPanel>
					<TabPanel>
						<template slot="header">
							<i class="pi pi-fw pi-mobile"></i>
							<span>Header III</span>
						</template>
						<p>
							At vero eos et accusamus et iusto odio dignissimos
							ducimus qui blanditiis praesentium voluptatum
							deleniti atque corrupti quos dolores et quas
							molestias excepturi sint occaecati cupiditate non
							provident, similique sunt in culpa qui officia
							deserunt mollitia animi, id est laborum et dolorum
							fuga. Et harum quidem rerum facilis est et expedita
							distinctio. Nam libero tempore, cum soluta nobis est
							eligendi optio cumque nihil impedit quo minus.
						</p>
					</TabPanel>
				</TabView>
			</div>
		</div>

		<div class="p-col-12 p-md-6">
			<div class="card">
				<h5>Panel</h5>
				<Panel header="Header" :toggleable="true">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</Panel>
			</div>

			<div class="card">
				<h5>Fieldset</h5>
				<Fieldset legend="Toggleable" :toggleable="true">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</Fieldset>
			</div>

			<div class="card">
				<div class="card-header">
					<h5>Card</h5>
					<Menu
						ref="menu"
						id="menu"
						:popup="true"
						:model="cardMenu"
					></Menu>
					<Button
						type="button"
						icon="pi pi-plus"
						class="p-button-rounded p-button-plain p-button-text"
						@click="toggleMenu($event)"
						aria-haspopup="true"
						aria-controls="menu"
					></Button>
				</div>

				<p class="card-subtitle">Subtitle</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					label: "Vue.js",
					icon: "pi pi-external-link",
					url: "https://vuejs.org/",
				},
				{
					label: "Theming",
					icon: "pi pi-bookmark",
					routerLink: ["/theming"],
				},
			],

			cardMenu: [
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
.tabview-custom {
	i,
	span {
		vertical-align: middle;
	}

	span {
		margin: 0 0.5rem;
	}
}
button {
	margin-right: 0.25em;
	margin-left: 0.25em;
}
.p-splitbutton button {
	margin-right: 0;
	margin-left: 0;
}

p {
	line-height: 1.5;
	margin: 0;
}
/deep/ .p-card .p-card-title {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	-ms-flex-pack: justify;
	justify-content: space-between;
	margin-bottom: 0;
}
</style>