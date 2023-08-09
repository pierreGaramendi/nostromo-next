"use client"

import { useSearchParams } from "next/navigation"

const ResultsInfo = ({ totalDocs }: any) => {
  const searchParams = useSearchParams()
  let search = null
  if (searchParams !== null) {
    search = searchParams.get("search")
    if (search === null) {
      search = "busqueda"
    }
  }
  return (
    <div className="flex flex-row items-center justify-center">
      <span className="text-lg font-semibold text-gray-500 dark:text-white">
        Resultados para
        <span className="text-lg font-semibold text-blue-700">
          &nbsp;{search}&nbsp;
        </span>
        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
          ({totalDocs})
        </span>
      </span>
    </div>
  )
}

export default ResultsInfo
