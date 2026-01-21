import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmilyInParisProject() {
  const galleryImages = [
    "/proj2a.jpg",
    "/proj2b.jpg",
    "/proj2c.jpg",
    "/proj2d.jpg",
    "/proj2e.jpg",
    "/proj2f.jpg",
  ];

  return (
    <main className="min-h-screen bg-[#8B0000]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <Link href="/#projects">
          <Button
            variant="ghost"
            className="text-[#FFB6C1] hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="relative w-full h-full">
          <Image
            src="/project-emily.jpg"
            alt="Emily in Paris - The Muse and The Master"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </section>

      {/* Title Section */}
      <section className="bg-[#8B0000] py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#FFB6C1] tracking-[0.3em] uppercase text-sm mb-4">
            Group Styling Project
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4">
            Emily in Paris
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-[#FFB6C1] italic">
            The Muse and The Master
          </p>
        </div>
      </section>

      {/* Gallery Grid Section */}
      {/* Gallery Grid Section */}
      <section className="bg-[#FDF7F9] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#8B0000] mb-4">
              Campaign Gallery
            </h2>
            <p className="text-[#5A4A50] text-lg">
              Explore the stunning visuals from this bold Paris-inspired
              photoshoot
            </p>
          </div>

          {/* Clean Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={img}
                    alt={`Emily in Paris ${idx + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About The Look */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-serif text-4xl text-[#8B0000] mb-6">
                About The Look
              </h2>
              <p className="text-[#5A4A50] text-lg leading-relaxed mb-6">
                This group styling project draws inspiration from the bold and
                playful fashion of Emily in Paris. My look centers around a
                dramatic red aesthetic as the statement piece.
              </p>
              <p className="text-[#5A4A50] text-lg leading-relaxed">
                Styled with flowing red fabrics to create movement and elegance,
                a sleek ponytail, bold red lipstick, and red heels enhance the
                confident, chic Parisian vibe while maintaining a monochromatic
                and impactful palette.
              </p>
            </div>

            {/* Key Elements */}
            <div className="space-y-6">
              <div className="bg-[#FDF7F9] p-6 border-l-4 border-[#8B0000]">
                <h3 className="font-serif text-xl text-[#8B0000] mb-2">
                  Statement Piece
                </h3>
                <p className="text-[#5A4A50]">
                  Dramatic red flowing fabric ensemble
                </p>
              </div>
              <div className="bg-[#FDF7F9] p-6 border-l-4 border-[#8B0000]">
                <h3 className="font-serif text-xl text-[#8B0000] mb-2">
                  Styling
                </h3>
                <p className="text-[#5A4A50]">
                  Fluid movements and elegant draping
                </p>
              </div>
              <div className="bg-[#FDF7F9] p-6 border-l-4 border-[#8B0000]">
                <h3 className="font-serif text-xl text-[#8B0000] mb-2">
                  Beauty
                </h3>
                <p className="text-[#5A4A50]">
                  Sleek styling with bold red lipstick
                </p>
              </div>
              <div className="bg-[#FDF7F9] p-6 border-l-4 border-[#8B0000]">
                <h3 className="font-serif text-xl text-[#8B0000] mb-2">
                  Aesthetic
                </h3>
                <p className="text-[#5A4A50]">
                  Monochromatic red for maximum impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Quote */}
      <section className="bg-[#8B0000] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#FFB6C1] tracking-[0.2em] uppercase text-sm mb-4">
            Inspiration
          </p>
          <p className="font-serif text-4xl md:text-5xl text-white italic mb-8">
            "Bold, playful, and unapologetically chic"
          </p>
          <p className="text-white/80 text-lg">
            A celebration of Parisian elegance meets youthful confidence
          </p>
        </div>
      </section>

      {/* Project Booklet Section */}
      <section className="bg-[#FDF7F9] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-3xl text-[#8B0000] mb-4">Complete Project Documentation</h3>
          <p className="text-[#5A4A50] font-serif mb-8">
            For a comprehensive view of this project, including mood boards, inspiration references, and detailed styling documentation, please refer to the project booklet below.
          </p>
          <a 
            href="/p2_compressed.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#8B0000] text-white font-serif hover:bg-[#6B0000] transition-colors tracking-widest text-sm uppercase"
          >
            Download Project Booklet
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6B0000] py-8 px-6 text-center">
        <p className="text-[#FFB6C1]/60 text-sm">Emily x Pierre Cadault</p>
      </footer>
    </main>
  );
}
