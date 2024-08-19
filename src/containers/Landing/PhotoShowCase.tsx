import { Image } from 'antd';

function PhotoShowCase() {
    return (

        <div className="text-center mt-10">
            <h3 className="text-[#999] font-semibold">Our Gallery</h3>
            <h1 className="text-4xl font-bold text-blue-500">Photo Showcase</h1>
            <Image.PreviewGroup

                preview={{
                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}>
                <div className="grid grid-cols-6  lg:grid-cols-3 lg:gap-2 mt-5">
                    <div className="col-span-6 row-span-6 lg:col-span-1 ">
                        <Image className="w-full object-cover pr-5 pl-5 lg:pr-0 lg:pl-5"
                            alt="Photo Showcase"
                            src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div className="col-span-6 lg:col-span-1">
                        <Image className="w-full object-cover pr-5 pl-5 lg:pr-0 lg:pl-0 "
                            alt="Photo Showcase"
                            src="https://images.pexels.com/photos/2547972/pexels-photo-2547972.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                    <div className="col-span-6 lg:col-span-1">
                        <Image className="w-full object-cover pr-5 pl-5 lg:pr-5 lg:pl-0 "
                            alt="Photo Showcase"
                            src="https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>
                    <div className="col-span-6 lg:col-span-1">
                        <Image className=" w-full object-contain pr-5 pl-5 lg:pr-0 lg:pl-0 "
                            alt="Photo Showcase"
                            src="https://images.pexels.com/photos/4484151/pexels-photo-4484151.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    </div>


                </div>
            </Image.PreviewGroup>

        </div>
    )
}

export default PhotoShowCase;