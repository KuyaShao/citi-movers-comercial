import Image from 'next/image';
import { Card } from 'antd';

function LatestNews() {
    return (
        <div className="text-center mt-10">
            <h3 className="text-[#999] font-semibold">{`Company's`} News</h3>
            <h1 className="text-4xl font-bold text-blue-500">Recent Posts</h1>
            <div className="flex flex-col items-center justify-between lg:flex-row m-auto lg:w-[90%] xl:w-[60%]">
                <Card hoverable className="w-[350px] lg:w-[400px] mt-5 lg:mr-5" cover={
                    <div className="relative w-full h-[200px]">
                        <Image
                            src="https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="News Logistics"
                            fill
                        />
                    </div>

                }>
                    <h3 className="font-bold text-sm text-blue-500">Business / <span className="text-sm text-[#999]">September 28 2023</span></h3>
                    <h1 className="font-bold text-lg text-black mt-5 mb-3">Rebisco Packages</h1>
                    <p className="text-sm text-[#999]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantiumg</p>

                </Card>
                <Card hoverable className="w-[350px] lg:w-[400px] mt-5 lg:mr-5" cover={
                    <div className="relative w-full h-[200px]">
                        <Image
                            src="https://images.pexels.com/photos/7363196/pexels-photo-7363196.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Online Payment"
                            fill
                        />
                    </div>

                }>
                    <h3 className="font-bold text-sm text-blue-500">Business / <span className="text-sm text-[#999]">October 28 2023</span></h3>
                    <h1 className="font-bold text-lg text-black mt-5 mb-3">Launch of Online Payment</h1>
                    <p className="text-sm text-[#999]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantiumg</p>

                </Card>
                <Card hoverable className="w-[350px] lg:w-[400px] mt-5 lg:mr-5" cover={
                    <div className="relative w-full h-[200px]">
                        <Image
                            src="https://images.pexels.com/photos/4481329/pexels-photo-4481329.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="News Logistics"
                            fill
                        />
                    </div>

                }>
                    <h3 className="font-bold text-sm text-blue-500">Business / <span className="text-sm text-[#999]">November 28 2023</span></h3>
                    <h1 className="font-bold text-lg text-black mt-5 mb-3">In Citi Movers We Care</h1>
                    <p className="text-sm text-[#999]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantiumg</p>

                </Card>
            </div>
        </div>
    )
}

export default LatestNews;