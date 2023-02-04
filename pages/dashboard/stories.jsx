import { useState } from "react"
import Modal from "../../components/Modal"
import DashboardLayout from "../../components/DashboardLayout"
import style from "../../styles/admin.module.css"
import { ForwardArrow, BackArrow } from "../../components/Svgs"

const Stories = () => {
    const [editModal, setEditModal] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    return (
        <DashboardLayout>
            <h2 className="text-[24px] leading-[29px] text-[#3e3e3e] font-[400]">Stories</h2>
            <div className={style.container}>
                <div className="mt-8 text-right">
                    <button onClick={() => setAddModal(true)} className="bg-yellow shrink-0 p-4 text-[14px] leading-[17px] text-[#3e3e3e] font-[500] rounded-[6px] sm:mr-4">Add Story</button>
                </div>
                <div className="border-b border-[#d9d9d9] mt-[14px] mb-[19px]"></div>
                <div className="grid grid-cols-6 border-b pb-4 pt-[18px]">
                    <div className="sm:flex col-span-2 sm:col-span-1">
                        <p className="text-[#3e3e3e] hidden sm:block">SN</p>
                        <p className="text-[#3e3e3e] sm:ml-[31px]">Date</p>
                        <p className="text-[#3e3e3e] mt-2 sm:hidden">Author</p>
                    </div>
                    <p className="text-[#3e3e3e] hidden sm:block">Author</p>
                    <p className="text-[#3e3e3e] col-span-3">Title</p>
                    <p className="text-[#3e3e3e] text-center sm:text-left">Action</p>
                </div>
                <div className="grid grid-cols-6 border-b items-center py-[21px]">
                    <div className="col-span-2 sm:col-span-1 sm:flex">
                        <p className="text-[#929292] hidden sm:block">1</p>
                        <p className="sm:ml-[41px] text-[#929292]">20/01/2023</p>
                        <p className="mt-2 text-[#929292] sm:hidden">Kelechi Odowu</p>
                    </div>
                    <p className="hidden sm:block sm:col-span-1 text-[#929292]">Kelechi Odowu</p>
                    <p className="col-span-3 sm:col-span-3 text-[#929292]">Guns Fired At Journalists Trying To Cover The End SARS Campaign</p>
                    <div className="sm:flex text-center sm:text-left">
                        <button onClick={() => setEditModal(true)} className="sm:border bg-white border-[#003DA6] text-[#003DA6] rounded-[4px] px-0 sm:px-4 py-0 sm:py-3">Edit</button>
                        <button onClick={() => setDeleteModal(true)} className="bg-white sm:bg-danger px-0 sm:px-4 py-0 mt-4 sm:mt-0 sm:py-3 sm:ml-4 rounded-lg text-danger sm:text-white ">Delete</button>
                    </div>
                </div>
                {deleteModal &&
                    <Modal hideModal={() => setDeleteModal(false)} title="Are you sure you want to delete this story" >
                        <div className="flex justify-center mt-9">
                            <button className="bg-[#606060] rounded-lg px-6 py-4 text-white mr-4 text-center ">Cancel</button>
                            <button className="bg-danger rounded-lg px-6 py-4 text-white text-center">Delete</button>
                        </div>
                    </Modal>
                }
                {addModal &&
                    <Modal hideModal={() => setAddModal(false)} title="Stories">
                        <p className="mt-4 text-[#3e3e3e]">Author</p>
                        <input type="text" className="mt-2 mb-4 bg-white p-4 rounded-lg  " />
                        <p className="mb-2 text-[#3e3e3e]">Type of Attack</p>
                        <select name="" id="" className="p-4 w-full rounded-lg mb-4">
                            <option value="">Physical Attack</option>
                        </select>
                        <p className="mb-2 text-[#3e3e3e]">Title</p>
                        <input type="text" className="mb-4 bg-white p-4 rounded-lg  " />
                        <p className="mb-2 text-[#3e3e3e]">Body</p>
                        <textarea name="" id="" className="bg-white h-[200px]"></textarea>
                        <div className="flex justify-center mt-10">
                            <button className="text-white rounded-lg mr-4 bg-[#606060]" onClick={() => setEditModal(false)}>Cancel</button>
                            <button className="bg-yellow rounded-lg text-[#3e3e3e]">Submit Stories</button>
                        </div>
                    </Modal>
                }
                {editModal &&
                    <Modal hideModal={() => setEditModal(false)} title="Edit Stories">
                        <p className="mt-4 text-[#3e3e3e]">Author</p>
                        <input type="text" className="mt-2 mb-4 bg-white p-4 rounded-lg  " />
                        <p className="mb-2 text-[#3e3e3e]">Type of Attack</p>
                        <select name="" id="" className="p-4 w-full rounded-lg mb-4">
                            <option value="">Physical Attack</option>
                        </select>
                        <p className="mb-2 text-[#3e3e3e]">Title</p>
                        <input type="text" className="mb-4 bg-white p-4 rounded-lg  " />
                        <p className="mb-2 text-[#3e3e3e]">Body</p>
                        <textarea name="" id="" className="bg-white h-[200px]"></textarea>
                        <div className="flex justify-center mt-10">
                            <button className="text-white rounded-lg mr-4 bg-[#606060]" onClick={() => setEditModal(false)}>Cancel</button>
                            <button className="bg-yellow rounded-lg text-[#3e3e3e]">Submit Stories</button>
                        </div>
                    </Modal>
                }
            </div>
            <div className='mt-[204px] mb-[51px] flex flex-col gap-y-6 sm:flex-row justify-between'>
                <p>Page 1 of 10 - 30</p>
                <div className='flex items-center'>
                    <BackArrow className="mr-[13px]" />
                    <p className='mr-[33px] font-[400]'>Previous</p>
                    <div className='grid grid-cols-3 gap-x-[14px]'>
                        <p className='py-[6px] px-[14px] bg-black text-white'>1</p>
                        <p className='py-[6px] px-[14px]'>2</p>
                        <p className='py-[6px] px-[14px]'>3</p>
                    </div>
                    <p className='ml-[33px]'>Next</p>
                    <ForwardArrow className="ml-[13px]" />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Stories