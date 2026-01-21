import Image from "next/image"
import Link from "next/link"
import { Instagram, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServicesSection } from "@/components/sections/services-section"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-serif text-2xl italic tracking-wide">Styled by Ishani Duggal</span>
          <div className="hidden md:flex items-center gap-8 text-sm tracking-wider uppercase">
            <a href="#about" className="hover:text-rose transition-colors">About</a>
            <a href="#services" className="hover:text-rose transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-rose transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-rose transition-colors">Contact</a>
          </div>
          {/* <Button variant="outline" size="sm" className="border-rose text-rose hover:bg-rose hover:text-white bg-transparent">
            Get in Touch
          </Button> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-24 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-8 lg:px-16 py-16 bg-surface">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">Fashion Stylist & Content Creator</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
              I Style Stories,<br />
              <span className="italic">Not Just Outfits.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              Fashion stylist & content creator crafting elevated, modern looks for brands, campaigns, and real people.
            </p>
            <a href="#portfolio">
              <Button className="w-fit bg-rose hover:bg-rose/90 text-white px-8 py-6 text-sm tracking-wider uppercase">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
          {/* Right Image */}
          <div className="relative bg-blush/30">
            <Image
              src="/first1.jpg"
              alt="Fashion Stylist"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] bg-surface">
              <Image
                src="/about-me.jpg"
                alt="About the Stylist"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Get to Know Me</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">
                About <span className="italic">Ishani Duggal</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  I'm a fashion stylist and content creator with a strong passion for visual storytelling and creative direction. 
                  Styling, for me, is more than clothing — it's about crafting mood, identity, and presence that resonates.
                </p>
                <p>
                  I completed my <strong className="text-foreground">Diploma in Fashion Communication from AAFT Noida</strong> (Batch 2024–2025), 
                  where I developed a strong foundation in fashion concepts, styling aesthetics, and creative presentation. 
                  Currently, I'm pursuing my <strong className="text-foreground">Diploma in Fashion Styling from NIFT Delhi</strong> (Batch 2025–2026), 
                  where I'm refining my expertise in contemporary fashion, trend analysis, and styling for digital and commercial platforms.
                </p>
                <p>
                  My work focuses on creating impactful, visually compelling styling that elevates brand identity and brings creative concepts to life. 
                  I work with brands, creators, and individuals to build looks that align with their vision while standing out effortlessly.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Section
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">A Glimpse Into My Work</p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Selected <span className="italic">Work</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              A glimpse into my styling journey — where fashion meets vision.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Signature Styles", image: "/portfolio-1.jpg" },
              { title: "Street Chic", image: "/portfolio-2.jpg" },
              { title: "Personal Wardrobe", image: "/portfolio-3.jpg" },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xl text-center">{item.title}</h3>
                <p className="text-center text-sm text-rose mt-2 tracking-wider uppercase">View Gallery</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      

      

      {/* Projects Section */}
      <section id="portfolio" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Building My Craft</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-8">
                Projects & <span className="italic">Practice Work</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-xl">
                I have worked on styling projects as part of my academic journey, collaborating with peers to create concept-driven looks for assignments and portfolio development.
              </p>
              <p className="text-muted-foreground leading-relaxed text-xl">
                These projects focus on exploring silhouettes, trends, mood boards, and visual storytelling, helping me build a strong foundation in fashion styling.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Link href="/projects/carine-roitfeld" className="relative aspect-[3/4] bg-white block group cursor-pointer">
                <Image
                  src="/project-carine.jpg"
                  alt="Carine Roitfeld Fashion Imagery"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </Link>
              <Link href="/projects/emily-in-paris" className="relative aspect-[3/4] bg-white mt-8 block group cursor-pointer">
                <Image
                  src="/project-emily.jpg"
                  alt="Emily in Paris - The Muse and The Master"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </Link>
              <Link href="/projects/gulshan-gulshan" className="relative aspect-[3/4] bg-white block group cursor-pointer">
                <Image
                  src="/ss.jpg"
                  alt="Gulshan Glushan - Phool Khile Hain"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-24 bg-rose/30">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">The Difference</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-12">
            Why Work <span className="italic">With Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              "Strong understanding of trends and aesthetics",
              "Detail-oriented styling approach",
              "Creative vision aligned with modern fashion",
              "Reliable, creative, and brand-focused",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-6">
                <div className="w-8 h-8 rounded-full bg-rose/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-rose font-serif italic">{i + 1}</span>
                </div>
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Let's Work <span className="italic">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12">
            For collaborations, brand styling, or personal styling inquiries, feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <a href="mailto:ishaniduggal461@gmail.com" className="flex items-center gap-3 text-foreground hover:text-rose transition-colors">
              <Mail className="w-5 h-5" />
              ishaniduggal461@gmail.com
            </a>
            <a href="https://instagram.com/aavyaduggall" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-rose transition-colors">
              <Instagram className="w-5 h-5" />
              @aavyaduggall
            </a>
          </div>
          {/* <Button className="bg-rose hover:bg-rose/90 text-white px-12 py-6 text-sm tracking-wider uppercase">
            Get in Touch
          </Button> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-serif text-2xl italic">Styled by Ishani Duggal</span>
            <p className="text-sm text-white/60">
              Fashion Stylist & Content Creator
            </p>
            <p className="text-sm text-white/60">
              &copy; 2026 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
