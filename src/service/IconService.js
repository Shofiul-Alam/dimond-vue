import axios from "axios";

export default class EventService {
    getIcons() {
        return axios.get("assets/demo/data/icons.json").then(res => res.data);
    }
}
