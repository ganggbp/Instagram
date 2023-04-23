import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum NotificationTypes {
  NEW_FOLLOWER = "NEW_FOLLOWER",
  NEW_LIKE = "NEW_LIKE",
  NEW_COMMENT = "NEW_COMMENT"
}



type EagerLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly User?: User | null;
  readonly Post?: Post | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Like, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Post: AsyncItem<Post | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Like = LazyLoading extends LazyLoadingDisabled ? EagerLike : LazyLike

export declare const Like: (new (init: ModelInit<Like>) => Like) & {
  copyOf(source: Like, mutator: (draft: MutableModel<Like>) => MutableModel<Like> | void): Like;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly comment: string;
  readonly userID: string;
  readonly postID: string;
  readonly User?: User | null;
  readonly Post?: Post | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly comment: string;
  readonly userID: string;
  readonly postID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Post: AsyncItem<Post | undefined>;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly images?: string[] | null;
  readonly video?: string | null;
  readonly nofComments: number;
  readonly nofLikes: number;
  readonly userID: string;
  readonly Likes?: (Like | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly User?: User | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly images?: string[] | null;
  readonly video?: string | null;
  readonly nofComments: number;
  readonly nofLikes: number;
  readonly userID: string;
  readonly Likes: AsyncCollection<Like>;
  readonly Comments: AsyncCollection<Comment>;
  readonly User: AsyncItem<User | undefined>;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly bio?: string | null;
  readonly website?: string | null;
  readonly image?: string | null;
  readonly nofPosts: number;
  readonly nofFollowings: number;
  readonly nofFollowers: number;
  readonly Posts?: (Post | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Likes?: (Like | null)[] | null;
  readonly Followers?: (UserFollow | null)[] | null;
  readonly Followings?: (UserFollow | null)[] | null;
  readonly fcmToken?: string | null;
  readonly Notifications?: (Notification | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly username?: string | null;
  readonly bio?: string | null;
  readonly website?: string | null;
  readonly image?: string | null;
  readonly nofPosts: number;
  readonly nofFollowings: number;
  readonly nofFollowers: number;
  readonly Posts: AsyncCollection<Post>;
  readonly Comments: AsyncCollection<Comment>;
  readonly Likes: AsyncCollection<Like>;
  readonly Followers: AsyncCollection<UserFollow>;
  readonly Followings: AsyncCollection<UserFollow>;
  readonly fcmToken?: string | null;
  readonly Notifications: AsyncCollection<Notification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerUserFollow = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFollow, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly followerID: string;
  readonly followeeID: string;
  readonly Follower?: User | null;
  readonly Followee?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserFollow = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFollow, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly followerID: string;
  readonly followeeID: string;
  readonly Follower: AsyncItem<User | undefined>;
  readonly Followee: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserFollow = LazyLoading extends LazyLoadingDisabled ? EagerUserFollow : LazyUserFollow

export declare const UserFollow: (new (init: ModelInit<UserFollow>) => UserFollow) & {
  copyOf(source: UserFollow, mutator: (draft: MutableModel<UserFollow>) => MutableModel<UserFollow> | void): UserFollow;
}

type EagerUserFeedPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFeedPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly postCreatedAt: string;
  readonly postOwnerID: string;
  readonly Post?: Post | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserFeedPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserFeedPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly postID: string;
  readonly postCreatedAt: string;
  readonly postOwnerID: string;
  readonly Post: AsyncItem<Post | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserFeedPost = LazyLoading extends LazyLoadingDisabled ? EagerUserFeedPost : LazyUserFeedPost

export declare const UserFeedPost: (new (init: ModelInit<UserFeedPost>) => UserFeedPost) & {
  copyOf(source: UserFeedPost, mutator: (draft: MutableModel<UserFeedPost>) => MutableModel<UserFeedPost> | void): UserFeedPost;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly readAt: number;
  readonly type: NotificationTypes | keyof typeof NotificationTypes;
  readonly userId: string;
  readonly User?: User | null;
  readonly actorId: string;
  readonly Actor?: User | null;
  readonly Post?: Post | null;
  readonly Comment?: Comment | null;
  readonly updatedAt?: string | null;
  readonly notificationPostId?: string | null;
  readonly notificationCommentId?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly readAt: number;
  readonly type: NotificationTypes | keyof typeof NotificationTypes;
  readonly userId: string;
  readonly User: AsyncItem<User | undefined>;
  readonly actorId: string;
  readonly Actor: AsyncItem<User | undefined>;
  readonly Post: AsyncItem<Post | undefined>;
  readonly Comment: AsyncItem<Comment | undefined>;
  readonly updatedAt?: string | null;
  readonly notificationPostId?: string | null;
  readonly notificationCommentId?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}