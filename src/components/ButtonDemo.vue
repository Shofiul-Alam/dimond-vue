<template>
    <div class="p-grid button-demo">
        <div class="p-col-12 p-md-6">
            <div class="card">
                <h5>Default</h5>
                <Button label="Submit" class="p-mr-2 p-mb-2"></Button>
                <Button label="Disabled" disabled="true" class="p-mr-2 p-mb-2"></Button>
            </div>
            <div class="card">
                <h5>Severities</h5>
                <Button type="button" label="Primary" class="p-ripple p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Secondary" class="p-ripple p-button-secondary p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Success" class="p-ripple p-button-success p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Info" class="p-ripple p-button-info p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Warning" class="p-ripple p-button-warning p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Help" class="p-ripple p-button-help p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Danger" class="p-ripple p-button-danger p-mr-2 p-mb-2"></Button>
            </div>
            <div class="card">
                <h5>Text</h5>
                <Button type="button" label="Primary" class="p-ripple p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Secondary" class="p-ripple p-button-secondary p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Success" class="p-ripple p-button-success p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Info" class="p-ripple p-button-info p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Warning" class="p-ripple p-button-warning p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Help" class="p-ripple p-button-help p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Danger" class="p-ripple p-button-danger p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Plain" class="p-ripple p-button-text p-button-plain p-mr-2 p-mb-2"></Button>
            </div>
            <div class="card">
                <h5>Outlined</h5>
                <Button type="button" label="Primary" class="p-ripple p-button-outlined p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Secondary" class="p-ripple p-button-outlined p-button-secondary p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Success" class="p-ripple p-button-outlined p-button-success p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Info" class="p-ripple p-button-outlined p-button-info p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Warning" class="p-ripple p-button-outlined p-button-warning p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Help" class="p-ripple p-button-outlined p-button-help p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Danger" class="p-ripple p-button-outlined p-button-danger p-mr-2 p-mb-2"></Button>
            </div>
            <div class="card">
                <h5>Button Set</h5>
                <span class="p-buttonset">
                    <Button class="p-ripple" label="Save" icon="pi pi-check"></Button>
                    <Button class="p-ripple" label="Delete" icon="pi pi-trash"></Button>
                    <Button class="p-ripple" label="Cancel" icon="pi pi-times"></Button>
                </span>
            </div>
            <div class="card">
                <h5>SplitButton</h5>
                <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-info p-mr-2 p-mb-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-success p-mr-2 p-mb-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-warning p-mr-2 p-mb-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-help p-mr-2 p-mb-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-danger p-mr-2 p-mb-2"></SplitButton>
            </div>
        </div>
        <div class="p-col-12 p-md-6">
            <div class="card">
                <h5>Icons</h5>
                <Button icon="pi pi-star" class="p-mr-2 p-mb-2"></Button>
                <Button label="Submit" icon="pi pi-bookmark" class="p-mr-2 p-mb-2"></Button>
                <Button label="Submit" icon="pi pi-bookmark" iconPos="right" class="p-mr-2 p-mb-2"></Button>
            </div>
            <div class="card">
                <h5>Raised</h5>
                <Button type="button" label="Primary" class="p-ripple p-button-raised p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Secondary" class="p-ripple p-button-raised p-button-secondary p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Success" class="p-ripple p-button-raised p-button-success p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Info" class="p-ripple p-button-raised p-button-info p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Warning" class="p-ripple p-button-raised p-button-warning p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Help" class="p-ripple p-button-raised p-button-help p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Danger" class="p-ripple p-button-raised p-button-danger p-mr-2 p-mb-2"></Button>
            </div>
            <div class="card">
                <h5>Rounded</h5>
                <Button type="button" label="Primary" class="p-ripple p-button-rounded p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Secondary" class="p-ripple p-button-rounded p-button-secondary p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Success" class="p-ripple p-button-rounded p-button-success p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Info" class="p-ripple p-button-rounded p-button-info p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Warning" class="p-ripple p-button-rounded p-button-warning p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Help" class="p-ripple p-button-rounded p-button-help p-mr-2 p-mb-2"></Button>
                <Button type="button" label="Danger" class="p-ripple p-button-rounded p-button-danger p-mr-2 p-mb-2"></Button>
            </div>
            <div class="card">
                <h5>Rounded Icons</h5>
                <Button type="button" icon="pi pi-check" class="p-ripple p-button-rounded p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-bookmark" class="p-ripple p-button-rounded p-button-secondary p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-search" class="p-ripple p-button-rounded p-button-success p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-user" class="p-ripple p-button-rounded p-button-info p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-bell" class="p-ripple p-button-rounded p-button-warning p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-heart" class="p-ripple p-button-rounded p-button-help p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-times" class="p-ripple p-button-rounded p-button-danger p-mr-2 p-mb-2"></Button>
            </div>
            <div class="card">
                <h5>Rounded Text</h5>
                <Button type="button" icon="pi pi-check" class="p-ripple p-button-rounded p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-bookmark" class="p-ripple p-button-rounded p-button-secondary p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-search" class="p-ripple p-button-rounded p-button-success p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-user" class="p-ripple p-button-rounded p-button-info p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-bell" class="p-ripple p-button-rounded p-button-warning p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-heart" class="p-ripple p-button-rounded p-button-help p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-times" class="p-ripple p-button-rounded p-button-danger p-button-text p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-filter" class="p-ripple p-button-rounded p-button-text p-button-plain p-mr-2 p-mb-2"></Button>
            </div>
            <div class="card">
                <h5>Rounded Outlined</h5>
                <Button type="button" icon="pi pi-check" class="p-ripple p-button-rounded p-button-outlined p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-bookmark" class="p-ripple p-button-rounded p-button-secondary p-button-outlined p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-search" class="p-ripple p-button-rounded p-button-success p-button-outlined p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-user" class="p-ripple p-button-rounded p-button-info p-button-outlined p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-bell" class="p-ripple p-button-rounded p-button-warning p-button-outlined p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-heart" class="p-ripple p-button-rounded p-button-help p-button-outlined p-mr-2 p-mb-2"></Button>
                <Button type="button" icon="pi pi-times" class="p-ripple p-button-rounded p-button-danger p-button-outlined p-mr-2 p-mb-2"></Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { label: "Update", icon: "pi pi-refresh" },
                { label: "Delete", icon: "pi pi-times" },
                {
                    label: "Vue.js",
                    icon: "pi pi-info",
                    url: "https://vuejs.org/",
                },
                { separator: true },
                { label: "Setup", icon: "pi pi-cog" },
            ],
        };
    },
};
</script>