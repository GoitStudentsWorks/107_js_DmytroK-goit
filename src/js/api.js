import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function getReviews() {
  try {
    const response = await axios.get('/reviews');
    return response.data;
  } catch (err) {
    console.error('Error fetching reviews:', err);
    return null;
  }
}
