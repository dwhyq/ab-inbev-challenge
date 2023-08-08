import axios from 'axios';

class AxiosApiClient {

  constructor(baseURL) {
    this.client = axios.create({
      baseURL,
    });
  }

  async get(url, config = {}) {
    try {
      const response = await this.client.get(url, config);
      return response.data;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  async post(url, data = {}, config = {}) {
    try {
      const response = await this.client.post(url, data, config);
      return response.data;
    } catch (error) {
      throw this._handleError(error);
    }
  }

  _handleError(error) {

    // handle server error
    if (error.response) {
      return {
        status: error.response.status,
        data: error.response.data,
      };
    } else if (error.request) {
      // The request was made but no response was received
      return {
        status: -1,
        data: 'No response received from the server.',
      };
    } else {
      // Something happened in setting up the request that triggered an error
      return {
        status: -1,
        data: 'Error while setting up the request.',
      };
    }
  }
}

export default AxiosApiClient;
