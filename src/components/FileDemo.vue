<template>
	<div class="p-grid">
		<Toast />
		<div class="p-col-12">
			<div class="card">
				<h5>Advanced</h5>
				<FileUpload
					name="demo[]"
					url="./upload.php"
					@upload="onUpload($event)"
					multiple="multiple"
					accept="image/*"
					:maxFileSize="1000000"
				>
				</FileUpload>

				<h5>Basic</h5>
				<FileUpload
					mode="basic"
					name="demo[]"
					url="./upload.php"
					accept="image/*"
					:maxFileSize="1000000"
					@upload="onUpload($event)"
				></FileUpload>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		onUpload() {
			this.$toast.add({
				severity: "info",
				summary: "Success",
				detail: "File Uploaded",
				life: 3000,
			});
		},
	},
};
</script>