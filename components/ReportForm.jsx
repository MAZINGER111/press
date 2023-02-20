import { useState } from 'react'
import style from '../styles/report.module.css'
import { AttackOptions } from '../utils/Attacks'
const ReportForm = () => {
    const [fileName, setFileName] = useState("No file Chosen")
    return (
        <div className='grid sm:grid-cols-2 gap-x-6 mt-7 mb-[88px]'>
            <div className='bg-[#f5f5f5] h-full'>

            </div>
            <div className={style.container}>
                <p>Report Attack</p>
                <p className='text-[#1c1b1f]/50 text-[14px] leading-[19px] mt-2 mb-4'>Fill in The Details of The Attack You Would Like To Report And the Information Would Be Verified</p>
                <div className="grid grid-cols-2 gap-x-[15px]">
                    <input type="date" placeholder='Date' />
                    <input type="text" placeholder="Author (Optional)" />
                </div>
                <input type="text" placeholder="Title" />
                <div className="grid sm:grid-cols-2 gap-x-[15px]">
                    <input type="text" name="" placeholder="Contact Information" id="" />
                    <select name="" id="" placeholder="Type of Attack">
                        <option value="" disabled>Gender</option>
                        <option value="">Male</option>
                        <option value="">Female</option>
                    </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-[15px]">
                    <input type="text" name="" placeholder="Victim Affiliation" id="" />
                    <select name="" id="" placeholder="Type of Attack">
                        <option value="" disabled>Type Of Attack</option>
                        {AttackOptions.map(type => (
                            <option value={type.value}>{type.name}</option>
                        ))}
                    </select>
                </div>
                <input type="text" name="" placeholder="Location" id="" />
                <textarea className='h-[200px]' name="" placeholder="Description" id="" ></textarea>
                <div className="flex items-center mb-4">
                    <label className='bg-[#1c1b1f] py-3 px-6 cursor-pointer text-white text-[14px]' htmlFor='file-upload'>
                        Choose File
                    </label>
                    <input type="file" name="" className='hidden' onChange={e => setFileName(e.target.files[0].name)} id="file-upload" />
                    <p className="ml-6 text-[14px]">{fileName}</p>
                </div>
                <p className='mt-[11px] mb-11 text-[#9c3b3b] font-[400] text-[14px] leading-[22px]'>Upload a picture or video evidence that includes time stamps</p>
                <button className="px-4 py-3 bg-yellow text-[#3e3e3e] text-[14px] leading-[22px] block ml-auto">Report Attack</button>
            </div>
        </div>
    )
}

export default ReportForm