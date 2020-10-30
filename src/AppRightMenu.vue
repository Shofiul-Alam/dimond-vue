<template>
    <div class="layout-sidebar-right" :class="{ 'layout-sidebar-right-active': rightMenuActive }" @click="rightMenuClick">
        <h5>Activity</h5>
        <div class="widget-timeline">
            <div class="timeline-event">
                <span class="timeline-event-icon" style="background-color: #64b5f6">
                    <i class="pi pi-dollar"></i>
                </span>
                <div class="timeline-event-title">New Sale</div>
                <div class="timeline-event-detail">
                    Richard Jones has purchased a blue t-shirt for
                    <strong>$79</strong>.
                </div>
            </div>
            <div class="timeline-event">
                <span class="timeline-event-icon" style="background-color: #7986cb">
                    <i class="timeline-icon pi pi-download"></i>
                </span>
                <div class="timeline-event-title">Withdrawal Initiated</div>
                <div class="timeline-event-detail">Your request for withdrawal of <strong>$2500</strong> has been initiated.</div>
            </div>
            <div class="timeline-event">
                <span class="timeline-event-icon" style="background-color: #4db6ac">
                    <i class="timeline-icon pi pi-question"></i>
                </span>
                <div class="timeline-event-title">Question Received</div>
                <div class="timeline-event-detail">Jane Davis has posted a <strong>new question</strong> about your product.</div>
            </div>
            <div class="timeline-event">
                <span class="timeline-event-icon" style="background-color: #4dd0e1">
                    <i class="timeline-icon pi pi-comment"></i>
                </span>
                <div class="timeline-event-title">Comment Received</div>
                <div class="timeline-event-detail">
                    Claire Smith has upvoted your store along with a
                    <strong>comment</strong>.
                </div>
            </div>
        </div>

        <hr />

        <h5>Quick Withdraw</h5>

        <div class="withdraw p-fluid">
            <div>
                <InputText type="text" placeholder="Amount" />
            </div>
            <div>
                <Dropdown :options="amount" optionLabel="label" v-model="selectedAmount"></Dropdown>
            </div>
            <div>
                <Button label="Confirm" icon="pi pi-check"></Button>
            </div>
        </div>

        <hr />

        <h5>Shipment Tracking</h5>
        <p>Track your ongoing shipments to customers.</p>
        <img class="logo-image" src="assets/demo/images/sidebar-right/staticmap.png" alt="diamond-vue" style="width: 100%" />
    </div>
</template>

<script>
export default {
    name: "AppRightMenu",
    emits: ["right-menu-click"],
    props: {
        rightMenuActive: Boolean,
    },
    data() {
        return {
            selectedAmount: "",
            amount: [
                {
                    label: "*****24",
                    value: { id: 1, name: "*****24", code: "A1" },
                },
                {
                    label: "*****75",
                    value: { id: 2, name: "*****75", code: "A2" },
                },
            ],
        };
    },
    mounted() {
        this.selectedAmount = this.amount[0];
    },
    methods: {
        rightMenuClick($event) {
            this.$emit("right-menu-click", $event)
        }
    }
};
</script>