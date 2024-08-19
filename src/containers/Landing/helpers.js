const animations = [
    {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
    },
    {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
    },
    {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
    },
];
const images = [
    {
        src: "/truck.jpeg",
        alt: "We are Citi Movers",
        title: "We are Citi Movers",
        subTitle: "From Pickup to Destination",
        description: " We deliver your products on time with pure safety. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        buttonText: "Learn more"
    },
    {
        src: '/trucktor.jpg',
        alt: 'Slide 2',
        title: "Ready for any Obstacles",
        subTitle: "Anywhere, Anytime",
        description: "Your trust is our commitment. Experience unparalleled reliability and service.",
        buttonText: "DISCOVER MORE"
    },
    {
        src: '/construction-site.jpeg',
        alt: 'Efficient Logistics',
        title: "Efficient Logistics",
        subTitle: "Optimized for You",
        description: "Our logistics solutions ensure that your goods reach their destination efficiently and safely.",
        buttonText: "GET STARTED"
    },
];

export {
    images,
    animations
}