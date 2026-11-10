'use client'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Navbar = () => {
    const containerRef = useRef(null)
    useGSAP(()=>{

    }, {scope : containerRef})
  return (
    <div ref={containerRef} className=' px-10 py-6 flex w-full justify-between items-center'>
        <p className='text-xl font-bold'>Logo</p>
        <div className=' flex gap-4'>
            <p>Text</p>
            <p>Image</p>
            <p>SVG</p> 
        </div>
    </div>
  )
}

export default Navbar