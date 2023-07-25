'use client'
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { MultiSelect } from "../search/search"

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
            <MultiSelect
                label=""
                placeholder="Buscar productos..."
                data={[
                    {
                        value: "next.js",
                        label: "Next.js",
                    },
                    {
                        value: "sveltekit",
                        label: "SvelteKit",
                    },
                    {
                        value: "nuxt.js",
                        label: "Nuxt.js",
                    },
                    {
                        value: "remix",
                        label: "Remix",
                    },
                    {
                        value: "astro",
                        label: "Astro",
                    },
                    {
                        value: "wordpress",
                        label: "WordPress",
                    },
                    {
                        value: "express.js",
                        label: "Express.js",
                    },
                    {
                        value: "nest.js",
                        label: "Nest.js",
                    },
                ]}
            />

        </div>
    )
}