"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { ActiveLog } from "@/components/active-log";
import { Title } from "@/components/title";
import { HybridScroll } from "@/components/hybridScroll"; //ページ4用コンポーネント
import { LogoLink } from "@/components/logo-link";
import { Footer } from "@/components/shared/footer"; //フッター用コンポーネント
import { Header } from "@/components/shared/header"; //ヘッダー用コンポーネント
import LogoAnimation from "@/components/logo-animation";

// テキストエフェクト
const FlickerText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap justify-start gap-2 ${className}`}>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

// 2ページ目のテキスト内容
const messages = [
  {
    title: "専大限定の『安心』『特別感』",
    text: "専修Zは専大生のみのクローズドなSNSです。だからこそ、安心して気軽に交流できるのが魅力です。"
  },
  {
    title: "新しい交流の場",
    text: "専修Zは専大生なら誰でも利用可能！学部やキャンパスを超えて、学内であれば誰とでも交流のチャンスがあります"
  },
  {
    title: "AIで専修大学の『今』がわかる！",
    text: "専修ZにはAIが搭載されており、投稿やメッセージからトレンドや学生の関心を分析します。"
  },
  {
    title: "スマホでも手軽に使える便利さ！",
    text: "専修Zは、ネイティブアプリのように利用可能です。手軽にアクセスできるので、忙しい大学生活の合間にも最適です。"
  },
];

const images = [
  { image: "./poster/01.png", top: 2, left: 10, width: 200,height: 200, opacity: 1},
  { image: "./poster/02.png", top: 30, left: 70, width: 200,height: 200, opacity: 1},
  { image: "./poster/03.png", top: 50, left: 20, width: 200,height: 200, opacity: 1},
  { image: "./poster/04.png", top: 78, left: 70, width: 200,height: 200, opacity: 1},
  { image: "./poster/chat.png", top: 40, left: 70, width: 180,height: 200, opacity: 1},
  { image: "./poster/chatgpt.png", top: 70, left: 20, width: 180,height: 200, opacity: 1},
  { image: "./poster/craft.png", top: 20, left: 20, width: 180,height: 200, opacity: 1},
  { image: "./poster/home.png", top: 5, left: 80, width: 180,height: 200, opacity: 1},
  { image: "./poster/instagram.png", top: 92, left: 70, width: 180,height: 200, opacity: 1},
  { image: "./poster/profile.png", top: 42, left: 10, width: 180,height: 200, opacity: 1},
  { image: "./poster/review.png", top: 66, left: 80, width: 180,height: 200, opacity: 1},
  { image: "./poster/senshu-z.png", top: 95, left: 20, width: 180, height: 200, opacity: 1},
];

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  //スクロールに対するアニメーションの制御関数
  const smoothProgress = useSpring(scrollYProgress, {
    //mass: 0.5,
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  /* eslint-disable react-hooks/rules-of-hooks */
  const messageTransforms = messages.map((_, index) => ({
    x: useTransform(
      smoothProgress,
      [index * 0.05, (index + 1) * 0.1],
      ["-100%", "0%"]
    ),
    y: useTransform(
      smoothProgress,
      [index * 0.05, (index + 1) * 0.1],
      ["0%", "0%"]
    ),
    
    opacity: useTransform(
      smoothProgress,
      [index * 0.05, index * 0.1, (index + 1) * 0.1, (index + 1) * 0.125],
      [0, 1, 1, 0]
    ),

    scale: useTransform(
      smoothProgress,
      [index * 0.05, (index + 1) * 0.1],
      [0.8, 1]
    )
  }));
  /* eslint-enable react-hooks/rules-of-hooks */

  // 4ページ目のアニメーション制御関数


  // スマホ判定関数
  const [isClientMobile, setIsClientMobile] = useState(false);

  useEffect(() => {
    setIsClientMobile(isMobile);
  }, []);

  return (
    
    <div
      ref={containerRef}
      className="flex flex-col min-h-screen bg-black text-white absolute z-0"
      id="top"
    > 
    {/* Add LogoAnimation to the background */}
    <LogoAnimation />

      {/* ヘッダー */}
      <Header />
      
      {/* 1ページ目 */}
      <Title />

      {/* 2ページ目 */}
      <div id="about"></div>
      <div className="relative h-[400vh]">
        
        {images.map((img, index) => (
          <motion.img
            key={index}
            id={index === 1 ? "second-image" : undefined}
            src={img.image}
            alt={`Random image ${index}`}
            className="absolute"
            style={isClientMobile?
              {top: `${img.top}%`,left: `${img.left}%`,width: `${img.width* 0.5}px`,height: `${img.height * 0.5}px`,}:
              {top: `${img.top}%`,left: `${img.left}%`,width: `${img.width}px`,height: `${img.height}px`,}
            }
          />
        ))}
        {messages.map((message, index) => (
          <motion.section
            key={index}
            className="h-screen relative flex items-center justify-center overflow-hidden"
          >
            <motion.div
              style={{
                x: messageTransforms[index].x,
                y: messageTransforms[index].y,
                opacity: messageTransforms[index].opacity,
                scale: messageTransforms[index].scale,
              }}
              className="relative flex flex-col items-center justify-center text-center max-w-screen-md mx-auto"
            >
              <h2 className={isClientMobile ?
                "text-2xl font-bold mb-8" :
                "text-5xl font-bold mb-8"}
              >{message.title}
              </h2>
              <p className={isClientMobile?
                "text-1xl mb-2 whitespace-pre-line" :
                "text-2xl mb-2 whitespace-pre-line"}
              >{message.text}
              </p>
            </motion.div>
          </motion.section>
        ))}
      </div>
      {/* 2ページ目ここまでーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
      {/* 3ページ目始まり */}
      <motion.section className={` ${isClientMobile ? 'h-96' : 'h-screen'} relative flex items-center justify-center`}>
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ top: "25%" }}
          id = "movie"
        >
          {/* 下に動画のリンクを挿入する */}
          <a href="https://youtu.be/WjucAKe-0hI" target="_blank">
            <motion.div
              className="w-[35vw] h-[35vw] rounded-full border-4 border-white flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
                <motion.div
                className="w-[32vw] h-[32vw] rounded-full border-4 border-white flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                >
                <span className={`text-white ${isClientMobile ? 'text-sm' : 'text-2xl'}`}>PLAY MOVIE▶︎</span>
                </motion.div>
            </motion.div>
          </a>
        </div>
      </motion.section>
      <section className={`${isClientMobile ? 'h-80' : 'h-screen'} relative flex items-center justify-center`}>
        <div className="absolute inset-0" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          }}
        />
        <div className="relative text-center z-10">
          <div className="mb-2 text-sm tracking-wider">
            MIYATSU PROJECT 2024
          </div>
          <FlickerText
            text="THE BEST MEMBERS"
            className="text-[6vw] font-bold mb-2"
          />
          <div className="text-lg">最高の仲間たち。</div>
        </div>
      </section>
      <div id="member"></div>

      {/* 4ページ目 */}
      <HybridScroll/>

      {/* 5ページ目 */}
      <section className="h-96 relative flex items-center justify-center">
        
      </section>
      {/* 活動記録 */}
      <div id="ActiveLog">
      <ActiveLog/>  
      </div>

      {/* instagram & github */}
      <LogoLink />

      {/* フッター */}
      <Footer />
      <div id="contact"></div>
    </div>
  );
}
