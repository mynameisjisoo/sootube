import React from 'react';
import styles from './video_detail.module.css';
const VideoDetail = ({ video, video: { snippet } }) => {
  window.scrollTo(0, 0);
  return (
    <section className={styles.detail}>
      <iframe
        className={styles.video}
        type='text/html'
        width='100%'
        height='500px'
        src={`https://www.youtube.com/embed/${video.id}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
      <h2 className={styles.title}>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
