class Params {
  limit: number;
  page: number;
  filter?: any;
  constructor({ limit = 25, page = 0, filter = {} }) {
    this.limit = limit;
    this.page = page;
    this.filter = filter;
  }

  static buildUrlWithFilters(url?: string, params?: any) {
    const { page = 0, limit = 152, filter = {} } = params;
    return `${url}?pages=${page}&limit=${limit}&filter=${JSON.stringify(
      filter
    )}`;
  }
}

export default Params;
