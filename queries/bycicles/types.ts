export interface Bicycle {
  brand: string
  image: {
    url: string
    width: number
    height: number
  }
  manufacturerPrice: number
  manufacturerYear: number
  model: string
  type: string
  description: string
}

export interface BicyclesQuery {
  bicyclesCollection: {
    items: Array<Bicycle>
    limit: number
    skip: number
    total: number
  }
}
