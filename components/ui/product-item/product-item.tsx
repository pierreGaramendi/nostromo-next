'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
type CardProps = React.ComponentProps<typeof Card>

function ProductItem({ className, ...props }: any) {
    const router = useRouter()
    const navigateToDetail = () => {
        router.push(`/productos/12`)
    }
    let { product } = props
    return (
        <Card className={cn("w-[320px]", className)} {...props}>
            <CardHeader onClick={navigateToDetail} className="cursor-pointer">
                <div className="flex justify-center">
                    <img className="w-52 rounded-lg" src="https://http2.mlstatic.com/D_NQ_NP_656548-MLA46114829749_052021-W.webp" alt="" />
                </div>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.url}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <Badge variant="default">
                    <Star size={18} strokeWidth={1.5}/>
                    <Star size={18} strokeWidth={1.5}/>
                    <Star size={18} strokeWidth={1.5}/>
                    <Star size={18} strokeWidth={1.5}/>
                    <Star size={18} strokeWidth={1.5}/>
                    4.9 (129 reviews)
                </Badge>
                <div className=" flex items-center space-x-4 rounded-md">
                    <div className="flex-1 space-y-1">
                        <p className="text-xl font-semibold leading-none tracking-tight">
                            S/ 100
                        </p>
                        <p className="text-sm text-muted-foreground line-through">
                            S/ 200
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductItem