"use client"
import CartCard from "@/components/CartCard" // Import the CartCard component
import { Footer } from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function CartPage() {
  // Sample cart data matching the image
  const cartItems = [
    { id: 1, name: "The Gojo Hoodie", price: 39.99, quantity: 2, image: "/black-anime-hoodie-with-gojo-character.jpg" },
    { id: 2, name: "The Gojo Hoodie", price: 39.99, quantity: 2, image: "/black-anime-hoodie-with-gojo-character.jpg" },
    { id: 3, name: "The Gojo Hoodie", price: 39.99, quantity: 2, image: "/black-anime-hoodie-with-gojo-character.jpg" },
    { id: 4, name: "The Gojo Hoodie", price: 39.99, quantity: 2, image: "/black-anime-hoodie-with-gojo-character.jpg" },
    { id: 5, name: "The Gojo Hoodie", price: 39.99, quantity: 2, image: "/black-anime-hoodie-with-gojo-character.jpg" },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingOptions = [
    { name: "free shipping", price: 0, selected: true },
    { name: "flat rate", price: 10.0, selected: false },
    { name: "pickup", price: 15.0, selected: false },
  ]
  const selectedShipping = shippingOptions.find((option) => option.selected)?.price || 0
  const total = subtotal + selectedShipping

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  productName={item.name}
                  productImage={item.image}
                  initialQuantity={item.quantity}
                  pricePerItem={item.price}
                  onQuantityChange={(quantity) => {
                    // Handle quantity change if needed
                    console.log(`Item ${item.id} quantity changed to ${quantity}`)
                  }}
                />
              ))}
            </div>
          </div>

          {/* Cart Summary Sidebar */}
          <div className="lg:w-80">
            <div className="bg-[#1C1C1C] rounded-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-white mb-6">Cart total</h2>

              {/* Subtotal */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400">subtotal</span>
                <span className="text-white text-lg font-medium">${subtotal.toFixed(2)}</span>
              </div>

              {/* Shipping Options */}
              <div className="mb-6">
                <h3 className="text-gray-400 text-sm mb-4">shipping</h3>
                <div className="space-y-3">
                  {shippingOptions.map((option, index) => (
                    <label key={index} className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          defaultChecked={option.selected}
                          className="w-4 h-4 text-purple-600 bg-transparent border-gray-400 focus:ring-purple-500"
                        />
                        <span className="text-white text-sm">{option.name}</span>
                      </div>
                      <span className="text-white text-sm">
                        {option.price === 0 ? "" : `$${option.price.toFixed(2)}`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-8 pt-4 border-t border-gray-600">
                <span className="text-gray-400">Total</span>
                <span className="text-white text-xl font-semibold">${total.toFixed(2)}</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-[#ab03e3] hover:bg-[#9002c7] text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  buy now
                </button>
                <button className="w-full bg-[#ab03e3] hover:bg-[#9002c7] text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  continue shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
