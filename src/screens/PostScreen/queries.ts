import {gql} from '@apollo/client';

export const getPost = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      description
      location
      image
      images
      video
      nofComments
      nofLikes
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      User {
        id
        name
        username
        image
      }
      Comments(limit: 2) {
        items {
          id
          comment
          User {
            id
            name
            username
          }
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          _deleted
          User {
            id
            username
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
