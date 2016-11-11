import * as postsActions from 'app/actions/posts'

export default function posts (state = {}, action) {
  switch (action.type) {
    case `${postsActions.FETCH_POST}_FULFILLED`: {
      return {
        ...state,
        ...action.payload.entities.posts
      }
    }
    case `${postsActions.FETCH_POSTS}_FULFILLED`: {
      return {
        ...action.payload.entities.posts,
        ...state
      }
    }
    default: {
      return state
    }
  }
}

export function getPost (state, postSlug) {
  return Object.assign({}, state.posts[postSlug])
}

export function getPosts (state) {
  // TODO: improve code
  return Object.values(state.posts).map(p => p)
}
