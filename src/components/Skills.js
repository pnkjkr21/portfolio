import React from "react";
import html from "../Icons/pngwing.com.png";
import css from "../Icons/css.png";
import js from "../Icons/js.png";
import react from "../Icons/react.png";
import redux from "../Icons/redux.png";
import tailwind from "../Icons/tailwind.png";
import saga from "../Icons/reduxSaga.png";
function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={html} className="w-20 mx-auto" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={css} className="w-20 mx-auto" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={js} className="w-20 mx-auto" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={react} className="w-20 mx-auto" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={redux} className="w-20 mx-auto" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={tailwind} className="w-20 mx-auto" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={saga} className="w-20 mx-auto" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={saga} className="w-20 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
