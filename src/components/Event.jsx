import React, { useState, useRef } from "react";
import CustomInput from "./common/CustomInput";

const Event = () => {
  const inputValue = {
    kategorie: "",
    titel: "",
    datum: "",
    standort: "",
    preis: "",
    textarea: "",
    imageInput: "",
  };
  const [data, setData] = useState(inputValue);
  const [ImgPreview, setImgPreview] = useState([]);
  const fileInputRef = useRef(null);
  const submitData = (e) => {
    e.preventDefault();
    console.log("The data was submitted:", data);
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const objectUrls = files.map((file) => URL.createObjectURL(file));
    setImgPreview((prev) => [...prev, ...objectUrls]);
  };
  const handlePlusClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="pt-[60px] min-h-screen bg-[#F5F9FC]">
        <div className="max-w-[768px] mx-auto px-3">
          <h1 className="font-bold text-4xl leading-[44px] tracking-[-2%] text-center">
            Event einsenden
          </h1>
          <p className="font-light text-[20px] leading-[30px] max-w-[768px] text-center mx-auto pt-[20px] text-[#737376]">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </p>
          <form onSubmit={submitData}>
            <div className="w-full max-w-[620px] overflow-hidden mt-[20px] md:max-w-[763px] px-4 py-2 bg-white border-2 border-dashed border-[#D1E0E9] rounded-[30px]">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                multiple
                ref={fileInputRef}
                className="hidden"
                name="imageInput"
                value={inputValue.imageInput}
                onchange={(e) => setData({ ...data, imageInput: e.target.value })}
              />
              <div className="gap-4 flex overflow-auto">
                {ImgPreview.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={`Preview ${index}`}
                    className="w-[96px] h-[96px] rounded-[20px] object-cover"
                  />
                ))}
                <button
                  type="button"
                  onClick={handlePlusClick}
                  className="max-w-[96px] min-h-[80px] w-full  rounded-[20px] border-2 border-dashed border-[#D4D4D4] flex items-center justify-center text-3xl text-[#0071BB] font-bold hover:bg-[#f0f8ff] transition-all"
                >
                  +
                </button>
              </div>
            </div>
            <div className="relative mt-5">
              <select
                id="options"
                className="block appearance-none font-bold text-sm leading-[150%] text-[#737376] w-full py-[17.5px] bg-white px-[16px] border-[#D1E0E9] border rounded-[30px] focus:outline-none focus:ring-2 "
              >
                <option value="Kategorie">Kategorie</option>
                <option value="option1">Option One</option>
                <option value="option2">Option Two</option>
                <option value="option3">Option Three</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <svg
                  width="15"
                  height="8"
                  viewBox="0 0 15 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 0C14.352 0 14.797 0.986 14.283 1.623L14.207 1.707L8.20695 7.707C8.03476 7.87918 7.80566 7.98261 7.56263 7.99789C7.31961 8.01317 7.07936 7.93925 6.88695 7.79L6.79295 7.707L0.792953 1.707L0.709953 1.613L0.655953 1.536L0.601954 1.44L0.584953 1.404L0.557953 1.337L0.525953 1.229L0.515953 1.176L0.505953 1.116L0.501953 1.059V0.941L0.506953 0.883L0.515953 0.823L0.525953 0.771L0.557953 0.663L0.584953 0.596L0.654953 0.464L0.719953 0.374L0.792953 0.293L0.886953 0.21L0.963953 0.156L1.05995 0.102L1.09595 0.085L1.16295 0.0579996L1.27095 0.026L1.32395 0.0159998L1.38395 0.00599957L1.44095 0.00199986L13.5 0Z"
                    fill="#222222"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-[20px] flex gap-3 max-w-[763px] w-full">
              <CustomInput
                placeholder="Titel"
                type="text"
                value={data.Titel}
                name="Titel"
                onchange={(e) => setData({ ...data, Titel: e.target.value })}
              />
              <CustomInput
                placeholder="Datum"
                type="text"
                name="Datum"
                value={data.Datum}
                onchange={(e) => setData({ ...data, Datum: e.target.value })}
              />
            </div>
            <div className="mt-[20px] flex gap-3 max-w-[763px] w-full">
              <CustomInput
                value={data.Standort}
                name="Standort"
                onchange={(e) => setData({ ...data, Standort: e.target.value })}
                placeholder="Standort"
                type="text"
              />
              <CustomInput
                value={data.Preis}
                name="Preis"
                onchange={(e) => setData({ ...data, Preis: e.target.value })}
                placeholder="Preis"
                type="text"
              />
            </div>
            <textarea
              value={data.Textarea}
              name="textarea"
              onChange={(e) => setData({ ...data, Textarea: e.target.value })}
              placeholder="Details zur Veranstaltung"
              className="bg-white border border-[#D1E0E9] rounded-[30px] px-4 min-h-[132px] w-full mt-[20px] pt-[50px] font-bold text-sm leading-[150%] tracking-[-1px]"
            ></textarea>
            <button
              className="py-4 px-[115.5px] rounded-[30px] font-bold text-base leading-[150%] tracking-[-1px] text-white mx-auto flex mt-[20px]"
              style={{
                background:
                  "linear-gradient(80.25deg, #0071BB 0.38%, #39A3E7 98.6%)",
              }}
            >
              Event einsenden
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Event;
