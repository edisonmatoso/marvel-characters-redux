type ApiDefaultResponse<T = any> = {
  attributionHTML: string
  attributionText: string
  code: number
  copyright: string
  data: T
  etag: string
  status: string
}

export default ApiDefaultResponse
