import { useEffect, useState } from 'react';
import styles from './app.module.css';

import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoPlayer from './components/video_play/video_player';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos))
      .catch(error => console.log('error', error)); //Error처리는 서비스 API를 소비하는 쪽에서 하는것이 좋음
  };

  useEffect(() => {
    youtube //
      .mostPopular() //
      .then(videos => setVideos(videos))
      .catch(error => console.log('error', error));
  }, []); //마운트 되었을 때만 호출
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList className={styles.videoList} videos={videos} />
    </div>
  );
}

export default App;
