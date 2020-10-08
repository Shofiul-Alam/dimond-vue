<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h4>Tree</h4>
				<Tree
					:value="files1"
					selectionMode="checkbox"
					:selectionKeys.sync="selectedFiles1"
				></Tree>
			</div>
		</div>
		<div class="p-col-12">
			<div class="card">
				<h4>TreeTable</h4>
				<TreeTable
					:value="files2"
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
	name: "TreeDemo",
	data() {
		return {
			files1: [],
			files2: [],
			files3: [],
			selectedFiles1: [],
			selectedFiles2: [],
			selectedFiles3: [],
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
		this.nodeService.getFiles().then((files) => (this.files1 = files));
		this.nodeService.getFilesystem().then((files) => (this.files2 = files));
		this.nodeService.getFiles().then((files) => {
			this.files3 = [
				{
					label: "Root",
					children: files,
				},
			];
		});
	},
};
</script>