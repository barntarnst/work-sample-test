import { BLOGS_URL } from 'api';
import { BLOG_FAILURE, BLOG_REQUEST, BLOG_SUCCESS } from './ActionTypes';

// TODO: refactor the sorting functions
export const fetchBlogs = () => async (dispatch) => {
//  dispatching BLOG_REQUEST
  dispatch({ type: BLOG_REQUEST });

  try {
    const blob = await fetch(BLOGS_URL);
    const data = await blob.json();

    const newDate = [...data];
    newDate.sort((a, b) => {
      const dateA = a.title.rendered.substring(0, 10);
      const dateB = b.title.rendered.substring(0, 10);
      if (dateA < dateB) { return -1; }
      if (dateA > dateB) { return 1; }
      return 0;
    });
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
