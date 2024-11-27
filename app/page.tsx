'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Globe, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HybridScroll } from '@/components/hybridScroll' //ページ4用コンポーネント
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

<<<<<<< HEAD
// １ページ目用
=======
// １ページ目テキストエフェクト
>>>>>>> a22a106 (feat: page2prefin)
const FlickerText: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => {
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

<<<<<<< HEAD
=======
// 2ページ目のテキスト内容
const messages = [
  { title: 'Message 1', number: '01', text: 'This is the first message.', image: 'image1.jpg' },
  { title: 'Message 2', number: '02', text: 'This is the second message.', image: 'image2.jpg' },
  { title: 'Message 3', number: '03', text: 'This is the third message.', image: 'image3.jpg' },
  { title: 'Message 4', number: '04', text: 'This is the fourth message.', image: 'image4.jpg' }
];

//2ページ目で使用する画像
const images = [
  'image/kawasaki.png?height=400&width=400',
  'image/nokiha.png?height=400&width=400',
  'image/aoi.png?height=400&width=400',
  'image/souta.png?height=400&width=400',
  'image/kazuma.png?height=400&width=400'
];


>>>>>>> a22a106 (feat: page2prefin)
export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

<<<<<<< HEAD
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.5,
=======
  //スクロールに対するアニメーションの制御関数
  const smoothProgress = useSpring(scrollYProgress, {
    //mass: 0.5,
>>>>>>> a22a106 (feat: page2prefin)
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  })

<<<<<<< HEAD
  const messageTransformX = useTransform(smoothProgress, [0.25, 0.5], ['0%', '50%'])
  const messageTransformY = useTransform(smoothProgress, [0.25, 0.5], ['0%', '50%'])
  const messageOpacity = useTransform(smoothProgress, [0.2, 0.25, 0.5, 0.55], [0, 1, 1, 0])

  const watchTranslateX = useTransform(smoothProgress, [0.5, 1], ['0%', '-800%'])

  //2ページ目で使用する関数
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]
  
  const messages = [
    "First Message: Your Project's Vision",
    "Second Message: Core Values",
    "Third Message: Innovation",
    "Fourth Message: Future Goals"
  ]

  const backgrounds = [
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920"
  ]
  //2ページ目ここまで
=======
  // //2ページ目のスクロールアニメーションの制御関数:山上
  const messageTransforms = messages.map((_, index) => ({
    x: useTransform(smoothProgress, [index * 0.05, (index + 1) * 0.1], ['-100%', '0%']),
    y: useTransform(smoothProgress, [index * 0.05, (index + 1) * 0.1], ['0%', '0%']),
    opacity: useTransform(smoothProgress, [index * 0.05, index * 0.1, (index + 1) * 0.1, (index + 1) * 0.125], [0, 1, 1, 0]),
    scale: useTransform(smoothProgress, [index * 0.05, (index + 1) * 0.1], [0.8, 1])
  }))
  // 縦スクロールが始まるタイミングを遅らせる
  const clipPath = useTransform(
    smoothProgress,
    [0.9, 0.95, 1],
    [
      'polygon(0% 100%, 0% 100%, 0% 100%)',
      'polygon(0% 100%, 100% 0%, 100% 100%)',
      'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)'
    ]
  )
  
  const watchTranslateX = useTransform(smoothProgress, [0.5, 1], ['0%', '-800%'])

>>>>>>> a22a106 (feat: page2prefin)
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

<<<<<<< HEAD
=======
  const watches = [
    { name: 'NENE KAWASAKI', image: 'image/kawasaki.png?height=400&width=400' },
    { name: 'AMI OKUZUMI', image: 'image/ami.jpeg?height=400&width=400' },
    { name: 'ANNA TOMINAGA', image: 'image/anna.jpeg?height=400&width=400' },
    { name: 'AOI SUZUKI', image: 'image/aoi.jpeg?height=400&width=400' },
    { name: 'NOKIHA YAMAGAMI', image: 'image/nokiha.jpeg?height=400&width=400' },
    { name: 'SOTA ASADA', image: 'image/sota.jpeg?height=400&width=400' },
    { name: 'YUTO WADA', image: 'image/yuto.jpeg?height=400&width=400' },
    { name: 'TAIKI SUNADA', image: 'image/taiki.jpeg?height=400&width=400' },
    { name: 'KAZUMA SAKAKIBARA', image: 'image/kazuma.jpeg?height=400&width=400' },
    { name: 'KAZU MIYATSU', image: 'image/photo.jpeg?height=400&width=400' },
  ]

>>>>>>> a22a106 (feat: page2prefin)
  return (
    <div ref={containerRef} className="h-[1000vh] relative overflow-hidden bg-black text-white">
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

      <section className="h-screen relative flex items-end justify-start p-8">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"
          }}
        />
        <div className="relative z-10 text-left">
<<<<<<< HEAD
          <div className="text-[2vw] font-bold mb-2 leading-none">MIYATSU PROJECT 2024</div>
          <FlickerText text="SENSHU-Z" className="text-[10vw] font-bold mb-2 leading-none" />
          <div className="text-[2vw] font-bold mb-2 leading-none">無限に広がるXの先へ。</div>
        </div>
      </section>

      {/* 2ページ目 */}
      2ページ目
      


      <motion.section className="h-screen relative flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            opacity: messageOpacity
          }}
        />
        <motion.div
          style={{
            x: messageTransformX,
            y: messageTransformY,
            opacity: messageOpacity
          }}
          className="relative text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.h2 className="text-6xl font-bold mb-8" variants={fadeIn}>CHARMS</motion.h2>
          <motion.p className="brand-message text-2xl mb-2" variants={fadeIn}>01</motion.p>
          <motion.p className="brand-message text-2xl mb-2" variants={fadeIn}>ChatGPTを活用した<br></br>AIが必ず応答し、<br></br>迅速かつ具体的に<br></br>質問に答える。</motion.p>
        </motion.div>
      </motion.section>
=======
          <div className="mb-2 text-lg tracking-wider">MIYATSU PROJECT 2024</div>
          <FlickerText text="SENSHU-Z" className="text-[10vw] font-bold mb-2 leading-none" />
          <div className="text-lg">無限に広がるXの先へ。</div>
        </div>
      </section>

   {/* 2ページ目 */}
     <div className="relative h-screen">
        {images.map((src, imgIndex) => (
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
        ))}
        {messages.map((message, index) => (
          <motion.section
            key={index}
            className="h-screen relative flex items-center justify-center overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${message.image}')`,
                opacity: messageTransforms[index].opacity
              }}
            />
            <motion.div
              style={{
                x: messageTransforms[index].x,
                y: messageTransforms[index].y,
                opacity: messageTransforms[index].opacity,
                scale: messageTransforms[index].scale
              }}
              className="relative flex flex-col items-center justify-center text-center"
            >
              <h2 className="text-6xl font-bold mb-8">{message.title}</h2>
              <p className="text-2xl mb-2">{message.number}</p>
              <p className="text-2xl mb-2 whitespace-pre-line">{message.text}</p>
            </motion.div>
          </motion.section>
        ))}
      </div>

       {/* 2ページ目ここまでーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
>>>>>>> a22a106 (feat: page2prefin)


      {/* 3ページ目始まり */}
      3ページ目
      <motion.section className="h-screen relative flex items-center justify-center">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ top: '25%' }}
        >
          {/* 下に動画のリンクを挿入する */}
          <a href="https://shiratama-university.notion.site/620c677db5cd460cb92b0f9ed8d4275f">
            <motion.div
<<<<<<< HEAD
              className="w-[35vw] h-[35vw] rounded-full border-4 border-white flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
=======
              key={index}
              className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50 }}
>>>>>>> a22a106 (feat: page2prefin)
            >
              <motion.div
                className="w-[32vw] h-[32vw] rounded-full border-4 border-white flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white text-2xl">PLAY MOVIE▶︎</span>
              </motion.div>
            </motion.div>
          </a>
        </div>
      </motion.section>


      <section id="sec-movie" className="appsec on_anim current on_anim_hover flex justify-between items-center">
        <div className="relative z-10 text-left">
          <div className="mb-2 text-lg tracking-wider">MIYATSU PROJECT 2024</div>
          <FlickerText text="PROJECT MOVIE" className="text-[6vw] font-bold mb-2 leading-none" />
          <div className="text-lg">プロジェクトムービー</div>
        </div>
          <div className="relative z-10 text-center text-2xl font-semibold">
          <span>宮津プロジェクトの活動を動画にまとめました!!!!</span>
          </div>
      </section>
      {/* 3ページ目終わり */}


      {/* 4ページ目 */}
      <HybridScroll />

      <motion.section className="h-screen relative flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">CHALLENGE THE IMPOSSIBLE</h2>
          <FlickerText text="FINAL PRESENTATION" className="text-[5vw] font-bold" />
        </div>
      </motion.section>

      {/* Page 5 */}
      <motion.section className="h-screen flex flex-col items-center justify-center bg-black">
        <h2 className="text-4xl font-bold text-white mb-4">Explore the Active Log</h2>
        <iframe
          src="https://docs.craft.do/editor/d/df78fd0b-f354-f962-1d12-144f3b47b3b9/439C1F1E-A738-4A91-81AE-4CF64611FE83?s=W6NcAP3oXvgQ6sRHVTGgo9NTS6iJx66KbpZUh6uBGdhi"
          title="Craft Embed"
          className="w-[90%] h-[70vh] border-2 border-white rounded-lg"
        ></iframe>
      </motion.section>
    </div>
  );
}
