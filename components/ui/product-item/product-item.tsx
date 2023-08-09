"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
          <Image
            width={200}
            height={300}
            className="rounded-lg"
            src={product.thumbnail}
            alt="Iamgen del Producto"
            priority
          />
        </div>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Badge variant="default">
          <Star size={18} strokeWidth={1.5} />
          <Star size={18} strokeWidth={1.5} />
          <Star size={18} strokeWidth={1.5} />
          <Star size={18} strokeWidth={1.5} />
          <Star size={18} strokeWidth={1.5} />
          <div className="ml-2">
            {product.rating.avg} ({product.rating.total} reviews)
          </div>
        </Badge>
        <div className=" flex items-center space-x-4 rounded-md">
          <div className="flex-1 space-y-1">
            <p className="text-xl font-semibold leading-none tracking-tight">
              S/ {product.price}
            </p>
            <p className="text-sm text-muted-foreground line-through">S/ 200</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
export default ProductItem
