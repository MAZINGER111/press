import { useState } from 'react'
import Layout from '../../components/Layout'
import { BackArrow, DownArrow, ForwardArrow } from '../../components/Svgs'
import BlogCard from '../../components/BlogCard'
import { PageNavigator } from '../../components/PageNavigator'
const Reports = () => {
    const [country, setCountry] = useState('Nigeria')
    const [year, setYear] = useState('2022')
    return (
        <Layout>
            <div className='mx-5 sm:mx-10 mt-[75px] mb-10'>
                <div className='flex justify-end mb-6 items-center mt-2 sm:mt-0 pr-4 gap-x-10 sm:gap-x-[80px]'>
                    <div className="flex items-center relative cursor-pointer">
                        <select name="" id="" className='absolute w-full h-full opacity-0 cursor-pointer' onChange={e => setYear(e.target.value)}>
                            <option value="2022">2022</option>
                            <option value="2021">2020</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                        </select>
                        <p>{year}</p>
                        <DownArrow className="ml-9 sm:ml-[65px]" />
                    </div>
                    <div className='relative flex items-center cursor-pointer'>
                        <select name="" id="" className='absolute w-full h-full opacity-0 cursor-pointer' onChange={e => setCountry(e.target.value)}>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Niger">Niger</option>
                            <option value="Cameroon">Cameroon</option>
                        </select>
                        <p>{country}</p>
                        <DownArrow className="ml-9 sm:ml-[65px]" />
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
        </Layout>
    )
}

export default Reports