import Layout from '../../components/Layout'
import { BackArrow, DownArrow, ForwardArrow } from '../../components/Svgs'
import BlogCard from '../../components/BlogCard'
import { PageNavigator } from '../../components/PageNavigator'
const Reports = () => {
    return (
        <Layout>
            <div className='mx-5 sm:mx-10 mt-[75px] mb-10'>
                <div className='flex flex-col sm:flex-row justify-between mb-10 mt-[89px]'>
                    <input type="text" placeholder='Search Blog' className='placeholder:opacity-50 sm:w-[30vw]' />
                    <div className='flex items-center mt-2 sm:mt-0 '>
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
        </Layout>
    )
}

export default Reports