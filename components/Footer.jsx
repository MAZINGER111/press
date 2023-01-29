const Footer = () => {
    return (
        <div className="h-[184px] bg-footer pt-[26px] pb-[23px] px-[23px] flex">
            <div className="w-1/3">
                <p className="text-white">PRESS ATTACK</p>
                <p className="text-[#1F215F] italic">TRACKER</p>
            </div>
            <ul className="w-1/3 flex flex-col justify-between">
                <li className="text-[18px] text-white leading-[22px]">Home</li>
                <li className="text-[18px] text-white leading-[22px]">Stories</li>
                <li className="text-[18px] text-white leading-[22px]">Report Attack</li>
                <li className="text-[18px] text-white leading-[22px]">Blog</li>
            </ul>
            <ul className="w-1/3 flex flex-col">
                <li className="text-[18px] text-white leading-[22px] mb-4">Get in touch</li>
                <li className="text-[18px] text-white leading-[22px] mb-4">info@ptcij.org</li>
                <li className="text-[18px] text-white leading-[22px]">08104198112</li>
            </ul>
        </div>
    )
}

export default Footer