export function resolveHref(
  documentType,
  slug
) {
  switch (documentType) {
    case 'home':
      return '/'
    case 'platforms':
      return slug ? `/${slug}` : undefined
    case 'project':
      return slug ? `/projects/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}