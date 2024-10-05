import gql from 'graphql-tag'

export const GET_BICYCLES = gql`
  query getBycicles {
    bicyclesCollection {
      total
      skip
      limit
      items {
        brand
        model
        type
        manufacturerPrice
        image {
          url
          width
          height
        }
      }
    }
  }
`
