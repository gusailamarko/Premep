import { CTAButton } from "components/index";
import { CTAButtonTexts } from "~/constants/texts";

const Hero = ({title, subtitle, highlights}:HeroProps) => {
  return (
    <div className="heroContent">
        <div className="heroContent-container">
            <div className="heroContent-texts text-black w-[90%] md:w-[45%]">
                <h1 className="text-[1.2rem] md:text-[1.5rem] font-bold uppercase underline mb-2">{title}</h1>
                <h2 className="text-[0.8rem] md:text-[1rem] font-bold italic uppercase">{subtitle}</h2>
                <div className="flex justify-center flex-wrap lg:flex-nowrap gap-3 my-5">
                    {highlights.map((hg:string, index:number) => (
                        <span className="highlightInfo text-[0.8rem] w-full font-bold italic uppercase flex flex-col items-center justify-center" key={index}>{hg}</span>
                    ))}
                </div>
                <CTAButton text={CTAButtonTexts[0]} />
            </div>
            <div className="heroContent-video w-[90%] md:w-[45%] h-[40%] md:h-[80%] pb-3 md:p-3 flex justify-center">
                <video src="/other/Premep Energiahatékonysági Program 2026.mp4" controls loop muted playsInline autoPlay></video>
            </div>
        </div>
    </div>
  )
}

export default Hero