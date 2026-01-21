import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GulshanGulshanProject() {
  const finalShootImages = [
    { src: "/i2.jpg", alt: "Final shoot image 1" },
    { src: "/final2.jpg", alt: "Final shoot image 2" },
    { src: "/i4.jpg", alt: "Final shoot image 3" },
    { src: "/i5.jpg", alt: "Final shoot image 4" },
    { src: "/i6.jpg", alt: "Final shoot image 5" },
    { src: "/i7.jpg", alt: "Final shoot image 6" },
    { src: "/i8.jpg", alt: "Final shoot image 7" },
    { src: "/i9.jpg", alt: "Final shoot image 8" },
    { src: "/i10.jpg", alt: "Final shoot image 9" },
    { src: "/final3.jpg", alt: "Final shoot image 10" },
    { src: "/final4.jpg", alt: "Final shoot image 11" },
    { src: "/final5.jpg", alt: "Final shoot image 12" },
  ]

  return (
    <main className="min-h-screen bg-[#FDF8F5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDF8F5]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#8B7355] hover:text-[#6B5A45] transition-colors font-serif"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] bg-[#F5EDE8] overflow-hidden">
              <Image
                src="/ss.jpg"
                alt="Phool Khile Hain - Gulshan Gulshan"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <p className="text-[#8B7355] tracking-widest text-sm font-sans uppercase">Fashion Design Project</p>
              <h1 className="text-5xl md:text-6xl font-serif text-[#6B5A45] italic">
                Phool Khile Hain Gulshan Gulshan
              </h1>
              <h2 className="text-3xl md:text-4xl font-serif text-[#8B7355]">
                
              </h2>
              <p className="text-[#8B7355] text-sm tracking-wider uppercase">By: Ishani Duggal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif text-[#6B5A45] mb-8 text-center">The Concept</h3>
          <p className="text-lg text-[#8B7355] leading-relaxed text-center font-serif">
            Phool Khile Hain Gulshan Gulshan<br />
            Inspired by the Bird of Paradise flower, this look translates floral beauty into wearable form. 
            The dress reflects the flower&apos;s bold colors and natural flow, styled with minimal accessories 
            to keep the print as the focal point. The concept celebrates nature, femininity, and the 
            transformation of a single bloom into an entire garden.
          </p>
        </div>
      </section>

      {/* Inspiration */}
      <section className="py-16 px-6 bg-[#FDF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-serif text-[#6B5A45] mb-8">Bird of Paradise</h3>
          <p className="text-[#8B7355] leading-relaxed font-serif max-w-2xl mx-auto">
            The Bird of Paradise flower, with its striking orange and blue petals that resemble a tropical bird in flight, 
            served as the primary inspiration. Its bold colors, dramatic silhouette, and exotic elegance were translated 
            into a wearable art piece that captures the essence of tropical beauty.
          </p>
        </div>
      </section>

      {/* Design Boards Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif text-[#6B5A45] mb-4 text-center">Design Process</h3>
          <p className="text-[#8B7355] text-center mb-12 font-serif">Explore the creative journey behind this collection</p>
          
          <div className="space-y-16">
            {/* Mood Board */}
            <div>
              <h4 className="text-2xl font-serif text-[#6B5A45] mb-4 text-center">Mood Board</h4>
              <p className="text-sm font-serif text-[#8B7355] mb-4 text-center tracking-wider uppercase">
                Tropical Elegance
              </p>
              <div className="relative w-full aspect-[4/3] bg-[#FDF8F5] overflow-hidden border border-[#E8DDD5]">
                <Image
                  src="/moodboardimg.jpg"
                  alt="Mood Board - Tropical Elegance"
                  fill
                  className="object-contain"
                />
              </div>
              
            </div>

            {/* Illustration Board */}
            <div>
              <h4 className="text-2xl font-serif text-[#6B5A45] mb-6 text-center">Illustration Board</h4>
              <div className="relative w-full aspect-[4/3] bg-[#FDF8F5] overflow-hidden border border-[#E8DDD5]">
                <Image
                  src="/illustrationboard.jpg"
                  alt="Illustration Board - Fashion Designs"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Colour Board */}
            <div>
              <h4 className="text-2xl font-serif text-[#6B5A45] mb-6 text-center">Colour Board</h4>
              <div className="relative w-full aspect-[4/3] bg-[#FDF8F5] overflow-hidden border border-[#E8DDD5]">
                <Image
                  src="/colour.jpg"
                  alt="Colour Board - Bird of Paradise Palette"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Elements */}
      <section className="py-16 px-6 bg-[#FDF8F5]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif text-[#6B5A45] mb-12 text-center">Design Elements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-[#E8DDD5]">
              <h4 className="text-xl font-serif text-[#6B5A45] mb-4">Floral Translation</h4>
              <p className="text-[#8B7355] font-serif leading-relaxed">
                The bold colors and organic forms of the Bird of Paradise are reimagined as wearable art, 
                with the dress silhouette echoing the flower&apos;s natural flow.
              </p>
            </div>
            <div className="bg-white p-8 border border-[#E8DDD5]">
              <h4 className="text-xl font-serif text-[#6B5A45] mb-4">Minimal Styling</h4>
              <p className="text-[#8B7355] font-serif leading-relaxed">
                Accessories are kept intentionally minimal to allow the print and silhouette 
                to remain the focal point of the look.
              </p>
            </div>
            <div className="bg-white p-8 border border-[#E8DDD5]">
              <h4 className="text-xl font-serif text-[#6B5A45] mb-4">Nature & Femininity</h4>
              <p className="text-[#8B7355] font-serif leading-relaxed">
                The concept celebrates the connection between natural beauty and feminine elegance, 
                transforming botanical inspiration into fashion.
              </p>
            </div>
            <div className="bg-white p-8 border border-[#E8DDD5]">
              <h4 className="text-xl font-serif text-[#6B5A45] mb-4">Garden Transformation</h4>
              <p className="text-[#8B7355] font-serif leading-relaxed">
                A single bloom becomes an entire garden - the design philosophy of turning 
                one source of inspiration into a complete, cohesive vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Shoot */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif text-[#6B5A45] mb-4 text-center">Final Shoot</h3>
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {finalShootImages.map((img, idx) => (
              <div
                key={img.src}
                className="relative w-full aspect-[3/4] bg-[#FDF8F5] overflow-hidden border border-[#E8DDD5]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={idx < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Booklet */}
      <section className="py-16 px-6 bg-[#FDF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-[#6B5A45] mb-4">Project Booklet</h2>
          <p className="text-[#8B7355] font-serif mb-6">
            For a comprehensive view of this project, including design sketches and detailed documentation, please refer to the project booklet below.
          </p>
          <Link 
            href="/project12.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#8B7355] text-white font-serif hover:bg-[#6B5A45] transition-colors"
          >
            Download Project Booklet
          </Link>
        </div>
      </section>

      {/* Back to Portfolio */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/">
            <Button 
              variant="outline" 
              className="border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white px-8 py-6 text-lg font-serif bg-transparent"
            >
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
