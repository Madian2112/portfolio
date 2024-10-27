import React from "react";
import { info } from "../../data/info";
import Education from "./Education";
import Experience from "./Experience";

interface AboutProps {
  about: (typeof info)["about"];
}

export default function About(props: AboutProps) {
  const { about } = props;

  return (
    <div className="flex flex-col justify-center items-center h-full space-y-4">
      <div className="flex flex-col space-y-4 w-full lg:w-1/2 mx-4 mb-9">
        <h1 className="text-4xl font-bold">About me</h1>
        <p className="text-2xl font-normal">{info.about.description}</p>
      </div>
      <div className="mb-30">
      <Education education={about.education}/>
      </div>
      <Experience experience={about.experience} />
    </div>
  );
}
