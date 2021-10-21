import { useEffect, useState } from 'react';
import styles from './app.module.css';

import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }; //request option 전달하는 것

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []); //마운트 되었을 때만 호출
  return (
    <div className={styles.app}>
      <SearchHeader videos={videos} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
