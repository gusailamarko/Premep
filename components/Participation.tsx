const Participation = () => {
  return (
    <div className="participation-content">
        <div className="w-[90%] md:w-[45%]">
            <div className="text-center flex flex-col items-center">
                <h2 className="text-[2rem] md:text-[3rem] text-black font-bold italic uppercase pt-[3rem] pb-5">KIK VEHETNEK RÉSZT?</h2>
            </div>
            <div className="text-center">
                <p className="text-[1.25rem] text-gray-800 font-semibold pb-3">A program elsősorban:</p>
                <ul>
                    <li className="participation-listItem">családi házak számára érhető el</li>
                    <li className="participation-listItem">országos lefedettséggel működik, de a férőhely megyénként korlátozott</li>
                </ul>     
                <p className="text-[1.25rem] text-gray-800 font-semibold italic uppercase pt-5">Ezért minden jelentkezést egyedileg vizsgálunk meg!</p>
            </div>
        </div>
        <div className="w-[90%] md:w-[45%]">
            <img className="participation-img my-10" src="/imgs/_kész ház.png" alt="Kép egy kész házról, ami részt vehetett a programban" />
        </div>
    </div>
  )
}

export default Participation