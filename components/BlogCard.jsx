const BlogCard = () => {
    return (
        <div>
            <div className="flex justify-between mb-2 items-center">
                <p className='text-[16px] opacity-50 leading-[21px]'>Author Kinsley A.</p>
                <div className='flex items-center'>
                    <img src="/images/clock.png" className='w-[16px] h-4' alt="" />
                    <p className='ml-[9px]'>2 mins ago</p>
                </div>
            </div>
            <img src="/images/report4.png" className='block w-full h-[221px]' alt="" />
            <p className='text-[16px] leading-[21px] font-[600] mt-[21px] mb-2'>Guns fired at journalists trying to cover the END SARS Campaign</p>
            <p className='opacity-70 font-[400] leading-[22px]'>Lorem ipsum dolor sit amet onsectetur. Id faucibus maecenas massa imperdiet tellus aliquet nulla viverra. Euismod faucibus volutpat.</p>
        </div>
    )
}

export default BlogCard