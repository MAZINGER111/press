import { useState } from "react"
import Modal from "../../components/Modal"
import DashboardLayout from "../../components/DashboardLayout"
import style from "../../styles/admin.module.css"
import { ForwardArrow, BackArrow } from "../../components/Svgs"
import { PageNavigator } from "../../components/PageNavigator"

const Reports = () => {
    const [viewModal, setViewModal] = useState(false)
    return (
        <DashboardLayout>
            <div className={style.container}>
                <div className="flex justify-between mb-3">
                    <h2 className="text-[24px] leading-[29px] text-[#3e3e3e] font-[400]">Manage Reports</h2>

                </div>
                <div className="grid grid-cols-6 border-b pb-4 pt-[18px] sm:pl-6">
                    <div className="sm:flex col-span-2 sm:col-span-1">
                        <p className="text-[#3e3e3e] hidden sm:block">SN</p>
                        <p className="text-[#3e3e3e] sm:ml-[31px]">Date</p>
                        <p className="text-[#3e3e3e] mt-2 sm:hidden">Author</p>
                    </div>
                    <p className="text-[#3e3e3e] hidden sm:block">Author</p>
                    <p className="text-[#3e3e3e] col-span-3">Title</p>
                    <p className="text-[#3e3e3e]">Action</p>
                </div>
                <div className="grid grid-cols-6 border-b items-center py-[21px] sm:pl-6">
                    <div className="col-span-2 sm:flex sm:col-span-1">
                        <p className="text-[#929292] hidden sm:block">1</p>
                        <p className="sm:ml-[31px] text-[#929292]">20/01/2023</p>
                        <p className="text-[#929292] mt-2 sm:hidden">Kelechi Odowu</p>
                    </div>
                    <p className="text-[#929292] hidden sm:block">Kelechi Odowu</p>
                    <p className="col-span-3 text-[#929292]">Guns Fired At Journalists Trying To Cover The End SARS Campaign</p>
                    <button onClick={() => setViewModal(true)} className="bg-[#3e3e3e] w-fit px-4 py-3 rounded-lg text-white ">View</button>
                </div>
                <PageNavigator />
                {viewModal &&
                    <Modal hideModal={() => setViewModal(false)} title="View Report" large={true}>
                        <div className={style.bolden}>
                            <div className="flex justify-between mb-6 mt-[15px]">
                                <div>
                                    <span className="text-[#929292] block mb-2">Date</span>
                                    <p>28th January 2023</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-[#929292] block mb-2">Author</span>
                                    <p>John Doe</p>
                                </div>
                            </div>
                            <div className="flex justify-between mb-6">
                                <div>
                                    <span className="text-[#929292] block mb-2">Location</span>
                                    <p>Emerald Estate, Ajah, Lagos state.</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-[#929292] block mb-2">Coordinate</span>
                                    <p>N/A</p>
                                </div>
                            </div>
                            <div className="flex justify-between mb-6">
                                <div>
                                    <span className="text-[#929292] block mb-2">Assiliant</span>
                                    <p>N/A</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-[#929292] block mb-2">Gender</span>
                                    <p>Female</p>
                                </div>
                            </div>
                            <div className="flex justify-between mb-6">
                                <div>
                                    <span className="text-[#929292] block mb-2">Victim Affiliation</span>
                                    <p>N/A</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-[#929292] block mb-2">Type of Attack</span>
                                    <p>N/A</p>
                                </div>
                            </div>
                            <span className="text-[#929292] block mb-2">Title</span>
                            <p className="mb-6">Guns fired at journalists trying to cover the End SARS Campaign</p>
                            <span className="text-[#929292] block mb-3">Description</span>
                            <p className="mt-[3px] text-justify mb-4">Lorem ipsum dolor sit amet consectetur. Arcu morbi eu quisque vulputate pharetra lorem at fames mi. Cras amet urna eget tortor id cursus elementum pellentesque. Tincidunt consectetur lorem enim posuere laoreet ac eu mi. Velit tristique pulvinar velit auctor maecenas ut velit. Diam odio ut vestibulum sollicitudin enim pretium blandit est purus. Dui etiam faucibus lorem fringilla dui in dictumst. Donec ipsum tristique vel dolor facilisis ullamcorper. Quis odio eget consectetur consequat magnis pharetra nullam. <br /> <br /> Faucibus mattis pretium ullamcorper libero proin nunc. Nisl dictum nunc duis egestas et integer tincidunt nam. Adipiscing dolor molestie arcu enim augue. Commodo suspendisse cursus tincidunt nulla dolor sodales arcu ornare. Nunc cursus faucibus sed vitae pharetra a id id convallis. Mattis arcu ipsum et ut duis laoreet orci. Sed ultricies metus in consectetur enim consectetur. Pellentesque enim turpis mi morbi fringilla tellus pharetra</p>
                        </div>
                    </Modal>
                }
            </div>
        </DashboardLayout>
    )
}

export default Reports