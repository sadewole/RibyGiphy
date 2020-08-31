import axios from 'axios';
import { FETCHGIF, FETCHGIFID } from './type';

export const fetchSearchGif = (search) => (dispatch) => {
  try {
    const res = axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=25&offset=0&rating=Y&lang=en`
    );

    dispatch({
      type: FETCHGIF,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchSingleGif = (id) => (dispatch) => {
  try {
    const res = axios.get(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.API_KEY}`
    );

    dispatch({
      type: FETCHGIFID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
