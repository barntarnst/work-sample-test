import { BLOG_REQUEST, BLOG_SUCCESS, BLOG_FAILURE } from '../constants/ActionTypes';
import { BLOGS_URL } from '../api';


export const fetchBlogs = () => async (dispatch) => {
  dispatch({ type: BLOG_REQUEST });

  try {
    const blob = await fetch(BLOGS_URL);
    const data = await blob.json();
    console.log(' blogs results ', data);
    dispatch({ type: BLOG_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: BLOG_FAILURE,
      error,
    });
  }
};
