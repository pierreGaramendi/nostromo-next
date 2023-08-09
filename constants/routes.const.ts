import { concat } from "ramda"

export const Routes = {
  HOME: "/",
  PRODCUTS: "/productos",
  CHECKOUT: "checkout",
}

export const buildUrl = (args: string[]) => {
  const finalUrl = args.join("")
  return finalUrl
}

export const buildQueryParams = (arg: any) => {
  const params = new URLSearchParams(arg)
  return "?".concat(params.toString())
}
