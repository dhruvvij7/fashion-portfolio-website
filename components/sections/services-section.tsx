export function ServicesSection() {
  const services = [
    {
      title: "Fashion Styling",
      description: "Concept-based styling for shoots, campaigns, events, and special occasions.",
    },
    {
      title: "Brand & Campaign Styling",
      description: "Visual styling for fashion brands, lookbooks, and promotional content.",
    },
    {
      title: "Personal Styling",
      description: "Curated outfits based on body type, personality, and occasion.",
    },
    {
      title: "Content Styling",
      description: "Styling for reels, photoshoots, and social media collaborations.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">What I Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            My <span className="italic">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-surface/50 p-8 hover:bg-surface transition-colors duration-300 group cursor-default">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center mb-4 group-hover:bg-rose/20 transition-colors duration-300">
                  <span className="text-rose font-serif text-lg">{index + 1}</span>
                </div>
              </div>
              <h3 className="font-serif text-xl mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
