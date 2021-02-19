import ActionTypes from '../actions/PostActionTypes'

const postReducer = (state = null, {type}) => {
  switch (type) {
    case ActionTypes.test:
      return {
        ...state,
        test: 'yeaaaaaaaaah'
      }
    default:
      return state
  }
}

export default postReducer