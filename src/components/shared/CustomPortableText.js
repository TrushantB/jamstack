import { PortableText } from '@portabletext/react'
import ImageBox from '@/components/shared/ImageBox'
import { TimelineSection } from '@/components/shared/TimelineSection'
import TablePreview from './TablePreview'



export function CustomPortableText({
  paragraphClasses,
  value,
}) {
  const components = {
    block: {
      normal: ({ children }) => {
        return <p className={paragraphClasses}>{children}</p>
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        )
      },
    },
    types: {
      image: ({
        value,
      }) => {
        return (
          <div className="my-6 space-y-2">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper=""
            />
            {value?.caption && (
              <span className="font-sans text-xs text-gray-500 block text-center">
                {value.caption}
              </span>
            )}
          </div>
        )
      },
      timeline: ({ value }) => {
        const { items } = value || {}
        return <TimelineSection timelines={items} />
      },
      customTable: ({ value }) => {
        const { rows = [], title } = value.table || {}
        return <TablePreview rows={rows} title={title} tableType={value.tableType} />
      }
    },
  }

  return <PortableText components={components} value={value} />
}
