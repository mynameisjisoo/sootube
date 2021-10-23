import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const search = query => {
    youtube
      .search(query) //
      .then(videos => setVideos(videos))
      .catch(error => console.log('error', error)); //Error처리는 서비스 API를 소비하는 쪽에서 하는것이 좋음
    setSelectedVideo(null);
  };

  const getMostPopular = () => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos))
      .catch(error => console.log('error', error));
    console.log('home');
  };

  useEffect(() => getMostPopular(), []); //마운트 되었을 때만 호출
  // useEffect(() => {
  //   youtube //
  //     .mostPopular() //
  //     .then(videos => setVideos(videos))
  //     .catch(error => console.log('error', error));
  // }
  // , []); //마운트 되었을 때만 호출

  return (
    <div className={styles.app}>
      <SearchHeader
        onSearch={search}
        getMostPopular={getMostPopular}
        resetSelectVideo={selectVideo}
      />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            className={styles.videoList}
            videos={videos}
            onVideoClick={selectVideo}
            display={selectVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
