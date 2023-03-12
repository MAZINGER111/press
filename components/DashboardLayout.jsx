import Link from "next/link";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  const { pathname } = router;
  console.log("path", pathname);
  return (
    <div>
      <div className="flex relative items-center z-10 justify-between bg-[#3E3E3E] py-3 px-6">
        {showSidebar ? (
          <img
            src="/images/cancel.png"
            onClick={() => setShowSidebar(false)}
            className="absolute ml-2 h-5 invert-[1] w-5 left-3 sm:hidden"
            alt=""
          />
        ) : (
          <img
            src="/images/menu.png"
            onClick={() => setShowSidebar(true)}
            className="absolute h-10 w-10 invert-[1] left-3 sm:hidden"
            alt=""
          />
        )}
        <Link href="/dashboard">
          <div className="ml-10 sm:ml-0">
            <p className="text-yellow text-[24px] font-[600] leading-[29px]">
              PAT
            </p>
            <p className="text-white">Admin</p>
          </div>
        </Link>
        {/* <p className="text-yellow text-[14px] leading-[17px]">
          Welcome, Monsur Hussain
        </p> */}
      </div>
      <div className="flex">
        {pathname.toLowerCase() !== "/dashboard" && (
          <Sidebar
            showSidebar={showSidebar}
            hideSidebar={() => setShowSidebar(false)}
          />
        )}
        <div className="flex-1 pl-[22px] pr-[25px] pt-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
