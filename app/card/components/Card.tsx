'use client'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Card = () => {
    function getRandomNumber(min : number, max : number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


    useGSAP(()=>{
        gsap.to("#cardPage #Card" , {
            y : -700 ,
            rotate : `${getRandomNumber(-15 , 15)}`,
            scrollTrigger : {
                trigger : "#cardPage",
                markers : true , 
                pin : true , 
                scrub : 2,
                start : "top 0%",
                end : "top -100%"
            }
        })
    })
  return (
    <div id='Card' className='w-[350px] h-[500px] rounded-xl bg-[#81171B] flex justify-center items-center text-2xl font-bold'>Card</div>
  )
}

export default Card