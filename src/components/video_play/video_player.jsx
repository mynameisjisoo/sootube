import React from 'react';

const VideoPlayer = props => {
  const videoSrc = `https://www.youtube.com/embed/${props.src}`;
  return (
    <iframe
      width='560'
      height='315'
      src={videoSrc}
      title='YouTube video player'
      frameborder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowfullscreen
    ></iframe>
  );
};

export default VideoPlayer;
