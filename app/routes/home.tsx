import {Application, Hero, InPractice, Participation, Program} from "components/index"
import {HeroContent} from "../constants/texts";

const home = () => {
  return (
    <main>
      <Hero title={HeroContent.title} subtitle={HeroContent.subtitle} highlights={HeroContent.highlights}/>
      <Program />
      <InPractice />
      <Participation />
      <Application/>
    </main>
  )
}

export default home