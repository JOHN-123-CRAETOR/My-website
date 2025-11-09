import React from "react";

function LoginPage() {
  return (
    <div
      id="full-page"
      className="max-h-screen w-full bg-[#121C20] flex flex-col"
    >
      <div className="max-h-screen w-full bg-[#121C20] backdrop-blur-md p-20 flex flex-col justify-center">
        <h1 className="text-white text-5xl text-center font-semibold mb-20 pl-6">
          Welcome back
        </h1>

        <form className="space-y-5 w-full max-w-lg pl-6">
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

          <div className="ml-50">
            <a
              href="#"
              className="text-sm text-[#55717E] hover:text-blue-300 transition duration-150"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-170 py-4 bg-[#1294D3] hover:bg-blue-600 text-white font-semibold rounded-md 
                       shadow-lg hover:shadow-blue-600/30 transition duration-200 ease-in-out ml-50"
          >
            Log in
          </button >
        </form>

        <div className="flex items-center my-6 max-w-lg mx-auto">
          <hr className="flex-grow border-gray-700" />
          <span className="px-3 text-[#55717E] text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        <div className="max-w-xl mx-auto space-y-4 w-full">
          <div className="flex gap-4 w-full">
            <button className="flex-[8] flex items-center justify-center py-4 bg-[#243C47] hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
              MetaMask
            </button>
            <button className="flex-[7] flex items-center justify-center py-4 bg-[#243C47] hover:bg-gray-600 text-white rounded-xl shadow-md hover:shadow-lg transition">
              WalletConnect
            </button>
          </div>

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

