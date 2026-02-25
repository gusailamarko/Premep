import {Hero, InPractice, Program} from "components/index"
import {HeroContent} from "../constants/texts";

const home = () => {
  return (
    <main>
      <Hero title={HeroContent.title} subtitle={HeroContent.subtitle} highlights={HeroContent.highlights}/>
      <Program />
      <InPractice />
    </main>
  )
}

export default home