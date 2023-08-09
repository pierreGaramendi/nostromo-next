import OrderBy from "@/components/ui/orderby/orderby"
import ProductItem from "@/components/ui/product-item/product-item"
import ResultsInfo from "@/components/ui/results-info/results-info"
import SearchPagination from "@/components/ui/search-pagination/search-pagination"

import { searchProducts } from "./services/fetchdata"
import { ISearchProductsResponse } from "./models/products.model"

const ProductsResults = async ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) => {
  const products: ISearchProductsResponse = await searchProducts(searchParams)
  const { docs, totalDocs, ...pagintaion } = products

  return (
    <section className="container pt-6 md:py-10 flex justify-center flex-col">
      <div className="flex flex-row items-center justify-between my-4">
        <ResultsInfo totalDocs={totalDocs}></ResultsInfo>
        <div className="flex flex-row items-center">
          <div className="text-sm text-gray-900 dark:text-white mr-2">
            Ordenar por:{JSON.stringify(searchParams)}{" "}
          </div>
         {/*  <OrderBy></OrderBy> */}
        </div>
      </div>
      <div className="grid gap-x-1 gap-y-7 grid-cols-3 justify-center">
        {docs.map((product: any) => {
          return (
            <ProductItem
              className="justify-self-center"
              key={product._id}
              product={product}
            ></ProductItem>
          )
        })}
      </div>
      <div className="p-6">
        <SearchPagination pagination={pagintaion}></SearchPagination>
      </div>
    </section>
  )
}

export default ProductsResults
