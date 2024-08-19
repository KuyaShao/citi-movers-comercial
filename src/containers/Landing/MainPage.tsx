import { Button, Card } from 'antd';
import { DropboxOutlined, GlobalOutlined, PropertySafetyFilled, TruckFilled } from '@ant-design/icons';
import Image from 'next/image';

function MainPage() {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:p-20 xl:[80%] m-auto">
            <div className="p-3 mt-5 text-[#999] text-base mb-10">
                <div className="relative  w-full h-[150px] mb-5 lg:w-[300px] lg:h-[200px]">
                    <Image src="/src/landing-page/years-of-journey.jpg" alt="Years of Journey" fill />
                </div>

                <p className="mb-5">
                    Having implemented a variety of ecological, economic and social initiatives, the family-owned
                    company, which has a history going back 500 years, is considered a pioneer in terms of
                    sustainable business today.
                </p>
                <p>
                    The Corporate Movie of the transport and logistics service provider Globax Logistics. GL not
                    only moves goods and data, but also people who are connected to the orange network.
                </p>
                <div className="flex items-center mt-5">
                    <div style={{ maxWidth: "100px", borderRadius: "50%", boxShadow: "0px 6px 10px 0px rgba(254, 135, 4, 0.2)", border: "5px solid", marginRight: "25px" }}>

                        <Image src="/src/landing-page/ceo.jpg" alt="CEO" height={90} width={90} className="rounded-full" />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-blue-500">Excel Geseti</h3>
                        <span className="text-[#999]">Founder and Ceo</span>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="flex items-center justify-center col-span-12 text-center text-[#232135] mb-5 p-5 lg:col-span-6 lg:p-0">
                    <Card className="max-w-sm shadow-lg border border-gray-200 ">
                        <DropboxOutlined className="text-[50px] text-blue-500" />
                        <h3 className="font-semibold text-center text-xl">Packaging and Storage</h3>
                        <p className="text-[#999] text-sm">Praesent pellentesque diam vitae nibh aliquam faucibus.</p>
                    </Card>
                </div>
                <div className="flex items-center justify-center col-span-12 text-center mb-5  p-5 lg:col-span-6">
                    <Card className="max-w-sm shadow-lg border border-gray-200 ">
                        <PropertySafetyFilled className="text-[50px] text-blue-500" />
                        <h3 className="font-semibold text-center text-xl">Safety and Quality</h3>
                        <p className="text-[#999] text-sm">Praesent pellentesque diam vitae nibh aliquam faucibus.</p>
                    </Card>
                </div>
                <div className="flex items-center justify-center col-span-12 text-center mb-5  p-5 lg:col-span-6">
                    <Card className="max-w-sm shadow-lg border border-gray-200 ">
                        <GlobalOutlined className="text-[50px] text-blue-500" />
                        <h3 className="font-semibold text-center text-lg">Envinronment Care</h3>
                        <p className="text-[#999] text-sm">Praesent pellentesque diam vitae nibh aliquam faucibus.</p>
                    </Card>
                </div>

                <div className="flex items-center justify-center col-span-12 text-center mb-5  p-5 lg:col-span-6">
                    <Card className="max-w-sm shadow-lg border border-gray-200 ">
                        <TruckFilled className="text-[50px] text-blue-500" />
                        <h3 className="font-semibold text-center text-xl">Delivery On Time</h3>
                        <p className="text-[#999] text-sm">Praesent pellentesque diam vitae nibh aliquam faucibus.</p>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default MainPage;