interface Image {
  url: string
  width: number
  height: number
}

export interface Bicycle {
  brand: string
  image: Image
  manufacturerPrice: number
  manufacturerYear: number
  model: string
  type: string
  description: string
  frame: string
  weight: number
  suspension: string
  fork: string
  wheels: string
  drivetrain: string
  groupset: string
  brakes: string
  imagesCollection: {
    items: Image[]
  }
  url: string
  fullName: string
}

export interface BicyclesQuery {
  bicyclesCollection: {
    items: Array<Bicycle>
  }
}
