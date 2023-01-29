import Link from "next/link"
import { useRouter } from "next/router"

const DashboardLayout = ({ children }) => {
    const { pathname } = useRouter()
    console.log(pathname)
    function isActive(tab){
        if(pathname === `/dashboard${tab}`) return 'bg-yellow'
        return ''
    }
    return (
        <div>
            <div className="flex items-center justify-between bg-[#3E3E3E] py-3 px-6">
                <div>
                    <p className="text-yellow text-[24px] font-[600] leading-[29px]">PAT</p>
                    <p className="text-white">Admin</p>
                </div>
                <p className="text-yellow text-[14px] leading-[17px]">Welcome, Monsur Hussain</p>
            </div>
            <div className="flex">
                <ul className="w-[250px] px-4 pt-4">
                    <Link href="/dashboard">
                        <li className={`mb-2 p-4 rounded-[4px] ${isActive('')}`}>Dashboard</li>
                    </Link>
                    <Link href="/dashboard/admin">
                        <li className={`mb-2 p-4 rounded-[4px] ${isActive('/admin')}`}>Admin</li>
                    </Link>
                    <Link href="/dashboard/reports">
                        <li className={`mb-2 p-4 rounded-[4px] ${isActive('/reports')}`}>Manage Reports</li>
                    </Link>
                    <Link href="/dashboard/stories">
                        <li className={`mb-2 p-4 rounded-[4px] ${isActive('/stories')}`}>Stories</li>
                    </Link>
                    <Link href="/dashboard/blog">
                        <li className={`mb-2 p-4 rounded-[4px] ${isActive('/blog')}`}>Blog</li>
                    </Link>
                </ul>
                <div className="flex-1 pl-[22px] pr-[25px] pt-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout