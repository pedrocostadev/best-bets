import axios from 'axios';

const rapidApiClient = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v2/',
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
  },
});

export default rapidApiClient;
