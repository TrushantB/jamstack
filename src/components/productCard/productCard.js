import Link from "next/link";
import gsap from "gsap";

function ProductCard({ cards }) {
  gsap.set(".ancor", { y: -20 });
  const onMouseEnter = (event) => {
    const element = event.currentTarget;
    gsap.to(element, { backgroundColor: "#4767F6", duration: 0.3 });
    gsap.to(element.querySelector("p"), { color: "#ffffff", duration: 0.3 });
    gsap.to(element.querySelector("h3"), { color: "#ffffff", duration: 0.3 });
    gsap.to(element.querySelector(".circle"), {
      scale: 1.5,
      transformOrigin: "100% 100%",
      backgroundColor: "#e002a2"
    });
    gsap.to(element.querySelector("a"), {
      opacity: 1,
      duration: 0.2,
      x: 25,
      color: "#ffffff"
    });
  };

  const onMouseLeave = (event) => {
    const element = event.currentTarget;
    gsap.to(element, { backgroundColor: "" });
    gsap.to(element.querySelector("p"), { color: "" });
    gsap.to(element.querySelector("h3"), { color: "" });
    gsap.to(element.querySelector(".circle"), {
      scale: 1,
      transformOrigin: "100% 100%",
      backgroundColor: "#ff5223"
    });
    gsap.to(element.querySelector("a"), { opacity: 0, x: -50 ,duration:0.3});
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-center relative z-40 gap-5 container lg:mx-auto card">
      {cards &&
        cards.map((card, index) => (
          <div
            key={index}
            className="p-6 mx-4 sm:mx-0 rounded-2xl bg-accent-100 flex flex-col justify-between lg:w-[400px] "
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div>
              <h3 className="font-bold tracking-tight mb-6">{card.label}</h3>
              <p className="font-normal mb-20 ">{card.description}</p>
            </div>
            <div className="flex justify-end items-center">
              <Link href={card.href} className="text-black ancor relative z-20 opacity-0">
                {card.buttonLabel}
              </Link>
              <div className="w-16 h-16 rounded-full bg-[#ff5223] circle"></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductCard;
