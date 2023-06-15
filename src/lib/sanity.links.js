export function resolveHref(
  documentType,
  slug
) {
  switch (documentType) {
    case 'home':
      return '/'
    case 'pricing':
      return '/pricing'
    case 'contact':
      return '/contact'
    case 'about':
      return '/about'
    case 'jamstack':
      return '/jamstack'
    case 'faq':
      return '/faq'
    case 'blogs':
      return '/blogs'
    case 'case-study':
      return '/case-study'
    case 'ecosystem':
      return '/ecosystem'
    case 'home':
      return '/'
    case 'compliences':
      return slug ? `/${slug}` : undefined
    case 'platforms':
      return slug ? `/${slug}` : undefined
    case 'blog':
      return slug ? `/blogs/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
