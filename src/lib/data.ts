export interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  category: string
}

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export interface ShippingOption {
  name: string
  price: number
  selected: boolean
}

// Product catalog data
export const sampleProducts: Product[] = [
  {
    id: 1,
    name: "The Gojo Hoodie",
    price: 39.99,
    image: "/anime-hoodie.jpg.jpeg",
    rating: 5,
    reviews: 150,
    category: "clothing",
  },
  {
    id: 2,
    name: "Naruto Sweatshirt",
    price: 34.99,
    image: "/orange-naruto-themed-sweatshirt.jpg",
    rating: 4,
    reviews: 89,
    category: "clothing",
  },
  {
    id: 3,
    name: "Dragon Ball Z Tee",
    price: 24.99,
    image: "/dragon-ball-z-t-shirt-with-goku.jpg",
    rating: 5,
    reviews: 203,
    category: "clothing",
  },
  {
    id: 4,
    name: "Attack on Titan Jacket",
    price: 59.99,
    image: "/attack-on-titan-military-style-jacket.jpg",
    rating: 4,
    reviews: 67,
    category: "clothing",
  },
  {
    id: 5,
    name: "One Piece Cap",
    price: 19.99,
    image: "/one-piece-straw-hat-pirate-cap.jpg",
    rating: 4,
    reviews: 124,
    category: "accessories",
  },
  {
    id: 6,
    name: "Demon Slayer Hoodie",
    price: 42.99,
    image: "/demon-slayer-tanjiro-hoodie-black-and-green.jpg",
    rating: 5,
    reviews: 178,
    category: "clothing",
  },
  {
    id: 7,
    name: "My Hero Academia Shirt",
    price: 27.99,
    image: "/my-hero-academia-deku-shirt-green.jpg",
    rating: 4,
    reviews: 95,
    category: "clothing",
  },
  {
    id: 8,
    name: "Tokyo Ghoul Mask",
    price: 15.99,
    image: "/tokyo-ghoul-kaneki-mask-white-and-red.jpg",
    rating: 3,
    reviews: 45,
    category: "accessories",
  },
]

// Cart data
export const cartItems: CartItem[] = [
  { id: 1, name: "The Gojo Hoodie", price: 39.99, quantity: 2, image: "/black-anime-hoodie-with-gojo-character.jpg" },
  { id: 2, name: "The Gojo Hoodie", price: 39.99, quantity: 2, image: "/black-anime-hoodie-with-gojo-character.jpg" },
  { id: 3, name: "The Gojo Hoodie", price: 39.99, quantity: 2, image: "/black-anime-hoodie-with-gojo-character.jpg" },
  { id: 4, name: "The Gojo Hoodie", price: 39.99, quantity: 2, image: "/black-anime-hoodie-with-gojo-character.jpg" },
  { id: 5, name: "The Gojo Hoodie", price: 39.99, quantity: 2, image: "/black-anime-hoodie-with-gojo-character.jpg" },
]

// Shipping options
export const shippingOptions: ShippingOption[] = [
  { name: "free shipping", price: 0, selected: true },
  { name: "flat rate", price: 10.0, selected: false },
  { name: "pickup", price: 15.0, selected: false },
]

// Navigation categories
export const categories = {
  apparel: {
    clothing: ["Hoodies", "T-Shirts", "Socks", "Pants", "Tanks", "Jackets"],
    accessories: ["Hats", "Necklace", "Rings", "Key chains", "Earrings"],
  },
  manga: {
    formats: ["Hard copy", "Soft copy"],
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Romance", "Sci-Fi", "Slice of Life"],
  },
  decoration: [
    "Paintings",
    "Katana",
    "Sculptures",
    "Figurines",
    "Vases",
    "Tapestries",
    "Wall hangings",
    "Decorative clocks",
    "Unique lamps",
    "Collectible items",
  ],
  mobile: ["Apparel", "Manga", "Decoration"],
}
