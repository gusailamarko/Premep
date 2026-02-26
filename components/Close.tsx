import { CTAButtonTexts } from "~/constants/texts"
import CTAButton from "./CTAButton"
import { useState } from "react";

const Close = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
      
  const images = [
    { src: "/imgs/_fehér.jpg", alt: "Kép egy elkészült (fehér) házról"},
    { src: "/imgs/_padlásfödém.png", alt: "Kép egy padlásfödémről" },
    { src: "/imgs/_grafit saját.jpg", alt: "Kép egy kész (grafit színű) családi házról" }
  ];
    
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
    
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
    
  const currentImg = images[currentIndex];

  return (
    <div className="close-content py-[3rem]">
        <div className="w-[90%] text-center">
            <h3 className="text-[1.75rem] font-bold italic">A Premep célja, hogy valódi, gyakorlatban is működő segítséget adjon a magyar otthonok energiahatékonyságának javításához.</h3>
        </div>
        <div className="carousel-container w-[90%] md:w-[70%]">
            <img src={currentImg.src} alt={currentImg.alt}/>        
            <button onClick={goToPrevious} className="carousel-prevBtn text-white">←</button>
            <button onClick={goToNext} className="carousel-nextBtn text-white">→</button>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 bg-[#1f3e6d] p-2 rounded opacity-75">
            {images.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#f4bc43]" : "bg-[#1f3e6d] bg-opacity-50"}`}/>
            ))}
            </div>
        </div>
        <div className="w-[90%] text-center">
            <h4 className="text-[2rem] font-bold italic">Ha szeretné megtudni, hogy az Ön ingatlana részt vehet-e a programban, jelentkezzen most.</h4>
        </div>
        <div className="w-[70%] md:w-[auto]">
            <CTAButton text={CTAButtonTexts[1]}/>
        </div>
    </div>
  )
}

export default Close