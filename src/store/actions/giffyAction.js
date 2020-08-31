import axios from 'axios';
import { FETCHGIF, FETCHGIFID } from './type';

export const fetchSearchGif = (search) => {
  return async (dispatch, state) => {
    try {
      state.loading = true;
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=carrot&limit=50&offset=0&rating=Y&lang=en`
      );

      state.loading = false;
      dispatch({
        type: FETCHGIF,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSingleGif = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    dispatch({
      type: FETCHGIFID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
