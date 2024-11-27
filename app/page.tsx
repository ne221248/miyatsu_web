'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Globe, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HybridScroll } from '@/components/hybridScroll' //ページ4用コンポーネント
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// １ページ目用
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

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.5,
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  })

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
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

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
              className="w-[35vw] h-[35vw] rounded-full border-4 border-white flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
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
