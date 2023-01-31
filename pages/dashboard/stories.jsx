import { useState } from "react"
import Modal from "../../components/Modal"
import DashboardLayout from "../../components/DashboardLayout"
import style from "../../styles/admin.module.css"

const Stories = () => {
    const [editModal, setEditModal] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    return (
        <DashboardLayout>
            <h2 className="text-[24px] leading-[29px] text-[#3e3e3e] font-[400]">Stories</h2>
            <div className={style.container}>
                <div className="flex justify-between mt-8">
                    <div className="relative">
                        <svg className="absolute top-5 left-[18px]" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8982 13.75L8.17324 9.025C7.79824 9.325 7.36699 9.5625 6.87949 9.7375C6.39199 9.9125 5.87324 10 5.32324 10C3.96074 10 2.80774 9.52825 1.86424 8.58475C0.920242 7.64075 0.448242 6.4875 0.448242 5.125C0.448242 3.7625 0.920242 2.60925 1.86424 1.66525C2.80774 0.72175 3.96074 0.25 5.32324 0.25C6.68574 0.25 7.83899 0.72175 8.78299 1.66525C9.72649 2.60925 10.1982 3.7625 10.1982 5.125C10.1982 5.675 10.1107 6.19375 9.93574 6.68125C9.76074 7.16875 9.52324 7.6 9.22324 7.975L13.9482 12.7L12.8982 13.75ZM5.32324 8.5C6.26074 8.5 7.05774 8.172 7.71424 7.516C8.37024 6.8595 8.69824 6.0625 8.69824 5.125C8.69824 4.1875 8.37024 3.3905 7.71424 2.734C7.05774 2.078 6.26074 1.75 5.32324 1.75C4.38574 1.75 3.58874 2.078 2.93224 2.734C2.27624 3.3905 1.94824 4.1875 1.94824 5.125C1.94824 6.0625 2.27624 6.8595 2.93224 7.516C3.58874 8.172 4.38574 8.5 5.32324 8.5Z" fill="#B7B7B7" />
                        </svg>
                        <input className="bg-white ml-[32px] " style={{ border: 'none' }} type="text" placeholder="Search Title, Author" />
                    </div>
                    <button onClick={() => setAddModal(true)} className="bg-yellow p-4 text-[14px] leading-[17px] text-[#3e3e3e] font-[500] rounded-[6px] sm:mr-4">Add Story</button>
                </div>
                <div className="border-b border-[#d9d9d9] mt-[14px] mb-[19px]"></div>
                <div className="grid grid-cols-6 border-b pb-4 pt-[18px]">
                    <div className="sm:flex col-span-2">
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
                        <p className="sm:ml-[31px] text-[#929292]">20/01/2023</p>
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
        </DashboardLayout>
    )
}

export default Stories