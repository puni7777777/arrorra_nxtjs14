'use client'
import Image from 'next/image';
import Link from 'next/link'
import logo from './(pages)/allphotos/logo.png'
import { useState, useEffect } from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { RiShoppingCartLine } from "react-icons/ri";
import Corollaeffect from './components/corollaeffect'
import products from './api/products/productlist'

export default function Navbar() {

  const navStyle = 'content-center hover:text-red-500'
  const btnStyle = 'bg-gray-900 px-4 py-2 rounded-md hover:bg-red-500'

  return (
    <div className='mx-8 px-8'>
      <main className="container mx-auto py-8">
        <div className="relative">
          <Corollaeffect width='w-full' />
          {/* <Image
            src={logo}
            alt="Banner"
            className="w-full h-96 object-cover"
          /> */}
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-32" />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
            <h2 className="text-4xl font-bold">NEW OFFERS</h2>
          </div>
        </div>
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
          {products && products.map(s => {
            return (
              <Link href={'/productpages/'+s.name}>
                <div className="bg-gray-800 rounded-md overflow-hidden">
                  <Image
                    src={s.img}
                    alt="PRODUCT"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-bold">{s.name}</h4>
                    <p className="text-sm">{s.prize}</p>
                  </div>
                </div>
              </Link>)
          })}
        </div>
      </main>
    </div>
  );
}
