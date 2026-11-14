import Card from "../components/Card"

const CardAnimation01 = () => {
  return (
    <div id="cardPage" className="h-screen w-screen bg-[#540804] flex justify-between items-center px-40 py-20">
        <div className="w-1/2 text-center px-30">
            <h1 className="text-[4rem] leading-[4.5rem] font-semibold text-[#EA8C55]">Sticky Cards</h1>
            <p className=" text-[#C75146]">sticky card animation on scroll , each card moves to the top one by one when on scroll using gsap and scrolltrigger. its card animation 01 i am making this by my own.  </p>
        </div>
        <div className="">
            <Card/>
            
        </div>
    </div>
  )
}

export default CardAnimation01