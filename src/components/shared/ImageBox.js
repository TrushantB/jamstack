import { urlForImage } from '@/lib/sanity.image'
import Image from 'next/image'
import { useState } from 'react';
import Lightbox from "react-awesome-lightbox";


export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 3500,
  height = 2000,
  size = '100vw',
  classesWrapper,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const imageUrl =
    image && urlForImage(image)?.url()

  return (
    <div
      className={`w-full overflow-hidden rounded-xl ${classesWrapper} ${imageUrl ? '' : 'bg-gray-50'}`}
    >
      {imageUrl && (
        <Image
          className="h-auto w-full cursor-zoom-in"
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
          onClick={() => setIsOpen(true)}
        />
      )}
      {isOpen &&
        <Lightbox image={imageUrl} title={image.caption}
          onClose={() => setIsOpen(false)}
        />
      }
    </div>
  )
}
