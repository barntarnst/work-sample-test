import { BLOGS_URL } from 'api';
import { BLOG_FAILURE, BLOG_REQUEST, BLOG_SUCCESS } from './ActionTypes';

export const fetchBlogs = () => async (dispatch) => {
//  dispatching BLOG_REQUEST
  dispatch({ type: BLOG_REQUEST });
  try {
    const blob = await fetch(BLOGS_URL);
    const data = await blob.json();
    // dispatching  BLOG_SUCCESS
    dispatch({ type: BLOG_SUCCESS, payload: data });
  } catch (error) {
    // dispatching BLOG_FAILURE
    dispatch({
      type: BLOG_FAILURE,
      error,
    });
  }
};
