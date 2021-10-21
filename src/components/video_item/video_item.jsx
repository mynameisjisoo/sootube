import React from 'react';
import styles from './video_item.module.css';
const VideoItem = ({ video: { snippet } }) => {
  //props안에있는 video를 바로 받아서 그 안의 snippet을 가져옴 (deconstructing)
  return (
    <li className={styles.video}>
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt='video thumbnail'
      />
      <div className={styles.metadata}>
        <p className={styles.title}> {snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

export default VideoItem;
