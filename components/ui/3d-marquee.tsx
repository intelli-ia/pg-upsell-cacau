'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ThreeDMarqueeProps {
  images?: string[]
  className?: string
}

const ThreeDMarquee = ({ images = [], className }: ThreeDMarqueeProps) => {
  const chunkSize = Math.ceil(images.length / 3)
  const chunks = Array.from({ length: 3 }, (_, colIndex) => {
    const start = colIndex * chunkSize
    return images.slice(start, start + chunkSize)
  })

  return (
    <div className={cn('relative mx-auto block h-[480px] w-full overflow-hidden', className)}>

      {/* Gradient edges */}
      <div className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(to right, #161616 0%, transparent 10%, transparent 90%, #161616 100%),
            linear-gradient(to bottom, #161616 0%, transparent 10%, transparent 90%, #161616 100%)
          `,
        }}
      />

      <div className="flex size-full items-center justify-center">
        <div className="aspect-square w-[900px] shrink-0 scale-105">
          <div
            style={{ transform: 'rotateX(45deg) rotateY(0deg) rotateZ(45deg)', transformStyle: 'preserve-3d' }}
            className="relative top-0 right-[-55%] grid size-full origin-top-left grid-cols-3 gap-4"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.figure
                animate={{ y: colIndex % 2 === 0 ? 70 : -70 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 12 : 18,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
                }}
                key={colIndex + 'marquee'}
                className="flex flex-col items-start gap-4"
              >
                {subarray.map((src, imageIndex) => (
                  <div key={imageIndex + src} className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={src}
                      alt={`Aula CORC ${imageIndex + 1}`}
                      fill
                      className="object-cover select-none"
                      draggable={false}
                      sizes="200px"
                    />
                  </div>
                ))}
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeDMarquee
