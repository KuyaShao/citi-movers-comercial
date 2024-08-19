import React, { Fragment } from 'react';
import Image from 'next/image';

import { DropboxOutlined, GlobalOutlined, PropertySafetyFilled } from '@ant-design/icons';
function MakeUsSpecial() {
    return (
        <Fragment>
            <div className="mt-10 mb-10">
                <h3 className="text-center text-[#999] font-semibold">Our Goodness</h3>
                <h1 className="text-center text-4xl font-extrabold text-blue-500">What Makes Us Special</h1>
            </div>

            <div className="w-[90%] m-auto lg:w-full">
                <div className="grid grid-cols-12 mt-5">
                    <div className="col-span-4 hidden xl:block lg:ml-40">
                        <div className="relative h-[500px] max-w-[80%] lg:w-full">
                            <Image src="/src/landing-page/courier-man.png" alt="people-with-box" fill />
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                        <div className="grid grid-cols-12">
                            <div className="col-span-4">
                                <DropboxOutlined className="text-[60px] text-black mt-7 lg:ml-20" />

                            </div>

                            <div className="col-span-8 w-[90%] m-auto mb-20 ">
                                <h3 className="font-bold text-base mb-3">Packaging and Storage</h3>
                                <p className="text-sm text-[#999]">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                    cubilia Curae. Praesent pellentesque diam vitae nibh aliquam faucibus.</p>
                            </div>

                            <div className="col-span-4">
                                <PropertySafetyFilled className="text-[60px] text-black mt-7 lg:ml-20" />
                            </div>
                            <div className="col-span-8 w-[90%] m-auto mb-20">
                                <h3 className="font-bold text-base mb-3">Safety and Quality</h3>
                                <p className="text-sm text-[#999]">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                    cubilia Curae. Praesent pellentesque diam vitae nibh aliquam faucibus.</p>
                            </div>

                            <div className="col-span-4">
                                <GlobalOutlined className="text-[60px] text-black mt-7 lg:ml-20" />
                            </div>
                            <div className="col-span-8 w-[90%] m-auto mb-20">
                                <h3 className="font-bold text-base mb-3">Care for Environment</h3>
                                <p className="text-sm text-[#999]">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                    cubilia Curae. Praesent pellentesque diam vitae nibh aliquam faucibus.</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default MakeUsSpecial;