<template>
    <div class="p-grid p-fluid">
        <div class="p-col-12 p-md-6">
            <div class="card">
                <h5>InputText</h5>
                <div class="p-grid p-formgrid">
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <InputText type="text" placeholder="Default" />
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <InputText
                            type="text"
                            placeholder="Disabled"
                            :disabled="true"
                        />
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <InputText
                            type="text"
                            placeholder="Invalid"
                            class="p-invalid"
                        />
                    </div>
                </div>

                <h5>Icons</h5>
                <div class="p-grid p-formgrid">
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <span class="p-input-icon-left">
                            <i class="pi pi-user"></i>
                            <InputText type="text" placeholder="Username" />
                        </span>
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <span class="p-input-icon-right">
                            <InputText type="text" placeholder="Search" />
                            <i class="pi pi-search"></i>
                        </span>
                    </div>
                    <div class="p-col-12 p-mb-2 p-lg-4 p-mb-lg-0">
                        <span class="p-input-icon-left p-input-icon-right">
                            <i class="pi pi-user"></i>
                            <InputText type="text" placeholder="Search" />
                            <i class="pi pi-search"></i>
                        </span>
                    </div>
                </div>

                <h5>Float Label</h5>
                <span class="p-float-label">
                    <InputText id="float-input" type="text" />
                    <label for="float-input">Username</label>
                </span>

                <h5>Textarea</h5>
                <Textarea
                    rows="5"
                    cols="30"
                    placeholder="Your Message"
                ></Textarea>

                <h5>AutoComplete</h5>
                <AutoComplete
                    v-model="selectedCountryAdvanced"
                    :suggestions="filteredCountries"
                    @complete="filterCountry($event)"
                    field="name"
                    :dropdown="true"
                >
                </AutoComplete>

                <h5>Calendar</h5>
                <Calendar :showIcon="true" inputId="icon"></Calendar>

                <h5>InputNumber</h5>
                <InputNumber
                    mode="decimal"
                    :showButtons="true"
                    :min="0"
                    :max="100"
                >
                </InputNumber>

                <h5>Chips</h5>
                <Chips v-model="chips"></Chips>
            </div>

            <div class="card">
                <h5>Slider</h5>
                <InputText type="text" v-model="valSlider" readonly />
                <Slider v-model="valSlider"></Slider>

                <h5>Rating</h5>
                <Rating v-model="rating"></Rating>

                <h5>ColorPicker</h5>
                <ColorPicker v-model="valColor"></ColorPicker>
            </div>
        </div>

        <div class="p-col-12 p-md-6">
            <div class="card">
                <h5>RadioButton</h5>
                <div class="p-grid">
                    <div class="p-col-12 p-md-4">
                        <div class="p-field-radiobutton">
                            <RadioButton
                                name="city"
                                value="Chicago"
                                v-model="valRadio"
                                id="city1"
                            ></RadioButton>
                            <label for="city1">Chicago</label>
                        </div>
                    </div>
                    <div class="p-col-12 p-md-4">
                        <div class="p-field-radiobutton">
                            <RadioButton
                                name="city"
                                value="Los Angeles"
                                v-model="valRadio"
                                id="city2"
                            ></RadioButton>
                            <label for="city2">Los Angeles</label>
                        </div>
                    </div>
                    <div class="p-col-12 p-md-4">
                        <div class="p-field-radiobutton">
                            <RadioButton
                                name="city"
                                value="New York"
                                v-model="valRadio"
                                id="city3"
                            ></RadioButton>
                            <label for="city3">New York</label>
                        </div>
                    </div>
                </div>

                <h5>Checkbox</h5>
                <div class="p-grid">
                    <div class="p-col-12 p-md-4">
                        <div class="p-field-checkbox">
                            <Checkbox
                                name="group1"
                                value="New York"
                                v-model="valCheck"
                                id="ny"
                            ></Checkbox>
                            <label for="ny">New York</label>
                        </div>
                    </div>
                    <div class="p-col-12 p-md-4">
                        <div class="p-field-checkbox">
                            <Checkbox
                                name="group1"
                                value="San Francisco"
                                v-model="valCheck"
                                id="sf"
                            ></Checkbox>
                            <label for="sf">San Francisco</label>
                        </div>
                    </div>
                    <div class="p-col-12 p-md-4">
                        <div class="p-field-checkbox">
                            <Checkbox
                                name="group1"
                                value="Los Angeles"
                                v-model="valCheck"
                                id="la"
                            ></Checkbox>
                            <label for="la">Los Angeles</label>
                        </div>
                    </div>
                </div>

                <h5>Input Switch</h5>
                <InputSwitch v-model="valSwitch"></InputSwitch>
            </div>

            <div class="card">
                <h5>Listbox</h5>
                <Listbox
                    :options="cities"
                    v-model="selectedList"
                    :filter="true"
                    optionLabel="label"
                ></Listbox>

                <h5>Dropdown</h5>
                <Dropdown
                    :options="cities"
                    v-model="selectedDrop"
                    placeholder="Select a City"
                    :showClear="true"
                    optionLabel="label"
                ></Dropdown>

                <h5>Multiselect</h5>
                <MultiSelect
                    :options="countries"
                    v-model="selectedMulti"
                    placeholder="Select a Country"
                    optionLabel="name"
                    class="multiselect-custom"
                    :filter="true"
                >
                </MultiSelect>
            </div>

            <div class="card">
                <h5>ToggleButton</h5>
                <ToggleButton
                    v-model="valToggle"
                    onLabel="Yes"
                    offLabel="No"
                    :style="{ width: '10em' }"
                ></ToggleButton>

                <h5>SelectOneButton</h5>
                <SelectButton
                    :options="paymentOptions"
                    v-model="valSelect1"
                    optionLabel="name"
                ></SelectButton>

                <h5>SelectManyButton</h5>
                <SelectButton
                    :options="paymentOptions"
                    v-model="valSelect2"
                    multiple
                    optionLabel="name"
                ></SelectButton>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <h5>InputGroup</h5>
                <div class="p-grid p-fluid">
                    <div class="p-col-12 p-md-6">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon"
                                ><i class="pi pi-user"></i
                            ></span>
                            <InputText type="text" placeholder="Username" />
                        </div>
                    </div>
                    <div class="p-col-12 p-md-6">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon"
                                ><i
                                    class="pi pi-tags"
                                    style="line-height: 1.25"
                                ></i
                            ></span>
                            <span class="p-inputgroup-addon"
                                ><i
                                    class="pi pi-shopping-cart"
                                    style="line-height: 1.25"
                                ></i
                            ></span>
                            <InputText type="text" placeholder="Price" />
                            <span class="p-inputgroup-addon">$</span>
                            <span class="p-inputgroup-addon">.00</span>
                        </div>
                    </div>
                    <div class="p-col-12 p-md-6">
                        <div class="p-inputgroup">
                            <Button
                                type="button"
                                class="p-ripple"
                                label="Search"
                            ></Button>
                            <InputText type="text" placeholder="Keyword" />
                        </div>
                    </div>
                    <div class="p-col-12 p-md-6">
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon"
                                ><Checkbox
                                    v-model="usernameCheckbox"
                                    :binary="true"
                                ></Checkbox
                            ></span>
                            <InputText type="text" placeholder="Username" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/*eslint-disable */
import CountryService from "../service/CountryService";
export default {
    name: "InputDemo",
    created() {
        this.countryService = new CountryService();
    },
    mounted() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    },
    data() {
        return {
            cities: [
                {
                    label: "New York",
                    value: { id: 1, name: "New York", code: "NY" },
                },
                { label: "Rome", value: { id: 2, name: "Rome", code: "RM" } },
                {
                    label: "London",
                    value: { id: 3, name: "London", code: "LDN" },
                },
                {
                    label: "Istanbul",
                    value: { id: 4, name: "Istanbul", code: "IST" },
                },
                {
                    label: "Paris",
                    value: { id: 5, name: "Paris", code: "PRS" },
                },
            ],

            paymentOptions: [
                { name: "Option 1", value: 1 },
                { name: "Option 2", value: 2 },
                { name: "Option 3", value: 3 },
            ],
            filteredCountries: [],
            countries: [],
            selectedCountryAdvanced: "",
            valSlider: 50,
            valColor: "#424242",
            valRadio: "",
            valCheck: [],
            valSwitch: false,
            selectedList: "",
            selectedDrop: "",
            selectedMulti: [],
            valToggle: false,
            valSelect1: "",
            valSelect2: "",
            chips: [],
            rating: null,
            usernameCheckbox: false,
        };
    },
    methods: {
        filterCountry($event) {
            const filtered = [];
            const query = $event.query;
            for (let i = 0; i < this.countries.length; i++) {
                const country = this.countries[i];
                if (
                    country.name.toLowerCase().indexOf(query.toLowerCase()) == 0
                ) {
                    filtered.push(country);
                }
            }

            this.filteredCountries = filtered;
        },
    },
};
</script>

<style lang="scss" scoped>
.p-multiselect {
    min-width: 15rem;
}
.multiselect-custom-virtual-scroll .p-multiselect {
    min-width: 20rem;
}
.multiselect-custom .p-multiselect-label {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}
.multiselect-custom .country-item.country-item-value {
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    display: inline-flex;
    margin-right: 0.5rem;
    background-color: var(--primary-color);
    color: var(--primary-color-text);
}
.multiselect-custom .country-item.country-item-value img.flag {
    width: 17px;
}
.multiselect-custom .country-item {
    display: flex;
    align-items: center;
}
.multiselect-custom .country-item img.flag {
    width: 18px;
    margin-right: 0.5rem;
}
.multiselect-custom .country-placeholder {
    padding: 0.25rem;
}
.p-colorpicker {
    width: 2.5em;
}
</style>