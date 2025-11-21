
import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../components/LanguageChage";

import { RiSearchLine, RiMicLine, RiCloseLine } from "react-icons/ri";

const GptSearch = () => {
  const selectedLanguage = useSelector((store) => store.lang.language);

  return (
    <div className="pt-28 px-10 text-white bg-black min-h-screen">

      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="bg-[#1A1A1A] w-full max-w-4xl rounded-xl flex items-center px-5 py-4 shadow-lg">

          <RiSearchLine className="text-gray-400 text-2xl mr-3" />

          <input
            type="text"
           placeholder={lang[selectedLanguage]?.gptSearchPlaceHolder}
            className="bg-transparent text-xl w-full outline-none"
          />

          <button className="text-gray-400 hover:text-white">
            <RiMicLine className="text-2xl" />
          </button>

          <button className="text-gray-400 hover:text-white ml-6">
            <RiCloseLine className="text-3xl" />
          </button>

        </div>
      </div>

    </div>
  );
};

export default GptSearch;
