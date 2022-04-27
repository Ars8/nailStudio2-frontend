import axios from "axios";

export const PriceApi = {
  async fetchPrice() {
    try {
      const response = await axios.get('./price.json');
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}