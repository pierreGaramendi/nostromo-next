'use client'
import { useSearchParams } from 'next/navigation'

export const getQueriesSearch = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const sort = searchParams.get('sort') || 'mp'
    const page = searchParams.get('page')
    const limit = searchParams.get('limit')
    return { search, sort, page, limit }
}