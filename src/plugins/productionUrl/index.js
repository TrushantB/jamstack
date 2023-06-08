
import { definePlugin } from 'sanity'

import { getSecret } from './utils'

export const productionUrl = definePlugin(({ previewSecretId, types, apiVersion = '2022-11-17' }) => {
  if (!previewSecretId) {
    throw new TypeError('`previewSecretId` is required')
  }
  if (!previewSecretId.includes('.')) {
    throw new TypeError(
      '`previewSecretId` must contain a `.` to ensure it can only be queried by authenticated users'
    )
  }
  if (!types || types.length === 0) {
    throw new TypeError('`types` is required')
  }
  const _types = new Set(types)
  return {
    name: 'productionUrl',
    document: {
      productionUrl: async (prev, { document, getClient }) => {
        const url = new URL('/api/preview', location.origin)

        const client = getClient({ apiVersion })
        const secret = await getSecret(client, previewSecretId, true)
        if (secret) {
          url.searchParams.set('secret', secret)
        }
        const slug = (document.slug)?.current
        if (slug) {
          url.searchParams.set('slug', slug)
        }

        if (_types.has(document._type)) {
          url.searchParams.set('documentType', document._type)
          return url.toString()
        }

        return prev
      },
    },
  }
})
