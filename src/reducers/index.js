import postReducer from './Post'
import {combineReducers } from 'redux'

const allReducer = combineReducers ({
  post: postReducer
})


export default allReducer