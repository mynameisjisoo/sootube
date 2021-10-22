import React from 'react';
import { useState } from 'react/cjs/react.development';
import VideoItem from '../video_item/video_item';
import VideoPlayer from '../video_play/video_player';
import styles from './video_list.module.css';

const VideoList = props => {
  const [src, setSrc] = useState([]);

  const handleSrc = videoSrc => {
    setSrc(videoSrc);
  };
  return (
    <div className={styles.container}>
      <div className={styles.videoPlayer}>
        <VideoPlayer src={src} />
      </div>
      <ul className={styles.videos}>
        {props.videos.map(video => (
          <VideoItem video={video} key={video.id} handleSrc={handleSrc} />
        ))}
      </ul>
    </div>
  );
};
export default VideoList;
