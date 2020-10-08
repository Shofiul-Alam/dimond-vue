<template>
	<div class="card icons-demo">
		<h3>Icons</h3>

		<h5>Getting Started</h5>
		<p>
			PrimeIcons use the
			<strong>pi pi-&#123;icon&#125;</strong> syntax such as
			<strong>pi pi-check</strong>. A standalone icon can be displayed
			using an element such as <i>i</i> or <i>span</i>
		</p>

		<app-code lang="markup">
			&lt;i class="pi pi-check"&gt;&lt;/i&gt; &lt;i class="pi
			pi-times"&gt;&lt;/i&gt;
		</app-code>

		<i class="pi pi-check"></i>
		<i class="pi pi-times"></i>

		<h5>Size</h5>
		<p>Size of the icons can easily be changed using font-size property.</p>

		<app-code lang="markup">
			&lt;i class="pi pi-check"&gt;&lt;/i&gt;
		</app-code>

		<i class="pi pi-check"></i>

		<app-code lang="markup">
			&lt;i class="pi pi-check" style="font-size: 2rem"&gt;&lt;/i&gt;
		</app-code>

		<i class="pi pi-check" style="font-size: 2rem"></i>

		<h5>Spinning Animation</h5>
		<p>Special pi-spin class applies infinite rotate to an icon.</p>

		<app-code lang="markup">
			&lt;i class="pi pi-spin pi-spinner" style="font-size:
			2rem"&gt;&lt;/i&gt;
		</app-code>

		<i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>

		<h5>List of Icons</h5>
		<p>
			Here is the current list of PrimeIcons, more icons will be added
			periodically. You may also
			<a href="https://github.com/primefaces/primeicons/issues"
				>request new icons</a
			>
			at the issue tracker.
		</p>
		<div>
			<InputText
				class="icon-filter"
				@input="onFilter($event)"
				placeholder="Search an icon"
			/>
		</div>

		<div class="p-grid icons-list">
			<div
				class="p-col-12 p-md-2"
				v-for="icon of filteredIcons"
				:key="icon.properties"
			>
				<i :class="`pi pi-${icon.properties.name}`"></i>
				<div>pi-{{ icon.properties.name }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import IconService from "../service/IconService";
import AppCode from "../AppCode";
export default {
	name: "Icons",
	components: {
		AppCode,
	},
	data() {
		return {
			icons: null,
			filteredIcons: null,
			selectedIcon: "",
		};
	},
	created() {
		this.iconService = new IconService();
	},
	mounted() {
		this.iconService.getIcons().then((iconList) => {
			let allIcons = iconList.icons;
			console.log(allIcons);
			allIcons.sort((icon1, icon2) => {
				if (icon1.properties.name < icon2.properties.name) {
					return -1;
				} else if (icon1.properties.name < icon2.properties.name) {
					return 1;
				} else {
					return 0;
				}
			});
			this.icons = allIcons;
			this.filteredIcons = allIcons;
		});
	},
	methods: {
		onFilter(event) {
			const searchText = event.target.value;

			if (!searchText) {
				this.filteredIcons = this.icons;
			} else {
				this.filteredIcons = this.icons.filter((it) => {
					return it.icon.tags[0].includes(searchText);
				});
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.icon-filter {
	width: 100%;
	padding: 1rem;
	margin: 1rem 0 1.5rem 0;
}

.icons-list {
	text-align: center;

	i {
		font-size: 1.5rem;
		color: var(--text-color-secondary);
		margin-bottom: 0.5rem;
	}

	.p-md-2 {
		padding-bottom: 2rem;
	}
}
</style>