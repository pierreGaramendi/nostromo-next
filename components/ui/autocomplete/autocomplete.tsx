'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AutoComplete } from '../search/search2'
import { CommandMenu } from '../search/search3'
import { getQueriesSearch } from '@/constants/pagination/pagination.constants'

export async function getHistory() {
    return (await fetch(`${process.env.urlapi}customer/64ad97efd33c9dc7ac3e2285/search-history`)).json()
}

export async function getData() {
    const res = await fetch(`${process.env.urlapi}suggestion/search?` + new URLSearchParams({ value: 'lap' }))
    return res.json()
}

export function AutocompleteWrap() {
    const [pressed, setPressed] = useState(null || '');
    const [data, setData] = useState([]);
    const router = useRouter()
    const { sort } = getQueriesSearch()
    useEffect(() => {
        getHistory().then((data: any) => setData(data))
    }, []);

    useEffect(() => {
        fetch(`${process.env.urlapi}suggestion/search?` + new URLSearchParams({ value: pressed }))
            .then((response) => response.json())
            .then((dog) => setData(dog));
    }, [pressed]);

    const manageSelected = (value: any) => {
        const { suggestion } = value
        if (suggestion !== '') {
            router.push(`/productos?search=${suggestion}&page=1&sort=${sort}`)
        }
    }

    return (
        <div className="w-full px-8">
            <AutoComplete
                options={data}
                emptyMessage='Sin resultados'
                placeholder='Buscar productos'
                onValueChange={manageSelected}
            ></AutoComplete>
        </div>
    )
}