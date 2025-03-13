type Props =  {
    title:string,
    description:string,
    onClick: () =>  void,
   
}

export const Card = ({title, description, onClick}:Props) => {
    return(
       

        <div onClick={onClick} className="w-84 hover:cursor-pointer h-60 bg-white shadow-md rounded-lg flex flex-col items-center justify-center border">
          <p className="text-sm font-semibold text-blue-900">{title}</p>
          <p className="text-2xl font-bold text-yellow-500">{description}</p>
        </div>
   
    )
}