<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h5>Advanced</h5>
				<FileUpload
					name="demo[]"
					url="./upload.php"
					@upload="onUpload($event)"
					multiple="multiple"
					accept="image/*"
					maxFileSize="1000000"
				>
					<template #content>
						<ul v-if="uploadedFiles.length">
							<li v-for="file in uploadedFiles" :key="file.name">
								{{ file.name }} - {{ file.size }} bytes
							</li>
						</ul>
					</template>
				</FileUpload>

				<h5>Basic</h5>
				<FileUpload
					mode="basic"
					name="demo[]"
					url="./upload.php"
					accept="image/*"
					maxFileSize="1000000"
					@upload="onBasicUpload($event)"
				></FileUpload>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FileDemo",
	data() {
		return {
			uploadedFiles: [],
		};
	},
	methods: {
		onUpload($event) {
			for (const file of $event.files) {
				this.uploadedFiles.push(file);
			}

			this.messageService.add({
				severity: "info",
				summary: "Success",
				detail: "File Uploaded",
			});
		},

		onBasicUpload() {
			this.messageService.add({
				severity: "info",
				summary: "Success",
				detail: "File Uploaded with Basic Mode",
			});
		},
	},
};
</script>