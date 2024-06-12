import { gql } from '@apollo/client'

export const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`

export const GET_BOOK_BY_TITLE = gql`
  query GetBookByTitle($title: String!) {
    book(title: $title) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`
