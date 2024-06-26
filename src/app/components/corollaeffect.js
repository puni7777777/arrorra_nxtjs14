import { React, useState, useEffect } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import file_name from './File_imports'
import PropTypes from 'prop-types';
import Image from 'next/image';

export default function Corollaeffect(props) {

    let [slide, setSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlide((prevSlide) => (prevSlide === file_name.length - 1 ? 0 : prevSlide + 1));
        }, 3000);
        return () => clearTimeout(timer);
    }, [slide]);

    let pr_slide = () => {
        if (slide === 0) { setSlide(file_name.length - 1) }
        else { setSlide(slide - 1); }
    }

    let nxt_slide = () => {
        if (slide === file_name.length - 1) { setSlide(0) }
        else { setSlide(slide + 1); }
    }

    let navDots = file_name.map((_, index) => {
        let activeDot = index === slide ? "bg-black" : "bg-gray-400";
        // let test = ""
        // for (let i = 0; i < file_name.length; i++) {
        //     test += i
        // }
        return (
            <span
                key={index}
                className={`${activeDot} rounded-full w-4 h-4 hover:bg-black`}
                onClick={() => setSlide(index)}
            ></span>
        );
    });

    if (file_name.length === 0) {
        return (
            <div className="bg-gray-200 animate-pulse min-h-screen">
                <div className="container mx-auto py-20">
                    <div className="w-full max-w-2xl mx-auto text-center">
                        <div className="h-8 w-64 bg-gray-300 rounded mb-4"></div>
                        <div className="h-8 w-48 bg-gray-300 rounded mb-4"></div>
                        <div className="h-8 w-32 bg-gray-300 rounded mb-4"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`overflow-hidden relative rounded-2xl ${props.width}`}>
            <div className={`flex transition-all duration-1000 ease-in-out h-96`} style={{ transform: `translatex(-${slide * 100}%)` }}>
                {file_name.map(s => {
                    return <Image src={s} alt="nopic" className='w-full object-cover' style={{ flexShrink: 0 }} />
                })}
            </div>
            <div className={`absolute top-0 h-full w-full justify-between items-center flex z-10 text-3xl`}>
                <FaAngleLeft className='absolute left-0 top-50 text-white text-2xl hover:text-gray-800 cursor-pointer' onClick={pr_slide} />
                <FaAngleRight className='absolute right-0 top-50 text-white text-2xl hover:text-gray-800 cursor-pointer' onClick={nxt_slide} />
            </div>
            <div className="">
                <div className={`navDots flex justify-center items-center absolute bottom-10 left-1/2 transform -translate-x-1/2 h-1 w-1/2 z-20 cursor-pointer gap-3`} onClick={(e) => e.stopPropagation()}>
                    {navDots}
                </div>
            </div>
        </div>
    )
}

Corollaeffect.propTypes = {
    width: PropTypes.string.isRequired,
}

Corollaeffect.defaultProps = {
    width: 'w-screen'
}
