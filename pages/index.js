import Layout from "../components/Layout";
import { Inter } from "@next/font/google";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "../components/Svgs";
import { FaqData } from "../utils/Faq";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout showReport={false}>
      <div className="mb-[60px]">
        {/* <div className='h-[400px] mx-5 sm:mx-10 mt-[73px] bg-[#F0F0F0] flex items-center justify-center'>
          <p className='opacity-50'>Heat Map</p>
        </div> */}
        <iframe
          width="95%"
          height="600px"
          src="https://lookerstudio.google.com/embed/reporting/8dc49a87-840f-4d63-ad6d-67182c3b8421/page/p_527mnxcq2c"
          // frameborder="0"
          style={{ border: "0", margin: "0px auto" }}
          allowFullScreen={true}
        ></iframe>
        <div className="mx-5 sm:mx-10">
          <p className="leading-[140%] font-[400] text-[18px] text-center mb-6 mt-[70px]">
            Be rest assured that the anyone reporting an incident has their data
            secured with us and will not be leaked
          </p>
          <Link href="/report-attack">
            <button className="py-3 px-[18px] bg-[#FDC401] block mx-auto text-[#3E3E3E] text-[16px] font-[500] leading-[19px] relative z-10">
              Report an attack
            </button>
          </Link>
          <p className="text-center mt-[73px] text-[36px] leading-[43px] font-[600] mb-4">
            Our Partners
          </p>
          <div className="flex justify-around items-center flex-wrap gap-y-">
            <img
              className="w-[175px] h-[175px]"
              src="/images/free-press.png"
              alt=""
            />
            <img
              className="w-[359px] h-[126px]"
              src="/images/cwppf.png"
              alt=""
            />
            <img
              className="w-[185px] h-[117px]"
              src="/images/mldi.png"
              alt=""
            />
          </div>

          <p className="font-[600] text-[24px] mb-[30] mt-[81px]">
            Frequently Asked Questions
          </p>
          <div className="sm:px-[31px]">
            {FaqData.map((faq, index) => (
              <Faq question={faq.question} key={index} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Faq = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="py-7 border-b border-b-[#1C2022]">
      <div className="flex justify-between items-center">
        <p>{question}</p>
        {show ? (
          <MinusIcon
            onClick={() => setShow(!show)}
            className="cursor-pointer w-4 h-4"
          />
        ) : (
          <PlusIcon
            onClick={() => setShow(!show)}
            className="cursor-pointer h-4"
          />
        )}
      </div>
      {show && (
        <p className="text-[#525252] text-[16px] font-[400] leading-[180%] mt-4">
          {answer}
        </p>
      )}
    </div>
  );
};
