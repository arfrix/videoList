import React, { useEffect, useRef } from 'react'
import Text from '../common/Text'
import classNames from 'classnames'
import './Card.css'


export default function Card({data, containerScrollTop, key}) {
  const itemRef = useRef()
  const videoRef = useRef()
  const boxOffsetTop = itemRef.current ? itemRef.current.offsetTop : null
  const isBlue = (boxOffsetTop - containerScrollTop) > 200 && (boxOffsetTop - containerScrollTop) < 400
  const videoWidth = window.innerWidth - 20

  useEffect(() => {
    if(videoRef.current)
      videoRef.current.play()
  },[containerScrollTop])
  return (
    <div className={classNames('card',{"card--active":isBlue})} ref={itemRef} >
      <div className="card__media">
        {isBlue ? 
        (<video ref={videoRef} width={videoWidth} height="240" controls autoplay muted>
          <source src={data.attributes.preview_src} type="video/mp4"/>
        </video>
        ) : (
        <img className="card__media__cover" src={data.attributes.small_poster} />
        )}
      </div>
      <div className="card__info row">
        <img className="card__info__profilePic" src={data.attributes.profilePhoto} />
        <div className="card__info__videoDetails">
          <Text color="" size="">{data.attributes.title}</Text>
          <div className="row">
            <Text color="" size="">{data.attributes.sender_name}</Text>
            <Text color="" size="">{data.attributes.visit_cnt}</Text>
            <Text color="" size="">{data.attributes.sdate}</Text>
          </div>
        </div>
      </div>
    </div>
  )
}
