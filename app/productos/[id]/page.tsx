import { Button } from "@/components/ui/button";
import Link from "next/link"

const ProductDetail = () => {
    return (
        <section className="container items-center pb-8 pt-6 md:py-10">
            detalle del producto
            <Link href='/checkout'>
                <Button>
                    Comprar
                </Button>
            </Link>
        </section>
    );
}

export default ProductDetail