"use client"

import { useState } from "react"
import CartCard from "@/components/CartCard"
import Navbar from "@/components/Navbar"
import { sampleProducts, shippingOptions } from "@/lib/data"
import { AnimatedNumber } from "@/components/AnimatedNumber"

export default function CartPage() {
  // Initialize cart items using sampleProducts and add a default quantity
  const [cartItems, setCartItems] = useState(
    sampleProducts.map((product) => ({
      ...product,
      quantity: 1, // default quantity
    }))
  )

  const [selectedShipping, setSelectedShipping] = useState(
    shippingOptions.find((option) => option.selected)?.price || 0
  )

  // Update quantity handler
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  // Calculate subtotal dynamically
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal + selectedShipping

  return (
  <div className="min-h-screen bg-[var(--background)] text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6 text-center md:text-left">Your Cart</h1>
            {cartItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {cartItems.map((item) => (
                  <CartCard
                    key={item.id}
                    productName={item.name}
                    productImage={item.image}
                    initialQuantity={item.quantity}
                    pricePerItem={item.price}
                    onQuantityChange={(quantity) => handleQuantityChange(item.id, quantity)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400">Your cart is empty.</p>
            )}
          </div>

          {/* Cart Summary */}
          <div className="lg:w-80 w-full">
            <div className="bg-surface rounded-lg p-6 sticky top-22">
              <h2 className="text-xl font-semibold mb-6 text-center md:text-left">Cart Total</h2>

              {/* Subtotal */}
              <div className="flex justify-between items-center mb-6 text-sm md:text-base">
  <span className="text-gray-400">Subtotal</span>
  <span className="text-white font-medium">
    $<AnimatedNumber value={subtotal} />
  </span>
</div>

              {/* Shipping Options */}
              <div className="mb-6">
                <h3 className="text-gray-400 text-sm mb-4">Shipping</h3>
                <div className="space-y-3">
                  {shippingOptions.map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center justify-between cursor-pointer text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          checked={selectedShipping === option.price}
                          onChange={() => setSelectedShipping(option.price)}
                          className="w-4 h-4 text-purple-600 bg-transparent border-gray-400 focus:ring-purple-500"
                        />
                        <span className="text-white">{option.name}</span>
                      </div>
                      <span className="text-white">
                        {option.price === 0 ? "" : `$${option.price.toFixed(2)}`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-8 pt-4 border-t border-gray-600 text-sm md:text-base">
                <span className="text-gray-400">Total</span>
                <span className="text-white text-lg font-semibold">
                  $<AnimatedNumber value={total} />
                </span>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <a href={`/payment?cart=true&total=${total.toFixed(2)}`} className="w-full inline-block bg-[var(--primary-purple)] hover:bg-[var(--primary-purple-dark)] text-white py-3 px-6 rounded-lg font-medium transition-colors text-center">
                  Buy Now
                </a>
                <button className="w-full bg-[#292929] hover:bg-[#333333] text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* Footer is rendered in the RootLayout */}
    </div>
  )
}
