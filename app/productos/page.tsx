import ProductItem from "@/components/ui/product-item/product-item"

export async function getData() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon', { cache: 'no-store' })
    return res.json()
}

const ProductsResults = async () => {
    let data: any = await getData()
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 grid-cols-3">
            {data.results.map((product: any) => {
                return <ProductItem key={product.name} product={product}></ProductItem>
            }
            )}
        </section>
    );
}

export default ProductsResults;