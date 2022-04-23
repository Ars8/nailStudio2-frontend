import axios from "axios";

export const ReviewsApi = {
  async fetchReviews() {
    try {
      const response = await axios.get('./reviews.json');
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}