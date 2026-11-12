import ChangeSection from "./components/ChangeSection"
import CardAnimation01 from "./Section/CardAnimation01"


const page = () => {
  return (
    <div className="w-screen h-full">
        <ChangeSection title="Card Animation 01"/>
        <CardAnimation01/>
        <ChangeSection title="Card Animation 02"/>
    </div>
  )
}

export default page