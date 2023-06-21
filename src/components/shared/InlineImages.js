import { urlForImage } from '@/lib/sanity.image'

export default function InlineImages({
  images,
  gap,
  classesWrapper,
}) {

  return (
    <div
      className={`w-full overflow-hidden rounded-xl flex items-center flex-wrap gap-${gap} ${classesWrapper}`}
    >
      {
        images.map((image, index) => {
          const imageUrl =
            image && urlForImage(image)?.url()

          return (
            <img
              key={index}
              className="h-auto w-full"
              alt={image.alt}
              style={{ width: image.width, height: image.height }}
              src={imageUrl}
            />
          )
        })
      }
    </div>
  )
}
