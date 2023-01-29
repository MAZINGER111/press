import { useState } from "react"
import DashboardLayout from "../../components/DashboardLayout"
import Modal from "../../components/Modal"
import style from "../../styles/admin.module.css"
const Admin = () => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [passwordModal, setPasswordModal] = useState(false)
    return (
        <DashboardLayout>
            <div className={style.container}>
                <div className="flex justify-between items-center mt-6 mb-[22px]">
                    <p className=" text-[24px] leading-[29px] text-[#3E3E3E]">Admin</p>
                    <button className="bg-yellow px-4 py-3  text-[#3E3E3E] rounded">Add New Admin</button>
                </div>
                <div className="grid grid-cols-4 border-b pb-4 pt-[18px]">
                    <p className="text-[#3e3e3e]">SN</p>
                    <p className="text-[#3e3e3e]">Username</p>
                    <p className="text-[#3e3e3e]">Email</p>
                    <p className="text-[#3e3e3e]">Action</p>
                </div>
                <div className="grid grid-cols-4 border-b items-center py-[21px]">
                    <p className=" text-[#929292]">1</p>
                    <p className=" text-[#929292]">Monsur123</p>
                    <p className=" text-[#929292]">mhussain@pta.com</p>
                    <div className="flex ">
                        <button onClick={() => setEditModal(true)} className="border bg-white border-[#003DA6] text-[#003DA6] rounded-[4px]  px-4 py-3">Edit</button>
                        <button onClick={() => setDeleteModal(true)} className="bg-danger px-4 py-3 ml-4 rounded-lg text-white ">Delete</button>
                    </div>
                </div>
                {deleteModal &&
                    <Modal hideModal={() => setDeleteModal(false)} title="Are you sure you want to delete this admin profile" >
                        <div className="flex justify-center mt-9">
                            <button className="bg-[#606060] rounded-lg px-6 py-4 text-white   mr-4">Cancel</button>
                            <button className="bg-danger rounded-lg px-6 py-4 text-white  ">Delete</button>
                        </div>
                    </Modal>
                }
                {editModal &&
                    <Modal hideModal={() => setEditModal(false)} title="Edit Admin Profile">
                        <p className="mt-4 text-[#3e3e3e]">Username</p>
                        <input type="text" className="mt-2 mb-4 border border-[#d9d9d9] bg-white p-4 rounded-lg  " />
                        <p className="mb-2 text-[#3e3e3e]">Email Address</p>
                        <input type="text" className="border border-[#d9d9d9] bg-white p-4 rounded-lg  " />
                        <p className=" text-[#005EFF] cursor-pointer text-right mt-4" onClick={() => setPasswordModal(true)}>Change Password?</p>
                        <div className="flex justify-center mt-10">
                            <button className="text-white rounded-lg mr-4" onClick={() => setEditModal(false)}>Cancel</button>
                            <button className="bg-yellow rounded-lg text-[#3e3e3e]">Update Admin</button>
                        </div>
                    </Modal>
                }
                {passwordModal &&
                    <Modal hideModal={() => setPasswordModal(false)} title="Change Password">
                        <p className="mt-4 text-[#3e3e3e]">Username</p>
                        <input type="text" className="mt-2 mb-4 border border-[#d9d9d9] bg-white p-4 rounded-lg  " />
                        <p className="text-[#3e3e3e]">Old Password</p>
                        <input type="password" className="mt-2 mb-4 border border-[#d9d9d9] bg-white p-4 rounded-lg  " />
                        <p className="text-[#3e3e3e]">New Password</p>
                        <input type="password" className="mt-2 mb-4 border border-[#d9d9d9] bg-white p-4 rounded-lg  " />
                        <p className="text-[#3e3e3e]">Confirm Password</p>
                        <input type="password" className="mt-2 mb-4 border border-[#d9d9d9] bg-white p-4 rounded-lg  " />
                        <div className="flex justify-center mt-10 mb-2">
                            <button className="text-white rounded-lg mr-4" onClick={() => setPasswordModal(false)}>Cancel</button>
                            <button className="bg-yellow rounded-lg text-[#3e3e3e]">Change Password</button>
                        </div>
                    </Modal>
                }
            </div>
        </DashboardLayout>
    )
}

export default Admin
