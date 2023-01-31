export const ACTION_TYPES = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_ERROR",
  };
export const INITIAL_STATE = {
    loading: false,
    posts: [],
    error: false,
  };  
  export const Reducer = (state:any, action:any) => {
    switch (action.type) {
      case ACTION_TYPES.FETCH_START:
        return {
          loading: true,
          error: false,
          posts: []
        };
      case ACTION_TYPES.FETCH_SUCCESS:
        return {
          ...state,
          loading: false,
          posts: action.payload,
         
        };
      case ACTION_TYPES.FETCH_ERROR:
        return {
          error: true,
          loading: false,
          posts: [],
        };
      default:
        return state;
    }
  };