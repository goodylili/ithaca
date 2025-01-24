"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ProofCarousel() {
  const proofs = [
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

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {proofs.map((proof, index) => (
            <CarouselItem key={index}>
              <Card className="border border-white/10 bg-black">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="relative w-full aspect-[3/2] mb-4">
                    <Image src={proof.image || "/placeholder.svg"} alt={proof.title} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-mono mb-2">{proof.title}</h3>
                  <p className="text-white/70 font-mono text-sm">{proof.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-white/10" />
        <CarouselNext className="border-white/10" />
      </Carousel>
    </div>
  )
}

