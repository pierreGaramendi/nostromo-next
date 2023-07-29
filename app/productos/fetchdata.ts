export async function getData() {
    const res = await fetch(
        `${process.env.urlapipoke}?limit=6&offset=0`
        + new URLSearchParams({
            foo: 'value',
            bar: '2',
        })
        , { cache: 'no-store' })
    return res.json()
}