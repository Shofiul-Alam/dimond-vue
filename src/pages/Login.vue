<template>
	<div class="login-body">
		<div class="login-wrapper">
			<div class="login-panel">
				<img src="assets/layout/images/logo-dark.svg" class="logo" alt="diamond-layout" />

				<div class="login-form">
					<h2>Create Your Free Account</h2>
					<p>Already have an account? <a href="/">Login</a></p>
					<InputText id="name" placeholder="Full Name" />
					<InputText id="email" placeholder="Email" />
					<Password placeholder="Password"/>
					<Button label="CONTINUE" type="button"></Button>
				</div>

				<p>A problem? <a href="/">Click here</a> and let us help you.</p>
			</div>
			<div class="login-image">
				<div class="login-image-content">
					<h1>Access to your</h1>
					<h1>Diamond</h1>
					<h1>Account</h1>
					<h3>
						Lorem ipsum dolor sit amet, consectetur <br />
						adipiscing elit. Donec posuere velit nec enim <br />
						sodales, nec placerat erat tincidunt.
					</h3>
				</div>
				<div class="image-footer">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div class="icons">
						<i class="pi pi-github"></i>
						<i class="pi pi-twitter"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>
