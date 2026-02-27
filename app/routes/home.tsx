import {Application, Hero, InPractice, Participation, Program, Close, Footer} from "components/index"
import {HeroContent} from "../constants/texts";
import { useEffect } from "react";
import { setMetaTag } from "~/lib/utils";

const home = () => {
  useEffect(() => {
      setMetaTag("PREMEP", "Ingyenes homlokzati szigetelőanyag 2026-ban! Csökkentse rezsijét a Premep országos energiahatékonysági programjával – valódi, azonnali segítséggel családi házak számára.", "/icons/premep_icon.jpg");
    }, []);

  return (
    <main>
      <Hero title={HeroContent.title} subtitle={HeroContent.subtitle} highlights={HeroContent.highlights}/>
      <Program />
      <InPractice />
      <Participation />
      <Application/>
      <Close />
      <Footer />
    </main>
  )
}

export default home