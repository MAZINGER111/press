import { useState } from "react";
import Layout from "../components/Layout";
import style from "../styles/report.module.css";
import { AttackOptions } from "../utils/Attacks";
import Image from "next/image";
import axios from "axios";
const ReportAttack = () => {
  const [image, setImage] = useState("No file Chosen");
  const year = new Date().getFullYear();
  const month = `${new Date().getMonth()}`.padStart(2, "0");
  const dateToday = `${new Date().getDate()}`.padStart(2, "0");
  const [date, setDate] = useState(`${year}-${month}-${dateToday}`);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [attackType, setAttackType] = useState("Unlawful Arrest");
  const [contactInfo, setContactInfo] = useState("");
  const [gender, setGender] = useState("Male");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const payload = {
      date,
      location,
      title,
      image,
      author,
      gender,
      description: desc,
      type_of_attack: attackType,
      contact_information: contactInfo,
      victim_affiliation: affiliation,
    };

    // console.log({ payload });
    // const formData = new FormData();

    try {
      const { data } = await axios.post(
        "https://protist4u.xyz/report/",
        payload
      );
      console.log({ data });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
  return (
    <Layout showReport={false}>
      <div className="grid sm:grid-cols-2 sm:gap-x-6 sm:mt-12 mt-7 mb-[88px]">
        <div
          className="bg-[#f5f5f5] h-full hidden sm:block"
          style={{
            backgroundImage: "url('/images/submit-report.jpeg')",
            backgroundPosition: "center center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <img
            src="/images/submit-report.jpeg"
            width={"100%"}
            height={"100%"}
            alt="submit report"
          /> */}
        </div>
        <form onSubmit={submitHandler}>
          <div className={style.container}>
            <p>Report Attack</p>
            <p className="text-[#1c1b1f]/50 text-[14px] leading-[19px] mt-2 mb-4">
              Fill in The Details of The Attack You Would Like To Report And the
              Information Would Be Verified
            </p>
            <div className="grid sm:grid-cols-2 gap-x-[15px]">
              <input
                type="date"
                value={date}
                defaultValue={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="Author (Optional)"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="grid overflow-hidden sm:grid-cols-2 gap-x-[15px]">
              <input
                type="text"
                placeholder="Victim Affiliation"
                value={affiliation}
                onChange={(e) => setAffiliation(e.target.value)}
              />
              <select
                placeholder="Type of Attack"
                value={attackType}
                onChange={(e) => setAttackType(e.target.value)}
              >
                <option disabled>Type Of Attack</option>
                {AttackOptions.map((type) => (
                  <option value={type.value}>{type.name}</option>
                ))}
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-[15px]">
              <input
                type="text"
                placeholder="Contact Information"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />
              <select
                placeholder="Type of Attack"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option disabled>Gender</option>
                {["Male", "Female"].map((gender) => (
                  <option value={gender}>{gender}</option>
                ))}
              </select>
            </div>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <textarea
              className="h-[200px]"
              placeholder="Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <div className="flex items-center mb-4">
              <label
                className="bg-[#1c1b1f] py-3 px-6 cursor-pointer text-white text-[14px]"
                htmlFor="file-upload"
              >
                Choose File
              </label>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
                id="file-upload"
              />
              {image?.name && <p className="ml-6 text-[14px]">{image?.name}</p>}
            </div>
            <p className="mt-[11px] mb-11 text-[#784949] font-[400] text-[14px] leading-[22px]">
              Upload a picture or evidence (Optional)
            </p>
            <button className="px-4 py-3 bg-yellow text-[#3e3e3e] text-[14px] leading-[22px] block ml-auto">
              Report Attack
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ReportAttack;
