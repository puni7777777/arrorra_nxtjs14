'use client'
import logo from './allphotos/logo.png'
import { useState, useEffect } from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { RiShoppingCartLine } from "react-icons/ri";
import Corollaeffect from './components/corollaeffect'

export default function Navbar() {

  const navStyle = 'content-center hover:text-red-500'
  const btnStyle = 'bg-gray-900 px-4 py-2 rounded-md hover:bg-red-500'

  return (
    <div className='mx-8 px-8'>
      <Corollaeffect width='w-full' />
      <main className="container mx-auto py-8">
        <div className="relative">
          <img
            src={logo}
            alt="Banner"
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-32" />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
            <h2 className="text-4xl font-bold">NEW OFFERS</h2>
          </div>
        </div>
        {/* search field */}
        {/* <div className="flex justify-between items-center mt-8">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476 6 6 0 01-10.89 3.476z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search anime.."
              className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button className="bg-red-500 px-6 py-2 rounded-md hover:bg-red-600">
            Filter
          </button>
        </div> */}
        {/* <div className="mt-8">
          <p className="text-center text-sm">
            If you enjoy shoping Here, please consider sharing it with your friends.
            Thank you!
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a2 2 0 11-4 0 2 2 0 014 0z"
                  clipRule="evenodd"
                />
              </svg>
              35.5k
            </button>
            <button className="bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0 7 7 0 01-14 0z"
                  clipRule="evenodd"
                />
              </svg>
              22.7k
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              12k
            </button>
            <button className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              38.6k
            </button>
            <button className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 11H7.707l-2.293 2.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              28.2k
            </button>
            <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 2H9v2h2V10zm3 2H12v2h2V12zm3 2H15v2h2V14z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div> */}
        {/* cards start */}
        <div className="flex justify-between items-center mt-8">
          <h3 className="text-2xl font-bold">
            NEW ARRIVALS
          </h3>
          <div className="flex space-x-4">
            <button className={btnStyle}>
              All
            </button>
            <button className={btnStyle}>
              TRENDING
            </button>
            <button className={btnStyle}>
              HEALTHY
            </button>
            <button className={btnStyle}>
              POWDERS
            </button>
            <button className={btnStyle}>
              CHUTNEYS
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 mt-8">
          <div className="bg-gray-800 rounded-md overflow-hidden">
            <img
              src="/PRODUCT1.jpg"
              alt="PRODUCT 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">PRODUCT 1</h4>
              <p className="text-sm">price</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-md overflow-hidden">
            <img
              src="/PRODUCT2.jpg"
              alt="PRODUCT 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">PRODUCT 2</h4>
              <p className="text-sm">price</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-md overflow-hidden">
            <img
              src="/PRODUCT3.jpg"
              alt="PRODUCT 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">PRODUCT 3</h4>
              <p className="text-sm">price</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-md overflow-hidden">
            <img
              src="/PRODUCT4.jpg"
              alt="PRODUCT 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">PRODUCT 4</h4>
              <p className="text-sm">price</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-md overflow-hidden">
            <img
              src="/PRODUCT5.jpg"
              alt="PRODUCT 5"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">PRODUCT 5</h4>
              <p className="text-sm">price</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-md overflow-hidden">
            <img
              src="/PRODUCT6.jpg"
              alt="PRODUCT 6"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">PRODUCT 6</h4>
              <p className="text-sm">price</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-md overflow-hidden">
            <img
              src="/PRODUCT7.jpg"
              alt="PRODUCT 7"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">PRODUCT 7</h4>
              <p className="text-sm">price</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-md overflow-hidden">
            <img
              src="/PRODUCT8.jpg"
              alt="PRODUCT 8"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-bold">PRODUCT 8</h4>
              <p className="text-sm">price</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
