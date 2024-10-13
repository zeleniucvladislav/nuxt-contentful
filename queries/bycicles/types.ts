export interface BicycleModel {
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

export interface Bicycles {
  bicyclesCollection: {
    items: Array<BicycleModel>
    limit: number
    skip: number
    total: number
  }
}
