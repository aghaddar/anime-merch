"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/Footer"

interface Notification {
  id: number
  title: string
  message: string
  timestamp: string
  isRead: boolean
  type: "order" | "promotion" | "system" | "product"
}

const sampleNotifications: Notification[] = [
  {
    id: 1,
    title: "Order Shipped",
    message: "Your order #12345 has been shipped and is on its way!",
    timestamp: "10 minutes ago",
    isRead: false,
    type: "order",
  },
  {
    id: 2,
    title: "Weekend Sale",
    message: "Special discount on all manga this weekend! Get up to 30% off.",
    timestamp: "2 hours ago",
    isRead: false,
    type: "promotion",
  },
  {
    id: 3,
    title: "New Collection",
    message: "New Naruto apparel collection is now available in our store.",
    timestamp: "1 day ago",
    isRead: false,
    type: "product",
  },
  {
    id: 4,
    title: "Order Delivered",
    message: "Your order #12340 has been successfully delivered.",
    timestamp: "2 days ago",
    isRead: true,
    type: "order",
  },
  {
    id: 5,
    title: "Account Update",
    message: "Your account security settings have been updated.",
    timestamp: "3 days ago",
    isRead: true,
    type: "system",
  },
  {
    id: 6,
    title: "Flash Sale",
    message: "24-hour flash sale on all Attack on Titan merchandise!",
    timestamp: "1 week ago",
    isRead: true,
    type: "promotion",
  },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(sampleNotifications)
  const [filter, setFilter] = useState<"all" | "unread" | "order" | "promotion">("all")

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, isRead: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, isRead: true })))
  }

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === "all") return true
    if (filter === "unread") return !notif.isRead
    return notif.type === filter
  })

  const unreadCount = notifications.filter((n) => !n.isRead).length

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "order":
        return "📦"
      case "promotion":
        return "🎉"
      case "product":
        return "👕"
      case "system":
        return "⚙️"
      default:
        return "🔔"
    }
  }

  return (
    <div className="bg-[#0F0F0F] min-h-screen text-white">
      <Navbar />

      <div className="pt-20 px-4 lg:px-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Notifications</h1>
          <p className="text-gray-400">
            {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : "All caught up!"}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-700 pb-4">
          {[
            { key: "all", label: "All" },
            { key: "unread", label: "Unread" },
            { key: "order", label: "Orders" },
            { key: "promotion", label: "Promotions" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === key ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {label}
              {key === "unread" && unreadCount > 0 && (
                <span className="ml-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">{unreadCount}</span>
              )}
            </button>
          ))}
        </div>

        {/* Mark All as Read Button */}
        {unreadCount > 0 && (
          <div className="mb-6">
            <button onClick={markAllAsRead} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              Mark all as read
            </button>
          </div>
        )}

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔔</div>
              <h3 className="text-xl font-semibold mb-2">No notifications</h3>
              <p className="text-gray-400">
                {filter === "unread"
                  ? "You're all caught up! No unread notifications."
                  : "No notifications to show for this filter."}
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border transition-colors cursor-pointer ${
                  notification.isRead ? "bg-gray-900 border-gray-700" : "bg-gray-800 border-gray-600"
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">{getNotificationIcon(notification.type)}</div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className={`font-semibold ${notification.isRead ? "text-gray-300" : "text-white"}`}>
                          {notification.title}
                        </h3>
                        <p className={`mt-1 text-sm ${notification.isRead ? "text-gray-500" : "text-gray-300"}`}>
                          {notification.message}
                        </p>
                      </div>

                      {!notification.isRead && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-500">{notification.timestamp}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          notification.type === "order"
                            ? "bg-green-900 text-green-300"
                            : notification.type === "promotion"
                              ? "bg-purple-900 text-purple-300"
                              : notification.type === "product"
                                ? "bg-blue-900 text-blue-300"
                                : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {notification.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  )
}
