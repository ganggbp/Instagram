import {gql} from '@apollo/client';

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      username
      bio
      website
      image
      nofPosts
      nofFollowings
      nofFollowers
      Posts {
        nextToken
        startedAt
        items {
          id
          image
          images
          video
        }
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

export const createUserFollow = gql`
  mutation CreateUserFollow(
    $input: CreateUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    createUserFollow(input: $input, condition: $condition) {
      id
      followerID
      followeeID

      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;

export const userFollowings = gql`
  query UserFollowings(
    $followerID: ID!
    $followeeID: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFollowings(
      followerID: $followerID
      followeeID: $followeeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        followerID
        followeeID

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

export const deleteUserFollow = gql`
  mutation DeleteUserFollow(
    $input: DeleteUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    deleteUserFollow(input: $input, condition: $condition) {
      id
      followerID
      followeeID

      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
