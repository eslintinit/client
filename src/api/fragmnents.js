import gql from 'graphql-tag'

export const UserFragment = gql`
  fragment User on User {
    id
    username
    fullname
    firstname
    givenname
    avatar
  }
`
