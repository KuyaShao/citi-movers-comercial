"use client"

import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import { Fragment } from "react";
import SideBar from "./SideBar";

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Fragment>
            <div className="hidden md:block bg-white w-[80%] m-auto">
                <div className="flex items-center justify-between">
                    <div className="flex text-base space-x-10">
                        <div>
                            <h3 className="text-sm text-[#999]">Address</h3>
                            <h3 className="text-black text-sm font-bold">Quezon City Manila Philippines</h3>
                        </div>
                        <div>
                            <h3 className="text-sm text-[#999]">Email Us</h3>
                            <h3 className="text-sm text-blue-500 font-bold">support@citimovers.ph</h3>
                        </div>
                        <div>
                            <h3 className="text-sm text-[#999]">Phone Number</h3>
                            <h3 className="text-black font-bold text-sm">+63929121900</h3>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Button size="large" className="font-bold w-40 h-12 mr-5 mt-5 mb-5 bg-yellow-500">Request A Quote</Button>
                        <Button type="primary" size="large" className="font-bold w-40 h-12 mr-5 mt-5 mb-5">Become a Driver</Button>
                    </div>
                </div>
            </div>

            <nav className={`fixed left-0 w-full z-50 h-[100px] bg-[#23213580] lg:bg-[#23213580] backdrop-blur-lg transition-all duration-300 ease-in-out ${isScrolled ? 'top-0' : 'top-0 lg:top-20'}`}>
                <div className="flex items-center justify-between max-w-screen-xl mx-auto w-full h-full px-5">
                    <div className="flex items-center">
                        <div className="relative h-[80px] w-[80px] object-contain">
                            <Image src="/logo2.png" alt="Citi Movers Logo" layout="fill" sizes="100px" />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                        <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Blog</a>
                        <a href="#" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                    </div>

                    <div className="flex items-center lg:hidden">
                        <Button type="primary" className="font-bold w-36 mr-5">Become a Driver</Button>
                        <MenuOutlined className="text-white font-bold w-[55px] text-[150%] mr-5" onClick={toggleCollapsed} />
                    </div>
                </div>
            </nav>
            <SideBar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        </Fragment>

    )
}

export default NavBar;