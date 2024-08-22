import React, { useEffect, useRef, useState } from "react";

function Work() {
    const [visible, setVisible] = useState(false)
    const myRef= useRef()
    console.log({ visible })
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            setVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])
  return (
    <div
      name="work"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300 flex"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ml-[70px]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Experience
          </p>
        </div>
      </div>
      <div className={`max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ml-[70px] ${visible ? 'animate-slideIn': 'animate-slideOut'}`}>
        <p ref={myRef}>GoGuardian <span className="text-pink-600">(2022-Present)</span></p>
        <span>Full Stack Developer</span>
      </div>
      <div className={`py-24 ${!visible ? 'animate-slideOut': 'flex flex-col justify-center'}   ${visible ? 'animate-slideIn': 'animate-slideOut'} z-[-0]`}>
        <ul>
          <li className="py-2">
            Collaborated with a team of 5 to engineer a robust completion report
            using React, Redux, Node.js and Redshift empowering administrators
            to monitor students’ progress status in common formative assessments
            effectively
          </li>
          <li className="py-2">
            Implemented dynamic filtering for efficient data curation and
            utilized Recharts and AntD libraries to create visually engaging
            data representations, enhancing data visualization
          </li>
          <li className="py-2">
            Improved manage license functionality by implementing options for
            editing and deleting licenses using React, Redux and MongoDb
            empowering administrators to adjust license allocations as needed
          </li>
          <li className="py-2">
            Implemented optimizations to ElasticSearch queries resulting in a
            90% increase in efficiency, boosting productivity
          </li>
          <li className="py-2">
            Facilitated resolutions by promptly reporting encountered bugs to QA
            during feature development, ensuring accountability and preventing
            potential escalations
          </li>
          <li className="py-2">
            Proactively addressed production bugs throughout development cycles,
            ensuring product excellence.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
