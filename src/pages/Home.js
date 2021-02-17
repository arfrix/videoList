import React, { useRef, useState } from 'react'
import './Home.css'
import VideoCard from '../components/Card'

export default function Home({data}) {

  const homeContainerRef = useRef()
  const [homeContainerScrollTop, setHomeContainerScrollTop] = useState(0)
  const setScrollTop = () => {
    console.log(window.innerHeight )
    setHomeContainerScrollTop(homeContainerRef.current.scrollTop)
  }
  return (
    <div className="home" onScroll={setScrollTop} ref={homeContainerRef}>
      {data.map((item, idx)=> <VideoCard data={item} key={idx} containerScrollTop={homeContainerScrollTop}/>)}
    </div>
  )
}
