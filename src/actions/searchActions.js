import {SEARCH_MOVIE,FETCH_MOVIES,LOADING} from './type';
import axios from 'axios';

import {APIKey} from '../APIKey'
export const searchMovie = text => dispatch => {

   dispatch({

    type : SEARCH_MOVIE,
    payload : text
   })
}
export const fetchmovies = text => dispatch => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
      .then(response =>
        dispatch({
          type: FETCH_MOVIES,
          payload: response.data
        })
      )
      .catch(err => console.log(err));
  };

export const setLoading = () => {

  return{

    type : LOADING,
  }
}