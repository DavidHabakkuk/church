"use client";

import { useEffect, useRef } from "react";
import Hero from "./Comp/Hero";

import Team from "./Comp/choir";
import Video from "./Comp/video";
import Department from "./Comp/department";

export default function Home() {
  

   

  return (
    <>
      <div >
        <Hero />
      </div>
      <div>
        <Team />
      </div>
      
      <div >
        <Video />
      </div>
      <div >
        <Department />
      </div>
    </>
  );
}
