import { GET_POST, POST_LOADING } from "../actionTypes";
import axios from "axios";
import { API_URL } from "../../../utility/constants.json";

export const setPost = (payload) => ({
  type: GET_POST,
  payload,
});

export const setPostsIsLoading = (payload) => {
  return {
    type: POST_LOADING,
    payload,
  };
};

export const getListGames = (platform, category) => {
  return (dispatch) => {
    dispatch(setPostsIsLoading(true));
    return axios
      .get(`${API_URL}?platform=${platform ? `${platform}` : `all`}&category=${category ? `${category}` : 'shooter'}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setPost(response.data));
          dispatch(setPostsIsLoading(false));
        }
      })
      .catch((error) => {
        console.warn(error);
        dispatch(setPostsIsLoading(false));
      });
  };
};
