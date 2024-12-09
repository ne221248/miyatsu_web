import { useRef, useState, useEffect } from "react";
import { css } from "@emotion/css";
import { motion, useInView } from "framer-motion"; // useInView をインポート
import { isMobile } from "react-device-detect";

const HybridScroll: React.FC = () => {
  const screenRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // アニメーションさせたい要素の ref

  const inView = useInView(containerRef, { once: true }); // 要素が表示されたかを監視
  const [isClientMobile, setIsClientMobile] = useState(false); //スマホ判定関数

  useEffect(() => {
    setIsClientMobile(isMobile);
    if (screenRef.current) {
      screenRef.current.onwheel = (ev) => {
        ev.preventDefault();
        let delta = (ev.deltaY / Math.abs(ev.deltaY)) * (window.innerWidth / 2);
        if (delta > 0) {
          delta += screenRef.current!.scrollLeft;
          delta =
            Math.floor(delta / (window.innerWidth / 2)) *
            (window.innerWidth / 2);
        } else {
          delta += screenRef.current!.scrollLeft;
          delta =
            Math.ceil(delta / (window.innerWidth / 2)) *
            (window.innerWidth / 2);
        }
        screenRef.current!.scrollLeft = delta;
      };
    }
  }, []);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  // 'animate-slide-top' クラスを条件付きで適用
  const containerClassName = `${
    isClientMobile ? mobileStyles.container : styles.container
  } ${inView ? "animate-slide-top" : ""}`;

  return (
    <div
      ref={screenRef}
      className={`${isClientMobile ? mobileStyles.screen : styles.screen}`}
    >
      <motion.div
      ref={containerRef} // ref を設定
      initial="hidden"
      animate={inView ? "visible" : "hidden"} // inView に基づいてアニメーションを制御
      variants={fadeIn}
      className={containerClassName} // 修正したクラス名を適用
      >
      <div
        className={
        isClientMobile
          ? mobileStyles.page("image/kawasaki.png")
          : styles.page("image/kawasaki.png")
        }
      >
        <div className={isClientMobile ? mobileStyles.text : styles.text}>
        NENE KAWASAKI
        </div>
      </div>
      <div
        className={
        isClientMobile
          ? mobileStyles.page("image/ami.jpeg")
          : styles.page("image/ami.jpeg")
        }
      >
        <div className={isClientMobile ? mobileStyles.text : styles.text}>
        AMI OKUZIMI
        </div>
      </div>
      <div
        className={
        isClientMobile
          ? mobileStyles.page("image/anna.jpeg")
          : styles.page("image/anna.jpeg")
        }
      >
        <div className={isClientMobile ? mobileStyles.text : styles.text}>
        ANNA TOMINAGA
        </div>
      </div>
      <div
        className={
        isClientMobile
          ? mobileStyles.page("image/aoi.jpeg")
          : styles.page("image/aoi.jpeg")
        }
      >
        <div className={isClientMobile ? mobileStyles.text : styles.text}>
        AOI SUZUKI
        </div>
      </div>
      <div
        className={
        isClientMobile
          ? mobileStyles.page("image/nokiha.jpeg")
          : styles.page("image/nokiha.jpeg")
        }
      >
        <div className={isClientMobile ? mobileStyles.text : styles.text}>
        NOKIHA YAMAGAMI
        </div>
      </div>
      <div
        className={
        isClientMobile
          ? mobileStyles.page("image/sota.jpeg")
          : styles.page("image/sota.jpeg")
        }
      >
        <div className={isClientMobile ? mobileStyles.text : styles.text}>
        SOTA ASADA
        </div>
      </div>
      <div
        className={
        isClientMobile
          ? mobileStyles.page("image/yuto.jpeg")
          : styles.page("image/yuto.jpeg")
        }
      >
        <div className={isClientMobile ? mobileStyles.text : styles.text}>
        YUTO WADA
        </div>
      </div>
      <div
        className={
        isClientMobile
          ? mobileStyles.page("image/kazuma.jpeg")
          : styles.page("image/kazuma.jpeg")
        }
      >
        <div className={isClientMobile ? mobileStyles.text : styles.text}>
        KAZUMA SAKAKIBARA
        </div>
      </div>
      <div
        className={
        isClientMobile
          ? mobileStyles.page("image/taiki.jpeg")
          : styles.page("image/taiki.jpeg")
        }
      >
        <div className={isClientMobile ? mobileStyles.text : styles.text}>
        TAIKI SUNADA
        </div>
      </div>
      <div
        className={
        isClientMobile
          ? mobileStyles.page("image/photo.jpeg")
          : styles.page("image/photo.jpeg")
        }
      >
        <div className={isClientMobile ? mobileStyles.text : styles.text}>
        KAZUHIRO MIYASTU
        </div>
      </div>
      </motion.div>
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
    text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
      0.5px 0.5px 0 #000;
  `,
};

const mobileStyles = {
  screen: css`
    position: relative;
    width: 100vw;
    height: 50vh;
    overflow: auto;
    scroll-behavior: smooth;
  `,
  container: css`
    width: 300%;
    height: 70%;
    display: flex;
  `,
  page: (bgImage: string) => css`
    position: relative;
    min-width: 60vw;
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
    text-shadow: -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000,
      0.5px 0.5px 0 #000;
  `,
};

export { HybridScroll };
