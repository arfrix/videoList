import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home'
import {Fetch} from './common/Server'
import {useSelector, useDispatch} from 'react-redux'
import ActionTypes from './actions/PostActionTypes'

function App() {

  const [data, setdata] = useState(null)
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

  const isPostLoading = postStore.postsLoading || !postStore.posts
  
  
  return (
    <div className="App">
      {isPostLoading ? <div>looooading</div> : <Home data={postStore.posts.data}/> }
    </div>
  );
}

export default App;
