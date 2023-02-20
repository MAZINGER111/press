import Link from "next/link"

const Footer = () => {
    return (
        <div className="h-[184px] pt-[26px] pb-[23px] px-3 sm:px-[23px] sm:flex">
            <div className="sm:w-1/3">
                <Link href="/">
                    <p className="">PRESS ATTACK</p>
                    <p className="text-[#1F215F] italic">TRACKER</p>
                </Link>
            </div>
            <ul className="mt-4 sm:mt-0 sm:w-1/3 flex flex-row sm:flex-col justify-between">
                <Link href="/">
                    <li className="text-[18px]  leading-[22px]">Home</li>
                </Link>
                <Link href="/reports">
                    <li className="text-[18px]  leading-[22px]">Stories</li>
                </Link>
                <Link href="/reports">
                    <li className="text-[18px]  leading-[22px]">Report Attack</li>
                </Link>
                <Link href="/blog">
                    <li className="text-[18px]  leading-[22px]">Blog</li>
                </Link>
            </ul>
            <ul className="mt-4 sm:mt-0 sm:w-1/3 flex flex-row sm:flex-col justify-between">
                <li className="text-[18px]  leading-[22px] mb-4">Get in touch</li>
                <li className="text-[18px]  leading-[22px] mb-4">info@ptcij.org</li>
                <li className="text-[18px]  leading-[22px]">08104198112</li>
            </ul>
        </div>
    )
}

export default Footer