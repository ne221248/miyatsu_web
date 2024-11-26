'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Globe, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function BlockPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const watchesRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [currentWatch, setCurrentWatch] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6], [1, 0, 0, 0])
  const secondSectionOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0])
  const thirdSectionOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0])
  const fourthSectionOpacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1])

  // Text animation effect
  const letters = "GO BEYOND".split("")
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const section = Math.floor(scrollPosition / windowHeight)
      setCurrentSection(section)

      if (watchesRef.current) {
        const watchesRect = watchesRef.current.getBoundingClientRect()
        const watchWidth = watchesRect.width / 9 // Assuming 9 watches
        const scrolledAmount = Math.max(0, watchesRect.top * -1)
        const newCurrentWatch = Math.min(8, Math.floor(scrolledAmount / watchWidth))
        setCurrentWatch(newCurrentWatch)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const watches = [
    { name: "PROMASTER MARINE", image: "/placeholder.svg?height=400&width=400" },
    { name: "PROMASTER SKY", image: "/placeholder.svg?height=400&width=400" },
    { name: "PROMASTER LAND", image: "/placeholder.svg?height=400&width=400" },
    { name: "PROMASTER TOUGH", image: "/placeholder.svg?height=400&width=400" },
    { name: "PROMASTER MECHANICAL DIVER", image: "/placeholder.svg?height=400&width=400" },
    { name: "PROMASTER AQUALAND", image: "/placeholder.svg?height=400&width=400" },
    { name: "PROMASTER ALTICHRON", image: "/placeholder.svg?height=400&width=400" },
    { name: "PROMASTER SKYHAWK", image: "/placeholder.svg?height=400&width=400" },
    { name: "PROMASTER NAVIHAWK", image: "/placeholder.svg?height=400&width=400" },
  ]

  return (
    <div ref={containerRef} className="h-[500vh] relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 text-white mix-blend-difference">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">PROMASTER ANNIVERSARY SPECIAL SITE</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: backgroundOpacity }}
        className="fixed inset-0 h-screen w-full"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"
          }}
        />
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center">
            <div className="mb-4 text-sm tracking-wider">PROMASTER 35th ANNIVERSARY</div>
            <div className="flex gap-4 text-[8vw] font-bold tracking-tight">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 0 }}
                  animate={{ 
                    y: currentSection === 0 ? Math.sin(index * 0.3) * 10 : 0,
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 2,
                    delay: index * 0.1
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <div className="mt-4 text-lg">想像のその先へ。</div>
          </div>
        </div>
      </motion.section>

      {/* Watch Section */}
      <motion.section
        style={{ opacity: secondSectionOpacity }}
        className="fixed inset-0 h-screen w-full bg-gray-900"
      >
        <div className="relative h-full flex items-center justify-center">
          <motion.div 
            className="text-white text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-8">PROFESSIONAL SPECIFICATIONS</h2>
            <div className="relative w-[80vw] h-[60vh] bg-contain bg-center bg-no-repeat"
                 style={{ backgroundImage: "url('/placeholder.svg?height=800&width=800')" }} />
          </motion.div>
        </div>
      </motion.section>

      {/* Adventure Section */}
      <motion.section
        style={{ opacity: thirdSectionOpacity }}
        className="fixed inset-0 h-screen w-full"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"
          }}
        />
        <div className="relative h-full flex items-center justify-center text-white">
          <motion.div 
            className="text-center"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-bold mb-4">CHALLENGE THE IMPOSSIBLE</h2>
            <p className="text-xl">Discover the spirit of adventure</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Watches Showcase Section */}
      <motion.section
        style={{ opacity: fourthSectionOpacity }}
        className="fixed inset-0 h-screen w-full bg-black"
      >
        <div className="relative h-full flex items-center overflow-hidden">
          <div ref={watchesRef} className="flex items-center space-x-[100vw]">
            {watches.map((watch, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-screen h-screen flex flex-col items-center justify-center text-white"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ 
                  opacity: currentWatch === index ? 1 : 0,
                  x: `${(index - currentWatch) * 100}%`
                }}
                transition={{ duration: 0.5 }}
              >
                <img src={watch.image} alt={watch.name} className="w-[60vmin] h-[60vmin] object-contain mb-8" />
                <h3 className="text-3xl font-bold">{watch.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}