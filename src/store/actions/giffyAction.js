import axios from 'axios';
import { FETCHGIF, FETCHGIFID } from './type';

export const fetchSearchGif = (search) => {
  return async (dispatch, state) => {
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${search}&limit=50&offset=0&rating=Y&lang=en`
      );

      dispatch({
        type: FETCHGIF,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchSingleGif = (id, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setLoading(false);
    dispatch({
      type: FETCHGIFID,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
