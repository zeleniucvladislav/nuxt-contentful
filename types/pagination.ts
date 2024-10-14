export interface Pagination {
  skip: number
  page: number
  limit: number
  total: number
}

export type PaginationGql = Omit<Pagination, 'page' | 'total'>
