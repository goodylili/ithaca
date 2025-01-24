import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Get in Touch Section */}
        <div className="py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-mono mb-6">GET IN TOUCH</h2>
          <p className="font-mono text-white/70 mb-4">If you have any inquiries, contact us at:</p>
          <div className="space-y-2 font-mono flex flex-col items-center justify-center">
            <a href="tel:+2347042429864" className="flex items-center text-white hover:text-white/70 transition-colors">
              <Phone className="w-4 h-4 mr-3" />
              +234 704 242 9864
            </a>
            <a
              href="mailto:ukejegoodness599@gmail.com"
              className="flex items-center text-white hover:text-white/70 transition-colors"
            >
              <Mail className="w-4 h-4 mr-3" />
              ukejegoodness599@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 text-center">
          <p className="text-white/50 font-mono text-xs">© 2025 Ithaca. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

