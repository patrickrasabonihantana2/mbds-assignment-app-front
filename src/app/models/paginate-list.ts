export interface PaginateList<T> {
  docs: Array<T>,
  totalDocs: number,
  limit: number,
  page: number,
  totalPages: number,
  pagingCounter: number,
  hasPrevPage: boolean,
  hasNextPage: boolean,
  prevPage?: number,
  nextPage: number
}
