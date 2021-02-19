
import './App.css';
import Home from './pages/Home'
import {Fetch} from './common/Server'
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import ActionTypes from './actions/PostActionTypes'

function App() {

  const [data, setdata] = useState(null)
  const postStore = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(async () => {
    const response = await Fetch('http://api.aparat.com/fa/v1/video/video/mostViewedVideos')
    setdata(response)
    dispatch({type: ActionTypes.test})
  }, [])
  
  
  return (
    <div className="App">
      {data && <Home data={data.data}/> }
    </div>
  );
}

export default App;
