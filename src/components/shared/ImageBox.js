import { urlForImage } from '@/lib/sanity.image'
import Image from 'next/image'

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
}) {
  const imageUrl =
    image && urlForImage(image)?.url()

  return (
    <div
      className={`w-full overflow-hidden rounded-[3px] ${classesWrapper} ${imageUrl ? '' : 'bg-gray-50'}`}
    >
      {imageUrl && (
        <Image
          className="h-auto w-full"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
        />
      )}
    </div>
  )
}
