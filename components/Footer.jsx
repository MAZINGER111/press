import Link from "next/link"

const Footer = () => {
    return (
        <div className="h-[184px] relative bg-footer bg-cover bg-center">
            <div className="pt-[26px] pb-[23px] sm:flex px-3 sm:px-[23px]">

                <div className="sm:w-1/3">
                    <Link href="/">
                        <p className="text-white">PRESS ATTACK</p>
                        <p className="text-[#1F215F] italic">TRACKER</p>
                    </Link>
                </div>
                <ul className="mt-4 sm:mt-0 sm:w-1/3 flex flex-row sm:flex-col sm:gap-y-4 justify-between">
                    <li className="text-[18px] text-white leading-[22px]">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="text-[18px] text-white leading-[22px]">
                        <Link href="/reports">
                            Stories
                        </Link>
                    </li>
                    <li className="text-[18px] text-white leading-[22px]">
                        <Link href="/report-attack">
                            Report Attack
                        </Link>
                    </li>
                    <li className="text-[18px] text-white leading-[22px]">
                        <Link href="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>
                <ul className="mt-4 sm:mt-0 sm:w-1/3 flex flex-row sm:flex-col justify-between">
                    <li className="text-[18px] text-white  leading-[22px] mb-4 cursor-pointer">Get in touch</li>
                    <li className="text-[18px] text-white  leading-[22px] mb-4 cursor-pointer">info@ptcij.org</li>
                    <li className="text-[18px] text-white  leading-[22px] cursor-pointer">08104198112</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer