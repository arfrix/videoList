import React, { useEffect, useRef } from 'react'
import './Box.css'
export default function Box({data, containerScrollTop, key}) {
  const itemRef = useRef()
  const videoRef = useRef()
  const boxOffsetTop = itemRef.current ? itemRef.current.offsetTop : null
  const isBlue = (boxOffsetTop - containerScrollTop) > 200 && (boxOffsetTop - containerScrollTop) < 400

  useEffect(() => {
    if(videoRef.current)
      videoRef.current.play()

      

  },[containerScrollTop])
  return (
    <div className="box" ref={itemRef} style={{backgroundColor: isBlue ? 'blue' : null}}>
      {isBlue ? 
      (<video ref={videoRef} width="320" height="240" controls>
        <source src={data.attributes.preview_src} type="video/mp4"/>
      </video>
      ) : (
      <img src={data.attributes.small_poster} />
      )}
    </div>
  )
}
