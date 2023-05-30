import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";

function ProductCard({ cards }) {
  const onMouseEnter = (event, index) => {
    const element = event.currentTarget;
    gsap.to(element, { backgroundColor: "#4767F6", duration: 0.3, color: "#ffffff" });
    gsap.to(`.circle_${index}`, {
      scale: 1.5,
      transformOrigin: "100% 100%",
      backgroundColor: "#e002a2"
    });
    gsap.to(`.ancor_${index}`, {
      opacity: 1,
      duration: 0.2,
      x: 25,
      color: "#ffffff"
    });
  };

  const onMouseLeave = (event,index) => {
    const element = event.currentTarget;
    gsap.to(element, { backgroundColor: "", color: "#1C1C1C" });
    gsap.to(`.circle_${index}`, {
      scale: 1,
      transformOrigin: "100% 100%",
      backgroundColor: "#ff5223"
    },
    );
    gsap.to(`.ancor_${index}`, { opacity: 0, x: -50 ,duration:0.3});
  };

  useEffect(() => {
    gsap.set(".ancor", { y: -20 });
  },[])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center relative z-40 gap-5 container lg:mx-auto card">
      {cards &&
        cards.map((card, index) => (
          <div
            key={index}
            className={`p-6 mx-4 sm:mx-0 rounded-2xl bg-accent-100 flex flex-col justify-between lg:w-[400px]`}
            onMouseEnter={(e) => onMouseEnter(e,index)}
            onMouseLeave={(e) => onMouseLeave(e,index)}
          >
            <div>
              <h3 className="font-bold tracking-tight mb-6">{card.label}</h3>
              <p className="font-normal mb-20 ">{card.description}</p>
            </div>
            <div className="flex justify-end items-center">
              <Link href={card.href} className={`text-black ancor ancor_${index} relative z-20 opacity-0`}>
                {card.buttonLabel}
              </Link>
              <div className={`w-16 h-16 rounded-full bg-[#ff5223] circle_${index}`}></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductCard;
