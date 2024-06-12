import { gql } from '@apollo/client'

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $coverPhotoURL: String!) {
    addBook(title: $title, author: $author, coverPhotoURL: $coverPhotoURL) {
      id
      title
      author
      coverPhotoURL
    }
  }
`

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
    }
  }
`
