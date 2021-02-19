import ActionTypes from '../actions/PostActionTypes'


const initialState = {
  getPostLoading: false ,
  posts: null 
}


const postReducer = (state = initialState, {type, payload = {}}) => {
  switch (type) {
    case ActionTypes.GET_POSTS_REQUEST:
      return {
        ...state,
        postsLoading: true
      }
    case ActionTypes.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        postsLoading: false
      }
    case ActionTypes.GET_POSTS_FAILED:
      return {
        ...state,
        posts: null,
        postsLoading: false
      }
    default:
      return state
  }
}

export default postReducer