'use client'
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP,ScrollTrigger);


const page = () => {
    const container = useRef(null)
    const heroText = useRef(null)
    const imgRef = useRef( null)


    let path = "M 10 100 Q 500 100 990 100"
    let finalPath = "M 10 100 Q 500 100 990 100"

    const { contextSafe } = useGSAP(()=> {
        gsap.from("h1 p" , {
            // y : -20,
            x : 20,
            duration : 0.5,
            opacity : 0,
            stagger : 0.3,
            // color : "#DC143C"    
        })

        gsap.from(imgRef.current , {
            opacity : 0,
            y : 50,
            duration : 1,
            delay : 1 ,
            scale : 0.9,
            scrollTrigger : "#imgBox"
        })

        gsap.from("#leftText" , {
            x : 100,
            opacity : 0,
            scrollTrigger : {
                trigger : "#leftText",
                // scroller : "body",
                // markers : true,
                start : "top 60%",
                end : "top 41%",
                scrub : 2
            }
        })

        gsap.from("#rightText" , {
            x : -100 ,
            opacity : 0 , 
            scrollTrigger : {
                trigger : "#rightText",
                // markers : true ,
                start : "top 65%" ,
                end : "top 56%",
                scrub : 2
            }
        })

        //
        gsap.to("#pinPage p" , {
            transform : 'translateX(-330%)',
            scrollTrigger : {
                trigger : "#pinPage",
                // markers : true,
                start : "top 0%",
                end : "top -200%",
                scrub : 2 , 
                pin : true
                
            }
        }) 
        gsap.to("#zoomPage div",{
            scale : 2.1,
            borderRadius : 0,
            scrollTrigger : {
                trigger : "#zoomPage",
                // markers : true,
                start : "top 0%",
                end : "top -100%",
                scrub : 2,
                pin :true
            }
        })
    }, {scope : container})


     const mouseMoveFunc = contextSafe((dets: React.MouseEvent<HTMLDivElement>) => {
        const rect = dets.currentTarget.getBoundingClientRect();
        const x = dets.clientX - rect.left;
        const y = dets.clientY - rect.top;

        const path = `M 10 100 Q ${x} ${y} 990 100`;
            gsap.from(".string svg path" , {
                attr : {d : path},
                duration : 0.3,
                ease : "power3.out"
            })
                
     })
     const mouseLeaveFunc = contextSafe(()=> {
        gsap.from(".string svg path" , {
            attr : {d : finalPath} ,
            duration : 1.5 ,
            ease : "elastic.out(1,0.2)"
        })
     })
  return (
    <div ref={container} className='h-full w-full'>
        <div className=' bg-[#fdf0d5] w-screen h-screen flex justify-center items-center '>
            <h1 ref={heroText}  id='heroText' className=' flex text-[5rem]'>
                <p>G</p>
                <p>S</p>
                <p>A</p>
                <p>P</p>
            </h1>
        </div>
        <div className='h-screen w-screen bg-[#748cab] flex items-center justify-center '>
            <div ref={imgRef} id='imgBox' className='bg-[#0d1321] w-[300px] h-[300px] rounded-full '></div>
        </div>
        <div className=' h-screen w-screen bg-[#b6ad90] flex justify-center items-center'>
            <div className='text-center text-[3rem] font-semibold '>
                <h1 id='leftText'>Left</h1>
                <h1 id='rightText'>Right</h1>
            </div>
        </div>
        <div id='pinPage' className=' bg-[#656d4a] overflow-hidden max-h-screen w-screen  '>
        <p className='uppercase text-[40vw] whitespace-nowrap flex '>Scroll To See Magic</p>
        </div>
        <div id='zoomPage' className=' max-w-screen w-screen h-screen max-h-screen bg-[#faedcd] flex justify-center items-center '>
            <div className='w-[50vw] h-[50vh] bg-[#252422]  rounded-xl'></div>
        </div>
        <div className='h-screen w-screen bg-[#252422] justify-center flex items-center'>
            <div className='string' onMouseMove={mouseMoveFunc} onMouseLeave={mouseLeaveFunc}>
            <svg width="1000" height="200">
                    <path d="M 10 100 Q 500 100 990 100" stroke="white" fill="none" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default page