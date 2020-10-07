<template>
    <div class="p-grid">
        <div class="p-col-12 p-md-6">
            <div class="card">
                <h5>Vertical</h5>
                <div class="p-fluid">
                    <div class="p-field">
                        <label for="firstname1">Name</label>
                        <InputText id="firstname1" type="text" />
                    </div>
                    <div class="p-field">
                        <label for="lastname1">Email</label>
                        <InputText id="lastname1" type="text" />
                    </div>
                    <div class="p-field">
                        <label for="age1">Age</label>
                        <InputText id="age1" type="text" />
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Vertical Grid</h5>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col">
                        <label for="firstname2">Name</label>
                        <InputText id="firstname2" type="text" />
                    </div>
                    <div class="p-field p-col">
                        <label for="lastname2">Email</label>
                        <InputText id="lastname2" type="text" />
                    </div>
                </div>
            </div>
        </div>

        <div class="p-col-12 p-md-6">
            <div class="card">
                <h5>Horizontal</h5>
                <div class="p-fluid">
                    <div class="p-field p-grid">
                        <label
                            for="firstname4"
                            class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                            >Name</label
                        >
                        <div class="p-col-12 p-md-10">
                            <InputText id="firstname4" type="text" />
                        </div>
                    </div>
                    <div class="p-field p-grid">
                        <label
                            for="lastname4"
                            class="p-col-12 p-mb-2 p-md-2 p-mb-md-0"
                            >Email</label
                        >
                        <div class="p-col-12 p-md-10">
                            <InputText id="lastname4" type="text" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <h5>Inline</h5>
                <div class="p-formgroup-inline">
                    <div class="p-field">
                        <label for="firstname5" class="p-sr-only"
                            >Firstname</label
                        >
                        <InputText
                            id="firstname5"
                            type="text"
                            placeholder="Firstname"
                        />
                    </div>
                    <div class="p-field">
                        <label for="lastname5" class="p-sr-only"
                            >Lastname</label
                        >
                        <InputText
                            id="lastname5"
                            type="text"
                            placeholder="Lastname"
                        />
                    </div>
                    <Button
                        class="p-ripple"
                        type="button"
                        label="Submit"
                    ></Button>
                </div>
            </div>

            <div class="card">
                <h5>Help Text</h5>
                <div class="p-field p-fluid">
                    <label for="username">Username</label>
                    <InputText
                        id="username"
                        type="username"
                        aria-describedby="username-help"
                    />
                    <small id="username-help"
                        >Enter your username to reset your password.</small
                    >
                </div>
            </div>
        </div>

        <div class="p-col-12">
            <div class="card">
                <h5>Advanced</h5>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-6">
                        <label for="firstname6">Firstname</label>
                        <InputText id="firstname6" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="lastname6">Lastname</label>
                        <InputText id="lastname6" type="text" />
                    </div>
                    <div class="p-field p-col-12">
                        <label for="address">Address</label>
                        <Textarea id="address" type="text" rows="4"></Textarea>
                    </div>
                    <div class="p-field p-col-12 p-md-6">
                        <label for="city">City</label>
                        <InputText id="city" type="text" />
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="state">State</label>
                        <Dropdown
                            inputId="state"
                            :options="states"
                            :model="selectedState"
                            placeholder="Select"
                            optionLabel="name"
                        ></Dropdown>
                    </div>
                    <div class="p-field p-col-12 p-md-3">
                        <label for="zip">Zip</label>
                        <InputText id="zip" type="text" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/*eslint-disable */
export default {
    name: "FileUpload",
    data() {
        return {
            selectedState: null,
            states: [
                { name: "Arizona", code: "Arizona" },
                { name: "California", value: "California" },
                { name: "Florida", code: "Florida" },
                { name: "Ohio", code: "Ohio" },
                { name: "Washington", code: "Washington" },
            ],
        };
    },
};
</script>