import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const Navbar = () => {
    const { pathname } = useRouter()
    const [showNavs, setShowNavs] = useState(false)
    function checkActive(tab) {
        if (pathname === tab) return 'border-[#1C2022] border-b-[4px]'
        return ''
    }
    return (
        <div className={`flex relative sm:items-center px-6 ${showNavs && 'pb-12'}`}>
            <div className="flex items-center">
                <img src="/images/logo.png" alt="" />
                <div className="ml-[7px]">
                    <p className="text-[#1C1C22] text-[15px] leading-[19px]">PRESS ATTACK</p>
                    <p className="italic text-[#1F215F] leading-[19px] text-[15px] font-[400]">TRACKER</p>
                </div>
            </div>
            {!showNavs && <img src="/images/menu.png" onClick={() => setShowNavs(true)} className="h-10 w-10 absolute top-5 right-3 ml-auto sm:hidden " alt="" />
}
            <ul className={`absolute top-16 w-[50vw] right-[150vw] ${showNavs && 'slide-in'} sm:left-0 sm:h-auto sm:w-auto sm:relative sm:flex mx-auto`}>
                {showNavs &&
                    <img src="/images/cancel.png" onClick={() => setShowNavs(false)} className="h-5 w-5 fixed top-7 right-6 ml-auto sm:hidden" alt="" />
                }
                <Link href="/">
                    <li className={`block ml-auto mr-0 mb-3 pb-2 w-fit sm:w-[100px] text-center sm:mr-[85px] sm:py-[29px] ${checkActive("/")}`}>Home</li>
                </Link>
                <Link href="/reports">
                    <li className={`block ml-auto mr-0 mb-3 pb-2 w-fit sm:w-[100px] text-center sm:mr-[85px] sm:py-[29px] ${checkActive("/reports")}`}>Reports</li>
                </Link>
                <Link href="/blog">
                    <li className={`block ml-auto mr-0 mb-3 pb-2 w-fit sm:w-[100px] text-center sm:py-[29px] ${checkActive("/blog")}`}>Blog</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar