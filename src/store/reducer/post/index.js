import { GET_POST, POST_LOADING } from "../../actions/actionTypes";

const initialState = {
  updating: false,
  games: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        games: action.payload,
      };
    case POST_LOADING:
      return {
        ...state,
        updating: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
