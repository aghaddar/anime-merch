"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/Navbar"
import { sampleProducts } from "@/lib/data"

export default function PaymentClient() {
  const searchParams = useSearchParams()
  const productId = searchParams.get("productId")
  const cart = searchParams.get("cart")
  const totalParam = searchParams.get("total")

  const product = productId ? sampleProducts.find((p) => p.id === Number(productId)) : null
  const amount = product ? product.price : totalParam ? Number(totalParam) : 0

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [card, setCard] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvc, setCvc] = useState("")
  const [processing, setProcessing] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)
    // Simulate a network/payment delay
    await new Promise((r) => setTimeout(r, 1000))
    setProcessing(false)
    setSuccess(true)
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-12 pt-24">
        <div className="max-w-2xl mx-auto bg-surface rounded-xl p-6 shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

          {product ? (
            <div className="mb-4 text-sm text-gray-300">Buying: <span className="font-medium">{product.name}</span></div>
          ) : cart ? (
            <div className="mb-4 text-sm text-gray-300">Cart checkout</div>
          ) : (
            <div className="mb-4 text-sm text-gray-300">No product specified</div>
          )}

          <div className="mb-6 text-lg">
            <span className="text-gray-400">Amount: </span>
            <span className="text-white font-semibold">${amount.toFixed(2)}</span>
          </div>

          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 rounded bg-surface border border-neutral-700" placeholder="Full name" />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 rounded bg-surface border border-neutral-700" placeholder="you@example.com" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-sm text-gray-300 mb-1">Card number</label>
                  <input value={card} onChange={(e) => setCard(e.target.value)} className="w-full px-3 py-2 rounded bg-surface border border-neutral-700" placeholder="4242 4242 4242 4242" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">CVC</label>
                  <input value={cvc} onChange={(e) => setCvc(e.target.value)} className="w-full px-3 py-2 rounded bg-surface border border-neutral-700" placeholder="123" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Expiry</label>
                  <input value={expiry} onChange={(e) => setExpiry(e.target.value)} className="w-full px-3 py-2 rounded bg-surface border border-neutral-700" placeholder="MM/YY" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">ZIP</label>
                  <input className="w-full px-3 py-2 rounded bg-surface border border-neutral-700" placeholder="Postal code" />
                </div>
              </div>

              <div className="flex gap-3">
                <button type="submit" disabled={processing} className="flex-1 bg-[var(--primary-purple)] hover:bg-[var(--primary-purple-dark)] text-white py-3 rounded">
                  {processing ? "Processing..." : `Pay $${amount.toFixed(2)}`}
                </button>
                <Link href="/" className="flex-1 bg-surface hover:bg-surface/90 text-white py-3 rounded text-center">Cancel</Link>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="text-green-400 font-medium">Payment successful</div>
              <div className="text-sm text-gray-300">Thank you for your purchase. This is a demo checkout and no real payment was processed.</div>
              <div className="flex gap-3">
                <Link href="/" className="bg-[var(--primary-purple)] hover:bg-[var(--primary-purple-dark)] text-white py-2 px-4 rounded">Return to shop</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer is rendered in the RootLayout */}
    </div>
  )
}
