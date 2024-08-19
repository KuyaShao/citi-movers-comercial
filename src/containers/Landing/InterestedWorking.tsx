import { Button } from 'antd';
function InterestedWorking() {
    return (
        <div className="grid grid-cols-12 bg-[#232135] text-white lg:p-10 lg:text-center">
            <div className="col-span-12 text-center lg:col-span-4 mb-5 mt-5">
                <h1 className="font-bold text-lg">Interested in working with Citi Movers?</h1>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:mt-5">
                <p className="text-center text-sm">
                    We don’t just manage suppliers, we micro-manage them. We have a consultative, personalized
                    approach</p>
            </div>
            <div className="col-span-12 lg:col-span-4">
                <Button className="font-bold w-36 p-5 m-5 rounded-full" >Become a Driver</Button>
            </div>

        </div>
    )
}

export default InterestedWorking;