import { Target, Search, Lightbulb, Users } from "lucide-react"

export default function HowItWorks() {
  const features = [
    {
      title: "Carefully Selected",
      icon: Target,
      description: "We select the best opportunities in the market and present them to our members.",
    },
    {
      title: "In-depth Analysis",
      icon: Search,
      description:
        "Every opportunity is backed by rigorous market research and fundamental analysis, ensuring high-conviction calls.",
    },
    {
      title: "Actionable Insights",
      icon: Lightbulb,
      description:
        "We provide simple, clear instructions for execution, including entry points, exit points, and risk management tips.",
    },
    {
      title: "Community-driven",
      icon: Users,
      description:
        "Members collaborate, share insights, and execute strategies together, fostering a strong and supportive trading network.",
    },
  ]

  return (
    <section id="how-it-works" className="mb-24">
      <h2 className="text-2xl md:text-3xl font-mono mb-12 text-center">How Ithaca Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div
              key={index}
              className="border border-white/10 p-6 md:p-8 hover:border-white/30 transition-colors flex flex-col"
            >
              <Icon className="w-12 h-12 mb-6 text-white" strokeWidth={1} />
              <h3 className="font-mono text-xl md:text-2xl mb-4">{feature.title}</h3>
              <p className="text-white/70 font-mono text-sm md:text-base leading-relaxed">{feature.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

