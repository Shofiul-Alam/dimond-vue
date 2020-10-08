<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<h5>Calendar</h5>
				<FullCalendar
					:events="events"
					:options="options"
				></FullCalendar>

				<Dialog
					:visible="eventDialog"
					:style="{
						width: '450px',
					}"
					header="Event Details"
					:modal="true"
					:closable="true"
				>
					<template #content>
						<div class="p-fluid">
							<div class="p-field">
								<label for="title">Title</label>
								<InputText
									id="title"
									v-if="clickedEvent"
									v-model="changedEvent.title"
									required="true"
								/>
							</div>
							<div class="p-field">
								<label for="start">From</label>
								<Calendar
									id="start"
									v-if="clickedEvent"
									v-model="changedEvent.start"
									:showTime="true"
									appendTo="body"
								></Calendar>
							</div>
							<div class="p-field">
								<label for="end">To</label>
								<Calendar
									id="end"
									v-if="clickedEvent"
									v-model="changedEvent.end"
									:showTime="true"
									appendTo="body"
								></Calendar>
							</div>
							<div class="p-field-checkbox">
								<Checkbox
									id="allday"
									v-if="clickedEvent"
									v-model="changedEvent.allday"
								></Checkbox>
								<label for="allday">All Day</label>
							</div>
						</div>
					</template>

					<template #footer>
						<Button
							label="Save"
							icon="pi pi-check"
							class="p-button-text"
							@click="save()"
						></Button>
						<Button
							label="Reset"
							icon="pi pi-refresh"
							class="p-button-text"
							@click="reset()"
						></Button>
					</template>
				</Dialog>
			</div>
		</div>
	</div>
</template>

<script>
import EventService from "../service/EventService";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
export default {
	name: "Calendar",
	data() {
		return {
			events: [],
			eventDialog: false,
			changedEvent: { title: "", start: null, end: "", allDay: null },
			clickedEvent: null,
			options: {
				plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
				defaultDate: "2017-02-01",
				header: {
					left: "prev,next",
					center: "title",
					right: "dayGridMonth,timeGridWeek,timeGridDay",
				},
				editable: true,
				eventClick: (e) => {
					this.eventDialog = true;
					this.clickedEvent = e.event;
					this.changedEvent.title = this.clickedEvent.title;
					this.changedEvent.start = this.clickedEvent.start;
					this.changedEvent.end = this.clickedEvent.end;
				},
			},
		};
	},
	created() {
		this.eventService = new EventService();
	},
	mounted() {
		this.eventService.getEvents().then((events) => {
			this.events = events;
		});
	},
	methods: {
		save() {
			this.eventDialog = false;
			this.clickedEvent.setProp("title", this.changedEvent.title);
			this.clickedEvent.setStart(this.changedEvent.start);
			this.clickedEvent.setEnd(this.changedEvent.end);
			this.clickedEvent.setAllDay(this.changedEvent.allDay);

			this.changedEvent = {
				title: "",
				start: null,
				end: "",
				allDay: null,
			};
		},

		reset() {
			this.changedEvent.title = this.clickedEvent.title;
			this.changedEvent.start = this.clickedEvent.start;
			this.changedEvent.end = this.clickedEvent.end;
		},
	},
};
</script>