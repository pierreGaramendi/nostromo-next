import ProductItem from "@/components/ui/product-item/product-item"
import OrderBy from "@/components/ui/orderby/orderby"
import ResultsInfo from "@/components/ui/results-info/results-info"
import { getData } from "./fetchdata"
import SearchPagination from "@/components/ui/search-pagination/search-pagination"

const ProductsResults = async () => {
    let data: any = await getData()
    return (
        <section className="container pt-6 md:py-10 flex justify-center flex-col">
            <div className='flex flex-row items-center justify-between my-4'>
                <ResultsInfo></ResultsInfo>
                <div className='flex flex-row items-center'>
                    <div className='text-sm text-gray-900 dark:text-white mr-2'>Ordenar por: </div>
                    <OrderBy></OrderBy>
                </div>
            </div>
            <div className="grid gap-x-1 gap-y-7 grid-cols-3 justify-center">
                {data.results.map((product: any) => {
                    return <ProductItem className='justify-self-center' key={product.name} product={product}></ProductItem>
                })}
            </div>
            <div className="p-6">
                <SearchPagination></SearchPagination>
            </div>
        </section>
    );
}

export default ProductsResults;