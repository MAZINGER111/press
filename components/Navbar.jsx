import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex items-center px-6">
            <div className="flex items-center">
                <img src="/images/logo.png" alt="" />
                <div className="ml-[7px]">
                    <p className="text-[#1C1C22] text-[15px] leading-[19px]">PRESS ATTACK</p>
                    <p className="italic text-[#1F215F] leading-[19px] text-[15px] font-[400]">TRACKER</p>
                </div>
            </div>
            <ul className="flex mx-auto">
                <Link href="/">
                    <li className="w-[100px] border-[#1C2022] border-b-[4px] text-center mr-[85px] py-[29px]">Home</li>
                </Link>
                <Link href="/reports">
                    <li className="w-[100px] text-center mr-[85px] py-[29px]">Reports</li>
                </Link>
                <Link href="/blog">
                    <li className="w-[100px] text-center py-[29px]">Blog</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar