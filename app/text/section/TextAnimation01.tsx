'use client'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);



const TextAnimation01 = () => {
    const boxRef = useRef(null)
    const container = useRef(null)
    useGSAP(() => {
        gsap.from("p", {
           color : "red" , 
           duration : "1", 
           y :30 ,
        //    x :100,
           opacity : "0",
        //    delay : "1" 
        stagger : 0.3
        } )
    } , {scope : container})
  return (
    <div className='w-screen h-screen flex justify-center items-center'>

        <div ref={container}  className="text flex flex-col text-[6rem] leading-none font-bold ">
        <p ref={boxRef}>Text One </p>
        <p ref={boxRef}>Text One </p>
        <p ref={boxRef}>Text One </p>
         </div>
    </div>
  )
}

export default TextAnimation01