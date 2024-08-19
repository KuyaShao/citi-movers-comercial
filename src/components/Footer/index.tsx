import { Fragment } from "react";
import ContentFooter from "./ContentFooter";

function Footer() {
    return (
        <Fragment>
            <ContentFooter />
            <footer className="grid grid-cols-12 bg-[#232135] text-white">
                <div className="col-span-12 lg:col-span-6 text-center w-[80%] m-auto">
                    <div className="text-sm mt-5 mb-5">
                        <a className="mr-2">Privacy Policy |</a>
                        <a className="mr-2">Contact |</a>
                        <a>Faq</a>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 text-center mb-5 m-auto">
                    <p className="text-sm w-[80%] m-auto">Designed by <span className="text-blue-500">BarkadabytesCreation</span> &copy; 2024 All Rights Reserved</p>
                </div>
            </footer>
        </Fragment>

    )
}

export default Footer;