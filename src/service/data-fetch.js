import axios from 'axios';

class fetchData {
  constructor() {
    this.getRequestOptions = {
      method: 'GET',
    };

    this.postRequestOptions = {
      method: 'POST',
    };
  }

  async itemDetail(id) {
    const response = await axios.get(
      `http://10.58.1.49:8000/investments/${id}`
    );
    const result = response.data;
    return result;
  }

  async sendInvestRequest(token, amount, id) {
    const HEADERS = {
      Authorization: token,
    };
    const response = await axios.post(
      `http://10.58.3.237:8000/transactions/invest/${id}`,
      {
        amounts: amount,
      },
      {
        headers: HEADERS,
      }
    );
    const result = response.data;
    console.log(amount);
    return result;
  }
}

export default fetchData;
