import React, { useRef, useState } from 'react'
import './Home.css'
import Box from '../components/Box'

export default function Home({data}) {
   console.log(data)
  // const data = [1,2,3,4,5,6,2,3,4,]
  const homeContainerRef = useRef()
  const [homeContainerScrollTop, setHomeContainerScrollTop] = useState(0)
  const setScrollTop = () => {
    console.log(window.innerHeight )
    setHomeContainerScrollTop(homeContainerRef.current.scrollTop)
  }
  return (
    <div className="home" onScroll={setScrollTop} ref={homeContainerRef}>
      {data.map((item, idx)=> <Box data={item} key={idx} containerScrollTop={homeContainerScrollTop}/>)}
    </div>
  )
}
