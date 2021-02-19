import React, { useEffect, useState } from 'react';
import './App.scss';
import Home from './pages/Home'
import {Fetch} from './common/Server'
import {useSelector, useDispatch} from 'react-redux'
import ActionTypes from './actions/PostActionTypes'

function App() {

  const postStore = useSelector(state => state.post)
  const dispatch = useDispatch()

  useEffect(async () => {
    dispatch({type: ActionTypes.GET_POSTS_REQUEST})
    const response = await Fetch()
    if(response){
      dispatch({type: ActionTypes.GET_POSTS_SUCCEED, payload: response})
    }else {
      dispatch({type: ActionTypes.GET_POSTS_FAILED})

    }


  }, [])

  const isLoading = postStore.postsLoading
  
  
  return (
    <div className="app">
      {isLoading ? <div className="app--loading">پستا دارن میان !!</div> : <Home /> }
    </div>
  );
}

export default App;
