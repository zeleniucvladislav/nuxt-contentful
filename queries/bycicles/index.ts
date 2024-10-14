import gql from 'graphql-tag'

export const GET_BICYCLES = gql`
  query getBycicles($limit: Int, $skip: Int) {
    bicyclesCollection(limit: $limit, skip: $skip) {
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
