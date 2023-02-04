import Link from "next/link"
const BlogCard = () => {
    return (
        <div>
            <img src="/images/report4.png" className='block w-full h-[221px]' alt="" />
            <Link href="/blog/a">
                <p className='text-[16px] leading-[21px] font-[600] mt-[21px] mb-2'>Guns fired at journalists trying to cover the END SARS Campaign</p>
            </Link>
            <p className='opacity-70 font-[400] leading-[22px]'>Lorem ipsum dolor sit amet onsectetur. Id faucibus maecenas massa imperdiet tellus aliquet nulla viverra. Euismod faucibus volutpat.</p>
        </div>
    )
}

export default BlogCard