import Link from "next/link"
import { ShareIcon } from "../../components/Svgs"
import Layout from "../../components/Layout"

const SingleReport = () => {
    return (
        <Layout>
            <div className="mx-10">
                <div className="flex justify-between mt-[73px">
                    <Link href="/reports">
                        <button className="px-[18px] py-3 border border-[#929292]">Back to Reports</button>
                    </Link>
                    <button className="px-[18px] py-3 flex items-center border border-[#929292]">
                        <ShareIcon />
                        <p className="ml-3">Share Story</p>
                    </button>
                </div>
                <p className="text-center mt-10">Guns fired at journalists trying to cover the END SARS Campaign</p>
                <button className="mt-4 py-3 px-[18px] bg-[#E0E0E0] mx-auto block">Physical Attack</button>
                <div className="flex justify-between">
                    <p className="opacity-70">Posted January 20, 2023</p>
                    <p className="opacity-70">Author: Kinsley A. Oguntayo</p>
                </div>
                <img className="mt-4 h-[500px] mb-6" src="/images/main2.png" alt="" />
                <p className="font-[400] mb-[100px]">Lorem ipsum dolor sit amet consectetur. Pulvinar tortor pharetra faucibus nunc. Iaculis aenean massa sodales feugiat praesent cursus quam in volutpat. Vitae cursus fermentum faucibus donec elit dapibus nulla massa. Tincidunt fringilla sed vestibulum urna tortor tellus pretium. Pulvinar donec mattis at massa ullamcorper integer felis nunc. Porta erat lacus bibendum amet habitant sollicitudin faucibus pretium viverra. Habitant ornare id arcu quis. At lobortis facilisis ac justo rhoncus eget enim. Laoreet nisi pharetra mi imperdiet integer. Et dignissim accumsan morbi suspendisse praesent. In sed sed velit sapien odio nisi.<br /> <br />

                    Phasellus etiam faucibus sem blandit dui nulla commodo. Diam pulvinar ut sed congue netus id. Habitant ullamcorper tristique aliquam cursus enim vehicula. Lectus porta pretium nunc netus eu massa vitae magna. Quis neque volutpat neque dolor est tortor. Scelerisque cursus habitant laoreet quis. Molestie egestas cras ultrices a pellentesque laoreet. Ac nunc at vulputate sollicitudin nunc sed malesuada mattis. <br />
                    Quis aliquam donec egestas nulla odio ac. Mollis facilisis praesent netus tristique. Nascetur ac lorem eget non in suspendisse. Odio duis pretium at risus in neque arcu sapien at. Pellentesque fermentum suspendisse sit diam euismod. Diam sapien urna a tellus enim. Lacinia dis arcu ultrices aenean hendrerit amet. Tristique convallis vitae commodo tellus

                </p>
                <button className="block ml-auto border border-[#929292] px-[18px] py-3 mb-[60px]">Back to top</button>
            </div>
        </Layout>
    )
}

export default SingleReport