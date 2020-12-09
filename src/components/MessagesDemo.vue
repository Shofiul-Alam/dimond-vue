<template>
	<div class="p-grid messages-demo">
		<div class="p-col-12 p-lg-6">
			<div class="card">
				<h5>Toast</h5>

				<Toast />
				<Button @click="showSuccess()" label="Success" class="p-button-success p-mr-2" />
				<Button @click="showInfo()" label="Info" class="p-button-info p-mr-2" />
				<Button @click="showWarn()" label="Warn" class="p-button-warning p-mr-2" />
				<Button @click="showError()" label="Error" class="p-button-danger p-mr-2" />
			</div>
		</div>

		<div class="p-col-12 p-lg-6">
			<div class="card">
				<h5>Messages</h5>

				<Button label="Success" @click="addMessage('success')" class="p-button-success p-mr-2 p-mb-2"/>
				<Button label="Info" @click="addMessage('info')" class="p-button-info p-mr-2 p-mb-2"/>
				<Button label="Warn" @click="addMessage('warn')" class="p-button-warning p-mr-2 p-mb-2"/>
				<Button label="Error" @click="addMessage('error')" class="p-button-danger p-mr-2 p-mb-2"/>

				<transition-group name="p-message" tag="div">
					<Message v-for="msg of message" :severity="msg.severity" :key="msg.id">{{msg.content}}</Message>
				</transition-group>
			</div>
		</div>

		<div class="p-col-12 p-lg-8">
			<div class="card">
				<h5>Inline</h5>
				<div class="p-field p-grid p-align-start">
					<label for="username1" class="p-col-fixed">Username</label>
					<div class="p-col">
						<InputText id="username1" v-model="username" :required="true" class="p-invalid"></InputText>
						<InlineMessage>Username is required</InlineMessage>
					</div>
				</div>
				<div class="p-field p-grid">
					<label for="email" class="p-col-fixed">Email</label>
					<div class="p-col">
						<InputText id="email" v-model="email" :required="true" class="p-invalid"></InputText>
						<InlineMessage/>
					</div>
				</div>
			</div>
		</div>

		<div class="p-col-12 p-lg-4">
			<div class="card">
				<h5>Help Text</h5>
				<div class="p-field p-fluid">
					<label for="username2">Username</label>
					<InputText id="username2" type="username" class="p-error" aria-describedby="username-help" />
					<small id="username-help" class="p-error">Enter your username to reset your password.</small>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message: [],
				username:null,
				email:null,
				count: 0,
			}
		},
		methods: {
			addMessage(type) {
				if(type === 'success') {
					this.message = [{severity: 'success', content: 'Message Detail', id: this.count++}]
				}
				else if(type === 'info') {
					this.message = [{severity: 'info', content: 'Message Detail', id: this.count++}]
				}
				else if(type === 'warn') {
					this.message = [{severity: 'warn', content: 'Message Detail', id: this.count++}]
				}
				else if(type === 'error') {
					this.message = [{severity: 'error', content: 'Message Detail', id: this.count++}]
				}
			},
			showSuccess() {
				this.$toast.add({severity:'success', summary: 'Success Message', detail:'Message Detail', life: 3000});
			},
			showInfo() {
				this.$toast.add({severity:'info', summary: 'Info Message', detail:'Message Detail', life: 3000});
			},
			showWarn() {
				this.$toast.add({severity:'warn', summary: 'Warn Message', detail:'Message Detail', life: 3000});
			},
			showError() {
				this.$toast.add({severity:'error', summary: 'Error Message', detail:'Message Detail', life: 3000});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.p-field > label {
		width: 125px;
	}
	.p-inputtext {
		margin-right: .5rem;
	}
</style>