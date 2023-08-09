"use client"

import { useSearchParams } from "next/navigation"

export const getQueriesSearch = () => {
  const searchParams = useSearchParams()
  let search = "search"
  let sort = "mp"
  let page = "1"
  let limit = ""
  if (searchParams !== null) {
    search = searchParams.get("search") || ""
    sort = searchParams.get("sort") || "mp"
    page = searchParams.get("page") || "1"
    limit = searchParams.get("limit") || ""
  }
  return { search, sort, page, limit }
}
