import { resolveHref } from "@/lib/sanity.links";
import LinkButton from "../Link/Link";

export default function Blogpage({ cards, hasIcon, label, href }) {
  return (
    <div className=''>
      <div className="page-title py-8">
        <h1>Blog</h1>
      </div>
      {cards && cards.map((item, index) => (
        <div key={index} className="sm:flex items-start gap-5 pb-12 lg:pb-16">
          <div className="lg:w-3/5 pb-5 lg:pb-0">
            <a href={item.href}>
              <img className="w-full md:w-96 h-auto rounded-3xl " src={item.image} />
            </a>
          </div>
          <div className="w-full">
            <a >
              <h4 className='text-2xl md:text-4xl'>{item.heading}</h4>
            </a>
            <div className="pt-4">
              <a href={item.href} className="flex items-center gap-4">
                <img className="w-8" src={item.profil} alt={item.href} />
                <p className="w-15 text-sm md:text-md">{item.name}</p>
              </a>
            </div>
            <div className="pt-7">
              <LinkButton
                label={label}
                hasIcon={hasIcon}
                href={resolveHref('blog', item.href)}
                target={"_self"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}