import { BackArrow, ForwardArrow } from "./Svgs"
export const PageNavigator = () => {
    return (
        <div className='mt-[304px] mb-[51px] flex flex-col gap-y-6 sm:flex-row justify-between'>
            <p>Page 1 of 10 - 30</p>
            <div className='flex items-center'>
                <BackArrow className="mr-[13px] cursor-pointer" />
                <p className='mr-[33px] font-[400] cursor-pointer'>Previous</p>
                <div className='grid grid-cols-3 gap-x-[14px]'>
                    <button className='py-[6px] px-[14px] bg-black text-white'>1</button>
                    <button className='py-[6px] px-[14px] bg-white text-black'>2</button>
                    <button className='py-[6px] px-[14px] bg-white text-black'>3</button>
                </div>
                <p className='ml-[33px] cursor-pointer'>Next</p>
                <ForwardArrow className="ml-[13px] cursor-pointer" />
            </div>
        </div>
    )
}