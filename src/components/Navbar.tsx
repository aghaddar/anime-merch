import SearchBar from "./SearchBar"
import Link from "next/link"

function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between p-4 bg-[#1c1c1c] text-white h-[80px] relative">
      {/* left side: logo + categories */}
      <div className="flex items-center gap-6">
        {/* logo */}
        <div className="logo h-[40px] w-[160px]">
          <a href="/" className="hover:opacity-80 transition-opacity duration-500">
            <img src="/animeplus-logo.png" alt="AnimePlus Logo" />
          </a>
        </div>

        {/* categories */}
        <div className="flex items-center justify-center">
          <div className="categories group cursor-pointer relative">
            <div className="flex items-center gap-2">
              <span className="text-white text-[20px] font-light tracking-wide">genre</span>
              <svg
                className="w-8 h-8 text-white transition-transform duration-300 ease-in-out group-hover:rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="absolute top-full left-0 mt-2 w-[800px] bg-[#2a2a2a] border border-gray-600 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
              <div className="grid grid-cols-3 gap-8 p-6">
                {/* Men/Women/Kids Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">Apparel</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-md font-medium text-gray-300 mb-2">Men | Women | Kids</h4>
                      <div className="space-y-1">
                        <p className="text-sm text-gray-400 font-medium">Clothing:</p>
                        <ul className="text-sm text-gray-300 space-y-1 ml-2">
                          <li className="hover:text-white cursor-pointer">Hoodies</li>
                          <li className="hover:text-white cursor-pointer">T-Shirts</li>
                          <li className="hover:text-white cursor-pointer">Socks</li>
                          <li className="hover:text-white cursor-pointer">Pants</li>
                          <li className="hover:text-white cursor-pointer">Tanks</li>
                          <li className="hover:text-white cursor-pointer">Jackets</li>
                        </ul>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm text-gray-400 font-medium">Accessories:</p>
                        <ul className="text-sm text-gray-300 space-y-1 ml-2">
                          <li className="hover:text-white cursor-pointer">Hats</li>
                          <li className="hover:text-white cursor-pointer">Necklace</li>
                          <li className="hover:text-white cursor-pointer">Rings</li>
                          <li className="hover:text-white cursor-pointer">Key chains</li>
                          <li className="hover:text-white cursor-pointer">Earrings</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manga Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">Manga</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-2">Format:</p>
                      <ul className="text-sm text-gray-300 space-y-1 ml-2">
                        <li className="hover:text-white cursor-pointer">Hard copy</li>
                        <li className="hover:text-white cursor-pointer">Soft copy</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium mb-2">Genres:</p>
                      <ul className="text-sm text-gray-300 space-y-1 ml-2">
                        <li className="hover:text-white cursor-pointer">Action</li>
                        <li className="hover:text-white cursor-pointer">Adventure</li>
                        <li className="hover:text-white cursor-pointer">Comedy</li>
                        <li className="hover:text-white cursor-pointer">Drama</li>
                        <li className="hover:text-white cursor-pointer">Fantasy</li>
                        <li className="hover:text-white cursor-pointer">Horror</li>
                        <li className="hover:text-white cursor-pointer">Romance</li>
                        <li className="hover:text-white cursor-pointer">Sci-Fi</li>
                        <li className="hover:text-white cursor-pointer">Slice of Life</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Decoration Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-600 pb-2">Decoration</h3>
                  <div className="space-y-2">
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li className="hover:text-white cursor-pointer">Paintings</li>
                      <li className="hover:text-white cursor-pointer">Katana</li>
                      <li className="hover:text-white cursor-pointer">Sculptures</li>
                      <li className="hover:text-white cursor-pointer">Figurines</li>
                      <li className="hover:text-white cursor-pointer">Vases</li>
                      <li className="hover:text-white cursor-pointer">Tapestries</li>
                      <li className="hover:text-white cursor-pointer">Wall hangings</li>
                      <li className="hover:text-white cursor-pointer">Decorative clocks</li>
                      <li className="hover:text-white cursor-pointer">Unique lamps</li>
                      <li className="hover:text-white cursor-pointer">Collectible items</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right side: search + notification + cart + login */}
      <div className="flex items-center gap-6">
        {/* search bar */}
        <div className="searchbar flex items-center px-2 rounded-md">
          <SearchBar />
        </div>

        {/* notification */}
        <div className="notification w-[25px] h-[25px]">
          <img src="/darkmode-notification.png" alt="notification bell" />
        </div>

        {/* cart */}
        <div className="cart w-[25px] h-[25px]">
          <img src="/darkmode-cart.png" alt="cart" />
        </div>

        {/* login button */}
        <Link href="/login" className="login h-[40px] w-[100px] bg-white text-black rounded-[10px] text-[20px] font-bold flex items-center justify-center hover:opacity-80 transition-opacity duration-500">
          Login
        </Link>
        
      </div>
    </nav>
  )
}

export default Navbar
