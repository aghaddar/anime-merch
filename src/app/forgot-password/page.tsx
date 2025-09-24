"use client";

import { useRouter } from "next/navigation";

function LoginPage() {
  const router = useRouter();

  return (
    <div className="main-page min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="login-container w-full max-w-md p-6 bg-surface rounded-xl shadow-lg">

        <div className="mb-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-sm text-gray-300 hover:text-white flex items-center gap-2"
          >
            ← Back
          </button>
        </div>
        
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold">Forgot My Password</h1>
          <p className="text-[#5A5858] mt-1">change your password</p>
          <p className="mt-6 text-[#999999]">please enter the email you would like to 
          receive the password changing info on</p>
        </header>

        {/* Login Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#B3B3B3]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full rounded-[10PX] border border-neutral-700 bg-surface px-3 py-2 text-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          

        

          {/* Log In Button */}
          <button
            type="submit"
            className="btn-primary w-full rounded-[15px]"
          >
            Request Reset Link
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm mt-4">
          <a href="/login" className="text-purple-600 hover:underline">
            back to login
          </a>
        </p>
      
      
      </div>
    </div>
  );
}

export default LoginPage;
