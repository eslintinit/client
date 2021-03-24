import gql from 'graphql-tag'
import { UserFragment } from '../fragmnents'

export const getMeQuery = gql`
  query {
    me {
      ...User
    }
  }
  ${UserFragment}
`
