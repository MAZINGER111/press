import Link from "next/link"
import { useRouter } from "next/router"

const Navbar = () => {
    const { pathname } = useRouter()
    function checkActive(tab){
        if(pathname === tab) return 'border-[#1C2022] border-b-[4px]'
        return ''
    }
    return (
        <div className="flex items-center px-6">
            <div className="flex items-center">
                <img src="/images/logo.png" alt="" />
                <div className="ml-[7px]">
                    <p className="text-[#1C1C22] text-[15px] leading-[19px]">PRESS ATTACK</p>
                    <p className="italic text-[#1F215F] leading-[19px] text-[15px] font-[400]">TRACKER</p>
                </div>
            </div>
            <ul className="hidden sm:flex mx-auto">
                <Link href="/">
                    <li className={`w-[100px] text-center mr-[85px] py-[29px] ${checkActive("/")}`}>Home</li>
                </Link>
                <Link href="/reports">
                    <li className={`w-[100px] text-center mr-[85px] py-[29px] ${checkActive("/reports")}`}>Reports</li>
                </Link>
                <Link href="/blog">
                    <li className={`w-[100px] text-center py-[29px] ${checkActive("/blog")}`}>Blog</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar