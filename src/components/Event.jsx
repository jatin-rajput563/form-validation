import React, { useState, useRef, useEffect } from "react";
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

  // Load data from local storage when component mounts
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("eventFormData"));
    const savedImages = JSON.parse(localStorage.getItem("eventFormImages"));

    if (savedData) {
      setData(savedData);
    }
    if (savedImages) {
      setImgPreview(savedImages);
    }
  }, []);

  // Save data to local storage whenever data or images change
  useEffect(() => {
    localStorage.setItem("eventFormData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("eventFormImages", JSON.stringify(ImgPreview));
  }, [ImgPreview]);

  const submitData = (e) => {
    e.preventDefault();
    console.log("The data was submitted:", data);
    // Optionally, clear local storage after submit
    localStorage.removeItem("eventFormData");
    localStorage.removeItem("eventFormImages");
    setData(inputValue);
    setImgPreview([]);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const objectUrls = files.map((file) => URL.createObjectURL(file));
    setImgPreview((prev) => [...prev, ...objectUrls]);
  };

  const handlePlusClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = (indexToRemove) => {
    setImgPreview((prev) => prev.filter((_, index) => index !== indexToRemove));
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
            <div className="w-full max-w-[620px] mt-[20px] md:max-w-[763px] px-4 py-2 bg-white border-2 border-dashed border-[#D1E0E9] rounded-[30px]">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                multiple
                ref={fileInputRef}
                className="hidden"
              />
              <div className="gap-4 flex overflow-auto">
                {ImgPreview.map((imgSrc, index) => (
                  <div key={index} className="relative">
                    <img
                      src={imgSrc}
                      alt={`Preview ${index}`}
                      className="w-[96px] h-[96px] rounded-[20px] object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-[2px] right-[-8px] bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-700 transition-all"
                    >
                      −
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handlePlusClick}
                  className="max-w-[96px] min-h-[80px] w-full shrink-0 rounded-[20px] border-2 border-dashed border-[#D4D4D4] flex items-center justify-center text-3xl text-[#0071BB] font-bold hover:bg-[#f0f8ff] transition-all"
                >
                  +
                </button>
              </div>
            </div>
            <div className="relative mt-5">
              <select
                id="options"
                value={data.kategorie}
                onChange={(e) =>
                  setData({ ...data, kategorie: e.target.value })
                }
                className="block appearance-none font-bold text-sm leading-[150%] text-[#737376] w-full py-[17.5px] bg-white px-[16px] border-[#D1E0E9] border rounded-[30px] focus:outline-none focus:ring-2 "
              >
                <option value="">Kategorie</option>
                <option value="option1">Option One</option>
                <option value="option2">Option Two</option>
                <option value="option3">Option Three</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                {/* SVG remains unchanged */}
              </div>
            </div>
            <div className="mt-[20px] flex gap-3 max-w-[763px] w-full">
              <CustomInput
                placeholder="titel"
                type="text"
                value={data.titel}
                name="titel"
                onchange={(e) => setData({ ...data, titel: e.target.value })}
              />
              <CustomInput
                placeholder="Datum"
                type="text"
                name="Datum"
                value={data.datum}
                onchange={(e) => setData({ ...data, datum: e.target.value })}
              />
            </div>
            <div className="mt-[20px] flex gap-3 max-w-[763px] w-full">
              <CustomInput
                value={data.standort}
                name="standort"
                onchange={(e) => setData({ ...data, standort: e.target.value })}
                placeholder="standort"
                type="text"
              />
              <CustomInput
                value={data.preis}
                name="preis"
                onchange={(e) => setData({ ...data, preis: e.target.value })}
                placeholder="preis"
                type="text"
              />
            </div>
            <textarea
              value={data.textarea}
              name="textarea"
              onChange={(e) => setData({ ...data, textarea: e.target.value })}
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
