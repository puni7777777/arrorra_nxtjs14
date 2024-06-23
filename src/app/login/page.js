import React from 'react'

export default function Login() {
    return (
        <div>
            <div class="flex flex-col items-center justify-center mt-32 mb-32 dark">
                <div class="w-full max-w-md bg-[#171717ee] rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-bold text-gray-300 mb-4">L<span className="text-red-500">O</span>gin</h2>
                    <form action="" class='flex flex-col'>
                        <input type="email" class='bg-gray-800 text-red-500 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-red-500 transition ease-in-out duration-150' placeholder='Email' />
                        <input type="password" class='bg-gray-800 text-red-500 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-red-500 transition ease-in-out duration-150' placeholder='Password' />
                        <button class="bg-gradient-to-r from-red-900 to-red-500 text-red-300 font-bold py-2 px-4 rounded-md mt-4 hover:text-red-500" type="submit">Login</button>
                        <div class="flex items-center justify-between flex-col mt-4">
                            {/* <label class="text-sm text-gray-200 cursor-pointer" for="remember-me">
                                <input class="mr-2" id="remember-me" type="checkbox" />
                                Remember me
                            </label> */}
                            <a class="text-sm text-red-500 hover:underline mb-0.5" href="#">Forgot password?</a>
                            <p class="text-white mt-4"> Don't have an account? <a class="text-sm text-red-500 -200 hover:underline mt-4" href="signup">Signup</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
