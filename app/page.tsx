"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { FadeInBottom } from "@/components/ui/FadeInBottom";
import { HybridScroll } from "@/components/hybridScroll"; //ページ4用コンポーネント
import { useRef, useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { ActiveLog } from "@/components/active-log";

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
    title: "Message 1",
    number: "01",
    text: "This is the first message.",
    image: "image1.jpg",
  },
  {
    title: "Message 2",
    number: "02",
    text: "This is the second message.",
    image: "image2.jpg",
  },
  {
    title: "Message 3",
    number: "03",
    text: "This is the third message.",
    image: "image3.jpg",
  },
  {
    title: "Message 4",
    number: "04",
    text: "This is the fourth message.",
    image: "image4.jpg",
  },
];

//4ページ目

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
    ),
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
      className="h-[1000vh] relative overflow-hidden bg-black text-white"
    >
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 mix-blend-difference">
        <span className="text-sm font-medium">MIYATSU PROJECT WEB SITE</span>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
      
      {/* 1ページ目 */}
      {isClientMobile ? (  //スマホ表示画面
        <section className="h-screen relative flex justify-start p-8">
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            }}
          />
          <div className="relative z-10 text-left">
            <div className="mb-2 text-lg tracking-wider mt-96">
              MIYATSU PROJECT 2024
            </div>
            <FlickerText
              text="SENSHU-Z"
              className="text-[10vw] font-bold mb-2 leading-none"
            />
            <div className="text-lg">無限に広がるXの先へ。</div>
          </div>
        </section>
      ) : ( //pc表示画面
        <section className="h-screen relative flex items-end justify-start p-8">
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            }}
          />
          <div className="relative z-10 text-left">
            <div className="mb-2 text-lg tracking-wider">
              MIYATSU PROJECT 2024
            </div>
            <FlickerText
              text="SENSHU-Z"
              className="text-[10vw] font-bold mb-2 leading-none"
            />
            <div className="text-lg">無限に広がるXの先へ。</div>
          </div>
        </section>
      )}

      {/* 2ページ目 */}
      <div className="relative h-[400vh]">
        {/* 以下の機能は実装中 */}
        {/* {images.map((src, imgIndex) => (
          <motion.img
            key={imgIndex}
            src={src}
            alt={`Random image ${imgIndex}`}
            className="absolute"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              width: '200px',
              height: '200px',
              opacity: 0.7
            }}
          />
        ))} */}
        {messages.map((message, index) => (
          <motion.section
            key={index}
            className="h-screen relative flex items-center justify-center overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${message.image}')`,
                opacity: messageTransforms[index].opacity,
              }}
            />
            <motion.div
              style={{
                x: messageTransforms[index].x,
                y: messageTransforms[index].y,
                opacity: messageTransforms[index].opacity,
                scale: messageTransforms[index].scale,
              }}
              className="relative flex flex-col items-center justify-center text-center"
            >
              <h2 className="text-6xl font-bold mb-8">{message.title}</h2>
              <p className="text-2xl mb-2">{message.number}</p>
              <p className="text-2xl mb-2 whitespace-pre-line">
                {message.text}
              </p>
            </motion.div>
          </motion.section>
        ))}
      </div>
      {/* 2ページ目ここまでーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
      {/* 3ページ目始まり */}
      <motion.section className="h-screen relative flex items-center justify-center">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ top: "25%" }}
        >
          {/* 下に動画のリンクを挿入する */}
          <a href="https://shiratama-university.notion.site/620c677db5cd460cb92b0f9ed8d4275f">
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
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
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
      {/* 3ページ目終わり */}
      {/* 4ページ目 */}
      <HybridScroll/>
      {/* 5ページ目 */}
      <motion.section className="h-screen relative flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">CHALLENGE THE IMPOSSIBLE</h2>
          <FlickerText
            text="FINAL PRESENTATION"
            className="text-[4vw] font-bold justify-center"
          />
        </div>
      </motion.section>
      {/* 活動記録 */}
      <ActiveLog/>

      {/* フッター */}
      
    </div>
  );
}
