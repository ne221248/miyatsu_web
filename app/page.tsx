'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Globe, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FlickerText: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => {
  return (
    <div className={`flex justify-center gap-2 ${className}`}>
      {text.split("").map((letter: string, index: number) => (
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 0.6, delay: index * 0.1 }}
          className="text-5xl font-bold"
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

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const messageTransformX = useTransform(smoothProgress, [0.25, 0.5], ['0%', '50%'])
  const messageTransformY = useTransform(smoothProgress, [0.25, 0.5], ['0%', '50%'])
  const messageOpacity = useTransform(smoothProgress, [0.2, 0.25, 0.5, 0.55], [0, 1, 1, 0])

  const watchTranslateX = useTransform(smoothProgress, [0.5, 1], ['0%', '-800%'])

  const clipPath = useTransform(
    smoothProgress,
    [0.5, 0.75, 1],
    [
      'polygon(0% 100%, 0% 100%, 0% 100%)',
      'polygon(0% 100%, 100% 0%, 100% 100%)',
      'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)'
    ]
  )

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const watches = [
    { name: 'PROMASTER MARINE', image: '/placeholder.svg?height=400&width=400' },
    { name: 'PROMASTER SKY', image: '/placeholder.svg?height=400&width=400' },
    { name: 'PROMASTER LAND', image: '/placeholder.svg?height=400&width=400' },
    { name: 'PROMASTER TOUGH', image: '/placeholder.svg?height=400&width=400' },
    { name: 'PROMASTER MECHANICAL DIVER', image: '/placeholder.svg?height=400&width=400' },
    { name: 'PROMASTER AQUALAND', image: '/placeholder.svg?height=400&width=400' },
    { name: 'PROMASTER ALTICHRON', image: '/placeholder.svg?height=400&width=400' },
    { name: 'PROMASTER SKYHAWK', image: '/placeholder.svg?height=400&width=400' },
  ]

  return (
    <div ref={containerRef} className="h-[400vh] relative overflow-hidden bg-black text-white">
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

      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"
          }}
        />
        <div className="relative text-center z-10">
          <div className="mb-4 text-sm tracking-wider">MIYATSU PROJECT 2024</div>
          <FlickerText text="SENSHU-Z" className="text-[8vw] mb-4" />
          <div className="text-lg">無限に広がるXの先へ。</div>
        </div>
      </section>

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

      <motion.section className="h-screen relative flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            clipPath
          }}
        />
        <motion.div
          className="flex items-center space-x-[100vw]"
          style={{ x: watchTranslateX }}
        >
          {watches.map((watch, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={watch.image} alt={watch.name} className="w-[60vmin] h-[60vmin] object-contain mb-8" />
              <h3 className="text-3xl font-bold">{watch.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="h-screen relative flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8">CHALLENGE THE IMPOSSIBLE</h2>
          <FlickerText text="FINAL PRESENTATION" />
        </div>
      </motion.section>
    </div>
  )
}