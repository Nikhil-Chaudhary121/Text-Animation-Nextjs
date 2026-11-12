'use client'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Navbar = () => {
    const containerRef = useRef(null)
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.from('h1' , {
            y : -20 , 
            duration : 0.5,
            delay : 0.5 ,
            opacity : 0
        })
        tl.from("p" , {
            y : -20 , 
            opacity : 0 ,
            duration : 0.5, 
            stagger : 0.2
        })
    }, {scope : containerRef})
  return (
    <div ref={containerRef}  className='absolute fixed top-0 px-10 py-6 flex w-full justify-between items-center text-white mix-blend-difference'>
        <h1 className='text-xl font-bold'>Logo</h1>
        <div className=' flex gap-4'>
            <p><a href="/gsap">Gsap</a></p>
            <p><a href="/text">Text</a></p>
            <p><a href="/card">Card</a></p>
            <p><a href="/text">Svg</a></p>
            
        </div>
    </div>
  )
}

export default Navbar