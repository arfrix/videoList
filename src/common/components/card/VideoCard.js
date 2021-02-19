import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import Text from '../text/Text'
import classNames from 'classnames'
import './VideoCard.scss'


export default function VideoCard({data, containerScrollTop}) {
  const cardRef = useRef()
  const videoRef = useRef()
  const cardOffsetTop = cardRef.current ? cardRef.current.offsetTop : null
  const isOnProperPlaceToPlay = (cardOffsetTop - containerScrollTop) > 200 && (cardOffsetTop - containerScrollTop) < 400
  const videoWidth = window.innerWidth - 20

  useEffect(() => {
    // for those browsers that can not support autoplay
    if(videoRef.current)
      videoRef.current.play()
  },[containerScrollTop])
  return (
    <div className={classNames('card',{"card--active":isOnProperPlaceToPlay})} ref={cardRef} >
      <div className="card__media">
        {isOnProperPlaceToPlay ? 
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


VideoCard.propTypes = {
  data: PropTypes.object.isRequired,
  containerScrollTop: PropTypes.number.isRequired,
};
