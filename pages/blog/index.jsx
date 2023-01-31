import { useState } from 'react'
import Layout from '../../components/Layout'
import { BackArrow, DownArrow, ForwardArrow } from '../../components/Svgs'
import style from '../../styles/report.module.css'
const Reports = () => {
    return (
        <Layout>
            <div className='mx-5 sm:mx-10 mt-[75px] mb-10'>
                <div className='flex flex-col sm:flex-row justify-between mb-10 mt-[89px]'>
                    <input type="text" placeholder='Search Blog' className='placeholder:opacity-50' />
                    <div className='flex items-center mt-2 sm:mt-0'>
                        <p>January</p>
                        <DownArrow className="ml-3 mr-12 sm:ml-[45px] sm:mr-[57px]" />
                        <p>2022</p>
                        <DownArrow className="ml-3 mr-12 sm:ml-[45px] sm:mr-[57px]" />
                        <p>Nigeria</p>
                        <DownArrow className="ml-3 sm:ml-[45px] sm:mr-[57px]" />
                    </div>
                </div>
                <div className="grid sm:grid-cols-4 gap-x-6 gap-y-14">
                    <ReportCard />
                    <ReportCard />
                    <ReportCard />
                    <ReportCard />
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
                        <button className='block ml-auto'>Submit Comment</button>
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

const ReportCard = () => {
    return (
        <div>
            <div className="flex justify-between mb-2 items-center">
                <p className='text-[18px] opacity-50 leading-[21px]'>Author Kinsley A.</p>
                <div className='flex items-center'>
                    <img src="/images/clock.png" className='w-[18px] h-5' alt="" />
                    <p className='ml-[9px]'>2 mins ago</p>
                </div>
            </div>
            <img src="/images/report4.png" className='block w-full h-[221px]' alt="" />
            <p className='text-[18px] leading-[21px] font-[600] mt-[21px] mb-2'>Guns fired at journalists trying to cover the END SARS Campaign</p>
            <p className='opacity-70 font-[400] leading-[22px]'>Lorem ipsum dolor sit amet onsectetur. Id faucibus maecenas massa imperdiet tellus aliquet nulla viverra. Euismod faucibus volutpat.</p>
        </div>
    )
}

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

const ReportForm = () => {
    return (
        <div className='grid sm:grid-cols-2 gap-x-6 mt-7 mb-[88px]'>
            <div className='bg-[#f5f5f5] h-full'>

            </div>
            <div className={style.container}>
                <p>Report Attack</p>
                <p className='text-[#1c1b1f]/50 text-[16px] leading-[19px] mt-2 mb-4'>Fill in The Details of The Attack You Would Like To Report And the Information Would Be Verified</p>
                <div className="grid grid-cols-2 gap-x-[15px]">
                    <input type="date" placeholder='Date' />
                    <input type="text" placeholder="Author (Optional)" />
                </div>
                <input type="text" placeholder="Title" />
                <div className="grid sm:grid-cols-2 gap-x-[15px]">
                    <input type="text" name="" placeholder="Victim Affiliation" id="" />
                    <select name="" id="" placeholder="Type of Attack">
                        <option value="">Gender</option>
                    </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-[15px]">
                    <input type="text" name="" placeholder="Victim Affiliation" id="" />
                    <select name="" id="" placeholder="Type of Attack">
                        <option value="">Type Of Attack</option>
                    </select>
                </div>
                <input type="text" name="" placeholder="Location" id="" />
                <textarea className='h-[200px]' name="" placeholder="Description" id="" ></textarea>
                <div className="flex items-center mb-4">
                    <button>Choose File</button>
                    <p className="ml-6">No file Chosen</p>
                </div>
                <p className='mt-[11px] mb-11 text-[#9c3b3b] font-[400] text-[18px] leading-[22px]'>Upload a picture or video evidence that includes time stamps</p>
                <button className="px-6 py-4 bg-yellow text-[#3e3e3e] text-[18px] leading-[22px] block ml-auto">Report Attack</button>
            </div>
        </div>
    )
}