import { useState } from "react";

const Program = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { src: "/imgs/_megtakarítás.png", alt: "Megtakarítást ábrázoló kép"},
    { src: "/imgs/_klíma.png", alt: "Klíma beszerelés" },
    { src: "/imgs/_lábazat.png", alt: "Épület lábazata" },
    { src: "/imgs/_kiegészítők.jpg", alt: "Kiegészítők" }
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
    <div className="program-content py-[3rem]">
        <div className="carousel-container overflow-hidden w-[90%] md:w-[45%]">
            <img src={currentImg.src} alt={currentImg.alt}/>        
            <button onClick={goToPrevious} className="carousel-prevBtn text-white">←</button>
            <button onClick={goToNext} className="carousel-nextBtn text-white">→</button>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 bg-[#1f3e6d] p-2 rounded opacity-75">
            {images.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#f4bc43]" : "bg-[#1f3e6d] bg-opacity-50"}`}/>
            ))}
            </div>
        </div>
        <div className="program-text w-[90%] md:w-[45%]">
            <h2 className="text-[2rem] md:text-[3rem] text-black text-center font-bold italic uppercase mb-5">MI EZ A PROGRAM?</h2>
            <div className="text-[1.25rem] text-justify font-semibold text-gray-800 flex flex-col gap-3">
                <p>2026-ban a Premep olyan energiahatékonysági programot indított, amelynek célja, hogy minél több magyar családi ház alacsonyabb rezsivel és magasabb komforttal működjön.</p>
                <p>A program nem utólagos támogatás, és nem pénzvisszatérítésre épül.</p>
                <p>A segítség azonnal, kézzelfogható formában érkezik.</p>
            </div>
        </div>
    </div>
  )
}

export default Program