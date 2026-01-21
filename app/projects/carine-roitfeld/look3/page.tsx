'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

export default function Look3Page() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    '/look3a.jpg',
    '/look3b.jpg',
    '/look3c.jpg',
    '/look3d.jpg',
    '/look3e.jpg',
    '/look3f.jpg',
    '/look3g.jpg',
    '/look3h.jpg',
  ]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/projects/carine-roitfeld" 
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wide">Back to Look Gallery</span>
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm tracking-widest text-rose uppercase mb-4">Look 3</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
            Modern Feminine Authority
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            A comprehensive gallery of the third look styling variations
          </p>
        </div>
      </section>

      {/* Main Image Gallery */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[3/4] bg-surface mb-8 overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt={`Look 3 - Image ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <button
              onClick={goToPrevious}
              className="p-3 text-foreground hover:text-rose transition-colors border border-foreground/20 hover:border-rose"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 text-center">
              <p className="text-sm tracking-widest text-foreground/70 uppercase mb-4">
                {currentIndex + 1} / {images.length}
              </p>
            </div>

            <button
              onClick={goToNext}
              className="p-3 text-foreground hover:text-rose transition-colors border border-foreground/20 hover:border-rose"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-[3/4] overflow-hidden transition-all ${
                  idx === currentIndex 
                    ? 'ring-2 ring-rose opacity-100' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground/70 leading-relaxed font-serif mb-6">
            The second look combines a fitted white top with a sequin mini skirt, layered with a denim jacket worn casually over the shoulders. This look reflects effortless sensuality, balancing relaxed styling with subtle glamour. Minimal makeup keeps the focus on confidence and silhouette rather than excess.
          </p>
          <Link 
            href="/projects/carine-roitfeld"
            className="inline-block px-8 py-3 border border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-colors font-serif tracking-widest text-sm uppercase"
          >
            Back to Project
          </Link>
        </div>
      </section>
    </main>
  )
}
