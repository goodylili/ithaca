import { Users } from "lucide-react"

export default function Tiers() {
  return (
    <section id="tiers" className="mb-24">
      <h2 className="text-2xl md:text-3xl font-mono mb-8 text-center flex items-center justify-center gap-2">
        <Users className="w-5 h-5 md:w-6 md:h-6" />
        <span>Membership Tiers</span>
      </h2>
      <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {[
          {
            name: "Basic",
            price: "$100",
            features: ["Fundamental alpha via email", "Actionable calls", "Perfect for self-starters"],
          },
          {
            name: "Middle",
            price: "$200",
            features: ["All Basic tier benefits", "Weekly group strategy calls", "Deeper market insights"],
          },
          {
            name: "Master",
            price: "$300",
            features: ["All lower-tier benefits", "Personalized portfolio advice", "One-on-one strategy calls"],
          },
        ].map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col border border-white/10 p-6 md:p-8 hover:border-white/30 transition-colors"
          >
            <h3 className="font-mono text-lg md:text-xl mb-3 md:mb-4">{tier.name}</h3>
            <p className="text-2xl md:text-3xl font-mono mb-6 md:mb-8">
              {tier.price}
              <span className="text-white/50">/month</span>
            </p>
            <ul className="space-y-2 md:space-y-4 text-white/70 font-mono text-sm md:text-base flex-grow">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-white">$</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

