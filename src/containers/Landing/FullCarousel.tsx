"use client";
import { Carousel } from 'antd';
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { motion } from 'framer-motion';
import { animations, images } from "./helpers";

function FullCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const onChange = (current: number) => {
        setCurrentSlide(current);
    };

    return (

        <Carousel autoplay className="h-screen" afterChange={onChange}>
            {images.map((image, index) => (
                <div key={index} className="relative w-full h-full">
                    <div className="relative w-full h-screen object-cover">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-80">
                            {index === currentSlide && (
                                <Fragment>
                                    <motion.h1
                                        className="text-4xl font-extrabold mb-4 text-center"
                                        initial={animations[index % animations.length].initial}
                                        animate={animations[index % animations.length].animate}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <p className="w-[80%] m-auto">{image.title}</p>
                                    </motion.h1>
                                    <motion.h2
                                        className="text-xl mb-4 text-center"
                                        initial={animations[index % animations.length].initial}
                                        animate={animations[index % animations.length].animate}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        {image.subTitle}
                                    </motion.h2>
                                    <motion.p
                                        className="text-center mb-6 px-4 text-base"
                                        initial={animations[index % animations.length].initial}
                                        animate={animations[index % animations.length].animate}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        {image.description}
                                    </motion.p>
                                    <div className="flex items-center justify-center">
                                        <motion.button
                                            className="bg-blue-600 hover:bg-blue-700 font-bold text-white py-2 rounded-full w-[50%] lg:w-[30%]"
                                            initial={animations[index % animations.length].initial}
                                            animate={animations[index % animations.length].animate}
                                            transition={{ duration: 0.5, delay: 0.8 }}
                                        >
                                            {image.buttonText}
                                        </motion.button>
                                    </div>
                                </Fragment>
                            )}


                        </div>
                    </div>
                </div>
            ))}
        </Carousel>

    );
}

export default FullCarousel