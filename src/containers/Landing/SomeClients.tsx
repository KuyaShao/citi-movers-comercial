import { Carousel } from 'antd';
import Image from 'next/image';


const clients = [
    {
        src: "/jandj.png",
        alt: "Johnson and Johnson"
    },
    {
        src: "/colgate-palmolive.jpg",
        alt: "Colgate Palmolive"
    },
    {
        src: "/monde-nissin.png",
        alt: "Monde Nissin"
    },
    {
        src: "/nestle.png",
        alt: "Nestle"
    },
    {
        src: "/tupperware.png",
        alt: "Tupperware"
    },
];
function SomeClients() {
    return (
        <div className="relative  bg-[url('/src/landing-page/some-our-clients.jpeg')] bg-cover bg-center text-white text-center uppercase mt-5 pt-10">
            <div className="absolute inset-0 bg-black opacity-60">

            </div>
            <div className="relative z-10">
                <h3 className="font-semibold">Some of our</h3>
                <h1 className="text-4xl font-bold ">Clients</h1>
                <div className="max-w-6xl mx-auto py-8 px-4">
                    {/* Desktop Carousel */}
                    <div className="hidden md:block">
                        <Carousel
                            autoplay={true}
                            dots={false}
                            slidesToShow={5}
                            slidesToScroll={1}
                            responsive={[
                                {
                                    breakpoint: 750,
                                    settings: {
                                        slidesToShow: 5,
                                        slidesToScroll: 1,
                                        infinite: true,
                                    },
                                },
                                {
                                    breakpoint: 1024,
                                    settings: {
                                        slidesToShow: 5,
                                        slidesToScroll: 1,
                                        infinite: true,
                                    },
                                },
                            ]}
                        >
                            {clients.map((client, index) => (
                                <div key={index} className="p-4">
                                    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                                        <div className="flex items-center">
                                            <div className="relative h-[100px] w-[300px] m-auto">
                                                <Image src={client.src} alt={client.alt} fill />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    {/* Mobile */}
                    <div className="lg:hidden">
                        <Carousel
                            autoplay={true}
                            dots={false}
                            slidesToShow={2}
                            slidesToScroll={1}
                        >
                            {clients.map((client, index) => (
                                <div key={index} className="p-4">
                                    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                                        <div className="flex items-center">
                                            <div className="relative h-[70px] w-full m-auto">
                                                <Image src={client.src} alt={client.alt} fill />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SomeClients;