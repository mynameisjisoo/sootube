import React, { useState } from 'react';
import Search from '../search';
import VideoList from '../video_list/video_list';
import styles from './search_header.module.css';

const SearchHeader = props => {
  const [keyword, setKeyword] = useState([]);

  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onSearch = () => {
    const input = inputRef.current.value;
    input && setKeyword(input);
    console.log(keyword);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.home}>
          <img
            className={styles.logo}
            src='images/logo.png'
            alt='youtube logo'
          />
          <a className={styles.title} href='#'>
            {/**button으로 바꿀까 */}
            SooTube
          </a>
        </div>
        <form ref={formRef} className={styles.form} onSubmit={onSearch}>
          <input
            ref={inputRef}
            className={styles.input}
            type='text'
            placeholder='검색'
          />
          <button className={styles.btn}>
            <img
              className={styles.btnImg}
              src='images/search.png'
              alt='search img'
            />
          </button>
        </form>
      </header>
      {{ keyword } === null ? (
        <VideoList videos={props.videos} />
      ) : (
        <Search keyword={keyword} />
      )}
    </>
  );
};

export default SearchHeader;
