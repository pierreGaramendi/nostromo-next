'use client'
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'

export function AutocompleteWrap() {
    const router = useRouter()
    const handleKeyDown = (event: any) => {
        let value = event.target.value
        if (event.key === 'Enter') {
            router.push(`/productos?search=${value}`)
        }
    }
    return (
        <div className="w-full px-8">
            <Input type="text" placeholder="Buscar productos..." onKeyDown={handleKeyDown} />
        </div>
    )
}