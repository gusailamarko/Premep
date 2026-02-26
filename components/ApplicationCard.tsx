const ApplicationCard = ({title, points, disclaimer}:ApplicationCardProps) => {
  return (
    <div className="applyCard w-[80%] md:w-[40%] p-[1rem]">
        <div className="text-center">
            <h3 className="text-[1.5rem] text-black font-bold uppercase underline">{title}</h3>
        </div>
        <div className="applyCard-points">
            <ul>
                {points.map((point:string, index:number) => (
                    <li className="applyCard-listItem text-[1rem] text-gray-800 font-semibold italic" key={index}>{point}</li>
                ))}
            </ul>
        </div>
        <div className="text-center pt-3">
            <p className="text-[1rem] text-gray-800 font-semibold uppercase">{disclaimer}</p>
        </div>
    </div>
  )
}

export default ApplicationCard