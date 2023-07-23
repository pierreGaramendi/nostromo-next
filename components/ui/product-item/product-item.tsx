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


type CardProps = React.ComponentProps<typeof Card>

function ProductItem({ className, ...props }: any) {
    const router = useRouter()
    const navigateToDetail = () => {
        router.push(`/productos/12`)
    }
    let { product } = props
    return (
        <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader onClick={navigateToDetail}>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.url}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Push Notifications
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                        </p>
                    </div>
                </div>
                <div>

                    <div
                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                    >
                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">
                                title
                            </p>
                            <p className="text-sm text-muted-foreground">
                                desss
                            </p>
                        </div>
                    </div>

                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">
                    ClickAqui
                </Button>
            </CardFooter>
        </Card>
    )
}
export default ProductItem