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
        readAt
      }
      nextToken
      startedAt
    }
  }
`;

export const onCreateNotification = gql`
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
      id
      createdAt
      type
      userId
      actorId
      readAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationPostId
    }
  }
`;
