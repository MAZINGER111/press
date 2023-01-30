import Link from "next/link"
import { useRouter } from "next/router"
const Sidebar = ({showSidebar}) => {
    const { pathname } = useRouter()
    function isActive(tab){
        if(pathname === `/dashboard${tab}`) return 'bg-yellow'
        return ''
    }
    return (
        <ul className={`w-[250px] shadow-sm px-4 pt-4 absolute right-[150vw] ${showSidebar && 'left-0'} shadow top-20 h-full sm:block sm:static bg-white sm:shadow-none`}>
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
    )
}

export default Sidebar