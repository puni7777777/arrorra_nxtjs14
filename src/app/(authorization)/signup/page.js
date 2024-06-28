'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const signup = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleRegister = async (e) => {
        e.preventDefault()

        if (!name || !email || !password) {
            setError('Please fill all the fields')
            return
        }
        try {
            const response = await axios.post('/api/users', {
                name,
                email,
                password
            })
            setError(null)
            router.push('/login')
        } catch (error) {
            // if (error.response && error.response.status === 400) {
            //     setError("Email already exists")
            // } else {
            //     setError("An error occured")
            //     console.error(error.response.data);
            // }
            setError('An error occurred');
        }
    };

    return (
        <>
            <div>
                <div className="flex flex-col items-center justify-center mt-32 mb-32 dark">
                    <div className="w-full max-w-md bg-[#171717ee] rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-300 mb-4">Register</h2>
                        <form onSubmit={handleRegister} className='flex flex-col'>
                            <input type="name" onChange={e => { setName(e.target.value) }} className='bg-gray-800 text-red-500 border-0 rounded-md p-2 mb-4 focus:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-red-500 transition ease-in-out duration-150' placeholder='name' />
                            <input type="email" onChange={e => { setEmail(e.target.value) }} className='bg-gray-800 text-red-500 border-0 rounded-md p-2 mb-4 focus:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-red-500 transition ease-in-out duration-150' placeholder='howareu@example.com' />
                            <input type="password" onChange={e => { setPassword(e.target.value) }} className='bg-gray-800 text-red-500 border-0 rounded-md p-2 mb-4 focus:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-red-500 transition ease-in-out duration-150' placeholder='Password' />
                            <button type='submit' className="bg-gradient-to-r from-red-900 to-red-500 text-red-300 font-bold py-2 px-4 rounded-md mt-4 hover:text-red-100" >Sign up</button>
                            {/* <div class="flex items-center justify-between flex-col mt-4">
                                <label class="text-sm text-gray-200 cursor-pointer" for="remember-me">
                                    <input class="mr-2" id="remember-me" type="checkbox" />
                                    Remember me
                                </label>
                                <a class="text-sm text-red-500 hover:underline mb-0.5" href="#">Forgot password?</a>
                            </div> */}
                            {error && (
                                <div className='bg-red-700 flex justify-center rounded-lg mt-4'>
                                    {error}
                                </div>
                            )}
                            <div className="flex items-center justify-between flex-col">
                                <p className="text-white mt-4"> Already have an account?
                                    <Link className="text-sm text-red-500 -200 hover:underline mt-4" href="/login">
                                        <span> Login</span>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default signup
