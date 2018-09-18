import { BLOG_FAILURE, BLOG_REQUEST, BLOG_SUCCESS } from './actions/ActionTypes';

const initialState = {
  isFetching: false,
  error: null,
  blogs: null,
};


export default (store = initialState, action={}) => {
  switch (action.type) {
    case BLOG_REQUEST:
      return { ...store, isFetching: true, error: null };

    case BLOG_SUCCESS:
      return { ...store, isFetching: false, blogs: action.payload,error: null };

    case BLOG_FAILURE:
      return { ...store, isFetching: false, error: action.error };

    default:
      return store;
  }
};
