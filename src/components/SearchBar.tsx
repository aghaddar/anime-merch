"use client"

import type React from "react"

import { Search, X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export function SearchBar({ placeholder = "Search...", onSearch, className }: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(query)
    // navigate to search page with query
    const q = query.trim()
    if (q) {
      router.push(`/search?query=${encodeURIComponent(q)}`)
    } else {
      router.push(`/search`)
    }
  }

  const handleClear = () => {
    setQuery("")
    onSearch?.("")
    router.push(`/search`)
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className || ""}`}>
      <div
        className={`flex items-center bg-white border rounded-lg transition-all duration-200 hover:border-gray-400 ${
          isFocused ? "border-blue-500 shadow-sm ring-1 ring-blue-500/20" : "border-gray-300"
        }`}
      >
        <Search className="h-4 w-4 text-gray-500 ml-3 flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2.5 bg-transparent text-gray-900 placeholder:text-gray-500 focus:outline-none text-sm min-w-0 w-full md:w-80"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="p-1 mr-2 text-gray-500 hover:text-gray-700 transition-colors rounded-sm hover:bg-gray-100"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </form>
  )
}

export default SearchBar