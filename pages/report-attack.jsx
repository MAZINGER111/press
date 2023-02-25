import { useState } from "react";
import Layout from "../components/Layout";
import style from "../styles/report.module.css";
import { AttackOptions } from "../utils/Attacks";
import swal from "sweetalert";

const ReportAttack = () => {
  const [image, setImage] = useState(null);
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

  const [imageIsEmpty, setImageIsEmpty] = useState(false);
  const [btnIsBusy, setBtnIsBusy] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!image) {
      setImageIsEmpty(true);
      return;
    }

    const formData = new FormData();
    formData.append("date", date);
    formData.append("gender", gender);
    formData.append("author", author);
    formData.append("location", location);
    formData.append("title", title);
    formData.append("image", image);
    formData.append("description", desc);
    formData.append("type_of_attack", attackType);
    formData.append("contact_information", contactInfo);
    formData.append("victim_affiliation", affiliation);

    try {
      setBtnIsBusy(true);
      const res = await fetch("https://protist4u.xyz/report/", {
        method: "POST",
        body: formData,
      });
      setBtnIsBusy(false);

      const response = await res.json();
      console.log({ response });

      if (response?.id) {
        swal("Success!", "Report submitted successfully!", "success").then(
          () => {
            // clear initial data
            setDate(`${year}-${month}-${dateToday}`);
            setTitle("");
            setAuthor("");
            setAffiliation("");
            setAttackType("Unlawful Arrest");
            setContactInfo("");
            setGender("Male");
            setLocation("");
            setDesc("");
          }
        );
      } else {
        swal("Error!", "Something is wrong!", "error");
      }
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
        <form onSubmit={submitHandler} encType="multipart/form-data">
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
              required={true}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="grid overflow-hidden sm:grid-cols-2 gap-x-[15px]">
              <input
                type="text"
                placeholder="Victim Affiliation"
                value={affiliation}
                required={true}
                onChange={(e) => setAffiliation(e.target.value)}
              />
              <select
                placeholder="Type of Attack"
                value={attackType}
                required={true}
                onChange={(e) => setAttackType(e.target.value)}
              >
                <option disabled>Type Of Attack</option>
                {AttackOptions.map((type, idx) => (
                  <option value={type.value} key={idx}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-[15px]">
              <input
                type="text"
                required={true}
                placeholder="Contact Information"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
              />
              <select
                placeholder="Type of Attack"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required={true}
              >
                <option disabled>Gender</option>
                {["Male", "Female"].map((gender) => (
                  <option value={gender} key={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              placeholder="Location"
              value={location}
              required={true}
              onChange={(e) => setLocation(e.target.value)}
            />
            <textarea
              className="h-[200px]"
              placeholder="Description"
              required={true}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <div className="flex items-center mb-4">
              <label
                className="bg-[#1c1b1f] py-3 px-6 cursor-pointer text-white text-[14px]"
                htmlFor="file-upload"
                required={true}
              >
                Choose File
              </label>
              <input
                type="file"
                className="hidden"
                onChange={(e) => setImage(e.target.files[0])}
                id="file-upload"
                name="image"
              />
              {image?.name && <p className="ml-6 text-[14px]">{image?.name}</p>}
              {!image && imageIsEmpty && (
                <p className="ml-6 text-[#ad5454] text-[14px]">
                  Image is required
                </p>
              )}
            </div>
            <p className="mt-[11px] mb-11 text-[#784949] font-[400] text-[14px] leading-[22px]">
              Upload a picture
            </p>
            <button
              className="px-4 py-3 bg-yellow text-[#3e3e3e] text-[14px] leading-[22px] block ml-auto"
              disabled={btnIsBusy}
            >
              {btnIsBusy ? "Loading..." : "Report Attack"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ReportAttack;
