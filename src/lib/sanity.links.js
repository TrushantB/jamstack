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
    case 'faqs':
      return '/faqs'
    case 'blogs':
      return '/blog'
    case 'case-study':
      return '/case-study'
    case 'ecosystem':
      return '/ecosystem'
    case 'webj':
      return '/webj'
    case 'mobj':
      return '/mobj'
    case 'ecommj':
      return '/ecommj'
    case 'home':
      return '/'
    case 'terms-and-conditions':
      return '/terms-and-conditions'
    case 'security':
      return '/security'
    case 'privacy-policy':
      return '/privacy-policy'
    case 'compliences':
      return slug ? `/${slug}` : undefined
    case 'platforms':
      return slug ? `/${slug}` : undefined
    case 'blog':
      return slug ? `/blog/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return '/'
  }
}
