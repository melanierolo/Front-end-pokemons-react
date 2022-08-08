import axios from "axios";
//axios is a library that helps fetch data(easier)
class API {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  async get() {
    try {
      return await axios.get(this.url);
    } catch (error) {
      console.log("get error");
    }
  }
}

export default API;
