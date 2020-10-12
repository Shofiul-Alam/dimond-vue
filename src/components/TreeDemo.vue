<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h4>Tree</h4>
				<Tree
					:value="treeValue"
					selectionMode="checkbox"
					:selectionKeys.sync="selectedFiles1"
				></Tree>
			</div>
		</div>
		<div class="p-col-12">
			<div class="card">
				<h4>TreeTable</h4>
				<TreeTable
					:value="treeTableValue"
					selectionMode="checkbox"
					:selectionKeys.sync="selectedFiles2"
				>
					<Column
						field="name"
						header="Name"
						:expander="true"
					></Column>
					<Column field="size" header="Size"></Column>
					<Column field="type" header="Type"></Column>
				</TreeTable>
			</div>
		</div>
	</div>
</template>

<script>
import NodeService from "../service/NodeService";
export default {
	data() {
		return {
			treeValue: [],
			treeTableValue: null,
			selectedFiles1: [],
			selectedFiles2: [],
			cols: [
				{ field: "name", header: "Name" },
				{ field: "size", header: "Size" },
				{ field: "type", header: "Type" },
			],
		};
	},
	created() {
		this.nodeService = new NodeService();
	},
	mounted() {
		this.nodeService.getTreeNodes().then((data) => (this.treeValue = data));
		this.nodeService
			.getTreeTableNodes()
			.then((data) => (this.treeTableValue = data));
	},
};
</script>