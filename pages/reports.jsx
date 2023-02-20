import { useState } from 'react'
import Layout from '../components/Layout'
import { BackArrow, DownArrow, ForwardArrow } from '../components/Svgs'
import style from '../styles/report.module.css'
import BlogCard from '../components/BlogCard'
import { PageNavigator } from '../components/PageNavigator'
const Reports = () => {
    const [showForm, setShowForm] = useState(false)
    return (
        <Layout>
            {!showForm &&
                <div className='mx-5 sm:mx-10 mb-10'>
                    <div className='flex flex-col sm:flex-row justify-between mb-10 mt-[89px]'>
                        <input type="text" placeholder='Search Stories' className='placeholder:opacity-50 sm:w-[30vw]' />
                        <div className='flex items-center mt-2 sm:mt-0'>
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
                    <PageNavigator />
                </div>
            }
            {showForm && 
                <div className='grid sm:grid-cols-2 gap-x-6 mt-7 mb-[88px]'>
                    <div className='bg-[#f5f5f5] h-full'>

                    </div>
                    <ReportForm />
                </div>
            }
        </Layout>
    )
}

export default Reports

const ReportForm = () => {
    return (
        <div className={style.container}>
            <p>Report Attack</p>
            <p className='text-[#1c1b1f]/50 text-[16px] leading-[19px] mt-2 mb-4'>Fill in The Details of The Attack You Would Like To Report And the Information Would Be Verified</p>
            <div className="grid grid-cols-2 gap-x-[15px]">
                <input type="date" placeholder='Date'/>
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
    )
}