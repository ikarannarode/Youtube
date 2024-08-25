import axios from 'axios';
const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {

    params: {

        hl: 'en',
        gl: 'US'
    },
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_API_KEY,
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
};
export const fetchDataFromApi = async (url) => {
    const data = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}