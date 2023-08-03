'use client'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { getQueriesSearch } from "@/constants/pagination/pagination.constants"
import { useRouter } from 'next/navigation'

const OrderBy = () => {
    const router = useRouter()
    const { search, page, sort } = getQueriesSearch()
    const setValue = (value: any) => {
        router.push(`/productos?search=${search}&page=${page}&sort=${value}`)
    }
    return (
        <div>
            <Select onValueChange={setValue} defaultValue={sort}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="mp">
                            Mayor Precio
                        </SelectItem>
                        <SelectItem value="np">Menor Precio</SelectItem>
                        <SelectItem value="r">Mas Relevantes</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

export default OrderBy;