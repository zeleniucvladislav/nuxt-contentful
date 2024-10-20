import gql from 'graphql-tag'

export const GET_BICYCLE = gql`
  query getBicycle($id: String!) {
    bicyclesCollection(where: { sys: { id: $id } }, limit: 1) {
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
        imagesCollection {
          items {
            url
            width
            height
          }
        }
        frame
        weight
        suspension
        fork
        wheels
        drivetrain
        groupset
        brakes
        url
        fullName
        type
      }
    }
  }
`
