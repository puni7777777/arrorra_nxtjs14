import Image from 'next/image';
import millet from '@/app/(pages)/allphotos/millets.jpg'

export default function Page({ params }) {
    return (
        <div className="mx- p-4 pt-6 md:p-6 lg:p-12 flex flex-col gap-8">
            <div className="flex gap-4">
                <div className="w-1/2">
                    <div className="flex justify-between mb-4">
                        <h1 className="text-3xl font-bold">{params.slug}</h1>
                        {/* <div className="text-lg text-gray-600">
                            <span>4.5/5</span>
                            <span className="text-sm">(1234 reviews)</span>
                        </div> */}
                    </div>
                    <div className="h-full">
                        <Image
                            src={millet}
                            alt={params.slug}
                            className="w-full h-80 object-cover rounded"
                        />
                    </div>
                </div>
                <div>
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold">Product Description</h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold">Product Details</h2>
                        <ul className="list-none mb-4">
                            <li className="flex justify-between mb-2">
                                <span>Color:</span>
                                <span>Black</span>
                            </li>
                            <li className="flex justify-between mb-2">
                                <span>Weight:</span>
                                <span>1 kg</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold">Price and Availability</h2>
                        <div className="flex justify-between mb-2">
                            <span className="text-2xl font-bold">$199.99</span>
                            <span className="text-sm text-gray-600">(Free shipping)</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-green-600">In stock</span>
                            <span className="text-sm text-gray-600">(Usually ships within 24 hours)</span>
                        </div>
                    </div>
                    <div className="flex flex-col mb-4 w-fit gap-5">
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                        <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="mb-4">
                <h2 className="text-2xl font-bold">Customer Reviews</h2>
                <ul className="list-none mb-4">
                    <li className="mb-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-lg text-yellow-500">5/5</span>
                            <span className="text-sm text-gray-600">Verified Purchase</span>
                        </div>
                        <p className="text-gray-600">Great product! Works as expected.</p>
                    </li>
                    <li className="mb-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-lg text-yellow-500">4/5</span>
                            <span className="text-sm text-gray-600">Verified Purchase</span>
                        </div>
                        <p className="text-gray-600">Good product, but a bit pricey.</p>
                    </li>
                </ul>
            </div> */}
        </div>
    );
}