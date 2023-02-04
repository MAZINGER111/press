import { useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import ReportForm from "./ReportForm"

const Layout = ({ children, showReport = true }) => {
    const [showReportForm, setShowReportForm] = useState(false)
    return (
        <>
            <Navbar />
            {showReport && !showReportForm &&
                <div className="mx-5 sm:mx-10">
                    <p className='mt-[71px] leading-[140%] font-[400] text-[18px] text-center mb-6'>Be rest assured that the anyone reporting an incident has their data secured with us and will not be leaked</p>
                    <button onClick={() => setShowReportForm(true)} className='py-3 px-[18px] bg-[#FDC401] block mx-auto text-[#3E3E3E] text-[16px] font-[500] leading-[19px] relative z-10'>
                        Report an attack
                    </button>
                </div>
            }
            {showReportForm &&
                <ReportForm />
            }
            {!showReportForm
                &&
                <>
                    {children}
                </>
            }
            <Footer />
        </>
    )
}

export default Layout