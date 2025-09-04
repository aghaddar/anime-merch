function LoginPage() {
  return (
    <div className="main-page min-h-screen flex items-center justify-center bg-[#0F0F0F]">
      <div className="login-container w-full max-w-md p-6 bg-[#1A1A1A] rounded-xl shadow-lg">
        
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold">Join Animeplus</h1>
          <p className="text-[#5A5858] mt-1">create your account</p>
        </header>

        {/* Login Form */}
        <form className="space-y-4">
        
          <div className="flex gap-4">
          {/* first name */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#B3B3B3]">
              First Name
            </label>
            <input
              type="name"
              id="name"
              placeholder="Enter your first name"
              className="mt-1 block w-full rounded-[10PX] border border-[#3A3A3A] bg-[#2A2A2A] px-3 py-2 text-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          
          {/* last name */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#B3B3B3]">
              Last Name
            </label>
            <input
              type="name"
              id="name"
              placeholder="Enter your last name"
              className="mt-1 block w-full rounded-[10PX] border border-[#3A3A3A] bg-[#2A2A2A] px-3 py-2 text-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#B3B3B3]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-[10PX] border border-[#3A3A3A] bg-[#2A2A2A] px-3 py-2 text-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#B3B3B3]">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full rounded-[10PX] border border-[#3A3A3A] bg-[#2A2A2A] px-3 py-2 text-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          
          {/* Confirm Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#B3B3B3]">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 block w-full rounded-[10PX] border border-[#3A3A3A] bg-[#2A2A2A] px-3 py-2 text-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>



          {/* Log In Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <hr className="border-[#B3B3B3]" />
          <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2A2A2A] px-2 text-sm text-[#B3B3B3] rounded">
            continue with
          </span>
        </div>

        {/* Social Login */}
        <div className="flex space-x-4">
          <button className="flex-1 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition">
            Google
          </button>
          <button className="flex-1 py-2 border rounded-lg bg-blue-500 text-gray-700 hover:bg-gray-100 transition">
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
