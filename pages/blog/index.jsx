import Layout from '../../components/Layout'
import { BackArrow, DownArrow, ForwardArrow } from '../../components/Svgs'
import BlogCard from '../../components/BlogCard'
const Reports = () => {
    return (
        <Layout>
            <div className='mx-5 sm:mx-10 mt-[75px] mb-10'>
                <div className='flex flex-col sm:flex-row justify-between mb-10 mt-[89px]'>
                    <input type="text" placeholder='Search Blog' className='placeholder:opacity-50 w-[30vw]' />
                    <div className='flex items-center mt-2 sm:mt-0 '>
                        <p>January</p>
                        <DownArrow className="ml-3 mr-12 sm:ml-[45px] sm:mr-[57px]" />
                        <p>2022</p>
                        <DownArrow className="ml-3 mr-12 sm:ml-[45px] sm:mr-[57px]" />
                        <p>Nigeria</p>
                        <DownArrow className="ml-3 sm:ml-[45px]" />
                    </div>
                </div>
                <div className="grid sm:grid-cols-4 gap-x-6 gap-y-14">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
                <div className='mt-[104px] mb-[51px] flex flex-col gap-y-6 sm:flex-row justify-between'>
                    <p>Page 1 of 10 - 30</p>
                    <div className='flex items-center'>
                        <BackArrow className="mr-[13px]" />
                        <p className='mr-[33px] font-[400]'>Previous</p>
                        <div className='grid grid-cols-3 gap-x-[14px]'>
                            <p className='py-[6px] px-[14px] bg-black text-white'>1</p>
                            <p className='py-[6px] px-[14px]'>2</p>
                            <p className='py-[6px] px-[14px]'>3</p>
                        </div>
                        <p className='ml-[33px]'>Next</p>
                        <ForwardArrow className="ml-[13px]" />
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-6 mt-[130px]">
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

export default Reports

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
        <p className='mt-4'>Reply</p>
    </div>
)