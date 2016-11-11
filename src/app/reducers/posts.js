import * as postsActions from 'app/actions/posts'

export default function posts (state = [], action) {
  switch (action.type) {
    case `${postsActions.FETCH_POST}_FULFILLED`: {
      let postRecord = state.find((p) => p.frontMatter.slug === action.payload.frontMatter.slug)
      let postIndex = state.indexOf(postRecord)

      if (postIndex < 0) return [...state]

      return [
        ...state.slice(0, postIndex),
        {
          ...state[postIndex],
          ...action.payload
        },
        ...state.slice(postIndex + 1)
      ]
    }
    case `${postsActions.FETCH_POSTS}_FULFILLED`: {
      return [
        ...state,
        ...action.payload
      ]
    }
    default: {
      return state
    }
  }
}

export function getPost (state, postSlug) {
  return state.posts.find((p) => p.frontMatter.slug === postSlug)
}

export function getPosts (state) {
  return [...state.posts]
}
