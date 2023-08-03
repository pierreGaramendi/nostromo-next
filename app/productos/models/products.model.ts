import { IPaginateResponse } from "@/models/response.model"

interface Doc {
  _id: string
  title: string
  description: string
  price: number
  discount: Discount
  thumbnail: string
  rating: Rating
}

interface Rating {
  avg: number
  total: number
}

interface Discount {
  percentage: number
  active: boolean
  _id: string
  createdAt: string
  updatedAt: string
}

export interface ISearchProductsResponse extends IPaginateResponse {
  docs: Doc[]
}
