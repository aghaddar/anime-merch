export function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact us section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact us</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span>📞</span>
              <span>(000)123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>aghaddar72@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Our links section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our links</h3>
          <div className="space-y-2">
            <div>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Home
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-purple-400 transition-colors">
                career
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-purple-400 transition-colors">
                location
              </a>
            </div>
          </div>
        </div>

        {/* Social media section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Social media</h3>
          <div className="space-y-2">
            <div>
              <a href="#" className="hover:text-purple-400 transition-colors">
                instagram
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
