import InPracticeCard from "./InPracticeCard"
import { PracticeCardContent } from "~/constants/texts"

const InPractice = () => {
  return (
    <div className="practice-content py-[3rem]">
        <h2 className="text-[2rem] md:text-[3rem] text-center font-bold italic uppercase w-[90%] mb-5">MIT JELENT EZ A GYAKORLATBAN?</h2>
        <div className="cards">
            {PracticeCardContent.map((card, index) => (
                <InPracticeCard key={index} id={card.id} title={card.title} desc={card.desc} listTitle={card.listTitle} listItems={card.listItems} ui={card.ui}/>
            ))}
        </div>
    </div>
  )
}

export default InPractice