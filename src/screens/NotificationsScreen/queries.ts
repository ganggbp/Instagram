import {gql} from '@apollo/client';

export const userNotifications = gql`
  query UserNotifications(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userNotifications(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        type
        userId
        actorId
        readAt
        Actor {
          id
          name
          username
          image
          _version
          _deleted
          _lastChangedAt
        }
        Post {
          id
          image
          images
          video
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        notificationPostId
      }
      nextToken
      startedAt
    }
  }
`;

export const updateNotification = gql`
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      createdAt
      type
      readAt
      userId
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationPostId
    }
  }
`;
