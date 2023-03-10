import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children, showReport = true }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Navbar />
      {showReport && (
        <div className="mx-5 sm:mx-10">
          {pathname.includes("elections") ? (
            <p className="mt-[71px] leading-[140%] font-[400] text-[18px] text-center mb-6">
              Nigeria Decides 2023 - Elections Incident Tracker
            </p>
          ) : (
            <>
              <p className="mt-[71px] leading-[140%] font-[400] text-[18px] text-center mb-6">
                Be rest assured that the anyone reporting an incident has their
                data secured with us and will not be leaked
              </p>

              <Link href="/report-attack">
                <button className="py-3 px-[18px] bg-[#FDC401] block mx-auto text-[#3E3E3E] text-[16px] font-[500] leading-[19px] relative z-10">
                  Report an attack
                </button>
              </Link>
            </>
          )}
        </div>
      )}
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
