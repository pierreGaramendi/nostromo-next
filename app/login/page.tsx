import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
const Login = ({ className, ...props }: any) => {
    return (
        <div className="container mt-24 pt-16 md:py-10 flex justify-center items-center">
            <Card className={cn("w-[320px]", className)} {...props}>
                <CardHeader className="cursor-pointer">
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="mb-4">
                        <Input type="email" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <Input type="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">Login</button>
                </CardContent>
            </Card>
        </div>
    );
}

export default Login;