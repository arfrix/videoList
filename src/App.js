
import './App.css';
import Home from './pages/Home'
import {Fetch} from './common/Server'
import { useEffect, useState } from 'react';

function App() {

  const [data, setdata] = useState(null)

  useEffect(async () => {
    const response = await Fetch('http://api.aparat.com/fa/v1/video/video/mostViewedVideos')
    setdata(response)
  }, [])
  
  
  return (
    <div className="App">
      {data && <Home data={data.data}/> }
    </div>
  );
}

export default App;
