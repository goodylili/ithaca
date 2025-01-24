"use client"

import { useState } from "react"
import SubscriptionForm from "./components/SubscriptionForm"
import { Menu, Zap } from "lucide-react"
import { Footer } from "./components/Footer"
import HowItWorks from "./components/HowItWorks"
import Tiers from "./components/Tiers"
import Slideshow from "./components/Slideshow"
import FAQ from "./components/FAQ"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-mono tracking-tight">
              <span className="text-white/50">$</span> Ithaca
            </h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-8 font-mono text-sm">
                <li>
                  <a href="#about" className="hover:text-white/70 transition-colors">
                    _about
                  </a>
                </li>
                <li>
                  <a href="#proof-of-returns" className="hover:text-white/70 transition-colors">
                    _proof_of_returns
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white/70 transition-colors">
                    _how_it_works
                  </a>
                </li>
                <li>
                  <a href="#tiers" className="hover:text-white/70 transition-colors">
                    _tiers
                  </a>
                </li>
                <li>
                  <a href="#subscribe" className="hover:text-white/70 transition-colors">
                    _subscribe
                  </a>
                </li>
              </ul>
            </nav>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden">
            <ul className="font-mono text-sm p-4 space-y-4">
              <li>
                <a href="#about" className="block hover:text-white/70 transition-colors">
                  _about
                </a>
              </li>
              <li>
                <a href="#proof-of-returns" className="block hover:text-white/70 transition-colors">
                  _proof_of_returns
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="block hover:text-white/70 transition-colors">
                  _how_it_works
                </a>
              </li>
              <li>
                <a href="#tiers" className="block hover:text-white/70 transition-colors">
                  _tiers
                </a>
              </li>
              <li>
                <a href="#subscribe" className="block hover:text-white/70 transition-colors">
                  _subscribe
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <div className="max -w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <section id="about" className="mb-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-mono mb-6">The Ithaca Collective</h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed font-mono">
                {`>`} We are a collective of traders and developers who share alpha and execute together.
                <br/>
                Our strategies have helped partners achieve up to 6,000% returns through collaborative trading and research.
              </p>
            </div>
          </section>

          <HowItWorks />
          <Tiers />

          <section className="mb-24" id="proof-of-returns">
            <h2 className="text-2xl md:text-3xl font-mono mb-8 text-center flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-white" />
              Proof of Returns
            </h2>
            <Slideshow />
          </section>

          <section id="subscribe" className="max-w-2xl mx-auto mb-32">
            <h2 className="text-xl md:text-2xl font-mono mb-8 text-center flex items-center justify-center gap-2">
              <span className="text-white/50">{`>`}</span> Join the Collective
            </h2>
            <SubscriptionForm />
          </section>

          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  )
}

