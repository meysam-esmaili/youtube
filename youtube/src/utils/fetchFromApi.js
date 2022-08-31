import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
 
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'd23c223c90mshdf81189906b6ebfp1c339fjsnd2b310a55275',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) =>
{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}