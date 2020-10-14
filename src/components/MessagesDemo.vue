<template>
    <div class="p-grid">
        <div class="p-col-12 p-lg-6">
            <div class="card">
                <h5>Toast</h5>
                <Toast key="tst"></Toast>

                <Button type="button" @click="showSuccessViaToast()" label="Success" class="p-button-success p-mr-2 p-mb-2"></Button>
                <Button type="button" @click="showInfoViaToast()" label="Info" class="p-button-info p-mr-2 p-mb-2"></Button>
                <Button type="button" @click="showWarnViaToast()" label="Warn" class="p-button-warning p-mr-2 p-mb-2"></Button>
                <Button type="button" @click="showErrorViaToast()" label="Error" class="p-button-danger p-mb-2"></Button>
            </div>
        </div>

        <div class="p-col-12 p-lg-6">
            <div class="card">
                <h5>Messages</h5>
                <Button type="button" @click="showSuccessViaMessages()" label="Success" class="p-button-success p-mr-2 p-mb-2"></Button>
                <Button type="button" @click="showInfoViaMessages()" label="Info" class="p-button-info p-mr-2 p-mb-2"></Button>
                <Button type="button" @click="showWarnViaMessages()" label="Warn" class="p-button-warning p-mr-2 p-mb-2"></Button>
                <Button type="button" @click="showErrorViaMessages()" label="Error" class="p-button-danger p-mb-2"></Button>

                <transition-group name="p-message" tag="div">
                    <Message v-for="msg of msgs" :severity="msg.severity" :key="msg.summary">{{ msg.detail }}</Message>
                </transition-group>
            </div>
        </div>

		<div class="p-col-12 p-lg-8">
			<div class="card">
				<h5>Inline Message</h5>
				<div class="p-mt-4">
					<InputText
						type="text"
						placeholder="Username"
						class="p-invalid p-mr-2"
					/>
					<InlineMessage severity="error"
						>Field is required</InlineMessage
					>
				</div>

				<div class="p-mt-4">
					<InputText
						type="text"
						placeholder="Email"
						class="p-invalid p-mr-2"
					/>
					<InlineMessage severity="error"></InlineMessage>
				</div>
			</div>
		</div>

        <div class="p-col-12 p-lg-4">
            <div class="card">
                <h5>Help Text</h5>
                <div class="p-field p-fluid">
                    <label for="username">Username</label>
                    <InputText id="username" type="username" aria-describedby="username-help" class="p-invalid" />
                    <small id="username-help" class="p-invalid">Username is not available.</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	data() {
		return {
			msgs: [],
			username: null,
			email: null,
		};
	},
	methods: {
		showInfoViaToast() {
			this.$toast.add({
				key: "tst",
				severity: "info",
				summary: "Info Message",
				detail: "PrimeVue rocks",
				life: 3000,
			});
		},

		showWarnViaToast() {
			this.$toast.add({
				key: "tst",
				severity: "warn",
				summary: "Warn Message",
				detail: "There are unsaved changes",
				life: 3000,
			});
		},

		showErrorViaToast() {
			this.$toast.add({
				key: "tst",
				severity: "error",
				summary: "Error Message",
				detail: "Validation failed",
				life: 3000,
			});
		},

		showSuccessViaToast() {
			this.$toast.add({
				key: "tst",
				severity: "success",
				summary: "Success Message",
				detail: "Message sent",
				life: 3000,
			});
		},

		showInfoViaMessages() {
			this.msgs = [];
			this.msgs.push({
				severity: "info",
				summary: "Info Message",
				detail: "PrimeVue rocks",
			});
		},

		showWarnViaMessages() {
			this.msgs = [];
			this.msgs.push({
				severity: "warn",
				summary: "Warn Message",
				detail: "There are unsaved changes",
			});
		},

		showErrorViaMessages() {
			this.msgs = [];
			this.msgs.push({
				severity: "error",
				summary: "Error Message",
				detail: "Validation failed",
			});
		},

		showSuccessViaMessages() {
			this.msgs = [];
			this.msgs.push({
				severity: "success",
				summary: "Success Message",
				detail: "Message sent",
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.p-button {
	min-width: 8em;
}
.p-message {
	margin-left: 0.25em;
}
</style>