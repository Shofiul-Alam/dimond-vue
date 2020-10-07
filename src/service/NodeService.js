/*eslint-disable */
import axios from "axios";

export default class NodeService {
  getFiles() {
    return axios.get("assets/demo/data/files.json").then(res => res.data.data);
  }

  getLazyFiles() {
    return axios
      .get("assets/demo/data/files-lazy.json")
      .then(res => res.data.data);
  }

  getFilesystem() {
    return axios
      .get("assets/demo/data/filesystem.json")
      .then(res => res.data.data);
  }

  getLazyFilesysytem() {
    return axios
      .get("assets/demo/data/filesystem-lazy.json")
      .then(res => res.data.data);
  }
}
