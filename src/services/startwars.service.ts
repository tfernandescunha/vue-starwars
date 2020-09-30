import axios from "axios";

class StartwarsService {
  async getStarWarsCharacters() {
    return axios.get("https://swapi.dev/api/people");
  }
}

export default new StartwarsService();
