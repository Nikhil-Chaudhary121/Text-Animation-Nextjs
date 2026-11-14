import ChangeSection from "./components/ChangeSection"
import CardAnimation01 from "./Section/CardAnimation01"
import ZoomTextCard from "./Section/ZoomTextCard"


const page = () => {
  return (
    <div className="w-screen h-full">
        <ChangeSection title="Card Animation 01"/>
        <CardAnimation01/>
        <ChangeSection title="Card Animation 02"/>
        <ZoomTextCard/>
        <ChangeSection title="Mini Project"/>
    </div>
  )
}

export default page