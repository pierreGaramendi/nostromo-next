"use client"

import { useRouter } from "next/navigation"
import { getQueriesSearch } from "@/constants/pagination/pagination.constants"
import { Routes, buildQueryParams, buildUrl } from "@/constants/routes.const"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const OrderBy = () => {
  const router = useRouter()
  const { search, page, sort } = getQueriesSearch()
  const setValue = (value: string) => {
    const productsUrl = buildUrl([
      Routes.PRODCUTS,
      buildQueryParams({ search, page, sort: value }),
    ])
    router.push(productsUrl)
  }
  return (
    <div>
      <Select onValueChange={setValue} defaultValue={sort}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="mp">Mayor Precio</SelectItem>
            <SelectItem value="np">Menor Precio</SelectItem>
            <SelectItem value="r">Mas Relevantes</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default OrderBy
