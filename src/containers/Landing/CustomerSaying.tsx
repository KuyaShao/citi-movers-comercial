import { Avatar, Carousel } from 'antd';

function CustomerSaying() {
    const testimonials = [
        {
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Aliquam gravida, urna quis ornare imperdiet.',
            name: 'John Gerry',
            title: 'Design Hunt',
        },
        {
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Aliquam gravida, urna quis ornare imperdiet.',
            name: 'Jane Doe',
            title: 'Creative Minds',
        },
        {
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
            quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Aliquam gravida, urna quis ornare imperdiet.',
            name: 'John Smith',
            title: 'Visual Guru',
        },
        {
            avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
            quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Aliquam gravida, urna quis ornare imperdiet.',
            name: 'Sara Lee',
            title: 'Art Director',
        },
    ];
    return (
        <div className="text-center mt-10">
            <h3 className="text-[#999] font-semibold">What Our</h3>
            <h1 className="text-4xl font-bold text-blue-500">Customer Saying</h1>
            <div className="max-w-6xl mx-auto py-8 px-4">
                {/* Desktop Carousel */}
                <div className="hidden md:block">
                    <Carousel
                        autoplay={true}
                        arrows
                        slidesToShow={2}
                        slidesToScroll={1}
                        responsive={[
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    infinite: true,
                                },
                            },
                        ]}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-4">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                                    <div className="flex items-center">
                                        <Avatar
                                            size={100}
                                            src={testimonial.avatar}
                                            className="mb-4 md:mb-0 md:mr-6"
                                        />
                                        <div>
                                            <p className="text-gray-600 text-sm md:text-base mb-4">{testimonial.quote}</p>
                                            <p className="font-semibold text-black">
                                                — {testimonial.name} <span className="font-normal text-gray-500">{testimonial.title}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

                <div className="md:hidden">
                    <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="flex-none w-full snap-center">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mx-2">
                                    <div className="flex flex-col items-center">
                                        <Avatar
                                            size={100}
                                            src={testimonial.avatar}
                                            className="mb-4"
                                        />
                                        <div className="text-center">
                                            <p className="text-gray-600 text-sm mb-4">{testimonial.quote}</p>
                                            <p className="font-semibold text-black">
                                                — {testimonial.name} <span className="font-normal text-gray-500">{testimonial.title}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSaying;