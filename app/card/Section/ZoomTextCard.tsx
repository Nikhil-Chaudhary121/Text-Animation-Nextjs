'use client'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { turborepoTraceAccess } from 'next/dist/build/turborepo-access-trace';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const ZoomTextCard = () => {
    useGSAP(()=>{
        gsap.to("#imgCard", {
            scale : 5,
            duration :1,
            scrollTrigger : {
                trigger : ".left",
                scrub: 2,
                start : "top 90%",
                end : "top 50%",
                
            }
        })
        gsap.to( ".left" , {
            x : -60,
            duration : 1,
            scrollTrigger : {
                trigger : ".left",
                scrub: 2,
                start : "top 90%",
                end : "top 50%"
            }
        })
        gsap.to( ".right" , {
            x : 60,
            duration : 1,
            scrollTrigger : {
                trigger : ".left",
                scrub: 2,
                start : "top 90%",
                end : "top 50%"
            }
        })
    })
  return (
    <div className="h-screen w-screen gap-1 text-[3rem] text-white font-bold flex justify-center items-center bg-[#540804]">
        <span className='left'>Hello</span>
        <img id='imgCard' className="h-[40px] w-[30px]" src="https://plus.unsplash.com/premium_photo-1694475377333-334351644ac6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
        <span className='right'>World</span>
    </div>
  )
}

export default ZoomTextCard