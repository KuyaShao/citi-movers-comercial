import Image from "next/image";
import { CalendarOutlined, FacebookOutlined, InstagramOutlined, WhatsAppOutlined, XOutlined } from '@ant-design/icons';
import { Avatar, Image as Img } from 'antd';

function ContentFooter() {
    return (
        <div className="grid grid-cols-12 w-full m-auto lg:w-[60%] mb-5">
            <div className="col-span-10 lg:col-span-6 ml-5">
                <div className="relative h-[100px] w-[100px] lg:w-[100px] lg:h-[100px] mt-2 object-contain">
                    <Image src="/components/NavBar/logo2.png" alt="Citi Movers Logo" fill sizes="100px" />
                </div>
                <p className="text-[#999] text-sm mb-5">
                    Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                    nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                </p>
                <p className="text-[#999] text-sm mb-5">
                    Vivamus ac ultrices diam, vitae accumsan tellus. Integer sollicitudin vulputate lacus, congue .
                </p>

                <p className="font-semibold mb-3">{`We're`} Social</p>
                <div className="flex items-start justify-start text-[#999]">
                    <FacebookOutlined className="text-[20px] w-[25px] mr-2" />
                    <InstagramOutlined className="text-[20px]  w-[25px] mr-2" />
                    <WhatsAppOutlined className="text-[20px]  w-[25px] mr-2" />
                    <XOutlined className="text-[20px] w-[25px] mr-2" />

                </div>
            </div>


            <div className="col-span-10 lg:col-span-6 mt-5 ml-10">
                <p className="font-semibold mb-3">Recent Post</p>
                <div className="flex mb-7">
                    <Avatar
                        size={75}
                        src="https://images.pexels.com/photos/1009926/pexels-photo-1009926.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="mr-5"
                    />
                    <div className="w-[80%] m-auto text-[#999]" >
                        <h5 className="font-semibold text-base text-blue-500 mb-2">Liberalisation of trucks</h5>
                        <p className="text-sm mb-5">Far far away, behind the word mountains, far
                            from the countries.</p>
                        <div className="flex font-bold">
                            <CalendarOutlined className="text-[20px] w-[25px]" />
                            <p className="text-sm ml-1">04-10-2013</p>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <Avatar
                        size={75}
                        src="https://images.pexels.com/photos/4481258/pexels-photo-4481258.jpeg?auto=compress&cs=tinysrgb&w=600"
                        className="mr-5"
                    />
                    <div className="w-[80%] m-auto text-[#999]" >
                        <h5 className="font-semibold text-base text-blue-500 mb-2">New Delivery of Items</h5>
                        <p className="text-sm mb-5">Far far away, behind the word mountains, far
                            from the countries.</p>
                        <div className="flex font-bold">
                            <CalendarOutlined className="text-[20px] w-[25px]" />
                            <p className="text-sm ml-1">04-10-2013</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContentFooter;