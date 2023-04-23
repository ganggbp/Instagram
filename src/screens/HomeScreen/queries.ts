import {gql} from '@apollo/client';

export const userFeed = gql`
  query UserFeed(
    $userID: ID!
    $postCreatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFeedPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFeed(
      userID: $userID
      postCreatedAt: $postCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        postCreatedAt
        postOwnerID
        Post {
          id
          description
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
