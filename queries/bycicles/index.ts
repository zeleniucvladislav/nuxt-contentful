import gql from 'graphql-tag'

export const GET_BICYCLES = gql`
  query getBycicles($limit: Int, $skip: Int, $search: String) {
    bicyclesCollection(
      limit: $limit
      skip: $skip
      where: {
        OR: [
          { brand_contains: $search }
          { model_contains: $search }
          { description_contains: $search }
        ]
      }
    ) {
      total
      skip
      limit
      items {
        brand
        model
        manufacturerYear
        manufacturerPrice
        description
        image {
          url
          width
          height
        }
      }
    }
  }
`
