import { EnvironmentFilled, FileDoneOutlined, GlobalOutlined, TruckFilled } from '@ant-design/icons';
function Analytics() {
    return (
        <div className="relative bg-[url('/warehouse.jpg')] bg-cover bg-center bg-fixed  ">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10">
                <div className="grid grid-cols-12 pb-5 lg:w-[80%] m-auto">
                    <div className="col-span-6 text-center  mb-5 mt-5 lg:col-span-3">
                        <EnvironmentFilled className="text-[3rem] text-white mb-5 mt-5" />
                        <h3 className="font-bold text-white text-5xl mb-5">15</h3>
                        <p className="font-semibold text-white text-sm">Our Location</p>
                    </div>
                    <div className="col-span-6 text-center mb-5 mt-5 lg:col-span-3">
                        <GlobalOutlined className="text-[3rem] text-white mb-5 mt-5" />
                        <h3 className="font-bold text-white text-5xl mb-5">110+</h3>
                        <p className="font-semibold text-white text-sm">Client Partners</p>
                    </div>
                    <div className="col-span-6 text-center mb-5 mt-5 lg:col-span-3">
                        <TruckFilled className="text-[3rem] text-white mb-5 mt-5" />
                        <h3 className="font-bold text-white text-5xl mb-5">240+</h3>
                        <p className="font-semibold text-white text-sm">Owned Vehicles</p>
                    </div>
                    <div className="col-span-6 text-center mb-5 mt-5 lg:col-span-3">
                        <FileDoneOutlined className="text-[3rem] text-white mb-5 mt-5" />
                        <h3 className="font-bold text-white text-5xl mb-5">2340</h3>
                        <p className="font-semibold text-white text-sm">Tonnes Transported</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Analytics;