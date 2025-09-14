"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, use } from "react"
import { sampleProducts } from "@/lib/data"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/Footer"

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

const sampleReviews = [
  {
    id: 1,
    user: "User 1",
    rating: 5,
    comment: "The quality of the hoodie is amazing its exactly what you need when you order a coshe online",
  },
  {
    id: 2,
    user: "User 2",
    rating: 5,
    comment: "The quality of the hoodie is amazing its exactly what you need when you order a coshe online",
  },
]

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = use(params)
  const product = sampleProducts.find((p) => p.id === Number.parseInt(resolvedParams.id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!product) {
    notFound()
  }

  const productImages = Array(5).fill(product.image || "/placeholder.svg")

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)
  }

  const selectImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative bg-gray-700 rounded-lg overflow-hidden aspect-square">
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <Image
                src={productImages[currentImageIndex] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-opacity duration-300"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                    index === currentImageIndex ? "border-purple-500" : "border-gray-600 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-600 text-gray-600"}`}
                    />
                  ))}
                </div>
                <span className="text-yellow-400">{product.rating}</span>
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>

              <div className="text-3xl font-bold text-purple-400 mb-4">${product.price}</div>

              <p className="text-gray-300 mb-6">
                Stay warm and stylish with this high-quality hoodie featuring your favorite anime character. Soft cotton
                blend material ensures comfort and durability.
              </p>

              <div className="flex gap-4 mb-8">
                <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Buy now
                </button>
                <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="border border-blue-500 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Review</h3>
              <div className="space-y-4">
                {sampleReviews.map((review) => (
                  <div key={review.id} className="flex gap-3">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                      U
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{review.user}</div>
                      <p className="text-gray-300 text-sm mt-1">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
