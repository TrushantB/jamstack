import  { React,useState } from "react";

function ProductCard({cards}) {

    const [hoverItem, setHoverItem] = useState(null)
    const onMouseEnter = (card) => {
      setHoverItem(card)
    }
    const onMouseLeave = () => {
      setHoverItem(null)
    }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center m-5 lg:m-0  gap-5">
    {cards && cards?.map((card, index) => (
      <div
        key={index}
        className=" p-6   rounded-2xl bg-accent-100 flex flex-col justify-between  lg:w-[400px]  hover:bg-secondary hover:text-white"
        onMouseEnter={() => onMouseEnter(card)}
        onMouseLeave={() => onMouseLeave()}
      >
        <div>
        <h3 className="font-bold tracking-tight  dark:text-white mb-6 ">
          {card.label}
        </h3>
        <p className="font-normal ">{card.description}</p>
        </div>
        {hoverItem === card ? <div className="flex justify-end items-center  mt-14">
          <a className=" relative z-30 -m-10" href={card.href}>
            {card.buttonLabel}
          </a>
          <div className="w-28 h-28 rounded-full bg-primary"></div>
        </div> :
          <div className="flex justify-end items-end mt-32">
            <div className="w-10 h-10 rounded-full bg-tertiary "></div>
          </div>
        }
      </div>
    ))}
  </div>
  )
}

export default ProductCard