import * as postsActions from 'app/actions/posts'

const defaultState = {
  data: {}
}

export default function posts (state = defaultState, action) {
  switch (action.type) {
    case `${postsActions.FETCH_POST}_PENDING`: return state
    case `${postsActions.FETCH_POST}_FULFILLED`: {
      return {
        data: {
          ...state.data,
          ...action.payload.entities.posts
        },
        isFulfilled: true
      }
    }
    case `${postsActions.FETCH_POST}_REJECTED`: {
      return {
        data: {
          ...state.data
        },
        isRejected: true,
        error: action.payload
      }
    }
    case `${postsActions.FETCH_POSTS}_PENDING`: return state
    case `${postsActions.FETCH_POSTS}_FULFILLED`: {
      return {
        data: {
          ...action.payload.entities.posts,
          ...state.data
        },
        isFulfilled: true
      }
    }
    case `${postsActions.FETCH_POSTS}_REJECTED`: {
      return {
        data: {
          ...state.data
        },
        isRejected: true,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export function getPostError ({posts}) {
  if (posts.isRejected) return posts.error
  return false
}

export function getPost ({posts}, postSlug) {
  return Object.assign({}, posts.data[postSlug])
}

export function getPosts ({posts}) {
  // TODO: improve code
  return Object.values(posts.data).map(p => p)
}
