import React, { useEffect, useState } from 'react';
import VideoList from './video_list/video_list';

const Search = props => {
  const [videos, setVideos] = useState([]);

  const handleSearch = () => {};
  useEffect(() => {}, []);

  return (
    <>
      {console.log(videos)}
      {/* <VideoList videos={videos} /> */}
    </>
  );
};

export default Search;
