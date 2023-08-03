'use client'
import { Button } from "@/components/ui/button"
import { getQueriesSearch } from "@/constants/pagination/pagination.constants"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from 'next/link'

const SearchPagination = ({ pagination }: any) => {
    const { search, sort } = getQueriesSearch()
    const { totalDocs, totalPages, page, pagingCounter, hasPrevPage, hasNextPage, prevPage, nextPage } = pagination
    return (
        <div className="p-6 flex justify-center flex-row">
            {
                hasPrevPage && (
                    <Link href={`/productos?search=${search}&page=${prevPage}&sort=${sort}`}>
                        <Button variant="outline" className="mr-2">
                            <ChevronLeft size={18} />
                            Anterior
                        </Button>
                    </Link>
                )
            }
            <Button variant="outline" disabled>{page}</Button>
            <div className="flex justify-center items-center px-2">de</div>
            <Button variant="outline" className="mr-2" disabled>{totalPages}</Button>
            {
                hasNextPage && (
                    <Link href={`/productos?search=${search}&page=${nextPage}&sort=${sort}`}>
                        <Button variant="outline">
                            Siguiente
                            <ChevronRight size={18} />
                        </Button>
                    </Link>
                )
            }
        </div>
    );
}

export default SearchPagination;