import dynamic from 'next/dynamic';
const FullCarousel = dynamic(() => import("@/containers/Landing/FullCarousel"));
const AboutUs = dynamic(() => import("@/containers/Landing/AboutUs"));
const MainPage = dynamic(() => import("@/containers/Landing/MainPage"));
const MakeUsSpecial = dynamic(() => import("@/containers/Landing/MakeUsSpecial"));
const Analytics = dynamic(() => import("@/containers/Landing/Analytics"));
const CustomerSaying = dynamic(() => import("@/containers/Landing/CustomerSaying"));
const PhotoShowCase = dynamic(() => import("@/containers/Landing/PhotoShowCase"));
const InterestedWorking = dynamic(() => import("@/containers/Landing/InterestedWorking"));
const LatestNews = dynamic(() => import("@/containers/Landing/LatestNews"));
const SomeClients = dynamic(() => import("@/containers/Landing/SomeClients"));
export {
    FullCarousel,
    AboutUs,
    MainPage,
    MakeUsSpecial,
    Analytics,
    PhotoShowCase,
    CustomerSaying,
    InterestedWorking,
    LatestNews,
    SomeClients
}