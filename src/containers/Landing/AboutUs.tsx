import { Progress, Tag } from 'antd';
import Image from 'next/image';
function AboutUs() {
    return (
        <div className="bg-gray-100 pt-10">
            <div className="xl:w-[90%] m-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5 p-5 lg:ml-20 xl:ml-40">
                        <div className="relative h-[380px] max-w-full lg:max-w-[80%]  xl:max-w-[60%] lg:h-[500px] " style={{ border: "10px solid #fff", boxShadow: "0px 6px 10px 0px rgba(254, 135, 4, 0.2)" }}>
                            <Image src="/src/landing-page/logistics.jpg" alt="Logistics" fill />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 p-5">
                        <div className="flex flex-col text-[#999]">
                            <h3 className=" font-semibold">About us</h3>
                            <h1 className="text-blue-500 font-bold text-4xl">Welcome To Citi Movers Family</h1>
                            <p className="text-base mb-5 mt-5">Energistically utilize team driven niche markets rather than leveraged platforms.
                                Monotonectally restore tactical {"outside the box"} thinking and technically sound
                                deliverables.</p>
                            <p className="text-base mb-5">Compellingly develop fully researched process improvements through innovative opportunities.
                                Credibly productize highly efficient potentialities for vertical core competencies. Quickly
                                maintain pandemic experiences rather than low-risk high-yield processes.</p>
                            <div className="flex flex-col justify-between mb-5">
                                <div className="flex flex-row justify-between mb-2">
                                    <h1 className="font-bold text-[#232135]">Logistics</h1>
                                    <Tag color="#000" className="w-[15%] font-[750] lg:w-[5%]">75%</Tag>
                                </div>
                                <Progress percent={75} size="small" />
                            </div>
                            <div className="flex flex-col justify-between mb-5">
                                <div className="flex flex-row justify-between mb-2">
                                    <h1 className="font-bold text-[#232135]">Truck Rental</h1>
                                    <Tag color="#000" className="w-[15%] font-[750] lg:w-[5%]">50%</Tag>
                                </div>
                                <Progress percent={50} size="small" />
                            </div>
                            <div className="flex flex-col justify-between mb-5">
                                <div className="flex flex-row justify-between mb-2">
                                    <h1 className="font-bold text-[#232135]">Courier</h1>
                                    <Tag color="#000" className="w-[15%] font-[750] lg:w-[5%]">95%</Tag>
                                </div>
                                <Progress percent={95} size="small" />
                            </div>
                            <div className="flex flex-col justify-between mb-5">
                                <div className="flex flex-row justify-between mb-2">
                                    <h1 className="font-bold text-[#232135]">Support</h1>
                                    <Tag color="#000" className="w-[15%] font-[750] lg:w-[5%]">95%</Tag>
                                </div>
                                <Progress percent={95} size="small" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;