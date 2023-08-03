export async function searchProducts(params: any) {
    const res = await fetch(
        `${process.env.urlapi}product/search?`
        + new URLSearchParams({
            page: params.page,
            search: params.search,
            sort: params.sort
        })
        , { cache: 'no-store' })
    return res.json()
}
