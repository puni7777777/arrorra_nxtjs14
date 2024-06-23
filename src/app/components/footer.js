'use client'
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { RiShoppingCartLine } from "react-icons/ri";

export default function footer() {

    const footerLinks = 'info-links mt-1.5 hover:links-red-500';

    return (
        <div>
            <footer className="bg-[#171717ee]">
                {/* <div className='flex flex-row justify-around gap-16 w-screen mt-10'>
                    <div className='flex flex-col'>
                        <label htmlFor="info-links" className=''>
                            <h2 className='font-bold'>INFORMATION</h2>
                            <div className='flex flex-col mt-2'>
                                <Link href="/customerservice" className={footerLinks}>Custom Service</Link>
                                <Link href="/faq" id='info-links mt-1.5'>FAQ's</Link>
                            </div>
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="info-links" className=''>
                            <h2 className='font-bold'>QUICK LINKS</h2>
                            <div className='flex flex-col mt-2'>
                                <Link href="/about" id='info-links mt-1.5'>About Us</Link>
                                <Link href="/contact" id='info-links mt-1.5'>Contact Us</Link>
                                <Link href="#" id='info-links mt-1.5'>Order tracking</Link>
                            </div>
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="info-links" className=''>
                            <h2 className='font-bold'>IMPORTANT LINKS</h2>
                            <div className='flex flex-col mt-2'>
                                <Link href="#" id='info-links mt-1.5'>Refund Policy</Link>
                                <Link href="#" id='info-links mt-1.5'>Privacy Policy</Link>
                                <Link href="#" id='info-links mt-1.5'>Terms of Service</Link>
                                <Link href="#" id='info-links mt-1.5'>Shipping Policy</Link>
                            </div>
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="info-links" className=''>
                            <h2 className='font-bold'>FOLLOW US ON</h2>
                            <div className='flex flex-row mt-2 gap-4'>
                                <Link href="#" id='info-links'><FaFacebook /></Link>
                                <Link href="#" id='info-links'><FaInstagram /></Link>
                                <Link href="#" id='info-links'><FaTwitter /></Link>
                                <Link href="#" id='info-links'><FaYoutube /></Link>
                            </div>
                        </label>
                    </div>
                </div> */}
                <p className="text-center text-sm">
                    &copy; 2024 ARRORRA. All Rights Reserved.
                </p>
            </footer>
        </div>
    )
}
