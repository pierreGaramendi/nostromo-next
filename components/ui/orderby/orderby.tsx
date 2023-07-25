'use client'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

const OrderBy = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    const order = searchParams.get('order') || 'mp'
    const next = searchParams.get('next')
    const setValue = (value: any) => {
        router.push(`/productos?search=${search}&next=${next}&order=${value}`)
    }
    return (
        <div>
            <Select onValueChange={setValue} defaultValue={order}>
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