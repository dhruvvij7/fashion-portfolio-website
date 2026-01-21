'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CarineRoitfeldPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wide">Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full mb-12">
            <Image
              src="/project-carine.jpg"
              alt="Carine Roitfeld Fashion Imagery"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest text-rose uppercase mb-4">Fashion Imagery Project</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-6">
                Ishani Duggal and Wedha Barat
            </h1>
            
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
            This shoot was executed as a partner project in collaboration with a batchmate and this Inspired by Carine Roitfeld&apos;s signature styling, this shoot explores bold yet minimal fashion with an emphasis on attitude, structure, and sensuality.
          </p>
        </div>
      </section>

      {/* Look 1 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-widest text-rose uppercase mb-3">Look 1</p>
              <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-6">
                Effortless Sensuality
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                The first look includes a black satin blouse paired with a high-slit pencil skirt. The clean, sharp silhouette conveys modern feminine authority and elegance. The styling is restrained yet strong, reflecting Roitfeld&apos;s approach to sensuality through simplicity and confidence.
              </p>
            </div>
            <div className="relative aspect-[3/4] bg-blush/30 overflow-hidden group">
              <Image
                src="/look1.jpg"
                alt="LOOK 1 - Effortless Sensuality"
                fill
                className="object-cover"
              />
              <Link 
                href="/projects/carine-roitfeld/look1"
                className="absolute bottom-4 right-4 px-4 py-2 bg-rose text-white text-sm tracking-widest uppercase font-light opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose/90"
              >
                Show More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Look 2 */}
      <section className="py-16 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] bg-blush/30 overflow-hidden group">
              <Image
                src="/look2.jpg"
                alt="LOOK 2 - Power & Bold Femininity"
                fill
                className="object-cover"
              />
              <Link 
                href="/projects/carine-roitfeld/look2"
                className="absolute bottom-4 right-4 px-4 py-2 bg-rose text-white text-sm tracking-widest uppercase font-light opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose/90"
              >
                Show More
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-sm tracking-widest text-rose uppercase mb-3">Look 2</p>
              <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-6">
                Power & Bold Femininity
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                The second look combines a fitted white top with a sequin mini skirt, layered with a denim jacket worn casually over the shoulders. This look reflects effortless sensuality, balancing relaxed styling with subtle glamour. Minimal makeup keeps the focus on confidence and silhouette rather than excess.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Look 3 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-widest text-rose uppercase mb-3">Look 3</p>
              <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground mb-6">
                Modern Feminine Authority
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                The third look features a black leather co-ord styled with high boots and shot in black and white. This look represents power and bold femininity, a signature element of Carine Roitfeld&apos;s styling. The monochrome treatment emphasizes structure, attitude, and body language over color or heavy detailing.
              </p>
            </div>
            <div className="relative aspect-[3/4] bg-blush/30 overflow-hidden group">
              <Image
                src="/look3.jpg"
                alt="LOOK 3 - Modern Feminine Authority"
                fill
                className="object-cover"
              />
              <Link 
                href="/projects/carine-roitfeld/look3"
                className="absolute bottom-4 right-4 px-4 py-2 bg-rose text-white text-sm tracking-widest uppercase font-light opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose/90"
              >
                Show More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 px-6 bg-rose text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-widest uppercase mb-4 opacity-80">Fashion Imagery</p>
          <h3 className="text-2xl md:text-3xl font-serif font-light mb-6">
            Inspired by Carine Roitfeld
          </h3>
          <p className="text-sm opacity-80">
            Styled by Ishani Duggal & Wedha Barat
          </p>
        </div>
      </section>
    </main>
  )
}
