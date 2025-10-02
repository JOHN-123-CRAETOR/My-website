import React from "react";

function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col justify-center items-center p-6">
      {/* Full Page Container */}
      <div className="min-h-screen w-full bg-gray-800/90 backdrop-blur-md p-10 flex flex-col justify-center">
        
        {/* Title (emoji removed) */}
        8<h1 className="text-white text-4xl font-normal mb-8 text-center tracking-wide">
          Welcome back 
        </h1>

        {/* Form (slightly shifted left) */}
        <form className="space-y-5 max-w-lg w-full mx-auto pl-6">
          
          {/* Email Group with Label */}
          <div>
            <label htmlFor="email" className="block text-gray-200 text-l font-small mb-2">
              Email or phone number
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email or phone number"
              className="w-full px-4 py-4 bg-gray-700/70 text-gray-200 border border-gray-600 rounded-xl 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition
                        "
            />
          </div>

          {/* Password Group with Label - SHIFTED LEFT */}
          {/* Added a container div here with negative right margin to pull it left */}
          <div className="-mr-6"> {/* Adjust -mr-6 to a smaller or larger value if needed for more/less shift */}
            <label htmlFor="password" className="block text-gray-200 text-l font-small mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4 bg-gray-700/70 text-gray-200 border border-gray-600 rounded-xl 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition"
            />
          </div>

          {/* Forgot password (stays aligned with form) */}
          <div className="pl-4">
            <a
              href="#"
              className="text-sm text-blue-400 hover:text-blue-300 transition duration-150"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
                        text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-600/30 transition duration-200 ease-in-out"
          >
            Log in
          </button>
        </form>

        {/* Divider (unchanged) */}
        <div className="flex items-center my-6 max-w-lg mx-auto">
          <hr className="flex-grow border-gray-700" />
          <span className="px-3 text-gray-400 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Wallet Buttons (unchanged) */}
        <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
          <button className="flex items-center justify-center p-3 bg-gray-700/80 hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg border border-gray-600 transition">MetaMask</button>
          <button className="flex items-center justify-center p-3 bg-gray-700/80 hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg border border-gray-600 transition">WalletConnect</button>
          <button className="flex items-center justify-center p-3 bg-gray-700/80 hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg border border-gray-600 transition">Coinbase</button>
          <button className="flex items-center justify-center p-3 bg-gray-700/80 hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg border border-gray-600 transition">Other Wallet</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import React from "react";

function LoginPage() {
  return (
    <div
      id="full-page"
      className="max-h-screen w-full bg-[#121C20] flex flex-col"
    >
      {/* Full Page Container */}
      <div className="max-h-screen w-full bg-[#121C20] backdrop-blur-md p-10 flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-white text-5xl text-center font-semibold mb-20 pl-6">
          Welcome back
        </h1>

        {/* Form (aligned left) */}
        <form className="space-y-5 w-full max-w-lg pl-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-200 text-md mb-1"
            >
              Email or phone number
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email or phone number"
              className="w-150 px-4 py-4 bg-[#192B33] text-[#55717E] border border-gray-600 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-200 text-md mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-150 px-4 py-4 bg-[#192B33] text-[#55717E] border border-gray-600 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition"
            />
          </div>

          {/* Forgot password */}
          <div>
            <a
              href="#"
              className="text-sm text-[#55717E] hover:text-blue-300 transition duration-150"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-170 py-4 bg-[#1294D3] hover:bg-blue-600 text-white font-semibold rounded-md 
                       shadow-lg hover:shadow-blue-600/30 transition duration-200 ease-in-out"
          >
            Log in
          </button>
        </form>

        {/* Divider (centered) */}
        <div className="flex items-center my-6 max-w-lg mx-auto">
          <hr className="flex-grow border-gray-700" />
          <span className="px-3 text-[#55717E] text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Wallet Options */}
        <div className="max-w-xl mx-auto space-y-4 w-full">
          {/* MetaMask & WalletConnect */}
          <div className="flex gap-4 w-full">
            <button className="flex-[8] flex items-center justify-center py-4 bg-[#243C47] hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
              MetaMask
            </button>
            <button className="flex-[7] flex items-center justify-center py-4 bg-[#243C47] hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
              WalletConnect
            </button>
          </div>

          {/* Coinbase & Other Wallet */}
          <div className="flex gap-4 w-full pb-40">
            <button className="flex-[7] flex items-center justify-center py-4 bg-[#243C47] hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
              Coinbase
            </button>
            <button className="flex-[8] flex items-center justify-center py-4 bg-[#243C47] hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
              Other Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;


///////////////////////////////////////////////////////////////////////////////////////

import React from "react";

function LoginPage() {
  return (
    <div
      id="full-page"
      className="max-h-screen w-full bg-[#121C20] flex flex-col"
    >
      {/* Full Page Container */}
      <div className="max-h-screen w-full bg-[#121C20] backdrop-blur-md p-20 flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-white text-5xl text-center font-semibold mb-20 pl-6">
          Welcome back
        </h1>

        {/* Form (aligned left) */}
        <form className="space-y-5 w-full max-w-lg pl-6">
          {/* Email */}
          <div className="ml-50">
            <label
              htmlFor="email"
              className="block text-gray-200 text-md mb-1"
            >
              Email or phone number
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email or phone number"
              className="w-150 px-4 py-4 bg-[#192B33] text-[#55717E] border border-gray-600 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition "
            />
          </div>

          {/* Password */}
          <div className="ml-50">
            <label
              htmlFor="password"
              className="block text-gray-200 text-md mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-150 px-4 py-4 bg-[#192B33] text-[#55717E] border border-gray-600 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 transition"
            />
          </div>

          {/* Forgot password */}
          <div className="ml-50">
            <a
              href="#"
              className="text-sm text-[#55717E] hover:text-blue-300 transition duration-150"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-170 py-4 bg-[#1294D3] hover:bg-blue-600 text-white font-semibold rounded-md 
                       shadow-lg hover:shadow-blue-600/30 transition duration-200 ease-in-out ml-50"
          >
            Log in
          </button >
        </form>

        {/* Divider (centered) */}
        <div className="flex items-center my-6 max-w-lg mx-auto">
          <hr className="flex-grow border-gray-700" />
          <span className="px-3 text-[#55717E] text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        {/* Wallet Options */}
        <div className="max-w-xl mx-auto space-y-4 w-full">
          {/* MetaMask & WalletConnect */}
          <div className="flex gap-4 w-full">
            <button className="flex-[8] flex items-center justify-center py-4 bg-[#243C47] hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
              MetaMask
            </button>
            <button className="flex-[7] flex items-center justify-center py-4 bg-[#243C47] hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
              WalletConnect
            </button>
          </div>

          {/* Coinbase & Other Wallet */}
          <div className="flex gap-4 w-full pb-21">
            <button className="flex-[7] flex items-center justify-center py-4 bg-[#243C47] hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
              Coinbase
            </button>
            <button className="flex-[8] flex items-center justify-center py-4 bg-[#243C47] hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
              Other Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
