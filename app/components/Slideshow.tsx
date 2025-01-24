"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Trading Success 1",
      image: "/placeholder.svg?height=400&width=600",
      description: "6,000% ROI on Rootlets investment",
    },
    {
      title: "Trading Success 2",
      image: "/placeholder.svg?height=400&width=600",
      description: "1,052% ROI on Sui investment",
    },
    {
      title: "Trading Success 3",
      image: "/placeholder.svg?height=400&width=600",
      description: "300% ROI on Suilend strategy",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[16/9]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/75 p-2 md:p-4">
              <h3 className="text-base md:text-xl font-mono mb-1 md:mb-2">{slide.title}</h3>
              <p className="text-white/70 font-mono text-xs md:text-sm">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 flex gap-1 md:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

