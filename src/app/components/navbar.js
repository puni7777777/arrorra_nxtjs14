'use client'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../allphotos/logo.png'
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { RiShoppingCartLine } from "react-icons/ri";

export default function navbar() {

    const [showbtn, setShowbtn] = useState(false);
    const [cartnumber, setCartnumber] = useState(0);
    const navStyle = 'content-center hover:text-red-500';
    const btnStyle = 'bg-gray-900 px-4 py-2 rounded-md hover:bg-red-500';

    useEffect(() => {
        const showScrollTop = () => {
            window.pageYOffset > 300 ? setShowbtn(true) : setShowbtn(false);
        };
        window.addEventListener('scroll', showScrollTop);
        return () => {
            window.removeEventListener('scroll', showScrollTop);
        };
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // const observe = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('show');
    //     } else {
    //       entry.target.classList.remove('show');
    //     }
    //   });
    // });

    return (
        <div>
            <Head>
                <title>ARRORRA</title>
            </Head>
            {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        Get started by editing&nbsp;
                        <code className="font-mono font-bold">src/app/page.js</code>
                    </p>
                </div> */}
            <div className="bg-black text-white mx-8">
                <header className="py-4 px-8 flex justify-between items-center">
                    <Link href='/'>
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold mr-4">
                                ARR<span className="text-red-500">O</span>RRA
                            </h1>
                            <Image src={logo} alt="Logo" width={32} height={32} />
                        </div>
                    </Link>
                    <nav className="">
                        <div className='flex justify-around items-center gap-8 flex-wrap space-x-4'>
                            <Link href='/' className={navStyle}>HOME</Link>
                            <Link href="/shop" className={navStyle}>SHOP</Link>
                            <Link href="/about" className={navStyle}>ABOUT US</Link>
                            <Link href="/contact" className={navStyle}>CONTACT US</Link>
                            <Link href="/profile" className={navStyle}>MY PROFILE</Link>
                            <Link href="/cart" className={navStyle}>
                                {/* <div className='relative flexitems-center flex-col '>
                                        <span className='absolute ml-4 my-7 z-30 text-xs'>
                                            <span className=''>
                                                {cartnumber}
                                            </span>
                                        </span>
                                        <RiShoppingCartLine className='mt-9' />
                                    </div> */}
                                CART
                            </Link>
                            <Link href="/login">
                                <button className={btnStyle}>
                                    {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 00116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a2 2 0 11-4 0 2 2 0 014 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg> */}
                                    LOGIN/SIGN UP
                                </button>
                            </Link>
                        </div>
                    </nav>
                </header>
                <div>
                    {showbtn && (
                        <div className={`scrollToTop`}>
                            <button className='fixed bottom-5 right-7 z-50 p-4 cursor-pointer' onClick={handleScrollTop}>
                                <FaArrowUp className='absolute left-0 top-50 text-2xl text-gray-800 cursor-pointer' />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
