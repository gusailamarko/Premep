import { ApplicationTexts } from "~/constants/texts"
import { ApplicationCard, Form } from "./index"

const Application = () => {
  return (
    <div className="apply-content py-[3rem]">
      <div>
        <h2 className="text-[2rem] md:text-[3rem] text-center font-bold italic uppercase w-[90%] mb-5">JELENTKEZÉS</h2>
      </div>
      <div className="applyCards">
          {ApplicationTexts.map((card, index) => (
              <ApplicationCard key={index} title={card.title} points={card.points} disclaimer={card.disclaimer}/>
          ))}
      </div>
      <div>
        <Form />
      </div>
    </div>
  )
}

export default Application