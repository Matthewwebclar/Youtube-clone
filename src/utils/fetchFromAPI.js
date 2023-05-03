import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};

/**
 * This function fetches data from an API and returns a promise.
 * @param url - the url of the API endpoint
 */

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};
