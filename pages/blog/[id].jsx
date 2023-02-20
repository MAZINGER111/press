import Link from "next/link"
import { ShareIcon } from "../../components/Svgs"
import Layout from "../../components/Layout"

const SingleReport = () => {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <Layout>
            <div className=" mx-5 sm:mx-10">
                <div className="flex justify-between mt-[73px]">
                    <Link href="/reports">
                        <button className="px-[18px] py-3 bg-white text-black border border-[#929292]">Back to Reports</button>
                    </Link>
                    <button className="px-[18px] py-3 bg-white text-black flex items-center border border-[#929292]">
                        <ShareIcon />
                        <p className="ml-3">Share Story</p>
                    </button>
                </div>
                <p className="text-center mt-10">Guns fired at journalists trying to cover the END SARS Campaign</p>
                <button className="mt-4 py-3 px-[18px] bg-[#E0E0E0] mx-auto block text-black">Physical Attack</button>
                <img className="mt-4 h-[221px] sm:h-[500px] mb-6" src="/images/main2.png" alt="" />
                <p className="font-[400] mb-[100px] text-[16px]">Lorem ipsum dolor sit amet consectetur. Pulvinar tortor pharetra faucibus nunc. Iaculis aenean massa sodales feugiat praesent cursus quam in volutpat. Vitae cursus fermentum faucibus donec elit dapibus nulla massa. Tincidunt fringilla sed vestibulum urna tortor tellus pretium. Pulvinar donec mattis at massa ullamcorper integer felis nunc. Porta erat lacus bibendum amet habitant sollicitudin faucibus pretium viverra. Habitant ornare id arcu quis. At lobortis facilisis ac justo rhoncus eget enim. Laoreet nisi pharetra mi imperdiet integer. Et dignissim accumsan morbi suspendisse praesent. In sed sed velit sapien odio nisi.<br /> <br />

                    Phasellus etiam faucibus sem blandit dui nulla commodo. Diam pulvinar ut sed congue netus id. Habitant ullamcorper tristique aliquam cursus enim vehicula. Lectus porta pretium nunc netus eu massa vitae magna. Quis neque volutpat neque dolor est tortor. Scelerisque cursus habitant laoreet quis. Molestie egestas cras ultrices a pellentesque laoreet. Ac nunc at vulputate sollicitudin nunc sed malesuada mattis. <br />
                    Quis aliquam donec egestas nulla odio ac. Mollis facilisis praesent netus tristique. Nascetur ac lorem eget non in suspendisse. Odio duis pretium at risus in neque arcu sapien at. Pellentesque fermentum suspendisse sit diam euismod. Diam sapien urna a tellus enim. Lacinia dis arcu ultrices aenean hendrerit amet. Tristique convallis vitae commodo tellus

                </p>
                <button onClick={topFunction} className="block ml-auto border border-[#929292] px-[18px] py-3 mb-[60px]">Back to top</button>
                <div className="grid sm:grid-cols-2 gap-x-6 mt-[130px] mb-10">
                    <div>
                        <p className='text-[24px] font-[400]'>Leave A Comment</p>
                        <p className='font-[400] text-[#929292] mt-2'>Everyone Gets To See The Comments You Post</p>
                        <textarea className='mt-[18px] h-[150px]' placeholder='Comment' name="" id="" ></textarea>
                        <input className='my-4 ' type="text" placeholder='Name' />
                        <input className='mb-[34px]' type="text" placeholder='Email' />
                        <button className='block ml-auto text-[14px]'>Submit Comment</button>
                    </div>
                    <div className='mt-14 sm:mt-0'>
                        <div className="w-fit ml-auto">
                            <span className='text-[32px] leading-[39px] font-[600] text-black block'>12</span>
                            <span className='text-black opacity-50 mt-2'>Comment(s)</span>
                        </div>
                        <Comment />
                        <Comment />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SingleReport

const Comment = () => (
    <div className='mb-[10px] py-[14px] border-b border-[#929292]'>
        <div className='flex items-center'>
            <p>Emeka Charles</p>
            <svg className='mx-4' width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.98291" cy="3.18115" r="3" fill="#929292" />
            </svg>
            <p className='text-[16px] leading-[19px] text-[#263238] font-[400]'>1 hour ago</p>
        </div>
        <p className='text-[#4c4c4c] font-[400] mt-[7px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque similique at. Cumque, molestias? Explicabo aperiam beatae saepe at, fugit cumque hic magni laboriosam officia adipisci tempora reiciendis sunt quasi?</p>
        <p className='mt-4 cursor-pointer'>Reply</p>
    </div>
)