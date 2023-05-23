import { React,  useState } from "react";

function BlogCard({ cards, hasIcon, label }) {

    const [hoverItem, setHoverItem] = useState(null)
    const onMouseEnter = (card) => {
      setHoverItem(card)
    }
    const onMouseLeave = () => {
      setHoverItem(null)
    }
  return (
    <div className="container px-5 py-10 mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center gap-7">
      {cards?.map((card, index) => (
        <div
          key={index}
          className="border-2 border-accent-100 border-opacity-60 lg:w-1/3 rounded-2xl py-1 hover:bg-accent-100"
          onMouseEnter={() => onMouseEnter(card)}
          onMouseLeave={() => onMouseLeave()}
        >
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl"
            src={card.image}
            alt={card.altTag}
          />
          <div className="p-4">
            <h4 className="mb-3">{label}</h4>
            <p className="leading-relaxed mb-5 w-9/12">
              {card.description}
            </p>
            <div>
              <a className="flex gap-3 items-center text-primary" href="#">
                {label}
                <span className="icon-arrow-right2 text-2xl text-primary "></span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default BlogCard