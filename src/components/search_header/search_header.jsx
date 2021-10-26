import React, { memo } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch, getMostPopular }) => {
  const inputRef = React.useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const backToInitialScreen = () => {
    getMostPopular();
    inputRef.current.value = '';
  };

  return (
    <header className={styles.header}>
      <button className={styles.homeBtn} onClick={backToInitialScreen}>
        <img
          className={styles.logo}
          src='/images/logo.png'
          alt='youtube logo'
        />
        <h1 className={styles.title}>SooTube</h1>
      </button>
      <span className={styles.inputContainer}>
        <input
          ref={inputRef}
          className={styles.input}
          type='search'
          placeholder='Search anything you want'
          onKeyPress={onKeyPress}
        />
        <button className={styles.btn} type='submit' onClick={onClick}>
          <img
            className={styles.btnImg}
            src='/images/search.png'
            alt='search'
          />
        </button>
      </span>
      <a
        href='https://github.com/mynameisjisoo/youtube-clone'
        target='_blank'
        rel='noreferrer'
        className={styles.github}
      >
        <i className='fab fa-github'></i>
      </a>
    </header>
  );
});

export default SearchHeader;
