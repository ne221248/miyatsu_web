import React, { useEffect, useRef } from 'react';
import { css } from '@emotion/css';
import { motion } from 'framer-motion';

const HybridScroll: React.FC = () => {
  const screenRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    screenRef.current!.onwheel = ev => {
        ev.preventDefault();

        let delta = (ev.deltaY / Math.abs(ev.deltaY)) * (window.innerWidth / 2); // Reduce the scroll amount by half
        if (delta > 0) {
            delta += screenRef.current!.scrollLeft;
            delta = Math.floor(delta / (window.innerWidth / 2)) * (window.innerWidth / 2);
        } else {
            delta += screenRef.current!.scrollLeft;
            delta = Math.ceil(delta / (window.innerWidth / 2)) * (window.innerWidth / 2);
        }
        screenRef.current!.scrollLeft = delta;
    };
}, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  return (
    <div ref={screenRef} className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.page('image/kawasaki.png')}>
            <div className={styles.text}>NENE KAWASAKI</div>
        </div>
        <div className={styles.page('image/ami.jpeg')}>
            <div className={styles.text}>AMI OKUZIMI</div>
        </div>
        <div className={styles.page('image/anna.jpeg')}>
            <div className={styles.text}>ANNA TOMINAGA</div>
        </div>
        <div className={styles.page('image/aoi.jpeg')}>
            <div className={styles.text}>AOI SUZUKI</div>
        </div>
        <div className={styles.page('image/nokiha.jpeg')}>
            <div className={styles.text}>NOKIHA YAMAGAMI</div>
        </div>
        <div className={styles.page('image/sota.jpeg')}>
            <div className={styles.text}>SOTA ASADA</div>
        </div>
        <div className={styles.page('image/yuto.jpeg')}>
            <div className={styles.text}>YUTO WADA</div>
        </div>
        <div className={styles.page('image/kazuma.jpeg')}>
            <div className={styles.text}>KAZUMA SAKAKIBARA</div>
        </div>
        <div className={styles.page('image/taiki.jpeg')}>
            <div className={styles.text}>TAIKI SUNADA</div>
        </div>
        <div className={styles.page('image/photo.jpeg')}>
            <div className={styles.text}>KAZUHIRO MIYASTU</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  screen: css`
    position: relative;
    width: 100vw;
    height: 50vh;
    overflow: auto;
    scroll-behavior: smooth;
  `,
  container: css`
    width: 300vw;
    height: 100%;
    display: flex;
  `,
  page: (bgImage: string) => css`
    position: relative;
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    overflow: hidden;
  `,
  text: css`
    font-size: 0.7rem;
    color: white;
    margin-bottom: 10px;
    text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000;
  `
};

export { HybridScroll };