"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight } from "lucide-react"

export default function SubscriptionForm() {
  const [name, setName] = useState("")
  const [refereeName, setRefereeName] = useState("")
  const [tier, setTier] = useState("basic")
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const phoneNumber = "+2347042429864" // Your WhatsApp number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions before proceeding.")
      return
    }

    const message = `Hi, I am ${name} and I'm interested in paying for the ${tier} plan on Ithaca Beta.

I was referred by ${refereeName}`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="border border-white/10 p-4 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        <div>
          <Label htmlFor="name" className="text-white font-mono">
            Your Name
          </Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 bg-black border-white/30 text-white font-mono focus:border-white transition-colors"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <Label htmlFor="refereeName" className="text-white font-mono">
            Referee Name
          </Label>
          <Input
            type="text"
            id="refereeName"
            value={refereeName}
            onChange={(e) => setRefereeName(e.target.value)}
            required
            className="mt-2 bg-black border-white/30 text-white font-mono focus:border-white transition-colors"
            placeholder="Enter referee's name"
          />
        </div>

        <div>
          <Label className="text-white font-mono">Subscription Plan</Label>
          <RadioGroup value={tier} onValueChange={setTier} className="mt-2 space-y-2">
            {[
              { value: "basic", label: "Basic ($100/month)" },
              { value: "middle", label: "Middle ($200/month)" },
              { value: "master", label: "Master ($300/month)" },
            ].map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-2 p-2 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <RadioGroupItem value={option.value} id={option.value} className="border-white/30" />
                <Label htmlFor={option.value} className="font-mono cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="p-4 border border-white/10 text-white/70 text-xs md:text-sm leading-relaxed">
          <h3 className="text-white font-bold mb-2">DISCLAIMER:</h3>
          <p className="mb-2">
            All content provided by Ithaca Collective is for informational purposes only. This content does not
            constitute financial advice, trading advice, or any other type of advice.
          </p>
          <p className="mb-2">By joining Ithaca Collective, you acknowledge that:</p>
          <ul className="list-disc pl-5 mb-2 space-y-1">
            <li>You are fully responsible for your own trading executions and decisions</li>
            <li>You are not required to enter all calls or suggestions</li>
            <li>We do not provide financial advice - we only share trading opportunities</li>
            <li>Past performance does not guarantee future results</li>
            <li>Trading crypto involves significant risk of loss</li>
          </ul>
          <p>
            You should not treat any of the content as such. We make no representations about the accuracy,
            completeness, or suitability of the information provided.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={agreedToTerms}
            onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            className="border-white/30"
          />
          <label
            htmlFor="terms"
            className="text-xs md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the terms and conditions
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-white text-black hover:bg-white/90 font-mono"
          disabled={!agreedToTerms}
        >
          Contact via WhatsApp <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </div>
  )
}

