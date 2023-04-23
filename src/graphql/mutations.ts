/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      userID
      postID
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      userID
      postID
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      userID
      postID
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      createdAt
      comment
      userID
      postID
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      createdAt
      comment
      userID
      postID
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      createdAt
      comment
      userID
      postID
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      createdAt
      type
      description
      image
      images
      video
      nofComments
      nofLikes
      userID
      Likes {
        items {
          id
          userID
          postID
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
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      createdAt
      type
      description
      image
      images
      video
      nofComments
      nofLikes
      userID
      Likes {
        items {
          id
          userID
          postID
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
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      createdAt
      type
      description
      image
      images
      video
      nofComments
      nofLikes
      userID
      Likes {
        items {
          id
          userID
          postID
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
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      bio
      website
      image
      nofPosts
      nofFollowings
      nofFollowers
      Posts {
        items {
          id
          createdAt
          type
          description
          image
          images
          video
          nofComments
          nofLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
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
      Followers {
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
      Followings {
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
      fcmToken
      Notifications {
        items {
          id
          createdAt
          readAt
          type
          userId
          actorId
          updatedAt
          _version
          _deleted
          _lastChangedAt
          notificationPostId
          notificationCommentId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      bio
      website
      image
      nofPosts
      nofFollowings
      nofFollowers
      Posts {
        items {
          id
          createdAt
          type
          description
          image
          images
          video
          nofComments
          nofLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
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
      Followers {
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
      Followings {
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
      fcmToken
      Notifications {
        items {
          id
          createdAt
          readAt
          type
          userId
          actorId
          updatedAt
          _version
          _deleted
          _lastChangedAt
          notificationPostId
          notificationCommentId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      username
      bio
      website
      image
      nofPosts
      nofFollowings
      nofFollowers
      Posts {
        items {
          id
          createdAt
          type
          description
          image
          images
          video
          nofComments
          nofLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          userID
          postID
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
      Followers {
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
      Followings {
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
      fcmToken
      Notifications {
        items {
          id
          createdAt
          readAt
          type
          userId
          actorId
          updatedAt
          _version
          _deleted
          _lastChangedAt
          notificationPostId
          notificationCommentId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createUserFollow = /* GraphQL */ `
  mutation CreateUserFollow(
    $input: CreateUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    createUserFollow(input: $input, condition: $condition) {
      id
      followerID
      followeeID
      Follower {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Followee {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateUserFollow = /* GraphQL */ `
  mutation UpdateUserFollow(
    $input: UpdateUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    updateUserFollow(input: $input, condition: $condition) {
      id
      followerID
      followeeID
      Follower {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Followee {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteUserFollow = /* GraphQL */ `
  mutation DeleteUserFollow(
    $input: DeleteUserFollowInput!
    $condition: ModelUserFollowConditionInput
  ) {
    deleteUserFollow(input: $input, condition: $condition) {
      id
      followerID
      followeeID
      Follower {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Followee {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createUserFeedPost = /* GraphQL */ `
  mutation CreateUserFeedPost(
    $input: CreateUserFeedPostInput!
    $condition: ModelUserFeedPostConditionInput
  ) {
    createUserFeedPost(input: $input, condition: $condition) {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateUserFeedPost = /* GraphQL */ `
  mutation UpdateUserFeedPost(
    $input: UpdateUserFeedPostInput!
    $condition: ModelUserFeedPostConditionInput
  ) {
    updateUserFeedPost(input: $input, condition: $condition) {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteUserFeedPost = /* GraphQL */ `
  mutation DeleteUserFeedPost(
    $input: DeleteUserFeedPostInput!
    $condition: ModelUserFeedPostConditionInput
  ) {
    deleteUserFeedPost(input: $input, condition: $condition) {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      createdAt
      readAt
      type
      userId
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      actorId
      Actor {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Comment {
        id
        createdAt
        comment
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Post {
          id
          createdAt
          type
          description
          image
          images
          video
          nofComments
          nofLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationPostId
      notificationCommentId
    }
  }
`;
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
      id
      createdAt
      readAt
      type
      userId
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      actorId
      Actor {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Comment {
        id
        createdAt
        comment
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Post {
          id
          createdAt
          type
          description
          image
          images
          video
          nofComments
          nofLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationPostId
      notificationCommentId
    }
  }
`;
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
      id
      createdAt
      readAt
      type
      userId
      User {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      actorId
      Actor {
        id
        name
        email
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
        }
        Comments {
          nextToken
          startedAt
        }
        Likes {
          nextToken
          startedAt
        }
        Followers {
          nextToken
          startedAt
        }
        Followings {
          nextToken
          startedAt
        }
        fcmToken
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Post {
        id
        createdAt
        type
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        Likes {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Comment {
        id
        createdAt
        comment
        userID
        postID
        User {
          id
          name
          email
          username
          bio
          website
          image
          nofPosts
          nofFollowings
          nofFollowers
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Post {
          id
          createdAt
          type
          description
          image
          images
          video
          nofComments
          nofLikes
          userID
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationPostId
      notificationCommentId
    }
  }
`;
