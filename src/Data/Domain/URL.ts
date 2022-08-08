import Params from "./Params";
class URL {
  static get URL_SERVER() {
    return process.env.REACT_APP_URL_POKEMONS;
  }

  static buildUrl(path: string) {
    return `${URL.URL_SERVER}/${path}`;
  }

  static setParams(url: string, params = {}) {
    return Params.buildUrlWithFilters(url, params);
  }

  static setId(url: string, id: number) {
    return `${url}/${id}`;
  }
}

export default URL;
