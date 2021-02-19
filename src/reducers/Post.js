import ActionTypes from '../actions/PostActionTypes'

const postReducer = (state, { type, payload = {} }){
  switch (type) {
    case ActionTypes.test:
      return {
        ...state,
        test: 'yeaaaaaaaaah'
      }
  }
}

export default postReducer