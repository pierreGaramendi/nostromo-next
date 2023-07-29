'use client'
import { useRouter } from 'next/navigation'
import { MultiSelect } from "../search/search"
import { useEffect, useState } from 'react'

export async function getData() {
    const res = await fetch(
        `${process.env.urlapi}suggestion/search?`
        + new URLSearchParams({
            value: 'lap'
        })
    )
    return res.json()
}

export function AutocompleteWrap() {
    const [pressed, setPressed] = useState(null || '');
    const [data, setData] = useState([]);

    const router = useRouter()
    const handleKeyDown = (event: any) => {
        let value = event.target.value
        if (event.key === 'Enter') {
            router.push(`/productos?search=${value}`)
        }
    }
    useEffect(() => {
        fetch(`${process.env.urlapi}suggestion/search?` + new URLSearchParams({ value: pressed }))
            .then((response) => response.json())
            .then((dog) => setData(dog));
    }, [pressed]);

    return (
        <div className="w-full px-8">
            <MultiSelect
                onKeyPressed={setPressed}
                placeholder="Buscar productos..."
                data={data}
            />

        </div>
    )
}