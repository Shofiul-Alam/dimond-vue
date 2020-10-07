<template>
    <div class="p-grid misc-demo">
        <div class="p-col-12">
            <div class="card">
                <h5>ProgressBar</h5>
                <div class="p-grid">
                    <div class="p-col">
                        <ProgressBar
                            :value="value"
                            :showValue="false"
                        ></ProgressBar>
                    </div>
                    <div class="p-col">
                        <progressBar
                            :value="50"
                            :showValue="false"
                        ></progressBar>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <h4>Badge</h4>
                <h5>Numbers</h5>
                <div class="badges">
                    <span class="p-badge">2</span>
                    <span class="p-badge p-badge-success">8</span>
                    <span class="p-badge p-badge-info">4</span>
                    <span class="p-badge p-badge-warning">12</span>
                    <span class="p-badge p-badge-danger">3</span>
                </div>

                <h5>Tags</h5>
                <div class="badges">
                    <span class="p-tag">Primary</span>
                    <span class="p-tag p-tag-success">Success</span>
                    <span class="p-tag p-tag-info">Info</span>
                    <span class="p-tag p-tag-warning">Warning</span>
                    <span class="p-tag p-tag-danger">Danger</span>
                </div>

                <h5>Pills</h5>
                <div class="badges">
                    <span class="p-tag p-tag-rounded">Primary</span>
                    <span class="p-tag p-tag-rounded p-tag-success"
                        >Success</span
                    >
                    <span class="p-tag p-tag-rounded p-tag-info">Info</span>
                    <span class="p-tag p-tag-rounded p-tag-warning"
                        >Warning</span
                    >
                    <span class="p-tag p-tag-rounded p-tag-danger">Danger</span>
                </div>

                <h5>Icon Badge</h5>
                <span class="p-overlay-badge p-mr-5">
                    <i class="pi pi-bell" style="font-size: 2em"></i>
                    <span class="p-badge">2</span>
                </span>

                <h5>Button Badge</h5>
                <span class="p-overlay-badge">
                    <Button label="New"></Button>
                    <span class="p-badge p-badge-warning">5</span>
                </span>

                <h5>Inline Button Badge</h5>
                <Button label="Emails" badge="8" class="p-mr-2"></Button>
                <Button
                    label="Messages"
                    icon="pi pi-users"
                    class="p-button-warning p-badge-danger"
                    badge="8"
                ></Button>

                <h5>Sizes</h5>
                <div class="badges">
                    <span class="p-badge">2</span>
                    <span class="p-badge p-badge-lg p-badge-sucess">4</span>
                    <span class="p-badge p-badge-xl p-badge-warning">6</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/*eslint-disable */
export default {
    name: "MiscDemo",
    data() {
        return {
            value: 0,
        };
    },
    created() {
        const interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 100;
                clearInterval(interval);
            }
        }, 2000);
    },
};
</script>

<style lang="scss" scoped>
.misc-demo .p-button.p-widget {
    min-width: 6rem;
}
.misc-demo .badges .p-badge {
    margin-right: 0.5rem;
}
.misc-demo .badges .p-tag {
    margin-right: 0.5rem;
}
</style>