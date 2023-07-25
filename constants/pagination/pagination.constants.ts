import { useSearchParams } from 'next/navigation'

export const getQueriesSearch = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const order = searchParams.get('order') || 'mp'
    const next = searchParams.get('next')
    const limit = searchParams.get('limit')
    return { search, order, next, limit }
}