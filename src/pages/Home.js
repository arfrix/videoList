import React, { useRef, useState } from 'react'
import './Home.css'
import VideoCard from '../common/components/text/card/VideoCard'
import {useSelector} from 'react-redux'


export default function Home() {
  const postStore = useSelector(state => state.post)

  const posts = postStore.posts.data


  const homeContainerRef = useRef()
  const [homeContainerScrollTop, setHomeContainerScrollTop] = useState(0)
  const setScrollTop = () => {
    setHomeContainerScrollTop(homeContainerRef.current.scrollTop)
  }
  return (
    <div className="home" onScroll={setScrollTop} ref={homeContainerRef}>
      {posts && posts.map((item, idx)=> <VideoCard data={item} key={idx} containerScrollTop={homeContainerScrollTop}/>)}
    </div>
  )
}
