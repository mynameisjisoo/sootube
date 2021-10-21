import React, { useEffect, useState } from 'react';
import VideoList from './video_list/video_list';

const Search = props => {
  const [videos, setVideos] = useState([]);
  const [result, setResult] = useState([]);

  const handleSearch = () => {};
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${props.keyword}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      {console.log(videos)}
      {/* <VideoList videos={videos} /> */}
    </>
  );
};

export default Search;
