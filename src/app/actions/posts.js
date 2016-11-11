import * as api from 'app/api'
import {getPost} from 'app/reducers/posts'

export const FETCH_POST = 'posts/FETCH_POST'
export function fetchPost (fileName) {
  return (dispatch, getState) => {
    let postRecord = getPost(getState(), fileName)
    if (postRecord && postRecord.bodyHTML) return

    return dispatch({
      type: FETCH_POST,
      payload: api.getPost(fileName)
    })
  }
}

export const FETCH_POSTS = 'posts/FETCH_POSTS'
export function fetchPosts () {
  return (dispatch, getState) => {
    if (getState().posts.length) return

    return dispatch({
      type: FETCH_POSTS,
      payload: api.getPosts()
    })
  }
}
