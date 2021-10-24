import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({ youtube }) {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const search = query => {
    setLoading(true);
    youtube
      .search(query) //
      .then(videos => {
        setVideos(videos);
        setLoading(false);
      })
      .catch(error => console.log('error', error)); //Error처리는 서비스 API를 소비하는 쪽에서 하는것이 좋음
    setSelectedVideo(null);
  };

  const getMostPopular = () => {
    setLoading(true);
    youtube
      .mostPopular() //
      .then(videos => {
        setVideos(videos);
        setLoading(false);
      })
      .catch(error => console.log('error', error));
  };

  useEffect(() => getMostPopular(), []); //마운트 되었을 때만 호출

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <SearchHeader
          onSearch={search}
          getMostPopular={getMostPopular}
          resetSelectVideo={selectVideo}
        />
      </div>
      {loading ? (
        <div className={styles.loading}>
          <img
            className={styles.loadingImg}
            src='/images/loading_img.jpg'
            alt='loading'
          />
        </div>
      ) : (
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
              display={selectedVideo ? 'list' : 'grid'}
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
