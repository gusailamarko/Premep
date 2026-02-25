const InPracticeCard = ({id, title, desc, listTitle, listItems, ui}:PracticeCardProps) => {
  return (
    <div className="card-content w-[90%] md:w-[40%] h-full">
        <div className="text-center">
            <h3 className="text-[1.2rem] font-bold italic uppercase">{id}. {title}</h3>
            <h4 className="text-[0.8rem] text-gray-800 font-semibold">{desc}</h4>
        </div>
        <hr className="w-full text-black m-0 p-0"/>
        <div className="text-center">
            <p className="text-[1rem] font-bold">{listTitle}</p>
            <ul>
                {listItems.map((item:string, index:number) => (
                    <li className="text-[0.8rem] font-semibold italic" key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <hr className="w-full text-black m-0 p-0"/>
        <div className="text-center">
            <p className="text-[1rem] text-gray-800 font-semibold uppercase">{ui}</p>
        </div>
    </div>
  )
}

export default InPracticeCard