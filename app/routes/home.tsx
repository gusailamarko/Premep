import {Hero} from "components/index"
import {HeroContent} from "../constants/texts";

const home = () => {
  return (
    <main>
      <Hero title={HeroContent.title} subtitle={HeroContent.subtitle} highlights={HeroContent.highlights}/>
    </main>
  )
}

export default home