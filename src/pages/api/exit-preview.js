
export const config = { runtime: 'nodejs' }

export default function exit(
  _req,
  res
) {
  res.clearPreviewData()
  res.writeHead(307, { Location: '/' })
  res.end()
}
