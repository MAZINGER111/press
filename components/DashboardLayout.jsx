import Link from "next/link"

const DashboardLayout = ({ children }) => {
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
                        <li className="mb-2 p-4  rounded-[4px]">Dashboard</li>
                    </Link>
                    <Link href="/dashboard/admin">
                        <li className="mb-2 p-4 rounded-[4px] bg-yellow">Admin</li>
                    </Link>
                    <Link href="/dashboard/reports">
                        <li className="mb-2 p-4 rounded-[4px]">Manage Reports</li>
                    </Link>
                    <Link href="/dashboard/stories">
                        <li className="mb-2 p-4 rounded-[4px]">Stories</li>
                    </Link>
                    <Link href="/dashboard/blog">
                        <li className="mb-2 p-4 rounded-[4px]">Blog</li>
                    </Link>
                </ul>
                <div className="flex-1 pl-[22px] pr-[25px]">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout