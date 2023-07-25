'use client'
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const SearchPagination = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const order = searchParams.get('order') || 'mp'
    const next = searchParams.get('next')
    return (
        <div className="p-6 flex justify-center flex-row">
            <Button variant="outline" disabled>1</Button>
            <div className="flex justify-center items-center px-2">de</div>
            <Button variant="outline" className="mr-2" disabled>8</Button>
            <Link href={`/productos?search=${search}&next=${next}&order=${order}`}>
                <Button variant="outline">
                    Siguiente
                    <ChevronRight size={18} />
                </Button>
            </Link>
        </div>
    );
}

export default SearchPagination;