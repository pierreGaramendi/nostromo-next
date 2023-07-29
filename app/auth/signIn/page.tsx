/* import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
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

export default Login; */

"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div className={"flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600"}>
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <Input
          onChange={(e) => (userName.current = e.target.value)}
        />
        <Input
          type={"password"}
          onChange={(e) => (pass.current = e.target.value)}
        />
        <Button onClick={onSubmit}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
