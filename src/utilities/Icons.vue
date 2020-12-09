<template>
	<div class="card icons-demo">
		<h4>Icons</h4>
		<p>Diamond uses PrimeIcons v4.1, PrimeTek's new modern icon library.</p>

		<h5>Getting Started</h5>
		<p>PrimeIcons use the <strong>pi pi-{icon}</strong> syntax such as <strong>pi pi-check</strong>. A standalone icon can be displayed using an element like <i>i</i> or <i>span</i>.</p>
<pre v-code><code>
&lt;i class="pi pi-check"&gt;&lt;/i&gt;
&lt;i class="pi pi-times"&gt;&lt;/i&gt;

</code></pre>

		<i class="pi pi-check" style="margin-right: .5rem"></i>
		<i class="pi pi-times"></i>

		<h5>Component Icons</h5>
		<p>Components that have icon properties accept PrimeIcons with the <strong>pi pi-{icon}</strong> syntax.</p>
<pre v-code><code>
&lt;Button label="Confirm" icon="pi pi-check"&gt;&lt;/Button&gt;

</code></pre>

		<Button label="Confirm" icon="pi pi-check"></Button>

		<h5>Size</h5>
		<p>Size of the icons can easily be changed using font-size property.</p>

<pre v-code><code>
&lt;i class="pi pi-check"&gt;&lt;/i&gt;

</code></pre>

		<i class="pi pi-check"></i>

<pre v-code><code>
&lt;i class="pi pi-check" style="fontSize: 2rem"&gt;&lt;/i&gt;

</code></pre>

		<i class="pi pi-check" style="fontSize: 2rem"></i>

		<h5>Spinning Animation</h5>
		<p>Special pi-spin class applies continuous rotation to an icon.</p>
<pre v-code><code>
&lt;i class="pi pi-spin pi-spinner" style="fontSize: 2rem"&gt;&lt;/i&gt;

</code></pre>

		<i class="pi pi-spin pi-spinner" style="fontSize: 2rem"></i>

		<h5>List of Icons</h5>
		<p>Here is the current list of PrimeIcons, more icons are added periodically. You may also <a href="https://github.com/primefaces/primeicons/issues">request new icons</a> at the issue tracker.</p>
		<div>
			<InputText type="text" class="icon-filter" @input="onFilter($event)" placeholder="Search an icon" />
		</div>
		<div class="p-grid icons-list">
			<div class="p-col-12 p-md-2" v-for="icon of filteredIcons" :key="icon.properties.name">
				<i :class="'pi pi-' + icon.properties.name"></i>
				<div>pi-{{icon.properties.name}}</div>
			</div>
		</div>

	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			icons: null,
			filteredIcons: null
		}
	},
	mounted() {
		axios.get('assets/demo/data/icons.json').then(res => {
			let icons = res.data.icons;
			icons.sort((icon1, icon2) => {
				if(icon1.properties.name < icon2.properties.name)
					return -1;
				else if(icon1.properties.name < icon2.properties.name)
					return 1;
				else
					return 0;
			});
			this.icons = icons;
			this.filteredIcons = icons;
		});
	},
	methods: {
		onFilter(event) {
			if(!event.target.value) {
				this.filteredIcons = this.icons;
			}
			else {
				this.filteredIcons = this.icons.filter( it => {
					return it.icon.tags[0].includes(event.target.value);
				});
			}
		}
	}
}
</script>

<style scoped lang="scss">
.icon-filter {
	width: 100%;
	padding: 1rem;
	margin: 1rem 0 1.5rem 0;
}
.icons-list {
	text-align: center;
	color: var(--text-color);
	.p-md-2 {
		padding: 1em;
	}
}
.icons-list i {
	font-size: 1.5rem;
	margin-bottom: .5rem;
	color: var(--text-color-secondary);
}
::v-deep(pre[class*="language-"]) {
    &:before, &:after {
        display: none !important;
    }
    code {
        border-left: 10px solid var(--surface-d) !important;
        box-shadow: none !important;
        background: var(--surface-b) !important;
        margin: 1em 0;
        color: var(--text-color);
        font-size: 14px;
        .token {
            &.tag,
            &.keyword {
                color: #2196F3 !important;
            }
            &.attr-name,
            &.attr-string {
                color: #2196F3 !important;
            }
            &.attr-value {
                color: #4CAF50 !important;
            }
            &.punctuation {
                color: var(--text-color);
            }
            &.operator,
            &.string {
                background: transparent;
            }
        }
    }
}
</style>
