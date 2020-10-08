<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h5>Shadow</h5>
				<p>
					Elevation is an add-on utility of
					<a href="https://github.com/primefaces/primeflex"
						>PrimeFlex</a
					>
					and used to specify the separation between surfaces and
					elements along the z-axis.
				</p>

				<div class="p-grid">
					<div v-for="i in 24" :key="i" :class="'box p-shadow-' + i">
						p-shadow-{{ i }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Elevation",
};
</script>

<style lang="scss" scoped>
.box {
	min-height: 100px;
	min-width: 150px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	margin: 2rem;
	border-radius: 4px;
}
</style>