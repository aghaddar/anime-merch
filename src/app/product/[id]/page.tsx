"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, use } from "react"
import { sampleProducts } from "@/lib/data"
import Navbar from "@/components/Navbar"

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

  // Reviews state (client-side only for now)
  const [reviews, setReviews] = useState(sampleReviews)
  const [name, setName] = useState("")
  const [ratingValue, setRatingValue] = useState(5)
  const [comment, setComment] = useState("")

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = comment.trim()
    if (!trimmed) return

    const newReview = {
      id: Date.now(),
      user: name ? name : "Anonymous",
      rating: ratingValue,
      comment: trimmed,
    }

    setReviews((prev) => [newReview, ...prev])
    setName("")
    setRatingValue(5)
    setComment("")
  }

  return (
  <div className="min-h-screen bg-[var(--background)] text-white">
      <Navbar />

      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative bg-surface rounded-xl overflow-hidden aspect-square shadow-lg ring-1 ring-black/40">
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
                    index === currentImageIndex ? "border-[var(--primary-purple)] shadow-md" : "border-gray-600 hover:border-gray-400"
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
            <div className="bg-surface p-6 rounded-xl shadow-md ring-1 ring-black/30">
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

              <div className="text-3xl font-bold text-[var(--primary-purple)] mb-4">${product.price}</div>

              <p className="text-gray-300 mb-6">
                Stay warm and stylish with this high-quality hoodie featuring your favorite anime character. Soft cotton
                blend material ensures comfort and durability.
              </p>

              <div className="flex gap-4 mb-8">
                <a href={`/payment?productId=${product.id}`} className="flex-1 bg-[var(--primary-purple)] hover:bg-[var(--primary-purple-dark)] text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md text-center">
                  Buy now
                </a>
                <button className="flex-1 bg-surface hover:bg-surface/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors border border-neutral-800">
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="bg-surface rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4 text-[var(--primary-purple)]">Reviews</h3>

              {/* Reviews list - show ~2 items, make rest scrollable */}
                <div className="space-y-4 mb-4 max-h-44 overflow-y-auto pr-2 modern-scrollbar">
                {reviews.map((review) => (
                  <div key={review.id} className="flex gap-3">
                    <div className="w-10 h-10 bg-[var(--primary-purple)]/20 rounded-full flex items-center justify-center text-sm font-bold text-[var(--primary-purple)]">
                      {review.user ? review.user[0].toUpperCase() : 'U'}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-sm">{review.user}</div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className={`w-4 h-4 ${s <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-600 text-gray-600'}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mt-1">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add a review form (now below the reviews) */}
              <form onSubmit={handleSubmitReview} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="flex-1 bg-surface border border-neutral-700 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]/30"
                  />
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setRatingValue(n)}
                        className={`p-1 rounded ${n <= ratingValue ? 'text-yellow-400' : 'text-gray-600'}`}
                        aria-label={`${n} stars`}
                      >
                        <Star className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Write your review"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full bg-surface border border-neutral-700 px-3 py-2 rounded min-h-[80px] focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)]/30"
                  />
                </div>

                <div className="flex gap-2">
                  <button type="submit" className="bg-[var(--primary-purple)] hover:bg-[var(--primary-purple-dark)] text-white px-4 py-2 rounded shadow-sm">
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setName("");
                      setRatingValue(5);
                      setComment("");
                    }}
                    className="bg-surface hover:bg-surface/90 text-white px-4 py-2 rounded"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

  {/* Footer is rendered in the RootLayout */}
    </div>
  )
}
