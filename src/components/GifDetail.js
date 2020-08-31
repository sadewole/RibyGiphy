import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleGif } from '../store/actions/giffyAction';

const GifDetail = () => {
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(fetchSingleGif(id));
  }, [dispatch, id]);

  return <div>Got here</div>;
};

export default GifDetail;
